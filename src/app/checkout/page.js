import CheckoutForm from '@/components/CheckoutForm'



const Checkout = async (params) => {
    const id = await params.id;
    const quantity = await params.quantity;
    const concertInfo = {
        id: id,
        quantity: quantity
    }

    return (
        <div>
            <CheckoutForm concertInfo={concertInfo}></CheckoutForm>
        </div>
    )
}

export default Checkout

