const express = require('express');
const router = express.Router();

// ✅ Render portfolio page
router.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

module.exports = router;
