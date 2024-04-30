import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';


const Body = () => {



    //State Variable which is come from react -> Super Powerful variable --> for that we use hooks
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState()
    const [searchText, setSearchText] = useState("");

    /**
     * If no dependency array, useEffect is called on every render
     * If the dependency array is empty [] then useEffect is called on intial render and just once
     * If the dependency array is [listOfRestaurants] => called every time listOfRestaurant is updated
     */
    useEffect(() => {
        fetchData();
    }, []) // <-- Dependency Array --> changes the behaviour of rendering

    function search(e){
        e.preventDefault();
        setSearchText(e.target.value);

        const filteredRestaurants = listOfRestaurants.filter((restaurant) => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
        });

        setFilteredRestaurants(filteredRestaurants)
    }

    const fetchData = async () => {
        let data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1485289&lng=77.3191471&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        let json = await data.json();
        console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfRestaurants.length === 0){
        return <Shimmer />
    }

    return (
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type="text" placeholder="Search.." value={searchText} onChange={search} />
                </div>
                <button className='filter-btn' onClick={() => {
                    const filteredRestaurants = listOfRestaurants.filter((res) => res.info.avgRating > 4)
                    setListOfRestaurants(filteredRestaurants)
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {filteredRestaurants.map((resInfo) => {
                    return <Link to={'/restaurants/'+resInfo.info.id}><RestaurantCard key={resInfo.info.id} resData={resInfo}/></Link>
                })}
            </div>
        </div>
    )
}

export default Body