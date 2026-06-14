import { NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/send-contact-email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? '').trim();
    const email = String(body.email ?? '').trim();
    const topic = String(body.topic ?? 'other').trim();
    const message = String(body.message ?? '').trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (message.length > 10000) {
      return NextResponse.json({ error: 'Message is too long.' }, { status: 400 });
    }

    await sendContactEmail({ name, email, topic, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Unable to send your message right now. Please email us directly.' },
      { status: 500 }
    );
  }
}
