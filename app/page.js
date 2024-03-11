import Link from 'next/link';

import ImageSlideshow from '@/components/images/image-slideshow';
import classes from './page.module.css';

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Share your Experiences</h1>
            <p>Travel & share your experiences from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/travels">Explore Trips</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            AdvenLog is a platform for travelers to share their adventures and experiences with the world.
            It&apos;s a place to discover new travel destinations, and to
            connect with other travel lovers.
          </p>
          <p>
            AdvenLog is a place to discover new places, 
            and find your next travel experience.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why AdvenLog?</h2>
          <p>
            A free, easy to use, modern travel blog. Made for everyone 
            that wants to share their adventures. Give it a go and...
            we are sure you will love it!!
          </p>
        </section>
      </main>
    </>
  );
}
