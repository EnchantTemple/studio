'use server';
/**
 * @fileOverview A flow for translating text using the Google Cloud Translation API.
 * 
 * - translateText - A function that handles the text translation.
 * - TranslateTextInput - The input type for the translateText function.
 * - TranslateTextOutput - The return type for the translateText function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { v2 } from '@google-cloud/translate';

const TranslateTextInputSchema = z.object({
  text: z.string().describe('The text to translate.'),
  targetLanguage: z.string().describe('The target language code (e.g., "es", "fr").'),
});
export type TranslateTextInput = z.infer<typeof TranslateTextInputSchema>;

const TranslateTextOutputSchema = z.string();
export type TranslateTextOutput = z.infer<typeof TranslateTextOutputSchema>;

// Initialize the Google Cloud Translate client
const translateClient = new v2.Translate({
    key: process.env.GOOGLE_CLOUD_API_KEY,
});

const translateTextFlow = ai.defineFlow(
  {
    name: 'translateTextFlow',
    inputSchema: TranslateTextInputSchema,
    outputSchema: TranslateTextOutputSchema,
  },
  async ({ text, targetLanguage }) => {
    if (!process.env.GOOGLE_CLOUD_API_KEY) {
        console.warn('GOOGLE_CLOUD_API_KEY is not set. Returning original text.');
        return text;
    }
    
    try {
        const [translation] = await translateClient.translate(text, targetLanguage);
        return translation;
    } catch (error) {
        console.error('Translation API error:', error);
        // Fallback to original text in case of an error
        return text;
    }
  }
);

export async function translateText(input: TranslateTextInput): Promise<TranslateTextOutput> {
  return await translateTextFlow(input);
}
