import Link from 'next/link';
import Image from 'next/image';

import classes from './travel-item.module.css';

export default function TravelItem({ title, slug, image, summary, creator }) {
  return (
    <article className={classes.travel}>
      <header>
        <div className={classes.image}>
          <Image
            src={`https://demetrios-antoniades-nextjs-images-api.s3.eu-north-1.amazonaws.com/${image}`}
            alt={title}
            fill
          />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/travels/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
