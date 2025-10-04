const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

const FILE_PATH = path.join(__dirname, "opportunities.csv");
const BACKUP_FILE = path.join(__dirname, "backup_opportunities.csv");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// Ensure CSV file exists
if (!fs.existsSync(FILE_PATH)) {
  const headers = "Name,Company,Phone,Email,Interests,Contact Preference\n";
  fs.writeFileSync(FILE_PATH, headers);
}

// Helper: Append to CSV and make backup
function appendToCSV(entryArray) {
  if (fs.existsSync(FILE_PATH)) {
    // Create backup before writing
    fs.copyFileSync(FILE_PATH, BACKUP_FILE);
  }

  const csvLine = entryArray
    .map((v) => `"${String(v).replace(/"/g, '""')}"`)
    .join(",") + "\n";

  fs.appendFileSync(FILE_PATH, csvLine);
}

// Endpoint for receiving form data
app.post("/submit", (req, res) => {
  const { name, company, phone, email, interests, contactPref } = req.body;

  const contactText =
    contactPref === "contact" ? "Please contact" : "Please don't contact";

  appendToCSV([name, company, phone, email, interests, contactText]);

  res.json({ success: true, message: "Data saved to opportunities.csv" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

