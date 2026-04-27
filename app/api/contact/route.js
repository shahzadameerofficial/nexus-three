import nodemailer from "nodemailer";

export async function POST(req) {
    const body = await req.json();
    const { name, email, service, company, message } = body;

    if (!name || !email || !message) {
        return new Response(
            JSON.stringify({ message: "Missing required fields" }),
            { status: 400 }
        );
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

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ message: "Email failed to send" }),
            { status: 500 }
        );
    }
}