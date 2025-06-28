/* Hero Images */
import heroBg1 from "../assets/background/bg-1.webp";
import heroBg2 from "../assets/background/bg-2.webp";
import heroBg3 from "../assets/background/bg-3.webp";

/* About Images */
import about1 from "../assets/about.webp";
import about2 from "../assets/about-1.webp";

/* Chefs Profile Images */
import chef1 from "../assets/chef/chef-1.webp";
import chef2 from "../assets/chef/chef-2.webp";
import chef3 from "../assets/chef/chef-3.webp";
import chef4 from "../assets/chef/chef-4.webp";

/* Menu Images */
import grilledBeef from "../assets/products/Grilled-Beef-Potatoes.png";
import garlicButterChicken from "../assets/products/Garlic-Butter-Chicken.png";
import applePie from "../assets/products/Apple-Pie-Ice-Cream.png";
import chocoCake from "../assets/products/Choco-Lava-Cake.png";
import paneerTikka from "../assets/products/Paneer-Tikka.png";
import greekSalad from "../assets/products/Greek-Salad.png";
import bbqRibs from "../assets/products/BBQ-Ribs-Slaw.png";
import berryPannaCotta from "../assets/products/Berry-Panna-Cotta.png";
import beefStroganoff from "../assets/products/Beef-Stroganoff.png";
import caramelFlan from "../assets/products/Caramel-Flan.png";
import chickenAlfredo from "../assets/products/Chicken-Alfredo.png";
import chickenTenders from "../assets/products/Chicken-Tenders.png";
import classicTirimaisu from "../assets/products/Classic-Tiramisu.png";
import herbGrilledFish from "../assets/products/Herb-Grilled-Fish.png";
import LoadedNachos from "../assets/products/Loaded-Nachos.png";
import spicyLambChops from "../assets/products/Spicy-Lamb-Chops.png";
import strawberryCheesecake from "../assets/products/Strawberry-Cheesecake.png";

/* Customers Profile Images */
import male1 from "../assets/customers/male1.jpg";
import male2 from "../assets/customers/male2.jpg";
import male3 from "../assets/customers/male3.jpg";
import female1 from "../assets/customers/female1.jpg";
import female2 from "../assets/customers/female2.jpg";
import female3 from "../assets/customers/female3.jpg";
import female4 from "../assets/customers/female4.jpg";

/* Blog Posts */
import blog1 from "../assets/blogs/image_1.webp";
import blog2 from "../assets/blogs/image_2.webp";
import blog3 from "../assets/blogs/image_3.webp";
import blog4 from "../assets/blogs/image_4.webp";
import blog5 from "../assets/blogs/image_5.webp";
import blog6 from "../assets/blogs/image_6.webp";

/* Instagram Gallery */
import insta1 from "../assets/instagram/insta-1.webp";
import insta2 from "../assets/instagram/insta-2.webp";
import insta3 from "../assets/instagram/insta-3.webp";
import insta4 from "../assets/instagram/insta-4.webp";
import insta5 from "../assets/instagram/insta-5.webp";
import insta6 from "../assets/instagram/insta-6.webp";

export const heroBg_images = [heroBg1, heroBg2, heroBg3];

export const about_images = {
  about1,
  about2,
};

