import CheckoutForm from '@/components/CheckoutForm'
import { Suspense } from 'react';


const Checkout = async (params) => {
    const id = await params.id;
    const quantity = await params.quantity;
    const concertInfo = {
        id: id,
        quantity: quantity
    }

    return (
        <div>
            <Suspense fallback={<p>Loading checkout form...</p>}>
                <CheckoutForm concertInfo={concertInfo}></CheckoutForm>
            </Suspense>
        </div>
    )
}

export default Checkout

