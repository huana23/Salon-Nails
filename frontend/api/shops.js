// api/shops.js
export default function handler(req, res) {
  const shops = [
    {
      "services": [],
      "avgRating": 0,
      "_id": "69c3a8325dd7a9af406e25d9",
      "name": "Nail Paradise 123",
      "address": "123 Nguyễn Trãi123",
      "city": "Hà Nội123",
      "state": "Hà Nội123",
      "phone": "0123456123",
      "website": "https://nailparadise123.vn",
      "btnBooking": "https://nailparadise.vn/booking123",
      "reviews": [
        {
          "user": "Alice",
          "rating": 5,
          "comment": "Dịch vụ tuyệt vời, rất hài lòng!",
          "_id": "69c3ab7d5114e728882233c7",
          "date": "2026-03-25T09:31:41.566Z"
        }
      ],
      "createdAt": "2026-03-25T09:17:38.274Z",
      "updatedAt": "2026-03-26T05:41:19.487Z",
      "__v": 1,
      "imgStore": "https://i.pinimg.com/1200x/51/68/74/51687455994ee0fb62ede998bf669515.jpg"
    },
    {
      "services": [],
      "avgRating": 0,
      "_id": "69c3a8b05dd7a9af406e25de",
      "name": "Melbourne Glam Nails",
      "address": "12 Collins St",
      "city": "Melbourne",
      "state": "VIC",
      "phone": "0398761234",
      "website": "https://melbourneglamnails.com.au",
      "btnBooking": "https://melbourneglamnails.com.au/booking",
      "reviews": [],
      "createdAt": "2026-03-25T09:19:44.341Z",
      "updatedAt": "2026-03-25T10:50:15.927Z",
      "__v": 0,
      "imgStore": "https://i.pinimg.com/1200x/ce/37/65/ce3765a0c6845e438489ee85cc3aa803.jpg"
    },
    {
      "services": [],
      "avgRating": 0,
      "_id": "69c3a8b75dd7a9af406e25e0",
      "name": "Brisbane Beauty Nails",
      "address": "78 Queen St",
      "city": "Brisbane",
      "state": "QLD",
      "phone": "0734567890",
      "website": "https://brisbanebeautynails.com.au",
      "btnBooking": "https://brisbanebeautynails.com.au/booking",
      "reviews": [],
      "createdAt": "2026-03-25T09:19:51.476Z",
      "updatedAt": "2026-03-25T10:51:03.967Z",
      "__v": 0,
      "imgStore": "https://i.pinimg.com/1200x/63/21/61/632161b498e3d867e1d9a34a925abb84.jpg"
    },
    {
      "services": [],
      "avgRating": 0,
      "_id": "69c3a8d65dd7a9af406e25e4",
      "name": "Adelaide Nail Lounge",
      "address": "10 Rundle Mall",
      "city": "Adelaide",
      "state": "SA",
      "phone": "0887654321",
      "website": "https://adelaidenaillounge.com.au",
      "btnBooking": "https://adelaidenaillounge.com.au/booking",
      "reviews": [],
      "createdAt": "2026-03-25T09:20:22.549Z",
      "updatedAt": "2026-03-25T10:51:47.843Z",
      "__v": 0,
      "imgStore": "https://i.pinimg.com/1200x/4e/40/65/4e4065a8d2851fe57c6962145bf68555.jpg"
    },
    {
      "_id": "69c3bb364e07cc87322ed198",
      "name": "Nail Paradise",
      "address": "123 Nguyễn Trãi",
      "city": "Đà Nẵng",
      "state": "Đà Nẵng",
      "phone": "0123456789",
      "website": "https://nailparadise.vn",
      "btnBooking": "https://nailparadise.vn/booking",
      "imgStore": "https://i.pinimg.com/1200x/b8/a9/e1/b8a9e1ed8cb721f8055fedd4bf7de945.jpg",
      "services": [
        "Manicure",
        "Pedicure",
        "Nail Art",
        "Gel Nails",
        "Spa Hand & Foot"
      ],
      "reviews": [
        {
          "user": "Alice",
          "rating": 5,
          "comment": "Dịch vụ tuyệt vời, rất hài lòng!",
          "_id": "69c3bb364e07cc87322ed199",
          "date": "2026-03-25T10:38:46.520Z"
        },
        {
          "user": "Bob",
          "rating": 4,
          "comment": "Nhân viên thân thiện, nhưng chờ hơi lâu.",
          "_id": "69c3bb364e07cc87322ed19a",
          "date": "2026-03-25T10:38:46.521Z"
        }
      ],
      "avgRating": 4.5,
      "createdAt": "2026-03-25T10:38:46.527Z",
      "updatedAt": "2026-03-25T10:38:46.527Z",
      "__v": 0
    },
    {
      "_id": "69c3f9454e07cc87322ed26e",
      "name": "Luxury Nails Studio",
      "address": "45 Lê Lợi",
      "city": "Đà Nẵng",
      "state": "Đà Nẵng",
      "phone": "0987654321",
      "website": "https://luxurynails.vn",
      "btnBooking": "https://luxurynails.vn/book",
      "imgStore": "https://i.pinimg.com/1200x/90/17/28/90172882f453035d93f1e436c2e15b17.jpg",
      "services": [
        "Manicure",
        "Pedicure",
        "Gel Polish",
        "Nail Art"
      ],
      "reviews": [
        {
          "user": "Jenny",
          "rating": 5,
          "comment": "Không gian sang trọng, làm rất kỹ!",
          "_id": "69c3f9454e07cc87322ed26f",
          "date": "2026-03-25T15:03:33.803Z"
        },
        {
          "user": "Tom",
          "rating": 4,
          "comment": "Dịch vụ tốt nhưng giá hơi cao.",
          "_id": "69c3f9454e07cc87322ed270",
          "date": "2026-03-25T15:03:33.804Z"
        }
      ],
      "avgRating": 4.5,
      "createdAt": "2026-03-25T15:03:33.817Z",
      "updatedAt": "2026-03-25T15:03:33.817Z",
      "__v": 0
    },
    {
      "_id": "69c3f97d4e07cc87322ed272",
      "name": "Pretty Nails & Spa",
      "address": "89 Trần Phú",
      "city": "Hà Nội",
      "state": "Hà Nội",
      "phone": "0911222333",
      "website": "https://prettynails.vn",
      "btnBooking": "https://prettynails.vn/booking",
      "imgStore": "https://i.pinimg.com/1200x/b1/17/ce/b117cef3a9dfec266e728107ea82afea.jpg",
      "services": [
        "Nail Art",
        "Acrylic Nails",
        "Spa Pedicure"
      ],
      "reviews": [
        {
          "user": "Linh",
          "rating": 5,
          "comment": "Nhân viên dễ thương, làm đẹp xuất sắc!",
          "_id": "69c3f97d4e07cc87322ed273",
          "date": "2026-03-25T15:04:29.053Z"
        },
        {
          "user": "Minh",
          "rating": 3,
          "comment": "Ổn nhưng hơi đông khách.",
          "_id": "69c3f97d4e07cc87322ed274",
          "date": "2026-03-25T15:04:29.053Z"
        },
        {
          "user": "Anna",
          "rating": 4,
          "comment": "Giá hợp lý, sẽ quay lại.",
          "_id": "69c3f97d4e07cc87322ed275",
          "date": "2026-03-25T15:04:29.053Z"
        }
      ],
      "avgRating": 4,
      "createdAt": "2026-03-25T15:04:29.053Z",
      "updatedAt": "2026-03-25T15:04:29.053Z",
      "__v": 0
    },
    {
      "_id": "69c4bcacf3e4df57f5db894f",
      "name": "An Hứa",
      "address": "29 Nguyễn Văn Linh",
      "city": "Da Nang, Vietnam",
      "state": "Đà Nẵng",
      "phone": "0795477317",
      "website": "https://www.figma.com/design/",
      "btnBooking": "https://www.figma.com/design/",
      "imgStore": "https://i.pinimg.com/736x/34/42/e1/3442e1354960adc2e5ea5fcc51539373.jpg",
      "services": [],
      "avgRating": 0,
      "reviews": [],
      "createdAt": "2026-03-26T04:57:16.558Z",
      "updatedAt": "2026-03-26T04:57:16.558Z",
      "__v": 0
    },
    {
      "_id": "69ca6fd22d811d70570ba872",
      "name": "Hair Salon A Doan Hoi An",
      "address": "29",
      "city": "08",
      "state": "",
      "phone": "0795477317",
      "website": "https://www.figma.com/design/",
      "btnBooking": "https://www.figma.com/design/",
      "imgStore": "https://i.pinimg.com/1200x/8c/90/98/8c9098feb4ee59445e240a348039dd8e.jpg",
      "services": [],
      "avgRating": 0,
      "reviews": [],
      "createdAt": "2026-03-30T12:42:59.015Z",
      "updatedAt": "2026-03-30T12:42:59.015Z",
      "__v": 0
    },
    {
      "_id": "69ca6fec2d811d70570ba874",
      "name": "Linh Vidal Hair Salon",
      "address": "29",
      "city": "08",
      "state": "",
      "phone": "0795477317",
      "website": "",
      "btnBooking": "",
      "imgStore": "https://i.pinimg.com/1200x/6e/81/9b/6e819b8ffe1bd20acab51102af86f0ba.jpg",
      "services": [],
      "avgRating": 0,
      "reviews": [],
      "createdAt": "2026-03-30T12:43:24.758Z",
      "updatedAt": "2026-03-30T12:43:24.758Z",
      "__v": 0
    },
    {
      "_id": "69cb12345d811d70570ba875",
      "name": "Sunset Nails & Spa",
      "address": "55 Trần Hưng Đạo",
      "city": "Hà Nội",
      "state": "Hà Nội",
      "phone": "0912345678",
      "website": "https://sunsetnails.vn",
      "btnBooking": "https://sunsetnails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/ed/ed/1b/eded1ba6284542b8a25f793ac1dba755.jpg",
      "services": ["Manicure", "Pedicure", "Gel Nails"],
      "avgRating": 4.5,
      "reviews": [
        { "user": "Mai", "rating": 5, "comment": "Nhân viên thân thiện, dịch vụ tốt!" }
      ],
      "createdAt": "2026-03-30T13:00:00.000Z",
      "updatedAt": "2026-03-30T13:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cb12345d811d70570ba876",
      "name": "Ocean Breeze Nails",
      "address": "77 Lê Duẩn",
      "city": "Đà Nẵng",
      "state": "Đà Nẵng",
      "phone": "0987654322",
      "website": "https://oceanbreeze.vn",
      "btnBooking": "https://oceanbreeze.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/af/b2/2f/afb22f53ce36cc085350e0ba9f96fff8.jpg",
      "services": ["Nail Art", "Spa Hand & Foot"],
      "avgRating": 4,
      "reviews": [
        { "user": "Hà", "rating": 4, "comment": "Không gian sạch sẽ, rất chuyên nghiệp." }
      ],
      "createdAt": "2026-03-30T13:05:00.000Z",
      "updatedAt": "2026-03-30T13:05:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cb12345d811d70570ba877",
      "name": "Pearl Nails Studio",
      "address": "10 Phạm Ngũ Lão",
      "city": "Hồ Chí Minh",
      "state": "HCM",
      "phone": "0901234567",
      "website": "https://pearlnails.vn",
      "btnBooking": "https://pearlnails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/09/25/ee/0925ee04f76e23c55f074e8daca9e805.jpg",
      "services": ["Acrylic Nails", "Manicure", "Pedicure"],
      "avgRating": 4.8,
      "reviews": [
        { "user": "An", "rating": 5, "comment": "Rất đẹp và sạch sẽ, nhân viên nhiệt tình!" }
      ],
      "createdAt": "2026-03-30T13:10:00.000Z",
      "updatedAt": "2026-03-30T13:10:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cb12345d811d70570ba878",
      "name": "Golden Touch Nails",
      "address": "22 Nguyễn Huệ",
      "city": "Hà Nội",
      "state": "Hà Nội",
      "phone": "0911223344",
      "website": "https://goldentouchnails.vn",
      "btnBooking": "https://goldentouchnails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/dd/0c/6e/dd0c6e447668fe392f62be33031ea167.jpg",
      "services": ["Gel Polish", "Nail Art"],
      "avgRating": 4.2,
      "reviews": [
        { "user": "Lan", "rating": 4, "comment": "Rất đẹp, giá cả hợp lý." }
      ],
      "createdAt": "2026-03-30T13:15:00.000Z",
      "updatedAt": "2026-03-30T13:15:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cb12345d811d70570ba879",
      "name": "Blossom Nails & Spa",
      "address": "35 Trần Phú",
      "city": "Đà Nẵng",
      "state": "Đà Nẵng",
      "phone": "0978123456",
      "website": "https://blossomnails.vn",
      "btnBooking": "https://blossomnails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/91/69/ee/9169ee8f2bf99e74f7bd2e6a243e2b13.jpg",
      "services": ["Manicure", "Pedicure", "Gel Polish", "Nail Art"],
      "avgRating": 4.7,
      "reviews": [
        { "user": "Hoa", "rating": 5, "comment": "Dịch vụ tốt, sẽ quay lại!" }
      ],
      "createdAt": "2026-03-30T13:20:00.000Z",
      "updatedAt": "2026-03-30T13:20:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cc12345d811d70570ba880",
      "name": "Crystal Nails Lounge",
      "address": "12 Hoàng Văn Thụ",
      "city": "Hồ Chí Minh",
      "state": "HCM",
      "phone": "0909876543",
      "website": "https://crystalnails.vn",
      "btnBooking": "https://crystalnails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/86/6d/08/866d08ea4262b95ea1488302274a8bc4.jpg",
      "services": ["Manicure", "Pedicure", "Gel Polish", "Nail Art"],
      "avgRating": 4.6,
      "reviews": [
        { "user": "Vy", "rating": 5, "comment": "Rất đẹp, nhân viên chuyên nghiệp!" }
      ],
      "createdAt": "2026-03-30T13:30:00.000Z",
      "updatedAt": "2026-03-30T13:30:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cc12345d811d70570ba881",
      "name": "Diamond Nails Studio",
      "address": "50 Nguyễn Thị Minh Khai",
      "city": "Hà Nội",
      "state": "Hà Nội",
      "phone": "0912345679",
      "website": "https://diamondnails.vn",
      "btnBooking": "https://diamondnails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/78/04/a7/7804a780c7966133df73e659714a07a8.jpg",
      "services": ["Acrylic Nails", "Gel Nails", "Spa Hand & Foot"],
      "avgRating": 4.8,
      "reviews": [
        { "user": "Hằng", "rating": 5, "comment": "Dịch vụ tuyệt vời, sẽ quay lại!" }
      ],
      "createdAt": "2026-03-30T13:35:00.000Z",
      "updatedAt": "2026-03-30T13:35:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cc12345d811d70570ba882",
      "name": "Luxe Nails & Spa",
      "address": "88 Trần Hưng Đạo",
      "city": "Đà Nẵng",
      "state": "Đà Nẵng",
      "phone": "0977123456",
      "website": "https://luxenails.vn",
      "btnBooking": "https://luxenails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/68/ff/2c/68ff2c200f7b0e1fc2dbe683e3d83082.jpg",
      "services": ["Manicure", "Pedicure", "Nail Art"],
      "avgRating": 4.4,
      "reviews": [
        { "user": "Quỳnh", "rating": 4, "comment": "Không gian đẹp, nhân viên thân thiện." }
      ],
      "createdAt": "2026-03-30T13:40:00.000Z",
      "updatedAt": "2026-03-30T13:40:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cc12345d811d70570ba883",
      "name": "Pearl Glow Nails",
      "address": "25 Lê Lợi",
      "city": "Hồ Chí Minh",
      "state": "HCM",
      "phone": "0908765432",
      "website": "https://pearlglownails.vn",
      "btnBooking": "https://pearlglownails.vn/booking",
      "imgStore": "https://i.pinimg.com/736x/96/ac/1c/96ac1c26576b67a3f63f90fcac2d892e.jpg",
      "services": ["Gel Polish", "Nail Art", "Manicure"],
      "avgRating": 4.7,
      "reviews": [
        { "user": "Trang", "rating": 5, "comment": "Dịch vụ tốt, rất đáng giá!" }
      ],
      "createdAt": "2026-03-30T13:45:00.000Z",
      "updatedAt": "2026-03-30T13:45:00.000Z",
      "__v": 0
    },
    {
      "_id": "69cc12345d811d70570ba884",
      "name": "Blissful Nails",
      "address": "60 Nguyễn Văn Cừ",
      "city": "Hà Nội",
      "state": "Hà Nội",
      "phone": "0911987654",
      "website": "https://blissfulnails.vn",
      "btnBooking": "https://blissfulnails.vn/booking",
      "imgStore": "https://i.pinimg.com/1200x/7f/13/24/7f1324a24fd933b0618ae24d8b5433ef.jpg",
      "services": ["Manicure", "Pedicure", "Spa Hand & Foot", "Gel Polish"],
      "avgRating": 4.5,
      "reviews": [
        { "user": "Hà", "rating": 5, "comment": "Rất chuyên nghiệp, không gian sang trọng!" }
      ],
      "createdAt": "2026-03-30T13:50:00.000Z",
      "updatedAt": "2026-03-30T13:50:00.000Z",
      "__v": 0
    }
  ];

  res.status(200).json(shops);
}