export const Cateringservices = [
  {
    id: 1,
    title: "Business Meetings",
    description:
      "Impress your clients and elevate your corporate events with our premium business meeting catering. Whether it’s a morning briefing, an all-day conference, or a casual networking lunch, our curated menu and seamless service ensure a sophisticated dining experience that leaves a lasting impression.",
    icon: "fa-solid fa-briefcase",
  },
  {
    id: 2,
    title: "Birthday Party",
    description:
      "Make your birthday celebrations truly unforgettable! From delightful appetizers to decadent desserts, our catering team brings vibrant flavors and festive flair to every party. Whether it’s a kid’s bash or an elegant soirée, we handle the food so you can focus on the fun.",
    icon: "fa-solid fa-cake-candles",
  },
  {
    id: 3,
    title: "Wedding Party",
    description:
      "Celebrate love with a feast to remember. Our wedding catering is crafted with elegance and passion, offering customizable menus that suit your theme and delight your guests. From intimate receptions to grand banquets, we turn your dream wedding into a tasteful reality.",
    icon: "fa-solid fa-champagne-glasses",
  },
  {
    id: 4,
    title: "Family Gathering",
    description:
      "Bring your loved ones together over a table full of warmth, laughter, and unforgettable flavors. Our family gathering catering service is designed to make every reunion feel like a celebration, with homestyle dishes, cozy ambience, and attentive service that lets you focus on the people who matter most.",
    icon: "fas fa-user-friends",
  },
  {
    id: 5,
    title: "Anniversary Dinners",
    description:
      "Celebrate love, milestones, and cherished memories with an elegant dining experience crafted just for you. Our anniversary dinner service offers a romantic setting, customized menus, and a touch of sophistication—perfect for making your special day truly unforgettable.",
    icon: "fas fa-glass-cheers",
  },
];

export const chefs = [
  {
    id: 1,
    name: "John Smooth",
    profile: chef1,
    facebookHandle: "https://www.facebook.com/John Smooth",
    inatagramHandle: "https://www.instagram.com/John Smooth",
    twitterHandle: "https://www.x.com/John Smooth",
    role: "Restaurant Owner",
  },
  {
    id: 2,
    name: "Rebeca Welson",
    profile: chef2,
    facebookHandle: "https://www.facebook.com/Rebeca Welson",
    inatagramHandle: "https://www.instagram.com/Rebeca Welson",
    twitterHandle: "https://www.x.com/Rebeca Welson",
    role: "Head Chef",
  },
  {
    id: 3,
    name: "Kharl Branyt",
    profile: chef3,
    facebookHandle: "https://www.facebook.com/Kharl Branyt",
    inatagramHandle: "https://www.instagram.com/Kharl Branyt",
    twitterHandle: "https://www.x.com/Kharl Branyt",
    role: "Chef",
  },
  {
    id: 4,
    name: "Luke Simon",
    profile: chef4,
    facebookHandle: "https://www.facebook.com/Luke Simon",
    inatagramHandle: "https://www.instagram.com/Luke Simon",
    twitterHandle: "https://www.x.com/Luke Simon",
    role: "Chef",
  },
];

export const productsCategories = [
  "All",
  "Main Dish",
  "Side Dish",
  "Salad",
  "Desserts",
];

