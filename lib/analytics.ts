// Generate a simple session ID
function generateSessionId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Get or create session ID
function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';
  
  let sessionId = sessionStorage.getItem('spectrity_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    sessionStorage.setItem('spectrity_session_id', sessionId);
  }
  return sessionId;
}

// Log user access
export async function logUserAccess(): Promise<void> {
  if (typeof window === 'undefined') return;
  
  try {
    const logData = {
      url: window.location.href,
      referrer: document.referrer || 'direct',
      sessionId: getSessionId(),
      timestamp: new Date().toISOString()
    };

    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData)
    });
  } catch (error) {
    console.error('Failed to log user access:', error);
  }
}

// Log page view
export async function logPageView(page: string): Promise<void> {
  if (typeof window === 'undefined') return;
  
  try {
    const logData = {
      url: window.location.href,
      page: page,
      referrer: document.referrer || 'direct',
      sessionId: getSessionId(),
      timestamp: new Date().toISOString()
    };

    await fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData)
    });
  } catch (error) {
    console.error('Failed to log page view:', error);
  }
}