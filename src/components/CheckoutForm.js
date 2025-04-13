'use client'

import { useEffect, useState } from 'react';
import { formSubmit } from '@/app/actions';
import { useSearchParams } from 'next/navigation';


const CheckoutForm = () => {
    //hold all data from the form fields
    const [formData, setFormData] = useState({
        ConcertId: '', Email: '',
        Name: '', Phone: '',
        Quantity: '', CreditCard: '',
        ExpirationDate: '', SecurityCode: '',
        Address: '', City: '',
        Province: '', PostalCode: '',
        Country: ''
    });

    const searchParams = useSearchParams();
    useEffect(() => {
        const id = searchParams.get('id');
        const quantity = searchParams.get('quantity');

        setFormData((prev) => ({
            ...prev,
            ConcertId: id || '',
            Quantity: quantity || '',
        }));
    }, [searchParams]);

    //hold the response from the api to display on webpage
    const [apiResponse, setApiResponse] = useState(null);


    //when form changes, the values are saved to the state.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        //stops form from reloading page.
        e.preventDefault();

        //send formdata to formsubmit, function from actionJS
        const response = await formSubmit(formData);
        //setting the response to state, will display on webpage
        setApiResponse(response);

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>
                            Concert ID:
                            <input
                                type="number"
                                name="ConcertId"
                                value={formData.ConcertId}
                                readOnly
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="Name"
                                value={formData.Name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="Phone"
                                value={formData.Phone}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Quantity:
                            <input
                                type="number"
                                name="Quantity"
                                value={formData.Quantity}
                                readOnly
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Credit Card:
                            <input
                                type="text"
                                name="CreditCard"
                                value={formData.CreditCard}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Expiration Date (MM/YY):
                            <input
                                type="text"
                                name="ExpirationDate"
                                value={formData.ExpirationDate}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Security Code:
                            <input
                                type="text"
                                name="SecurityCode"
                                value={formData.SecurityCode}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Address:
                            <input
                                type="text"
                                name="Address"
                                value={formData.Address}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            City:
                            <input
                                type="text"
                                name="City"
                                value={formData.City}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Province:
                            <input
                                type="text"
                                name="Province"
                                value={formData.Province}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Postal Code:
                            <input
                                type="text"
                                name="PostalCode"
                                value={formData.PostalCode}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Country:
                            <input
                                type="text"
                                name="Country"
                                value={formData.Country}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <button type="submit" className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 border-white-700 rounded">
                        Submit Order
                    </button>
                </div>
            </form>
            <div>
                {
                    apiResponse &&
                    (
                        <p>{apiResponse}</p>
                    )
                }
            </div>
        </>

    );
}

export default CheckoutForm;