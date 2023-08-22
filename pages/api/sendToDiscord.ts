// api/sendToDiscord.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

  try {
    await axios.post(DISCORD_WEBHOOK_URL, {
      content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n\n**Message:**\n${message}`
    });

    res.status(200).send('Message sent to Discord successfully');
  } catch (error) {
    console.error('Error sending message to Discord', error);
    res.status(500).send('Error sending message to Discord');
  }
};
