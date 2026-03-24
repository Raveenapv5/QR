const express = require("express");
const QRcode = require("qrcode");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/generate", async (req, res) => {
  const { text } = req.body;

  try {
    const qrCode = await QRcode.toDataURL(text);
    res.json({ qrCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate QR code" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});