import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Registration received:', body);
    
    // In a real application, you would save this to a database here.
    
    return NextResponse.json({ success: true, message: 'Registration complete' }, { status: 200 });
  } catch (error) {
    console.error('Error processing registration:', error);
    return NextResponse.json({ success: false, message: 'Invalid request' }, { status: 400 });
  }
}
