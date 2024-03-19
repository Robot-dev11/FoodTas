import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';


const Body = () => {



    //State Variable which is come from react -> Super Powerful variable --> for that we use hooks
    const [listOfRestaurants, setListOfRestaurants] = useState([])


    useEffect(() => {
        fetchData();
    }, []) // <-- Dependency Array

    const fetchData = async () => {
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1485289&lng=77.3191471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurants.length === 0){
        return <Shimmer />
    }
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