const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // 设置CORS头
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // 处理OPTIONS请求
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, organization, email, phone, message, organizationType, teamSize } = req.body;

  // 验证必填字段
  if (!name || !organization || !email || !message || !organizationType) {
    return res.status(400).json({ 
      message: 'Missing required fields',
      required: ['name', 'organization', 'email', 'message', 'organizationType']
    });
  }

  // 验证邮箱格式
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // 创建邮件传输器（使用环境变量配置）
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 邮件内容
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'partnerships@vibetalk.com',
      subject: `New Partnership Inquiry from ${organization}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8b5cf6;">New Partnership Inquiry</h2>
          
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Organization:</strong> ${organization}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Organization Type:</strong> ${organizationType}</p>
            ${teamSize ? `<p><strong>Team Size:</strong> ${teamSize}</p>` : ''}
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
            <p style="margin: 0; color: #92400e;">
              <strong>Next Steps:</strong> Please respond to this inquiry within 24 hours to maintain our partnership response standards.
            </p>
          </div>
        </div>
      `,
    };

    // 发送邮件
    await transporter.sendMail(mailOptions);

    // 发送确认邮件给提交者
    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Thank you for your partnership inquiry - VibeTalk',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px;">
            <h1 style="color: #8b5cf6;">VibeTalk</h1>
            <h2 style="color: #374151;">Thank you for your partnership inquiry!</h2>
          </div>
          
          <div style="padding: 20px;">
            <p>Dear ${name},</p>
            
            <p>Thank you for reaching out to VibeTalk regarding a potential partnership with ${organization}. We're excited about the opportunity to support your mission to protect and empower women in your community.</p>
            
            <div style="background: #f3e8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #7c3aed; margin-top: 0;">What happens next?</h3>
              <ul style="color: #374151;">
                <li>Our partnership team will review your inquiry within 24 hours</li>
                <li>We'll reach out to schedule a consultation call</li>
                <li>We'll discuss how VibeTalk can best support your organization's needs</li>
                <li>We'll provide a customized implementation plan</li>
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our resources or reach out if you have any immediate questions.</p>
            
            <div style="margin-top: 30px; padding: 20px; background: #f9fafb; border-radius: 8px;">
              <p style="margin: 0;"><strong>Contact Information:</strong></p>
              <p style="margin: 5px 0;">📧 partnerships@vibetalk.com</p>
              <p style="margin: 5px 0;">📞 +1 (555) 123-4567</p>
              <p style="margin: 5px 0;">🏢 Toronto, Canada</p>
            </div>
            
            <p>Best regards,<br>
            The VibeTalk Partnership Team</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    res.status(200).json({ 
      message: 'Message sent successfully',
      status: 'success'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      message: 'Failed to send message',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
} 