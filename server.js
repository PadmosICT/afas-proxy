import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/debiteuren", async (req, res) => {
  try {
    const response = await fetch(
      "https://34754.rest.afas.online/ProfitRestServices/connectors/Debiteur",
      {
        method: "GET",
        headers: {
          Authorization: "AfasToken " + process.env.AFAS_TOKEN,
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "AFAS fout", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
