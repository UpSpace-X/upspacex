import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // ✅ Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // ✅ Configure transporter for Outlook
    const transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
        user: process.env.OUTLOOK_USER, // hello.upspacex@outlook.com
        pass: process.env.OUTLOOK_PASS, // stored securely in .env.local
      },
    });

    // ✅ Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.OUTLOOK_USER, // your inbox
      subject,
      text: `${name} (${email}) says:\n\n${message}`,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, error: 'Email failed to send' });
  }
}