import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import TravelsGrid from '@/components/travels/travels-grid';
import { getTravels } from '@/lib/travels';

export const metadata = {
  title: 'All Trips',
  description: 'Browse the amazing trips shared by our vibrant community.',
};

async function Travels() {
  const travels = await getTravels();
  return <TravelsGrid travels={travels} />;
}

export default function TravelsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Amazing trips, created{' '}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          What are you waiting for..? 👇 
        </p>
        <p className={classes.cta}>
          <Link href="/travels/share">Share Your Favorite Trip</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching trips...</p>}>
          <Travels />
        </Suspense>
      </main>
    </>
  );
}
