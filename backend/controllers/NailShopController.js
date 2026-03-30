const NailShop = require('../models/NailShopModel');

// Lấy tất cả tiệm
exports.getAllShops = async (req, res) => {
  try {
    const shops = await NailShop.find();
    res.json(shops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Lấy tiệm theo ID
exports.getShopById = async (req, res) => {
  try {
    const shop = await NailShop.findById(req.params.id);
    if (!shop) return res.status(404).json({ message: "Shop not found" });
    res.json(shop);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm tiệm mới
exports.createShop = async (req, res) => {
  try {
    const shop = new NailShop(req.body);
    await shop.save();
    res.status(201).json(shop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Cập nhật tiệm
exports.updateShop = async (req, res) => {
  try {
    const shop = await NailShop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!shop) return res.status(404).json({ message: "Shop not found" });
    res.json(shop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Xóa tiệm
exports.deleteShop = async (req, res) => {
  try {
    const shop = await NailShop.findByIdAndDelete(req.params.id);
    if (!shop) return res.status(404).json({ message: "Shop not found" });
    res.json({ message: "Shop deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Thêm review
exports.addReview = async (req, res) => {
  try {
    const shop = await NailShop.findById(req.params.id);
    if (!shop) return res.status(404).json({ message: "Shop not found" });

    shop.reviews.push(req.body);

    // Tính avgRating mỗi khi thêm review mới
    const total = shop.reviews.reduce((sum, r) => sum + r.rating, 0);
    shop.avgRating = total / shop.reviews.length;

    await shop.save();
    res.status(201).json(shop);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};