export const menuItems = [
  {
    id: 1,
    name: "Grilled Beef Potatoes",
    price: 18.99,
    discountPercent: 0,
    discountPrice: 18.99,
    image: grilledBeef,
    category: "Main Dish",
  },
  {
    id: 2,
    name: "Garlic Butter Chicken",
    price: 14.99,
    discountPercent: 0,
    discountPrice: 14.99,
    image: garlicButterChicken,
    category: "Main Dish",
  },
  {
    id: 3,
    name: "Apple Pie & Ice Cream",
    price: 7.49,
    discountPercent: 0,
    discountPrice: 7.49,
    image: applePie,
    category: "Dessert",
  },
  {
    id: 4,
    name: "Choco Lava Cake",
    price: 6.99,
    discountPercent: 0,
    discountPrice: 6.99,
    image: chocoCake,
    category: "Dessert",
  },
  {
    id: 5,
    name: "Paneer Tikka",
    price: 11.99,
    discountPercent: 0,
    discountPrice: 11.99,
    image: paneerTikka,
    category: "Main Dish",
  },
  {
    id: 6,
    name: "Greek Salad",
    price: 6.49,
    discountPercent: 0,
    discountPrice: 6.49,
    image: greekSalad,
    category: "Salad",
  },
  {
    id: 7,
    name: "BBQ Ribs & Slaw",
    price: 17.99,
    discountPercent: 0,
    discountPrice: 17.99,
    image: bbqRibs,
    category: "Main Dish",
  },
  {
    id: 8,
    name: "Berry Panna Cotta",
    price: 5.99,
    discountPercent: 0,
    discountPrice: 5.99,
    image: berryPannaCotta,
    category: "Dessert",
  },
  {
    id: 9,
    name: "Beef Stroganoff",
    price: 15.99,
    discountPercent: 0,
    discountPrice: 15.99,
    image: beefStroganoff,
    category: "Main Dish",
  },
  {
    id: 10,
    name: "Caramel Flan",
    price: 5.49,
    discountPercent: 0,
    discountPrice: 5.49,
    image: caramelFlan,
    category: "Dessert",
  },
  {
    id: 11,
    name: "Chicken Alfredo",
    price: 13.99,
    discountPercent: 0,
    discountPrice: 13.99,
    image: chickenAlfredo,
    category: "Main Dish",
  },
  {
    id: 12,
    name: "Spicy Lamb Chops",
    price: 19.99,
    discountPercent: 0,
    discountPrice: 19.99,
    image: spicyLambChops,
    category: "Main Dish",
  },
  {
    id: 13,
    name: "Herb Grilled Fish",
    price: 16.49,
    discountPercent: 0,
    discountPrice: 16.49,
    image: herbGrilledFish,
    category: "Main Dish",
  },
  {
    id: 14,
    name: "Chicken Tenders",
    price: 7.49,
    discountPercent: 0,
    discountPrice: 7.49,
    image: chickenTenders,
    category: "Side Dish",
  },
  {
    id: 15,
    name: "Classic Tiramisu",
    price: 6.49,
    discountPercent: 0,
    discountPrice: 6.49,
    image: classicTirimaisu,
    category: "Dessert",
  },
  {
    id: 16,
    name: "Loaded Nachos",
    price: 8.99,
    discountPercent: 0,
    discountPrice: 8.99,
    image: LoadedNachos,
    category: "Side Dish",
  },
  {
    id: 17,
    name: "Strawberry Cheesecake",
    price: 6.99,
    discountPercent: 0,
    discountPrice: 6.99,
    image: strawberryCheesecake,
    category: "Dessert",
  },
];

export const testimonies = [
  {
    id: 1,
    name: "Ayesha Khan",
    feedback:
      "Absolutely loved the Garlic Butter Chicken! Perfectly seasoned and juicy. Will definitely be ordering again.",
    avatar: female1,
  },
  {
    id: 2,
    name: "Ali Raza",
    feedback:
      "The desserts are to die for the choco lava cake was rich, warm, and so gooey. Best I’ve had in town!",
    avatar: male1,
  },
  {
    id: 3,
    name: "Sara Rehman",
    feedback:
      "Excellent service and cozy ambiance. The food was fresh and flavorful. Highly recommend the spicy wings.",
    avatar: female2,
  },
  {
    id: 4,
    name: "Usman Tariq",
    feedback:
      "Great variety on the menu and everything we tried was top quality. Special shoutout to the Apple Pie!",
    avatar: male2,
  },
  {
    id: 5,
    name: "Fatima Noor",
    feedback:
      "Loved the packaging and presentation. The food was warm and portions were generous.",
    avatar: female3,
  },
  {
    id: 6,
    name: "Ali Zafar",
    feedback:
      "I ordered the grilled beef potatoes and it was incredible! soft, juicy, and crispy.",
    avatar: male3,
  },
  {
    id: 7,
    name: "Hira Sheikh",
    feedback:
      "Amazing vegetarian options! The grilled veggie bowl was both healthy and tasty. 10/10.",
    avatar: female4,
  },
];

