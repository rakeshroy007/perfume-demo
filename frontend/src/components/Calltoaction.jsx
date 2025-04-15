import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Calltoaction = () => {
    return (
        <div className="w-full flex bg-gradient-to-r from-blue-100 to-purple-200 text-center rounded-lg text-gray-900 py-3 px-6 shadow-md">
            <p className="text-sm flex-1 md:text-base font-medium tracking-wide">
                🌟 Limited Time Offer! Get up to{" "}
                <span className="font-bold text-blue-600">30% OFF</span> on our premium perfumes.
                <Link to="/" className="ml-2 inline-block bg-blue-600 text-white text-sm md:text-base px-3 py-1 rounded-lg font-semibold shadow hover:bg-blue-700 transition">
                    Shop Now
                </Link>
            </p>
            <Button variant={"destructive"} size="sm" className={"cursor-pointer"} >X</Button>

        </div>
    )
}

export default Calltoaction
