const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample data loaded from JSON for simplicity (replace with your dynamic data source if needed)
const data = require('./data.json');

// Endpoint to fetch resume data
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