export const blogs = [
  {
    id: 1,
    title: "Sweet Moments: Why Our Desserts Steal the Spotlight",
    date: "2025-04-13",
    image: blog1,
    content: `
      <p>While our savory menu gets the applause, it’s our desserts that quietly win hearts.</p>
      <p>Whether it's the creamy <em>Velvet Chocolate Mousse</em> or the nostalgic <em>Warm Caramel Pudding</em>, we believe that a meal isn’t complete without a sweet finale.</p>
      <p>Our pastry chef, <strong>Sara</strong>, blends French techniques with local inspiration, using fresh ingredients and zero shortcuts. We also offer <strong>gluten-free</strong> and <strong>eggless</strong> options — because everyone deserves dessert.</p>
      <p><strong>Come hungry, but don’t forget to save room. Trust us.</strong></p>
    `,
  },
  {
    id: 2,
    title: "The Secret Behind Our Signature Grilled Flavors",
    date: "2025-04-10",
    image: blog2,
    content: `
      <p>At <strong>ForkCroft</strong>, grilling isn’t just cooking — it’s an art.</p>
      <p>Our chefs carefully marinate each cut of meat with a house-blend of spices passed down through generations. But what truly sets our grilled dishes apart is the way we sear them on open flames, locking in natural juices and smoky richness.</p>
      <p>From our famous <em>Grilled Beef with Potatoes</em> to <em>Spicy Chicken Skewers</em>, every bite reflects dedication and flavor. We don’t rush the process — slow grilling brings out unmatched tenderness and depth.</p>
      <p><strong>Next time you visit, ask us about the story behind your plate. Because every dish has one.</strong></p>
    `,
  },
  {
    id: 3,
    title: "Gather, Celebrate, Dine: Your Events, Our Tables",
    date: "2025-04-16",
    image: blog3,
    content: `
      <p>Planning a family dinner, anniversary, or corporate gathering? <strong>Let us make it unforgettable.</strong></p>
      <p>We offer cozy private dining areas and curated menus perfect for every occasion. Our team ensures that from the first greeting to the final toast, your event feels personal and special.</p>
      <p>Choose from pre-set packages or work with our chef to create a custom menu — featuring crowd favorites like:</p>
      <ul>
        <li>Creamy Alfredo Pasta</li>
        <li>Grilled Lamb Chops</li>
        <li>Tiramisu Cups</li>
      </ul>
      <p><strong>Your memories deserve a flavorful backdrop. Let’s plan something amazing together.</strong></p>
    `,
  },
  {
    id: 4,
    title: "Fresh from the Farm: Our Ingredient Promise",
    date: "2025-04-19",
    image: blog4,
    content: `
      <p>Every dish at <strong>ForkCroft</strong> starts with a commitment — to use the freshest, locally-sourced ingredients possible.</p>
      <p>We work closely with farmers and suppliers to ensure that our vegetables are crisp, meats are responsibly sourced, and dairy products are organic and pure.</p>
      <p>It’s a promise you can taste in every bite, whether it's a hearty <em>Garden Veggie Lasagna</em> or a refreshing <em>Seasonal Berry Salad</em>.</p>
      <p><strong>Real ingredients. Real flavors. Always.</strong></p>
    `,
  },
  {
    id: 5,
    title: "Beyond Food: Our Cozy Dining Experience",
    date: "2025-04-21",
    image: blog5,
    content: `
      <p>Food nourishes the body, but ambiance nourishes the soul.</p>
      <p>At <strong>ForkCroft</strong>, we designed our dining spaces to feel like a warm embrace — rustic interiors, soft lighting, and a soundtrack that soothes the heart.</p>
      <p>Whether you’re on a date night or a casual brunch with friends, we want every visit to feel like home.</p>
      <p><strong>Because the best meals are about more than just food — they're about how they make you feel.</strong></p>
    `,
  },
  {
    id: 6,
    title: "Chef’s Picks: What We're Loving This Season",
    date: "2025-04-24",
    image: blog6,
    content: `
      <p>Our chefs are always experimenting, tasting, and refining — and this season, here’s what they can’t get enough of:</p>
      <ul>
        <li><em>Spiced Pumpkin Risotto</em> — Creamy, rich, and subtly sweet.</li>
        <li><em>Honey-Glazed Duck Breast</em> — Perfectly seared with a citrus twist.</li>
        <li><em>Rosemary Garlic Focaccia</em> — Freshly baked daily.</li>
      </ul>
      <p>Stop by and ask for the Chef’s Special — it changes weekly, and it never disappoints.</p>
      <p><strong>New flavors await. Let your taste buds explore!</strong></p>
    `,
  },
];

export const instaGallery = [insta1, insta2, insta3, insta4, insta5, insta6];
