const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // ✅ ADD THIS

const authRoutes = require('./routes/auth.routes');
const musicRoutes = require('./routes/music.routes');

const app = express();

// ✅ CORS (VERY IMPORTANT - top pe)
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/music', musicRoutes);

module.exports = app;