'use client'

import Link from 'next/link';
import { use, useState } from 'react'

const ConcertDetails = ({ concert }) => {
    const [quantity, setQuantity] = useState(1);


    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Concert #{concert.id}</h1>
                <p>Date: {concert.date}</p>
                <p>
                    <select
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border rounded-lg px-3 py-2"
                    >
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </p>


                <Link
                    href={{
                        pathname: "/checkout",
                        query: {
                            id: concert.id,
                            date: concert.date,
                            quantity,
                        },
                    }}
                >
                    <button type="submit" className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 border-white-700 rounded">
                        Book Now
                    </button>
                </Link>

            </div>
        </>
    )
}

export default ConcertDetails