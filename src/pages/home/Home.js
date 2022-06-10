// styles
import './Home.css'

import React from 'react'
import Card from '../../components/Card'
import CloudComputing from '../../assets/cloud_computing.svg'
// const cardInfo = {
//     cardImage: CloudComputing,
//     cardTitle: "Web App",
//     cardContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam."
// }
export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            {/* <div className='card-list'>
                <Card cardInfo={cardInfo} />
                <Card cardInfo={cardInfo} />
                <Card cardInfo={cardInfo} />
            </div> */}
        </div>
    )
}
