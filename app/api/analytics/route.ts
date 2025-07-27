import { NextRequest, NextResponse } from 'next/server';

interface LogData {
  timestamp: string;
  userAgent: string;
  ip: string;
  url: string;
  referrer: string;
  sessionId: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const logData: LogData = {
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      url: body.url || 'unknown',
      referrer: body.referrer || 'direct',
      sessionId: body.sessionId || 'unknown'
    };

    // Log to console (you can replace this with your preferred logging service)
    console.log('User Access Log:', JSON.stringify(logData, null, 2));
    
    // You can also store logs in a database or send to analytics service here
    // Example: await storeLog(logData);
    
    return NextResponse.json({ success: true, logged: true });
  } catch (error) {
    console.error('Logging error:', error);
    return NextResponse.json({ success: false, error: 'Logging failed' }, { status: 500 });
  }
}