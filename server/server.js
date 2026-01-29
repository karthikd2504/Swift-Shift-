const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/quote", (req, res) => {
  const { name, email, phone, city } = req.body;

  if (!name || !email || !phone || !city) {
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    });
  }

  res.json({
    success: true,
    message: `Thanks ${name}! SwiftShift team will contact you soon.`,
    data: { name, email, phone, city }
  });
});

app.listen(3001, () => {
  console.log("🚀 SwiftShift backend running on port 3001");
});