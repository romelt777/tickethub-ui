const ConcertDetails = ({ concert }) => {
    return (
        <>
            <div className="p-4">
                <h1 className="text-2xl font-bold">Concert #{concert.id}</h1>
                <p>Date: {concert.date}</p>
            </div>
        </>
    )
}

export default ConcertDetails