const express = require('express');
const router = express.Router();    // Funktion => Routen in verschiedenen Dateien und in app.js importieren
const Artikel = require('../models/Artikel');
const User = require('../models/User');