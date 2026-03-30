// api/shops.js
export default function handler(req, res) {
  const shops = [
    {
      "_id": "69c3a8325dd7a9af406e25d9",
      "name": "Nail Paradise 123",
      "city": "Hà Nội123",
      "state": "Hà Nội123",
      "website": "https://nailparadise123.vn",
      "btnBooking": "https://nailparadise.vn/booking123",
      "imgStore": "https://i.pinimg.com/1200x/51/68/74/51687455994ee0fb62ede998bf669515.jpg",
      "reviews": [
        { "user": "Alice", "rating": 5, "comment": "Dịch vụ tuyệt vời!" }
      ]
    },
    {
      "_id": "69c3a8b05dd7a9af406e25de",
      "name": "Melbourne Glam Nails",
      "city": "Melbourne",
      "state": "VIC",
      "website": "https://melbourneglamnails.com.au",
      "btnBooking": "https://melbourneglamnails.com.au/booking",
      "imgStore": "https://i.pinimg.com/1200x/ce/37/65/ce3765a0c6845e438489ee85cc3aa803.jpg",
      "reviews": []
    },
    {
      "_id": "69c3a8b75dd7a9af406e25e0",
      "name": "Brisbane Beauty Nails",
      "city": "Brisbane",
      "state": "QLD",
      "website": "https://brisbanebeautynails.com.au",
      "btnBooking": "https://brisbanebeautynails.com.au/booking",
      "imgStore": "https://i.pinimg.com/1200x/63/21/61/632161b498e3d867e1d9a34a925abb84.jpg",
      "reviews": []
    },
    {
      "_id": "69c3a8d65dd7a9af406e25e4",
      "name": "Adelaide Nail Lounge",
      "city": "Adelaide",
      "state": "SA",
      "website": "https://adelaidenaillounge.com.au",
      "btnBooking": "https://adelaidenaillounge.com.au/booking",
      "imgStore": "https://i.pinimg.com/1200x/4e/40/65/4e4065a8d2851fe57c6962145bf68555.jpg",
      "reviews": []
    }
    // …bạn có thể copy hết JSON vào đây
  ];

  res.status(200).json(shops);
}