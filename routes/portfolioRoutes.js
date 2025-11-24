const express = require('express');
const router = express.Router();

// ✅ Render portfolio page
router.get('/', (req, res) => {
  res.render('portfolio', { formMessage: null });
});

module.exports = router;
