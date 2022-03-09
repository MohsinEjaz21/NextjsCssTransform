const fs = require('fs');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    fs.writeFileSync('./example.json', JSON.stringify(req.body))
    return res.status(200).json({});
  }
}
