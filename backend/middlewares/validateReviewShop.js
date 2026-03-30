module.exports = function validateReview(req, res, next) {
  const { user, rating, comment } = req.body;
  if (!user || rating === undefined) {
    return res.status(400).json({ message: "User and rating are required" });
  }
  if (rating < 0 || rating > 5) {
    return res.status(400).json({ message: "Rating must be between 0 and 5" });
  }
  next();
};