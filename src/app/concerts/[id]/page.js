import ConcertDetails from "@/components/ConcertDetails";

const Concert = async ({ params, searchParams }) => {

    const concert = {
        id: params.id,
        date: searchParams.date
    }

    return (
        <>
            <ConcertDetails concert={concert}></ConcertDetails>
        </>
    )
}

export default Concert