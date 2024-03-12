import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';
import xss from 'xss';
import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

const prisma = new PrismaClient();

const client = new S3Client({
  region: 'eu-north-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function getTravels() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const travels = await prisma.travel.findMany();

  return travels;
}

export async function getTravel(slug) {
  return prisma.travel.findUnique({
    where: {
      slug: slug,
    },
  });
}

export async function saveTravel(travel) {
  travel.slug = slugify(travel.title, { lower: true });
  travel.instructions = xss(travel.instructions);

  console.log(travel.slug, travel.instructions);

  const extension = travel.image.name.split('.').pop();
  const fileName = `${travel.slug}.${extension}`;

  console.log(fileName);

  const bufferedImage = await travel.image.arrayBuffer();

  const command = new PutObjectCommand({
    Bucket: 'demetrios-antoniades-nextjs-images-api',
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: travel.image.type,
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }

  travel.image = fileName;

  await prisma.travel.create({
    data: {
      title: travel.title,
      summary: travel.summary,
      instructions: travel.instructions,
      creator: travel.creator,
      creator_email: travel.creator_email,
      image: travel.image,
      slug: travel.slug,
    },
  });

  await deleteLastEntry();

  console.log("deleting last entry");
  
  await deleteLastImage(fileName);

  console.log("deleting last image");
}

async function deleteLastEntry() {
  const lastEntry = await prisma.travel.findFirst({
    orderBy: {
      id: 'desc',
    },
  });

  if (lastEntry) {
    await prisma.travel.delete({
      where: {
        id: lastEntry.id,
      },
    });
  }
}

async function deleteLastImage(fileName) {
  const command = new DeleteObjectCommand({
    Bucket: 'demetrios-antoniades-nextjs-images-api',
    Key: fileName,
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}