import mongoose from "mongoose";
import Product from "../models/Product.js"; 

mongoose.connect("mongodb_URI", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const sampleProducts = [
    {
        "name": "Royal Oud",
        "description": "A luxurious blend of oud and floral notes, perfect for evening wear.",
        "price": 120,
        "category": "Luxury",
        "image": "https://images.unsplash.com/photo-1615160460366-2c9a41771b51?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcmZ1bWUlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
        "sizes": ["30ml", "100ml"],
        "reviews": ["Absolutely stunning scent!", "A bit strong for me, but lasts all day."],
        "images": [
            "/images/royal-oud-1.webp",
            "/images/royal-oud-2.webp",
            "/images/royal-oud-3.webp",
            "/images/royal-oud-4.webp"
        ]
    },
    {
        "name": "Citrus Bloom",
        "description": "A fresh and zesty fragrance with citrus and floral undertones.",
        "price": 75,
        "category": "Casual",
        "image": "https://img.freepik.com/premium-photo/bottle-perfume-square-bottle-naturally-growing-fragrance_943281-56525.jpg",
        "sizes": ["50ml", "100ml"],
        "reviews": ["Very refreshing, perfect for summer!", "My go-to daily perfume."],
        "images": [
            "/images/citrus-bloom-1.webp",
            "/images/citrus-bloom-2.webp",
            "/images/citrus-bloom-3.webp",
            "/images/citrus-bloom-4.webp"
        ]
    },
    {
        "name": "Midnight Musk",
        "description": "A seductive blend of musk and vanilla with a hint of spice.",
        "price": 95,
        "category": "Evening",
        "image": "https://ajmalperfumeus.com/cdn/shop/articles/AdobeStock_773863637_300x300.jpg?v=1724362421",
        "sizes": ["30ml", "50ml", "100ml"],
        "reviews": ["Mysterious and bold, I love it!", "A great unisex scent."],
        "images": [
            "/images/midnight-musk-1.webp",
            "/images/midnight-musk-2.webp",
            "/images/midnight-musk-3.webp",
            "/images/midnight-musk-4.webp"
        ]
    },
    {
        "name": "Ocean Breeze",
        "description": "A crisp and invigorating scent inspired by the ocean.",
        "price": 85,
        "category": "Fresh",
        "image": "https://rukminim2.flixcart.com/www/312/339/promos/04/09/2023/7b1e4216-27ca-4f28-ad39-ce1a44f5704f.jpg?q=90",
        "sizes": ["50ml", "100ml"],
        "reviews": ["So fresh and clean!", "It reminds me of the beach."],
        "images": [
            "/images/ocean-breeze-1.webp",
            "/images/ocean-breeze-2.webp",
            "/images/ocean-breeze-3.webp",
            "/images/ocean-breeze-4.webp"
        ]
    }
];

const seedDatabase = async () => {
    try {
        await Product.deleteMany(); // Clear existing products
        await Product.insertMany(sampleProducts);
        console.log("Sample data inserted successfully!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting sample data:", error);
    }
};

seedDatabase();
