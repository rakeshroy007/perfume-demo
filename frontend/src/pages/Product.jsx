import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null)
    const [newReview, setNewReview] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newReview.trim()) return

        // Send review to Backend
        try {
            // const response = await fetch(`http://localhost:5000/api/product/${product._id}/reviews`, {
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/product/${product._id}/reviews`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ comment: newReview })
            })

            if (!response.ok) {
                throw new Error("Failed to post review");
            }
            const data = await response.json();

            setProduct((prev) => ({ ...prev, reviews: [...prev.reviews, newReview] }))
            setNewReview(""); // Clear input
        } catch (error) {
            console.error("Error posting review:", error);
        }
    }


    useEffect(() => {
        const fetchProduct = async () => {
            // const response = await fetch(`http://localhost:5000/product/${id}`)
            const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/product/${id}`)
            if (!response) {
                throw new Error("Failed to fetch product")
            }
            const data = await response.json()
            setProduct(data)
        }

        fetchProduct()

    }, [id])


    if (!product) return <p>Loading...</p>;

    return (
        <div className='p-10'>

            {/* Product Image */}
            <div className='w-[75%] mx-auto flex items-center overflow-hidden shadow-lg hover:shadow-gray-600 transition-shadow duration-300 rounded-lg'>
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-130 object-cover rounded-lg transition duration-300 hover:scale-105"
                />
            </div>

            {/* Product Details */}
            <div className='mt-6'>
                <h1 className='text-3xl font-bold text-gray-900'>{product.name}</h1>
                <p className='text-gray-600 text-lg mt-3'>{product.description}</p>

                {/* Price & CTA */}
                <div className="flex justify-between items-center mt-6">
                    <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 cursor-pointer transition">
                        Add to Cart
                    </button>
                </div>

                <p className="text-gray-700 mt-4">
                    <span className="font-semibold">Available Sizes:</span> {product.sizes.join(", ")}
                </p>

            </div>

            {/* Comment Section */}
            <div className='mt-8'>
                <h2 className="text-2xl font-semibold text-gray-900">Customer Reviews</h2>
                {product.reviews.length > 0 ? (
                    <div className="mt-4 space-y-4">
                        {product.reviews.map((comment, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-700">{comment}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500 mt-4">No reviews yet. Be the first to leave a review!</p>
                )}
            </div>

            {/* Review Form */}
            <div className='mt-8'>
                <h2 className="text-2xl font-semibold text-gray-900">Leave a Review</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <textarea
                        className="w-full text-slate-800 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows="4"
                        placeholder="Write your review here..."
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 cursor-pointer text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
                    >
                        Submit Review
                    </button>
                </form>
            </div>

            {/* Image Galary */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Image Gallery</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {product.images.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={img}
                                alt={`Product Image ${index + 1}`}
                                className="w-full h-85 object-cover rounded-lg hover:scale-105 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <footer className="text-center text-black mt-9">
                Designed and Developed with &#10084;
            </footer>
        </div>
        
    )
}

export default Product
