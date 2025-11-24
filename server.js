const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config(); 
// View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const portfolioRoutes = require('./routes/portfolioRoutes');
const contactmeRoutes = require('./routes/contactmeRoutes');

app.use('/', portfolioRoutes);
app.use('/', contactmeRoutes);

// 404 handler
app.use((req, res) => res.status(404).send('404 Not Found'));

// Start server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
