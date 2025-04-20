const express = require('express');
const cors = require('cors');
const { sendOrderEmail } = require('./emailService');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-order-email', async (req, res) => {
  try {
    const result = await sendOrderEmail(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 