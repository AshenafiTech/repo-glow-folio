# EmailJS Setup Guide

## Step 1: Sign up for EmailJS
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{from_name}}` - Sender's full name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email address
4. Save the template and note down your **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual credentials:
   ```typescript
   export const emailjsConfig = {
     serviceId: 'your_actual_service_id',
     templateId: 'your_actual_template_id',
     publicKey: 'your_actual_public_key',
     toEmail: 'ashenafigodanaj@gmail.com'
   };
   ```

## Step 6: Test the Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Email Template Example
Here's a simple email template you can use:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
Hello,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

## Troubleshooting
- Make sure all credentials are correct
- Check the browser console for error messages
- Verify your email service is properly configured
- Ensure your template variables match exactly

## Security Notes
- Never commit your actual EmailJS credentials to version control
- The public key is safe to use in frontend code
- Consider using environment variables for production
