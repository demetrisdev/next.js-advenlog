'use server';

import { redirect } from 'next/navigation';

import { saveTravel } from './travels';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

export async function shareTravel(prevState, formData) {
  const travel = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('name'),
    creator_email: formData.get('email'),
  };

  if (
    isInvalidText(travel.title) ||
    isInvalidText(travel.summary) ||
    isInvalidText(travel.instructions) ||
    isInvalidText(travel.creator) ||
    isInvalidText(travel.creator_email) ||
    !travel.creator_email.includes('@') ||
    !travel.image ||
    travel.image.size === 0
  ) {
    return {
      message: 'Invalid input.',
    };
  }

  await saveTravel(travel);
  revalidatePath('/travels');
  redirect('/travels');
}
