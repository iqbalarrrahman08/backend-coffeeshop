<<<<<<< HEAD
const express = require("express");
const midtransClient = require("midtrans-client");

const router = express.Router();

router.get("/process-transaction", (req, res) => {
  res.send("berhasil anda telah memasuki server api midtrans proses transaksi");
});

router.post("/process-transaction", (req, res) => {
  try {
    const { order_id, name, email, phone, items, total } = req.body;
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-oVqrONUyQnk8nMnRe8yQuYZK",
      clientKey: "SB-Mid-client-b7mtZ-lwFI-W1kZS"
    });

    const parameter = {
      transaction_details: {
        order_id: order_id,
        gross_amount: total
      },
      item_details: JSON.stringify(items),
      customer_details: {
        first_name: name,
        email: email,
        phone: phone
      }
    };
    snap.createTransaction(parameter).then((transaction) => {
      // transaction token
      let token = transaction.token;
      res.status(200).json({ message: "berhasil", token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
=======
const express = require("express");
const midtransClient = require("midtrans-client");

const router = express.Router();

router.get("/process-transaction", (req, res) => {
  res.send("berhasil anda telah memasuki server api midtrans proses transaksi");
});

router.post("/process-transaction", (req, res) => {
  try {
    const { order_id, name, email, phone, items, total } = req.body;
    const snap = new midtransClient.Snap({
      isProduction: false,
      serverKey: "SB-Mid-server-oVqrONUyQnk8nMnRe8yQuYZK",
      clientKey: "SB-Mid-client-b7mtZ-lwFI-W1kZS"
    });

    const parameter = {
      transaction_details: {
        order_id: order_id,
        gross_amount: total
      },
      item_details: JSON.stringify(items),
      customer_details: {
        first_name: name,
        email: email,
        phone: phone
      }
    };
    snap.createTransaction(parameter).then((transaction) => {
      // transaction token
      let token = transaction.token;
      res.status(200).json({ message: "berhasil", token });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
>>>>>>> b5a97a875d677f2ea7415ac64ad45b7e11c273f3
