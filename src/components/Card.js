// styles 
import './Card.css'

// image


import React from 'react'

export default function Card({ cardInfo }) {
    // remember to add a hover state effectr maybe
    return (
        <div className="card">
            <div className="card-image">
                <img src={cardInfo.cardImage} alt="" />
            </div>
            <div className="card-content">
                <h3 className="subhead">{cardInfo.cardTitle}</h3>
                <p className="card-text">
                    {cardInfo.cardContent}
                </p>
            </div>
        </div>
    )
}
