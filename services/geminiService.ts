import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// System instruction to ensure simple language and Dutch output
const SYSTEM_INSTRUCTION = `
Je bent een behulpzame, professionele mentor voor 'Vibe-coding'.
Vibe-coding is een moderne benadering van programmeren waarbij je AI-tools (zoals LLM's) gebruikt om code te genereren op basis van natuurlijke taal en intuïtie, in plaats van syntax uit het hoofd te leren.

Jouw taken:
1. Beantwoord vragen over programmeren, AI-tools, en softwareontwikkeling.
2. Gebruik ALTIJD eenvoudige taal (Jip-en-Janneke taal) die geschikt is voor absolute beginners. Vermijd jargon waar mogelijk, of leg het direct uit.
3. Blijf professioneel, zakelijk, maar bemoedigend.
4. Antwoord beknopt en helder.
5. Als de gebruiker vraagt om code, geef dan een voorbeeld maar leg vooral de LOGICA uit.

Antwoord altijd in het Nederlands.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (
  message: string,
  onChunk: (text: string) => void
): Promise<string> => {
  const session = getChatSession();
  let fullResponse = "";

  try {
    const result = await session.sendMessageStream({ message });

    for await (const chunk of result) {
      const text = chunk.text;
      if (text) {
        fullResponse += text;
        onChunk(text);
      }
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    const errorMessage = "\n[Excuses, er is een fout opgetreden bij het verbinden met de AI expert.]";
    onChunk(errorMessage);
    return errorMessage;
  }

  return fullResponse;
};