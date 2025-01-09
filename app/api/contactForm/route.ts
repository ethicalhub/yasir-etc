import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_EMAILAPP_EMAIL,
    pass: process.env.NEXT_EMAILAPP_PASSWORD,
  },
});

type ContactFormType = {
  email: string;
  message: string;
  username: string;
};
// Function to handle sending the demo request email
const handleContactForm = async (contactReq: ContactFormType) => {
  try {
    const mailOptions = {
      from: "no-reply@yasir-etc.com",
      to: process.env.NEXT_EMAILAPP_EMAIL,
      subject: `Demo Request - ${contactReq.message}`,
      html: `
          <p>New demo request submitted:</p>
          <ul>
            <li><strong>Name:</strong> ${contactReq.username}</li>
            <li><strong>Email:</strong> ${contactReq.email}</li>
            <li><strong>Subject of Interest:</strong> ${contactReq.message}</li>
          </ul>
        `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: "Demo request submitted successfully." };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    throw new Error("Error sending email. Please try again later.");
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    if (!body.username || !body.email || !body.message) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing required fields: name, email, or message.",
        },
        { status: 400 },
      );
    }

    const result = await handleContactForm(body);
    return NextResponse.json(result, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Error in booking demo. Please try again later.",
      },
      { status: 500 },
    );
  }
};

// Rate Limit
// Verify Captcha
// Data protection (sanitizing)
// Backend verification of data using (zod)
