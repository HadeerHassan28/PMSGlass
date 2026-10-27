import { NextResponse } from 'next/server';
import { sendContactEmails, ContactFormData } from '@/lib/nodemailer';
import { appendToSheetDB } from '@/lib/sheetdb';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fail = (error: string, status: number) =>
  NextResponse.json({ success: false, error }, { status });

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();
    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim();

    if (!name || !phone) {
      return fail('Name and phone number are required.', 400);
    }

    if (email && !EMAIL_PATTERN.test(email)) {
      return fail('Please enter a valid email address.', 400);
    }

    const data: ContactFormData = { ...body, name, phone, email: email || undefined };

    // Sheet logging and the management notification always run; the customer auto-reply needs an email.
    const [sheetResult, emailResult] = await Promise.allSettled([
      appendToSheetDB(data),
      sendContactEmails(data),
    ]);

    const sheetLogged = sheetResult.status === 'fulfilled' && sheetResult.value.success;
    const emailSent = emailResult.status === 'fulfilled' && emailResult.value.success;

    if (!sheetLogged) {
      console.error('Contact submission was not logged to SheetDB.');
      return fail('Unable to save your inquiry. Please try again.', 500);
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully.',
      details: { emailSent, sheetLogged },
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return fail(error.message || 'Server error processing request.', 500);
  }
}
