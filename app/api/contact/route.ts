import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, contactMethod, interests, message } = body;
    
    console.log("Form submission received:", { name, email, contactMethod, interests: interests?.length });

    // Debug environment variables
    console.log("Email config:", {
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: process.env.EMAIL_SECURE,
      user: process.env.EMAIL_USER,
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO
    });

    // Create transporter using environment variables
    const transporter = nodemailer.createTransport(
      process.env.EMAIL_HOST
        ? {
            // Custom SMTP configuration (Brevo, etc.)
            host: process.env.EMAIL_HOST,
            port: parseInt(process.env.EMAIL_PORT || "587"),
            secure: process.env.EMAIL_SECURE === "true",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          }
        : {
            // Service-based configuration (Gmail, etc.)
            service: process.env.EMAIL_SERVICE || "gmail",
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
            },
          }
    );

    // Format interests for email
    const interestsList = interests.length > 0 
      ? interests.join(", ") 
      : "Not specified";

    // Format contact info based on method
    let contactInfo = "";
    if (contactMethod === "email") {
      contactInfo = `Email: ${email}`;
    } else if (contactMethod === "phone") {
      contactInfo = `Phone: ${phone}`;
    } else {
      contactInfo = `Email: ${email}\nPhone: ${phone}`;
    }

    // Email to YOU (admin notification)
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email, // This allows you to reply directly to the visitor
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Contact Information</h3>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
            <p style="margin: 5px 0;">${contactInfo}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Areas of Interest</h3>
            <p style="margin: 5px 0;">${interestsList}</p>
          </div>

          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #374151; margin-bottom: 10px;">Message</h3>
            <p style="margin: 5px 0; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the Spectrity contact form.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Contact Information:
Name: ${name}
Preferred Contact Method: ${contactMethod}
${contactInfo}

Areas of Interest:
${interestsList}

${message ? `Message:\n${message}` : ''}
      `,
    };

    // Send email to admin
    await transporter.sendMail(adminMailOptions);

    // Send auto-reply to the VISITOR
    const visitorAutoReplyOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Spectrity",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank you for reaching out!</h1>
          </div>
          
          <div style="padding: 40px 20px; background: #f9fafb;">
            <h2 style="color: #1e40af; margin-bottom: 20px;">Hi ${name},</h2>
            
            <p style="color: #374151; line-height: 1.8; font-size: 16px;">
              We've received your message and are excited about your interest in ${interests.length > 0 ? interests.join(", ") : "Spectrity"}. 
            </p>
            
            <p style="color: #374151; line-height: 1.8; font-size: 16px;">
              Our team will carefully review your inquiry and reach out to you within <strong>24 hours</strong> via your preferred contact method${contactMethod === "both" ? "" : ` (${contactMethod})`}.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="color: #1e40af; margin-top: 0;">What happens next?</h3>
              <ul style="color: #374151; line-height: 1.8;">
                <li>Our team will review your specific interests and needs</li>
                <li>We'll prepare relevant information about our solutions</li>
                <li>A specialist will contact you to discuss how we can help</li>
              </ul>
            </div>
            
            <p style="color: #374151; line-height: 1.8; font-size: 16px;">
              In the meantime, feel free to explore more about our innovative approach to therapeutics discovery.
            </p>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
            
            <p style="color: #6b7280; font-size: 14px; text-align: center;">
              Best regards,<br>
              <strong>The Spectrity Team</strong><br>
              <a href="mailto:${process.env.EMAIL_FROM || process.env.EMAIL_USER}" style="color: #3b82f6; text-decoration: none;">${process.env.EMAIL_FROM || process.env.EMAIL_USER}</a>
            </p>
          </div>
        </div>
      `,
      text: `
Hi ${name},

Thank you for reaching out!

We've received your message and are excited about your interest in ${interests.length > 0 ? interests.join(", ") : "Spectrity"}.

Our team will carefully review your inquiry and reach out to you within 24 hours via your preferred contact method${contactMethod === "both" ? "" : ` (${contactMethod})`}.

What happens next?
- Our team will review your specific interests and needs
- We'll prepare relevant information about our solutions  
- A specialist will contact you to discuss how we can help

In the meantime, feel free to explore more about our innovative approach to therapeutics discovery.

Best regards,
The Spectrity Team
${process.env.EMAIL_USER}
      `,
    };

    // Always send auto-reply since email is now mandatory
    await transporter.sendMail(visitorAutoReplyOptions);

    console.log("Emails sent successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error details:", error);
    
    // More specific error handling
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
    }
    
    return NextResponse.json(
      { error: "Failed to send email", details: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}