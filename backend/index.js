import express from "express";
import connectToMongo  from './db.js';
import dotenv from 'dotenv';
import Product from "./models/Product.js";
import cors from "cors";


dotenv.config()

const app = express()

app.use(cors());

app.use(express.json())

connectToMongo()


// Get Products
app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Get Product by id: 
app.get("/product/:id", async(req, res) => {
    try {
        const { id } = req.params; // Extract ID from URL
        const product = await Product.findById(id)

        if(!product) {
            return res.status(404).json({message: "Product not found"})
        }

        res.json(product)

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
})

// Post comment :
app.post("/api/product/:id/reviews", async (req, res) => {
    try {
        const { id } = req.params;
        const { comment } = req.body;

        if(!comment.trim()) {
            return res.status(400).json({ message: "Comment cannot be empty" });
        }

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Add comment to the product's reviews array
        product.reviews.push(comment)
        await product.save()

        res.status(201).json({ message: "Review added successfully", reviews: product.reviews });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
})


app.listen(process.env.PORT, ()=> {
    console.log(`server is up and running on port ${process.env.PORT}`)
})