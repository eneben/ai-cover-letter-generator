import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:1234/v1",
  apiKey: "lm-studio",
});

const prompt = `Write a cover letter for a job application. Some info about the company and the position: ${jobDescription}. Some info about myself: ${applicant}.`;

export default async function handler(request, response) {
  if (request.method === "POST") {
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
      });
      response.status(201).json(response);
    } catch (error) {
      console.log("POST /api/generate", error);
      response.status(500).json({ message: "Post request error" });
    }
    return;
  } else {
    response.status(405).json({ message: "METHOD NOT ALLOWED" });
  }
}
