import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OurBrands from '../components/OurBrands'
import { Link } from 'react-router-dom'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {

                // const response = await fetch("http://localhost:5000/api/products")
                const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`)
                if (!response) {
                    throw new Error("Failed to fetch products")
                }
                const data = await response.json()
                setProducts(data)

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts()

    }, [])

    return (
        <div className=' '>
            <Navbar />

            {/* Hero section with Carousel */}
            <Hero />

            <OurBrands />

            <div className='grid sm:grid-cols-2 md:grid-3 lg:grid-cols-4 gap-8 p-10'>
                {
                    products.map((product) => (
                        <Link
                            key={product._id}
                            to={`/product/${product._id}`}
                            className=' group bg-white border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2'
                        >

                            {/* Product Image */}
                            <div className='w-full h-80'>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-opacity duration-300 rounded-md group-hover:opacity-90"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="p-5 text-center">
                                <h2 className='text-lg font-bold text-gray-900 group-hover:text-blue-600 transition'>{product.name}</h2>
                                <p className='text-sm text-gray-500 mt-2'>{product.description}</p>
                                <p className='text-xl font-semibold text-blue-600 mt-3'>${product.price}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <footer className="text-center text-black p-3 md:p-5 border border-gray-300 ">
                Designed and Developed with &#10084;
            </footer>
        </div>
    )
}

export default Home
