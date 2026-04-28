import { NextResponse } from 'next/server';
import { enquiries, type Enquiry } from '../enquire/store';

export async function GET() {
  console.log('Total enquiries fetched:', enquiries.length);
  
  return NextResponse.json({
    success: true,
    count: enquiries.length,
    data: enquiries,
  });
}