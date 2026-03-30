const express = require('express');
const router = express.Router();

// Import các router module
const nailShopRoutes = require('./nailShopRoutes');



router.use('/shops', nailShopRoutes);
// router.use('/users', userRoutes); // ví dụ cho user module


module.exports = router;