const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const travelData = [
  {
    title: 'Rome Trip',
    slug: 'rome-trip',
    image: 'rome.jpg',
    summary: 'Romantic Exploration: A Couple"s Journey through Rome',
    instructions: 'In the heart of ancient Rome, we meander through cobblestone streets, embracing timeless architecture. Hand in hand, we explore Campo de" Fiori"s bustling markets, relishing the scent of freshly brewed espresso. The Colosseum"s grandeur captivates us, echoing secrets of centuries past. Uncovering hidden gems, from the Trevi Fountain to Vatican City, fills us with wonder. As the sun sets, we share gelato under the Roman sky, crafting memories forever cherished.',
    creator: 'John Doe',
    creator_email: 'johndoe@example.com',
  },
  {
    title: 'Budapest in a glimse',
    slug: 'budapest-in-a-glimse',
    image: 'budapest.jpg',
    summary: 'Magical Moments in Budapest: A Journey of Two.',
    instructions:"In the heart of Budapest, amidst the grandeur of historic architecture and the whispers of the Danube, we discovered a tapestry of enchanting moments. From wandering the cobbled streets of Buda to savoring the flavors of Hungarian cuisine, every step illuminated our path with wonder. Budapest, a symphony of culture and romance, forever etched in the canvas of our memories.",
    creator: 'Max Schwarz',
    creator_email: 'max@example.com',
  },
  {
    title: 'Parisian Adventures',
    slug: 'homemade-dumplings',
    image: 'paris.jpg',
    summary: 'Family Escapade: Parisian Adventures',
    instructions: "In the heart of Paris, our family explored the wonders of art, culture, and history. From the majestic Louvre to the playful gardens of Luxembourg, each moment unfolded with joy and discovery. We savored crepes by the Seine and shared laughter beneath the Arc de Triomphe. Paris, a tapestry of memories for our family to cherish forever.",
    creator: 'Emily Chen',
    creator_email: 'emilychen@example.com',
  },
  {
    title: 'Lisbon Trip!!',
    slug: 'lisbon-trip!',
    image: 'lisbon.webp',
    summary: "Lisbon Odyssey: Five Days of Wonder",
    instructions: "In Lisbon's embrace, I embarked on a five-day journey of exploration and enchantment. From the vibrant streets of Alfama to the panoramic views of Miradouro da Senhora do Monte, every corner revealed a new story. Indulging in pastéis de nata and soaking in the warmth of Portuguese hospitality, Lisbon became a tapestry of unforgettable experiences, etched in my heart forever.",
    creator: 'Laura Smith',
    creator_email: 'laurasmith@example.com',
  },
  {
    title: 'Exploring Athens',
    slug: 'exploring-athens',
    image: 'athens.jpg',
    summary: 'Athens Unveiled, An amazing Journey of Discovery',
    instructions: "In the ancient cradle of Athens, I embarked on a five-day adventure filled with history and wonder. From the towering Acropolis to the bustling Plaka district, each moment unveiled layers of Greek mythology and culture. Sampling souvlaki in bustling tavernas and watching the sunset from Lycabettus Hill, Athens captivated me with its timeless charm and spirit of exploration.",
    creator: 'Mario Rossi',
    creator_email: 'mariorossi@example.com',
  },
  {
    title: 'Berlin Nights',
    slug: 'berlin-nights',
    image: 'berlin.jpg',
    summary: "Echoes of Berlin, a Couple's Techno Nightlife Odyssey in the heart of Berlin",
    instructions: "In the vibrant heart of Berlin, we immersed ourselves in a whirlwind of nightlife and techno beats. From the legendary clubs of Berghain to the eclectic energy of Kreuzberg, each moment pulsated with rhythm and excitement. Amidst exploring the city's iconic landmarks like the Berlin Wall, we found ourselves drawn into the electrifying essence of Berlin's underground scene, forging memories to last a lifetime.",
    creator: 'Franz Huber',
    creator_email: 'franzhuber@example.com',
  },
  {
    title: 'Madrid as a family',
    slug: 'madrid-as-a-family',
    image: 'madrid.jpg',
    summary: "Madrid Mosaic: A Family's Two-Week Gastronomic and Cultural Journey",
    instructions: "In Madrid's warm embrace, our family delved into a vibrant tapestry of flavors and sights for two memorable weeks. From the historic streets of Plaza Mayor to the grandeur of the Royal Palace, each day unfolded with new wonders. Blessed by the golden sun and tantalized by tapas delights, Madrid welcomed us with open arms, leaving us with cherished memories of its rich culture and culinary treasures.",
    creator: 'John Kosta',
    creator_email: 'johnkosta@example.com',
  },
];

async function main() {
  console.log(`Start seeding ...`);
    try {
      
      await prisma.travel.deleteMany();
      console.log("Deleted prepopulated travels!");

      await prisma.travel.createMany({
        data: travelData
      })
      console.log("Travels are created!");
    } catch (error) {
      console.error(error);
      await prisma.$disconnect();
      process.exit(1);
    }
  await prisma.$disconnect();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});