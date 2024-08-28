import nodemailer from 'nodemailer'

const sendEmail = async (options) => {
    console.log(process.env.EMAIL_ADDRESS)

    // 1. Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // You can change this to another service like SendGrid, Mailgun, etc.
        auth: {
            user: '1a2b3c4d5e6f7g',
            pass: '1a2b3c4d5e6f7g',
        },
    })

    // 2. Define the email options
    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    console.log(mailOptions)

    // 3. Actually send the email
    // await transporter.sendMail(mailOptions)

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(`Error:`, error)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}

export default sendEmail
