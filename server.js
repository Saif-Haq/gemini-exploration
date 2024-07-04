import { createServer } from "node:http";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function run() {
  const prompt = "Write a summary about thr startup Unlayer.";

  const result = await model.generateContentStream(prompt);

  let text = "";
  for await (const chunk of result.stream) {
    const chunkText = chunk.text();
    console.log(chunkText);
    text += chunkText;
  }

  // const result = await model.generateContent(prompt);
  // const response = result.response;
  // const text = response.text();
  // console.log(text);
}

run().catch((e) => {
  console.error("Something went wrong");
  // console.log(e);
  process.exit(1);
});
