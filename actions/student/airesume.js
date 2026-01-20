"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
const PDFParser = require("pdf2json");

const API_KEY = 'AIzaSyAkZ0foIKLX8ls76G8TvB-xlO1Qqikdhs4'; 
const genAI = new GoogleGenerativeAI(API_KEY);

function parsePDF(buffer) {
  return new Promise((resolve, reject) => {
    const parser = new PDFParser(null, 1); // 1 = text content only

    parser.on("pdfParser_dataError", (errData) => reject(errData.parserError));
    
    parser.on("pdfParser_dataReady", (pdfData) => {
      // Get raw text content
      const rawText = parser.getRawTextContent();
      resolve(rawText);
    });

    parser.parseBuffer(buffer);
  });
}

export async function analyzeResume(prevState, formData) {
  const file = formData.get("resume");
  if (!file) return { success: false, message: "No file uploaded" };

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const resumeText = await parsePDF(buffer);

    // FIX: Updated to Gemini 3 (The 2026 Standard)
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });
    
    const prompt = `
      You are an expert HR Resume Screener. 
      Analyze the following resume text.
      
      Resume Text:
      "${resumeText}"
      
      Provide a response in HTML format (no markdown, just <div>, <h3>, <p>, <ul>).
      Include:
      1. A score out of 100.
      2. Top 3 Strengths.
      3. Top 3 Weaknesses with actionable advice.
      
      Keep it professional and concise.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const feedback = response.text();

    return { success: true, feedback, resumeText };

  } catch (error) {
    console.error("Error analyzing resume:", error);
    return { success: false, message: "Failed to analyze resume" };
  }
}

export async function chatWithAI(userMessage, resumeText, chatHistory) {
  try {
    // FIX: Updated to Gemini 3
    const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

    const prompt = `
      You are a helpful career coach assistant.
      The user is asking a question about their resume.
      
      Here is the user's resume content for reference:
      "${resumeText}"

      Chat History:
      ${JSON.stringify(chatHistory)}

      User's Question: "${userMessage}"

      Answer the user specifically based on their resume content. Be encouraging and helpful.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
    
  } catch (error) {
    console.error("Chat error:", error);
    return "I'm having trouble thinking right now. Try again later!";
  }
}