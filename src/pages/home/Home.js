// styles
import './Home.css'
<<<<<<< Updated upstream
import React from 'react'

import Card from '../../components/Card'
import { Button } from '../../components/Button'


import CloudComputing from '../../assets/cloud_computing.svg'
 const cardInfo = {
  cardImage: CloudComputing,
    cardTitle: "Web App",
    cardContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam."
}
export default function Home() {
    return (
        <section className='hero'>

            <div className='region'>

            <div className='main-area'>
            <h1>Simplify your working with TeamIn</h1>
            </div>
         <div className='innertext'>
            <p>TeamIn Technologies (P) Ltd. is one of the most successful</p>
                <p>& diversified IT company.</p>
            </div>
            
          
        


         <div className='btn-1'>
             <Button onClick={() => { console.log("Clicked!");}}
             type = "button"
             buttonStyle = "btn--black--secondary"
             buttonSize= 'btn--medium'
            >
             About us
            </Button>

          <Button onClick={() => { console.log("Clicked!");}}
              type = "button"
             buttonStyle = 'btn--grey--first'
             buttonSize= 'btn-large'>
=======

 import React from 'react'
import Card from '../../components/Card'
 import { Button } from '../../components/Button'
import CloudComputing from '../../assets/cloud_computing.svg'
 const cardInfo = {
cardImage: CloudComputing,
    cardTitle: "Web App",
    cardContent: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam."
}

export default function Home() {
     return (
         <section className='hero'>
         <div className="region">
             <div className='main-area'>
           <h1>Simplify your working with TeamIn</h1>
            </div>
         <div className='innertext'>
            <p>TeamIn Technologies (P) Ltd. is one of the most successful & diversified IT company.</p>
            </div>
           


        <div className='btn-1'>

             <Button onClick={() => { console.log("Clicked!");}}
              type = "button"
             buttonStyle = "btn--black--secondary"
             buttonSize= 'btn--medium'
            >
           About us
            </Button>

          <Button onClick={() => { console.log("Clicked!");}}
             type = "button"
              buttonStyle = 'btn--grey--first'
          buttonSize= 'btn-large'>
>>>>>>> Stashed changes
             Services
            </Button>   
         </div>

<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
        </div>

        { <div className='card-list'>
                <Card cardInfo={cardInfo} />
                <Card cardInfo={cardInfo} />
                <Card cardInfo={cardInfo} />
            
            
            </div>
<<<<<<< Updated upstream
}

        </section>
    )
}
=======
            
        } 

        </section>
    )
 }
>>>>>>> Stashed changes
