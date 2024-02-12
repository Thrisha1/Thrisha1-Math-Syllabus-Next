import React from 'react';
import Accordion from './Accordion';
export default async function Syllabus () {
    const {ncert,maharashtra,punjab,foundations} = await getData();
    console.log(maharashtra,punjab,foundations);
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


async function getData() {
    const res_ncert = await fetch('http://localhost:3000/api/ncert')
    const res_maharashtra = await fetch('http://localhost:3000/api/maharashtra')
    const res_punjab = await fetch('http://localhost:3000/api/punjab')
    const res_foundations = await fetch('http://localhost:3000/api/foundation')

    if (!res_ncert.ok) {

        throw new Error('Failed to fetch ncert data')
    }
    if(!res_maharashtra.ok){
        throw new Error('Failed to fetch maharashtra data')
    }
    if(!res_punjab.ok){
        throw new Error('Failed to fetch punjab data')
    }
    if(!res_foundations.ok){
        throw new Error('Failed to fetch foundations data')
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