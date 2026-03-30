require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nailShopRoutes = require('./routes/nailShopRoutes');
const path = require('path'); 

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected (local)"))
  .catch(err => console.error("❌ MongoDB connection error:", err));



// Routes
app.use("/api/shops", nailShopRoutes);

// Test route
app.get("/", (req, res) => res.send("Backend is running with local MongoDB!"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));