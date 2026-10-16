import { groq } from "@ai-sdk/groq";

/** Default Groq model — 100% FREE, fast! */
export const DEFAULT_CHAT_MODEL = "llama-3.1-8b-instant";

/**
 * Returns a Groq language model instance for chat completions.
 */
export function getChatModel(modelId?: string | null) {
  return groq(modelId || DEFAULT_CHAT_MODEL);
}

/** Groq doesn't support OpenAI's hosted web_search tool */
export function supportsWebSearch(modelId?: string | null) {
  return false;
}
