'use client';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '@/lib/firebase';
import type { AbstractIntlMessages } from 'next-intl';

const db = getFirestore(app);

// Cache in memory to avoid repeated Firestore reads for the same language
const translationsCache = new Map<string, AbstractIntlMessages>();

export async function getTranslationsFromFirestore(
  locale: string
): Promise<AbstractIntlMessages> {
  if (translationsCache.has(locale)) {
    return translationsCache.get(locale)!;
  }

  try {
    const docRef = doc(db, 'translations', locale);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(`Fetched translations for '${locale}' from Firestore.`);
      const data = docSnap.data() as AbstractIntlMessages;
      translationsCache.set(locale, data);
      return data;
    } else {
      console.warn(
        `No translation document found for locale '${locale}' in Firestore. Falling back to defaults.`
      );
      // Fallback to local messages if Firestore doc doesn't exist
      try {
        const localMessages = (await import(`../../messages/${locale}.json`)).default;
        translationsCache.set(locale, localMessages);
        return localMessages;
      } catch (e) {
        console.warn(`No local translation file found for ${locale}.`);
        return {};
      }
    }
  } catch (error) {
    console.error(
        '*****************************************************************\n' +
        '** FIREBASE TRANSLATION FETCH FAILED                           **\n' +
        '*****************************************************************\n' +
        'Could not fetch translations from Firestore. This is likely because:\n' +
        '1. A Firestore database has not been created for this project.\n' +
        '2. The security rules are too restrictive.\n\n' +
        'Please go to your Firebase project console to create a database and\n' +
        'set the security rules to allow reads from the `translations` collection.\n\n' +
        `Original Error: ${(error as Error).message}\n` +
        '*****************************************************************'
      );
    // Return an empty object on error to prevent the app from crashing.
    return {};
  }
}
