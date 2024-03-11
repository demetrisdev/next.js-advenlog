import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getTravel } from '@/lib/travels';
import classes from './page.module.css';

export async function generateMetadata({ params }) {
  const travel = await getTravel(params.travelSlug);

  if (!travel) {
    notFound();
  }

  return {
    title: travel.title,
    description: travel.summary,
  };
}

export default async function TravelDetailsPage({ params }) {
  const travel = await getTravel(params.travelSlug);

  if (!travel) {
    notFound();
  }

  travel.instructions = travel.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image
            src={`https://demetrios-antoniades-nextjs-images-api.s3.eu-north-1.amazonaws.com/${travel.image}`}
            alt={travel.title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h1>{travel.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${travel.creator_email}`}>{travel.creator}</a>
          </p>
          <p className={classes.summary}>{travel.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: travel.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
