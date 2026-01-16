
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getAiRecommendation = async (userInput: string) => {
  if (!API_KEY) return "AI Assistant is currently offline. Please configure your API key.";

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User is looking for a laptop/tech advice. Context: Laptop Valley sells gaming, business, student, and creator laptops. User says: "${userInput}"`,
      config: {
        systemInstruction: "You are a friendly tech expert at Laptop Valley. Recommend specific categories or features based on user needs. Keep it concise.",
        temperature: 0.7,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI. Please try again later.";
  }
};
