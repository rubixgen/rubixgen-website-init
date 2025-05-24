# Email Setup for Contact Form

The contact form on the website now supports email functionality using Resender API. Here's how to set it up:

## Setup Instructions

### 1. Get a Resender API Key

1. Go to [Resend.com](https://resend.com/)
2. Create an account or sign in
3. Navigate to your dashboard
4. Create a new API key

### 2. Set up Environment Variables

Create a `.env` file in the root directory of your project with the following content:

```bash
REACT_APP_RESENDER_API_KEY=your_actual_resender_api_key_here
```

Replace `your_actual_resender_api_key_here` with your actual Resender API key.

### 3. Important Security Note

**⚠️ Warning**: Storing API keys in frontend environment variables is not secure for production applications. The API key will be visible in the client-side code.

**For production use, consider:**
- Moving the email functionality to a backend API endpoint
- Using server-side API calls to Resender
- Implementing proper API key security

## How It Works

### Current Implementation

1. **Contact Form Submission**: Users fill out the contact form with their name, email, phone, and message
2. **Email to RubixGen**: The form data is sent to `rubixgen.company@gmail.com`
3. **Auto-reply**: A confirmation email is automatically sent back to the user
4. **User Feedback**: Toast notifications inform the user of success or failure

### Demo Mode

If no API key is configured, the form will run in demo mode:
- Form submission will still work
- Data will be logged to the browser console
- Success message will be shown to the user
- No actual emails will be sent

### Files Modified

- `src/components/ContactFrom/ContactForm.js` - Updated with email functionality
- `src/api/email.js` - New email service using Resender API
- Added `resend` package to dependencies

## Testing

1. **Without API Key**: Test the demo mode by leaving the .env file empty
2. **With API Key**: Add your Resender API key to test actual email sending

## Email Templates

The implementation includes:

### 1. Contact Form Email (to RubixGen)
- Professional HTML template
- Includes all form data
- Proper formatting and styling

### 2. Auto-reply Email (to User)
- Branded RubixGen template
- Thank you message
- Information about next steps
- Professional appearance

## Support

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your API key is correct
3. Ensure the .env file is in the root directory
4. Make sure the .env file is not tracked by git (.gitignore should include .env)

## Future Improvements

For production deployment, consider:
- Backend API endpoint for email processing
- Email template management system
- Email delivery monitoring
- Spam protection measures
- Rate limiting 