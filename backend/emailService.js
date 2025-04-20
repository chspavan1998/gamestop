const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'workwithchspavan@gmail.com',
    pass: process.env.EMAIL_PASSWORD // You'll need to set this as an environment variable
  }
});

const sendOrderEmail = async (orderDetails) => {
  const { customerName, email, address, phone, games, totalAmount } = orderDetails;

  const gameList = games.map(game => `
    - ${game.title}
      Duration: ${game.startDate} to ${game.endDate}
      Rental Cost: $${game.rentalCost}
  `).join('\n');

  const mailOptions = {
    from: 'workwithchspavan@gmail.com',
    to: 'workwithchspavan@gmail.com',
    subject: 'New Game Rental Order',
    html: `
      <h2>New Rental Order Received</h2>
      <h3>Customer Details:</h3>
      <p><strong>Name:</strong> ${customerName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      
      <h3>Order Details:</h3>
      ${gameList}
      
      <h3>Total Amount: $${totalAmount}</h3>
      
      <p>Please process this order and arrange for game delivery.</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Order email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send order email' };
  }
};

module.exports = { sendOrderEmail }; 