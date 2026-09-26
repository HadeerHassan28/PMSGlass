import nodemailer from 'nodemailer';

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  serviceNeeded?: string;
  message?: string;
}

export async function sendContactEmails(data: ContactFormData) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, COMPANY_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn('SMTP environment variables missing. Email delivery skipped.');
    return { success: false, reason: 'SMTP unconfigured' };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '465', 10),
    secure: parseInt(SMTP_PORT || '465', 10) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const fromAddress = SMTP_FROM || `PMS GLASS <${SMTP_USER}>`;
  const companyEmail = COMPANY_EMAIL || SMTP_USER;

  // 1. Send notification to Company
  await transporter.sendMail({
    from: fromAddress,
    to: companyEmail,
    subject: `🔔 New Inquiry: ${data.name} (${data.phone})`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #F5B800; background: #121316; padding: 12px 16px; border-radius: 8px; margin-top: 0;">PMS GLASS - New Lead</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
        <p><strong>Email:</strong> ${data.email || 'N/A'}</p>
        <p><strong>Service Requested:</strong> ${data.serviceNeeded || 'General Consultation'}</p>
        <p><strong>Message / Specifications:</strong></p>
        <blockquote style="background: #f8fafc; padding: 12px; border-left: 4px solid #F5B800; margin: 0; border-radius: 4px;">
          ${data.message ? data.message.replace(/\n/g, '<br/>') : 'No message provided.'}
        </blockquote>
      </div>
    `,
  });

  // 2. Send Auto-Response to Client if email provided
  if (data.email) {
    await transporter.sendMail({
      from: fromAddress,
      to: data.email,
      subject: `Thank you for contacting PMS GLASS`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="color: #F5B800; background: #121316; padding: 12px 16px; border-radius: 8px; margin-top: 0;">PMS GLASS</h2>
          <p>Dear <strong>${data.name}</strong>,</p>
          <p>Thank you for reaching out to PMS GLASS. We have received your project inquiry.</p>
          <p>Our engineering team will review your details and get back to you within 24 hours.</p>
          <p>Direct Contact / WhatsApp: <strong>+20 101 790 5067</strong></p>
        </div>
      `,
    });
  }

  return { success: true };
}
