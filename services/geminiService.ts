
import { GoogleGenAI } from "@google/genai";
import { MALIK_CONTEXT } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (userPrompt: string, history: { role: string, text: string }[]) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: MALIK_CONTEXT,
        temperature: 0.7,
      },
    });

    // In a real app, we might want to map history to the Gemini format.
    // For this simple demo, we just send the message.
    const response = await chat.sendMessage({ message: userPrompt });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my cognitive systems right now. Please try again or check out my project links!";
  }
};
