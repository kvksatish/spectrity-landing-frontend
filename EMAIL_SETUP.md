# Email Configuration Setup

This contact form sends TWO emails:
1. **Admin Notification** - Sent to YOU when someone fills out the form
2. **Visitor Auto-Reply** - Sent to the VISITOR as confirmation

## Quick Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Edit `.env.local` with your email credentials:

### For Gmail:
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=where-to-receive@example.com
```

**Important for Gmail:**
- You need to use an App Password, not your regular password
- Enable 2-Step Verification first
- Generate App Password at: https://myaccount.google.com/apppasswords
- Select "Mail" as the app and generate password

### For Other Services:

**Outlook/Hotmail:**
```env
EMAIL_SERVICE=hotmail
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
EMAIL_TO=recipient@example.com
```

**Yahoo:**
```env
EMAIL_SERVICE=yahoo
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
EMAIL_TO=recipient@example.com
```

### Brevo (Recommended for Production):
```env
EMAIL_HOST=smtp-relay.brevo.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-brevo-smtp-login
EMAIL_PASS=your-brevo-smtp-key
EMAIL_TO=team@spectrity.bio
EMAIL_FROM=noreply@spectrity.bio
```

### Custom SMTP:
For other SMTP servers:
```env
EMAIL_HOST=smtp.your-domain.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-password
EMAIL_TO=recipient@example.com
EMAIL_FROM=noreply@your-domain.com
```

## How It Works

When someone submits the form:

1. **You receive** an email at `EMAIL_TO` with:
   - Visitor's name, email, and phone (if provided)
   - Their contact preference
   - Selected interests
   - Their message
   - Reply-To header set to visitor's email

2. **Visitor receives** a confirmation email with:
   - Personalized greeting
   - Confirmation of their interests
   - Next steps information
   - Professional HTML template

## Testing

1. Start the development server:
```bash
npm run dev
```

2. Fill out the contact form (email is now mandatory)
3. Check:
   - Your inbox (EMAIL_TO address) for the admin notification
   - The visitor's inbox for the auto-reply confirmation

## Troubleshooting

- **Authentication failed**: Make sure you're using App Password for Gmail/Yahoo
- **Connection timeout**: Check firewall settings
- **Email not received**: Check spam folder
- **"Less secure app" error**: Use App Passwords instead

## Security Notes

- Never commit `.env.local` to version control
- Use environment variables in production (Vercel, etc.)
- Consider using a dedicated email service for production (SendGrid, Mailgun, etc.)