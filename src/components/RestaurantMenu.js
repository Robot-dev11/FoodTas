import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import 'dotenv/config';


const RestaurantMenu = () => {

    const { resId } = useParams()
    console.log(resId);

    const [resInfo, setResInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, []) // We are using empty array as dependency array for fetching one time data after rendering UI one time.

    

    const fetchData = async () => {
        let data = await fetch(process.env.RES_MENU+resId);
        let resInfo = await data.json();
        setResInfo(resInfo?.data?.cards)
    }

    if(resInfo === null) return <Shimmer />

    const {name, city, costForTwoMessage, cusinies, avgRating, id} = resInfo[2]?.card?.card?.info
    const recommendedCardElements = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log(recommendedCardElements)
    const mainCourse = resInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    return (
        <div>
            <h1>{name}</h1>
            <h2>{avgRating}: {costForTwoMessage}</h2>
            <h2>{cusinies}</h2>
            <h3>{recommendedCardElements.title}</h3>
            {recommendedCardElements.itemCards.map((card) => {
                return <li key={card.card.info.id}>{card.card.info.name} - Rs {card.card.info.price / 100}</li>
            })}
            <h3>{mainCourse.title}</h3>
            {mainCourse.itemCards.map((card) => {
                return <li key={card.card.info.id}>{card.card.info.name} - Rs {card.card.info.price / 100}</li>
            })}
        </div>
    )
}

export default RestaurantMenu;