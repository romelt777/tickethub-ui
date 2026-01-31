//define server actions
'use server'

//sending form to api
export const formSubmit = async (formData) => {
    const response = await fetch('https://04165-api-tickethub-fnh5frg4g3abcuhh.canadacentral-01.azurewebsites.net/api/ticketorder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        return ({
            status: response.status,
            message: 'Order submitted successfully!'
        });
    } else {
        return (
            {
                status: response.status,
                message: 'Error submitting order.'
            }
        );
    }
}