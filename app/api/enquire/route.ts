import { NextRequest, NextResponse } from 'next/server';
import { enquiries, type Enquiry } from './store';

function generateId(): string {
  return `enquiry_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function validateEnquiryBody(body: unknown): { valid: boolean; error?: string } {
  if (!body || typeof body !== 'object') {
    return { valid: false, error: 'Request body must be an object' };
  }

  const data = body as Record<string, unknown>;

  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    return { valid: false, error: 'Name is required' };
  }

  if (!data.email || typeof data.email !== 'string' || !data.email.trim()) {
    return { valid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  if (!data.phone || typeof data.phone !== 'string' || !data.phone.trim()) {
    return { valid: false, error: 'Phone number is required' };
  }

  return { valid: true };
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validation = validateEnquiryBody(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.error },
        { status: 400 }
      );
    }

    const enquiry: Enquiry = {
      id: generateId(),
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone.trim(),
      timestamp: new Date().toISOString(),
    };

    enquiries.push(enquiry);

    console.log('New enquiry stored:', enquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll contact you soon.",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 }
    );
  }
}

export async function GET() {
  console.log('Total enquiries stored:', enquiries.length);
  
  return NextResponse.json({
    success: true,
    data: enquiries,
  });
}