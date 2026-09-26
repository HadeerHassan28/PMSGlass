import { NextResponse } from 'next/server';
import { sendContactEmails, ContactFormData } from '@/lib/nodemailer';
import { appendToSheetDB } from '@/lib/sheetdb';

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone number are required.' },
        { status: 400 }
      );
    }

    const [emailResult, sheetResult] = await Promise.allSettled([
      sendContactEmails(body),
      appendToSheetDB(body),
    ]);

    const isEmailOk = emailResult.status === 'fulfilled';
    const isSheetOk = sheetResult.status === 'fulfilled';

    return NextResponse.json({
      success: true,
      message: 'Inquiry submitted successfully.',
      details: {
        emailSent: isEmailOk,
        sheetLogged: isSheetOk,
      },
    });
  } catch (error: any) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Server error processing request.' },
      { status: 500 }
    );
  }
}
