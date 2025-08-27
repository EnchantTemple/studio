import { db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

// This function fetches a language document from the 'translations' collection.
export const getTranslationsFromFirestore = async (language: string): Promise<Record<string, any>> => {
  try {
    const docRef = doc(db, 'translations', language);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log(`Translations loaded for ${language}:`, docSnap.data());
      return docSnap.data();
    } else {
      console.warn(`No translation document found for language: ${language}`);
      // Fallback to an empty object if the language document doesn't exist
      return {};
    }
  } catch (error) {
    console.error("Error fetching translations from Firestore:", error);
    // In case of an error, return an empty object to prevent the app from crashing.
    return {};
  }
};
