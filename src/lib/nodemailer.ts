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
       <div style="font-family: Arial, sans-serif; padding: 25px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff; direction: rtl; text-align: right;">
          
          <!-- الهيدر واللوجو -->
          <div style="text-align: center; margin-bottom: 20px; background: #121316; padding: 20px; border-radius: 8px;">
            <!-- مسار اللوجو من مجلد public مباشرة -->
            <img src="https://pms-glass.vercel.app/images/logo.png" alt="PMS GLASS Logo" style="max-height: 50px; margin-bottom: 10px; display: inline-block;" />
            <h2 style="color: #F5B800; margin: 0; font-size: 22px; letter-spacing: 1px;">PMS GLASS</h2>
            <p style="color: #94a3b8; font-size: 12px; margin: 5px 0 0 0;">حلول الزجاج المعماري الفاخر | Luxury Architectural Glass Solutions</p>
          </div>

          <!-- الرسالة بالعربية -->
          <p style="font-size: 16px;">عزيزي/ <strong>${data.name}</strong>،</p>
          <p style="line-height: 1.6; color: #475569;">
            شكراً لتواصلك مع <strong>PMS GLASS</strong>. لقد استلمنا استفسار تفاصيل مشروعك بنجاح، ويقوم فريقنا الهندسي حالياً بمراجعته لدراسة المتطلبات.
          </p>
          <p style="line-height: 1.6; color: #475569;">
            سنتواصل معك في غضون <strong>24 ساعة</strong> لمناقشة الخطوات القادمة.
          </p>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

          <!-- الرسالة بالإنجليزية -->
          <div style="direction: ltr; text-align: left; font-size: 14px; color: #64748b;">
            <p>Dear <strong>${data.name}</strong>,</p>
            <p>Thank you for reaching out to PMS GLASS. Our engineering team is reviewing your project details and will get back to you within 24 hours.</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

          <!-- معلومات التواصل السريع -->
          <div style="direction: ltr; background-color: #f8fafc; padding: 15px; border-radius: 8px; text-align: center;">
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #1e293b;"><strong>للتواصل السريع / واتساب (Direct Contact):</strong></p>
            <a href="https://wa.me/201017905067" style="color: #D97706; text-decoration: none; font-weight: bold; font-size: 16px;">+20 101 790 5067</a>
          </div>

          <!-- الفوتر -->
          <p style="text-align: center; font-size: 12px; color: #94a3b8; margin-top: 25px;">
            © 2026 PMS GLASS. All rights reserved. <br/>
            هذه رسالة تلقائية، يرجى عدم الرد مباشرة على هذا البريد.
          </p>
        </div>
      `,
    });
  }

  return { success: true };
}
