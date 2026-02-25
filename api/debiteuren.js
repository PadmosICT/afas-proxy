api/debiteuren.js
export default async function handler(req, res) {
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
    res.status(500).json({ error: "AFAS fout" });
  }
}
