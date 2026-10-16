import { groq } from "@ai-sdk/groq";

export const DEFAULT_CHAT_MODEL = "llama-3.1-8b-instant";

export function getChatModel(modelId?: string | null): any {
  return groq(modelId || DEFAULT_CHAT_MODEL);
}

export function supportsWebSearch(modelId?: string | null) {
  return false;
}
