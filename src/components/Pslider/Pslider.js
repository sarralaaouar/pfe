import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css"
import Bestp from './Bestp';

export default function Pslider () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024},
          items: 3
        },
        desktop: {
          breakpoint: { max: 1024, min: 800 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const productData = [
        {
            id:1,
            imageurl:"https://cdn.chec.io/merchants/50125/assets/FfFeab4DftZQy3PK%7CDesign-sans-titre-43-570x570.png",
            name :"MICKEY & MINNIE – Coffret Soins",
            price:"$15.30",
            description:"Un coffret cadeau en forme de cœur rempli d’un gel douche, d’une houppette pour le corps et d’une lotion hydratante pour le corps, parfumés à la framboise et au miellat."

        } ,

        {
            id:2,
            imageurl:"https://cdn.chec.io/merchants/50125/assets/AxnPTldKiyPyM0gc%7CMICKEY-Trousse-a-cosmetiques-570x570.png",
            name :"MICKEY – Trousse à cosmétiques",
            price:"$15.30",
            description:"Trousse à cosmétiques Mickey Mouse."

        } ,

        {
            id:3,
            imageurl:"https://cdn.chec.io/merchants/50125/assets/QMAtZ75HJjiJJ1Rh%7Cla%20belle.png",
            name :"LA BELLE ET LA BETE – Tasse Et Infuseur À Thé",
            price:"$7.90",
            description:"Tasse de 300ml"

        } ,

        {
            id:4,
            imageurl:"https://cdn.chec.io/merchants/50125/assets/JXXpStyS8c53gjkK%7Ccb8cdbb1-55c5-41f0-9d3e-98afc9070f99-570x570.png",
            name :"MINNIE – Lingettes Nettoyantes ",
            price:"$3.00",
            description:"10 mini lingettes humides rafraîchissantes dans un pack refermable Minnie Mouse."

        } ,

        {
            id:4,
            imageurl:"https://cdn.chec.io/merchants/50125/assets/ZWArtFX9JphsgLac%7CDesign-sans-titre-41%20(1).png",
            name :"JASMINE – Masque Pour Le Visage ",
            price:"$3.40",
            description:"10 mini lingettes humides rafraîchissantes dans un pack refermable Minnie Mouse."

        } ,

        
      ]

        const product= productData.map(items=>( <Bestp 
            name = {items.name} 
            url={items.imageurl} 
            price={items.price}
            description={items.description}/> 
       
       ))
  return (
    <div>
        <h1>Our Best seller</h1>
      <Carousel responsive={responsive}>
         {product}
         
      </Carousel>;
    </div>
  )
}

