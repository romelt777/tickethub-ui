'use client'

import Link from 'next/link';
import { use, useState } from 'react'

const ConcertDetails = ({ concert }) => {
    const [quantity, setQuantity] = useState(1);


    return (
        <>
            <div className="bg-white rounded-2xl shadow-md p-6 max-w-xl w-full space-y-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Concert #{concert.id}
                </h1>
                <p className="text-gray-600">Date: {concert.date}</p>

                <div className="flex items-center gap-2">
                    <label htmlFor="quantity" className="text-gray-700 font-medium">
                        Quantity:
                    </label>
                    <select
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-300"
                    >
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </div>

                <Link
                    href={{
                        pathname: '/checkout',
                        query: {
                            id: concert.id,
                            date: concert.date,
                            quantity,
                        },
                    }}
                >
                    <button
                        type="button"
                        className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-5 rounded-lg transition"
                    >
                        Book Now
                    </button>
                </Link>
            </div>
        </>
    )
}

export default ConcertDetails