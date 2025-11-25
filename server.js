const express = require('express');
const path = require('path');
// const contactmeRoutes = require('./routes/contactmeRoutes');
require('dotenv').config();

const app = express();

// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// // Contact form route
// app.use('/', contactmeRoutes);

// Catch-all for SPA (Express 5 safe)
app.use((req, res) => {
  res.render('portfolio', { formMessage: null });
});

// Start server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
