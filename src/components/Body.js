import { Restaurants } from '../services/Data';
import RestaurantCard from './RestaurantCard';
import { useState } from 'react';


const Body = () => {



    //State Variable which is come from react -> Super Powerful variable --> for that we use hooks

    const [listOfRestaurants, setListOfRestaurants] = useState(Restaurants)


    // Normal JS Variable
    // let listOfRestaurants = [
    //     {
    //         "info": {
    //             "id": "143631",
    //             "name": "Shri sundha Mateshwari Bhojnalay",
    //             "cloudinaryImageId": "zbvdefwf4gzlwalu64v3",
    //             "locality": "Bhagat Singh Road ",
    //             "areaName": "Harsh Nagar",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "Rajasthani",
    //                 "Thalis"
    //             ],
    //             "avgRating": 4.2,
    //             "veg": true
    //         }
    //     },
    //     {
    //         "info": {
    //             "id": "143632",
    //             "name": "Dominoes",
    //             "cloudinaryImageId": "zbvdefwf4gzlwalu64v3",
    //             "locality": "Bhagat Singh Road ",
    //             "areaName": "Harsh Nagar",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //                 "Pizza",
    //                 "Burger"
    //             ],
    //             "avgRating": 3.8,
    //             "veg": true
    //         }
    //     }
    // ]  
    return (
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn' onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                    setListOfRestaurants(filteredRestaurants)
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {listOfRestaurants.map((resInfo) => {
                    return <RestaurantCard key={resInfo.info.id} resData={resInfo}/>
                })}
            </div>
        </div>
    )
}

export default Body