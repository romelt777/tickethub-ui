import ConcertDetails from "@/components/ConcertDetails";

const Concert = async ({ params, searchParams }) => {
    const id = params.id;
    const date = await searchParams.date;
    const quantity = await searchParams.quantity;

    const concert = {
        id: id,
        date: date,
        quantity: quantity

    }

    return (
        <>
            <ConcertDetails concert={concert}></ConcertDetails>
        </>
    )
}

export default Concert