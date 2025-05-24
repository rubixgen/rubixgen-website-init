import { Resend } from 'resend';

// Note: For production use, this should be moved to a backend API endpoint
// Exposing API keys in frontend is not secure for production applications
const resend = new Resend(process.env.REACT_APP_RESENDER_API_KEY || 're_123456789_placeholder_key');

export const sendContactEmail = async (formData) => {
    try {
        const { name, email, phone, message } = formData;
        
        // Check if we have a valid API key
        if (!process.env.REACT_APP_RESENDER_API_KEY || process.env.REACT_APP_RESENDER_API_KEY === 'your_resender_api_key_here') {
            // For demo purposes, we'll simulate success but log to console
            console.log('=== DEMO MODE: Contact Form Submission ===');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Message:', message);
            console.log('=== Add your REACT_APP_RESENDER_API_KEY to .env file to enable email sending ===');
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            return {
                success: true,
                message: 'Form submitted successfully (Demo mode - no email sent)',
                demo: true
            };
        }
        
        // Compose the email content
        const emailContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                    New Contact Form Submission
                </h2>
                
                <div style="margin: 20px 0;">
                    <h3 style="color: #555; margin-bottom: 5px;">Contact Details:</h3>
                    <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
                </div>
                
                <div style="margin: 20px 0;">
                    <h3 style="color: #555; margin-bottom: 5px;">Message:</h3>
                    <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
                        ${message.replace(/\n/g, '<br>')}
                    </div>
                </div>
                
                <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
                    <p style="margin: 0; font-size: 12px; color: #666;">
                        This email was sent from the RubixGen website contact form.
                    </p>
                </div>
            </div>
        `;

        // Send the email
        const data = await resend.emails.send({
            from: 'RubixGen Contact Form <onboarding@resend.dev>',
            to: ['rubixgen.company@gmail.com'],
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: emailContent,
        });

        return {
            success: true,
            message: 'Email sent successfully!',
            data: data
        };

    } catch (error) {
        console.error('Error sending email:', error);
        return {
            success: false,
            message: 'Failed to send email. Please try again later.',
            error: error.message
        };
    }
};

// Auto-reply function to send confirmation to the user
export const sendAutoReply = async (userEmail, userName) => {
    try {
        // Check if we have a valid API key
        if (!process.env.REACT_APP_RESENDER_API_KEY || process.env.REACT_APP_RESENDER_API_KEY === 'your_resender_api_key_here') {
            console.log(`=== DEMO MODE: Auto-reply would be sent to ${userEmail} ===`);
            return { success: true, demo: true };
        }
        
        const autoReplyContent = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="text-align: center; margin-bottom: 30px;">
                    <h1 style="color: #007bff; margin: 0;">RubixGen</h1>
                    <p style="color: #666; margin: 5px 0;">Building Digital Excellence</p>
                </div>
                
                <h2 style="color: #333;">Thank you for contacting us, ${userName}!</h2>
                
                <p style="color: #555; line-height: 1.6;">
                    We've received your message and appreciate you reaching out to RubixGen. 
                    Our team will review your inquiry and get back to you within 24 hours.
                </p>
                
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                    <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
                    <ul style="color: #555; line-height: 1.6;">
                        <li>Our team will review your message</li>
                        <li>We'll respond within 24 hours</li>
                        <li>We'll provide you with a personalized solution</li>
                    </ul>
                </div>
                
                <p style="color: #555; line-height: 1.6;">
                    If you have any urgent questions, feel free to call us at +1 (123) 456-7890 
                    or email us directly at hello@rubixgen.com.
                </p>
                
                <div style="margin-top: 30px; padding: 20px; background-color: #007bff; color: white; border-radius: 5px; text-align: center;">
                    <h3 style="margin: 0;">Build Smart. Scale Fast. Evolve Always.</h3>
                    <p style="margin: 10px 0 0 0;">with RubixGen Solutions</p>
                </div>
            </div>
        `;

        await resend.emails.send({
            from: 'RubixGen Team <onboarding@resend.dev>',
            to: [userEmail],
            subject: 'Thank you for contacting RubixGen - We\'ll be in touch soon!',
            html: autoReplyContent,
        });

        return { success: true };
    } catch (error) {
        console.error('Error sending auto-reply:', error);
        return { success: false, error: error.message };
    }
}; 