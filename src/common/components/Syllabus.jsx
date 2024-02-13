import React from 'react';
import Accordion from './Accordion';

// setting the base url
const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default async function Syllabus() {

    // Fetching data from the server
    const {ncert, maharashtra, punjab, foundations} = await getData();

    return (
        <div className="m-4 bg-gray-100 p-4">
            <Accordion
                title={ncert.data.title}
                content={ncert.data.topics}
            />
            <Accordion
                title={maharashtra.data.title}
                content={maharashtra.data.topics}
            />
            <Accordion
                title={punjab.data.title}
                content={punjab.data.topics}
            />
            <Accordion
                title={foundations.data.title}
                content={foundations.data.topics}
            />
        </div>
    );
}

// Function to fetch data from the server
async function getData() {
    // Fetching data from all the endpoints and also caching the data for 1 hour
    const res_ncert = await fetch(`${BaseUrl}/api/ncert`,{ next: { revalidate: 3600 } })
    const res_maharashtra = await fetch(`${BaseUrl}/api/maharashtra`,{ next: { revalidate: 3600 } })
    const res_punjab = await fetch(`${BaseUrl}/api/punjab`,{ next: { revalidate: 3600 } })
    const res_foundations = await fetch(`${BaseUrl}/api/foundation`,{ next: { revalidate: 3600 } })

    // going through the responses and check for errors
    if (!res_ncert.ok || !res_maharashtra.ok || !res_punjab.ok || !res_foundations.ok) {
        throw new Error('Failed to fetch data')
    }

    const data_ncert = await res_ncert.json()
    const data_maharashtra = await res_maharashtra.json()
    const data_punjab = await res_punjab.json()
    const data_foundations = await res_foundations.json()

    return {
        ncert: data_ncert,
        maharashtra: data_maharashtra,
        punjab: data_punjab,
        foundations: data_foundations
    }
}