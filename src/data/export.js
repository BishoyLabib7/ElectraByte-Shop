import earbud from "../assets/earbud.jpg";
import speakers from "../assets/speakers.jpg";
import watch from "../assets/watch.jpg";
import pendrive from "../assets/pendrive.jpg";
import laptop from "../assets/laptop.jpg";
import headset from "../assets/cat3.jpg";
import mouse from "../assets/mouse.jpg";
import camera from "../assets/camera.jpg";
import test1 from "../assets/test-1.jpg";
import test2 from "../assets/test-2.jpg";
import test3 from "../assets/test-3.jpg";
import test4 from "../assets/test-4.jpg";
import test5 from "../assets/test-5.jpg";

export const products = [
  {
    id: 1,
    img: earbud,
    category: "Earphones",
    name: "Smart Earbuds",
    price: 45.98,
    rate: 4,
    discout: 15,
    feedbacks: [
      {
        name: "Ana",
        rate: 3,
        text: "Great sound quality and comfortable fit! Perfect for my daily commute.",
      },
      {
        name: "John",
        rate: 4,
        text: "Battery life is impressive, lasts all day without needing a charge.",
      },
    ],
    details:
      "These smart earbuds offer exceptional sound quality with noise cancellation and a comfortable fit for all-day wear. Perfect for music lovers and commuters alike.",
  },
  {
    id: 2,
    img: speakers,
    category: "Speakers",
    name: "Bluetooth Speakers",
    price: 192.23,
    rate: 3,
    discout: 25,
    feedbacks: [
      {
        name: "Alice",
        rate: 4,
        text: "The sound is crystal clear and the bass is deep. Perfect for parties!",
      },
      {
        name: "Alex",
        rate: 2,
        text: "Compact design but powerful sound. Love the portability.",
      },
    ],
    details:
      "Experience high-quality sound with these Bluetooth speakers. Compact and portable, they deliver powerful audio for any occasion, whether at home or on the go.",
  },
  {
    id: 3,
    img: watch,
    category: "Smart Watch",
    name: "Smart Watch",
    price: 12.35,
    rate: 2,
    discout: 30,
    feedbacks: [
      {
        name: "Mike",
        rate: 5,
        text: "Stylish design and great features. Perfect for tracking my workouts!",
      },
      {
        name: "Sarah",
        rate: 3,
        text: "Good smartwatch, but the battery life could be better.",
      },
    ],
    details:
      "Stay connected and track your fitness with this stylish smart watch. It features a heart rate monitor, step counter, and notifications for calls and messages.",
  },
  {
    id: 4,
    img: pendrive,
    category: "Accessories",
    name: "Pendrive",
    price: 11.98,
    rate: 2,
    discout: 17,
    feedbacks: [
      {
        name: "Tom",
        rate: 4,
        text: "Fast data transfer speeds and reliable storage. Perfect for my needs.",
      },
      {
        name: "Emma",
        rate: 3,
        text: "Compact and easy to carry, but could use more storage capacity.",
      },
    ],
    details:
      "This high-speed pendrive offers reliable storage for all your important files. Its compact design makes it easy to carry, while the fast data transfer speeds ensure you can access your files quickly.",
  },
  {
    id: 5,
    img: laptop,
    category: "Computers Accessories",
    name: "Asus Tuff F15",
    price: 897.28,
    rate: 4,
    discout: 22,
    feedbacks: [
      {
        name: "Liam",
        rate: 5,
        text: "Powerful performance and sleek design. Perfect for gaming and work!",
      },
      {
        name: "Olivia",
        rate: 4,
        text: "Great laptop with excellent battery life. Highly recommend!",
      },
    ],
    details:
      "The Asus Tuff F15 is a powerful laptop designed for gamers and professionals alike. With its high-performance components and sleek design, it delivers exceptional performance for gaming, work, and entertainment.",
  },
  {
    id: 6,
    img: headset,
    category: "Music & Videos",
    name: "Wireless Headset",
    price: 67.88,
    rate: 3,
    discout: 10,
    feedbacks: [
      {
        name: "Sophia",
        rate: 4,
        text: "Comfortable fit and great sound quality. Perfect for long listening sessions.",
      },
      {
        name: "James",
        rate: 3,
        text: "Good wireless headset, but the range could be better.",
      },
    ],
    details:
      "Enjoy your favorite music and videos with this wireless headset. It features a comfortable fit, high-quality sound, and long battery life, making it perfect for extended listening sessions.",
  },
  {
    id: 7,
    img: mouse,
    category: "Computer Accessories",
    name: "Wireless Mouse",
    price: 32.78,
    rate: 3,
    discout: 15,
    feedbacks: [
      {
        name: "Noah",
        rate: 4,
        text: "Smooth performance and ergonomic design. Perfect for daily use.",
      },
      {
        name: "Ava",
        rate: 3,
        text: "Good wireless mouse, but the battery life could be longer.",
      },
    ],
    details:
      "This wireless mouse offers smooth performance and an ergonomic design for comfortable use. Its long battery life ensures you can work or play without interruptions.",
  },
  {
    id: 8,
    img: camera,
    category: "Films & Gaming",
    name: "DSLR 360 view",
    price: 145.28,
    rate: 4,
    discout: 35,
    feedbacks: [
      {
        name: "Ethan",
        rate: 5,
        text: "Amazing camera with stunning image quality. Perfect for photography enthusiasts!",
      },
      {
        name: "Mia",
        rate: 4,
        text: "Great DSLR camera, but the lens options could be better.",
      },
    ],
    details:
      "Capture stunning photos and videos with this DSLR camera. It features advanced imaging technology, interchangeable lenses, and a 360-degree view for versatile photography.",
  },
];

export const reviewdata = [
  {
    img: test1,
    name: "albert twinson",
    post: "store owner",
    para: "Electra Shop has an amazing selection of electronics and incredibly helpful staff. My new laptop is perfect, thanks to their guidance!",
  },
  {
    img: test2,
    name: "alex grind",
    post: "electrician",
    para: "Purchased a smart TV from Electra Shop; great price, fast delivery, and excellent quality. Highly recommend their service!",
  },
  {
    img: test3,
    name: "drew anderson",
    post: "android developer",
    para: "Finally, a local electronics store with knowledgeable pros! They answered all my tech questions thoroughly.",
  },
  {
    img: test4,
    name: "alex brown",
    post: "web developer",
    para: "Found a rare camera lens at Electra Shop for a fair price. Smooth online order and quick, secure delivery.",
  },
  {
    img: test5,
    name: "james bond",
    post: "army officer",
    para: "Their customer service is top-notch! Electra Shop went above and beyond helping me with an item.",
  },
];
