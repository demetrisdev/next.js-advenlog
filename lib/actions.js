import { redirect } from 'next/navigation';
import { saveTravel } from './travels';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
  return !text || text.trim() === '';
}

function isValidTitle(title) {
  const regex = /^[a-zA-Z0-9\s]+$/;
  return regex.test(title);
}

export async function shareTravel(prevState, formData) {
  const title = formData.get('title');
  const summary = formData.get('summary');
  const instructions = formData.get('instructions');
  const image = formData.get('image');
  const creator = formData.get('name');
  const creator_email = formData.get('email');

  if (
    isInvalidText(title) ||
    isInvalidText(summary) ||
    isInvalidText(instructions) ||
    isInvalidText(creator) ||
    isInvalidText(creator_email) ||
    !creator_email.includes('@') ||
    !image ||
    image.size === 0
  ) {
    return {
      message: 'Invalid input!',
    };
  }

  if (!isValidTitle(title)) {
    return {
      message: 'Title should contain only letters and numbers!',
    };
  }

  const travel = {
    title,
    summary,
    instructions,
    image,
    creator,
    creator_email,
  };

  await saveTravel(travel);
  revalidatePath('/travels');
  redirect('/travels');
}