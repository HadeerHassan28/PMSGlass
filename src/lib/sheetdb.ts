import { ContactFormData } from './nodemailer';

export async function appendToSheetDB(data: ContactFormData) {
  const apiUrl = process.env.SHEETDB_API_URL;

  if (!apiUrl) {
    console.warn('SHEETDB_API_URL environment variable missing. SheetDB logging skipped.');
    return { success: false, reason: 'SHEETDB_API_URL unconfigured' };
  }

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo' });

  const payload = {
    data: [
      {
        Timestamp: timestamp,
        Name: data.name,
        Phone: data.phone,
        Email: data.email || 'N/A',
        Service: data.serviceNeeded || 'N/A',
        Message: data.message || 'N/A',
      },
    ],
  };

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('SheetDB API Error:', errorText);
    return { success: false, error: errorText };
  }

  return { success: true };
}
