'use client';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { app } from '@/lib/firebase';

// Cache in memory to avoid repeated Firestore reads for the same language
const translationsCache = new Map<string, any>();

export async function getTranslationsFromFirestore(
  locale: string
): Promise<any> {
  if (translationsCache.has(locale)) {
    return translationsCache.get(locale)!;
  }

  try {
    const docRef = doc(db, 'translations', locale);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(`Fetched translations for '${locale}' from Firestore.`);
      const data = docSnap.data();
      translationsCache.set(locale, data);
      return data;
    } else {
      console.warn(
        `No translation document found for locale '${locale}' in Firestore. Using local fallback.`
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
    console.warn(
      `[SolutionTemple] Could not fetch translations from Firestore for locale '${locale}'. ` +
      `This is likely because the database has not been created or security rules are not set. ` +
      `Please check the Firebase Console. Falling back to local messages. Error: ${(error as Error).message}`
    );
    // Return an empty object on error to prevent the app from crashing.
    return {};
  }
}
