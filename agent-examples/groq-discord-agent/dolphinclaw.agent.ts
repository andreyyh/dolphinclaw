import axios from "axios";
import OpenAI from "openai";

// Our OpenAI Agent
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "YOUR_API_KEY_HERE",
  baseURL: "https://api.groq.com/openai/v1",
});

// Discord webhook
const WEBHOOK = "https://discord.com/api/webhooks/...";

export const dailyAiReporter = {
  name: "daily-ai-reporter",
  description: "AI agent that sends daily reports to Discord",

  async setup(): Promise<void> {
    console.log("Daily AI agent ready");
  },

  async run(input: { topic?: string } = {}): Promise<{ success: boolean; message: string }> {
    const topic = input.topic || "crypto market";

    const chat = await client.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        { role: "user", content: `Write a short daily update about ${topic} in 3 sentences` }
      ]
    });

    const text = chat.choices[0].message?.content ?? "No update available.";

    await axios.post(WEBHOOK, {
      content: `📊 Daily ${topic} update\n\n${text}`,
    });

    return {
      success: true,
      message: `Agent scheduled. Daily updates about "${topic}".`,
    };
  },
};
