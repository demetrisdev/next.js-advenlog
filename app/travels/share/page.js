'use client';

import { useFormState } from 'react-dom';

import ImagePicker from '@/components/travels/image-picker';
import classes from './page.module.css';
import { shareTravel } from '@/lib/actions';
import TravelsFormSubmit from '@/components/travels/travel-form-submit';

export default function ShareTravelPage() {
  const [state, formAction] = useFormState(shareTravel, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>latest trip</span>
        </h1>
        <p>Or any other trip you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
        {state.message && <p className={classes.error}>{state.message}</p>}
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Description</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="Your image" name="image" />
          <p className={classes.actions}>
            <TravelsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
