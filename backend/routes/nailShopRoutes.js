const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

const nailShopController = require("../controllers/NailShopController");
const validateReview = require("../middlewares/validateReviewShop");

// ===== Multer setup để upload ảnh =====
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"), // folder uploads
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext); // tạo tên file duy nhất
  },
});

const upload = multer({ storage });

// ===== Routes upload ảnh =====
router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded");

  // trả về URL có thể truy cập từ trình duyệt
  const url = `http://localhost:5001/uploads/${req.file.filename}`;
  res.json({ url });
});

// ===== CRUD NailShop =====
router.get("/", nailShopController.getAllShops);
router.get("/:id", nailShopController.getShopById);
router.post("/", nailShopController.createShop);
router.put("/:id", nailShopController.updateShop);
router.delete("/:id", nailShopController.deleteShop);

// ===== Review với middleware validate =====
router.post("/:id/reviews", validateReview, nailShopController.addReview);

module.exports = router;