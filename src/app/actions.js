//define server actions
'use server'

//sending form to api
export const formSubmit = async (formData) => {
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if (response.ok) {
        alert('Order submitted successfully!');
    } else {
        alert('Error submitting order.');
    }
}