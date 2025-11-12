const express = require('express');
const path = require('path');

const app = express();

// Set view engine to Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data (for contact form)
app.use(express.urlencoded({ extended: true }));

// Routes
const portfolioRoutes = require('./routes/portfolio');
app.use('/', portfolioRoutes);

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
