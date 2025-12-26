import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, service, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const receivers = process.env.GMAIL_RECEIVER.split(',').map(e => e.trim());

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        for (const receiver of receivers) {
            await transporter.sendMail({
                from: `"Contact Form" <${process.env.GMAIL_USER}>`,
                to: receiver,
                replyTo: email,
                subject: `New Contact Form Message from ${name}`,
                text: `
Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Service: ${service || "N/A"}

Message:
${message}
        `,
            });
        }

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Email failed to send" });
    }
}
