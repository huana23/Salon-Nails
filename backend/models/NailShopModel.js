const mongoose = require('mongoose');

// Schema cho đánh giá của khách hàng
const reviewSchema = new mongoose.Schema({
  user: { type: String, required: true },       
  rating: { type: Number, min: 0, max: 5, required: true },
  comment: { type: String, default: "" },       
  date: { type: Date, default: Date.now }      
});

// Schema cho tiệm nail
const nailShopSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, default: "" },
  city: { type: String, default: "" },
  state: { type: String, default: "" },
  phone: { type: String, match: /^\d{10}$/, default: "" },
  website: { type: String, match: /^https?:\/\/.+/, default: "" },
  btnBooking: { type: String, default: "" },  
  imgStore: { type: String , default: ""},
  services: [{ type: String }], 
  reviews: [reviewSchema],
  avgRating: { type: Number, default: 0 }
}, { timestamps: true });             

// Tạo model
module.exports = mongoose.model("NailShop", nailShopSchema);