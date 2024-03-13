import React  from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants } from './Data';


/**
 * Components Structure
 * 
 * Header
 *  - Logo
 *  - Nav Items
 * 
 * Body
 *  - Search
 *  - Restaurant Card
 *      - a Text-Based logo
 *      - Name of Restaurant, Star Rating, cusinie, Delivery Time 
 * 
 * Footer
 *  - Copyright
 *  - Links
 *  - Addresses
 *  - Contact
 */

const styleCard = {
    backgroundColor: "#F0F0F0"
}


const HeaderComponent = () => {
    return (
        <div className='header'>
            <a className='logo' href='#default'>FoodTas</a>
            <input type="text" placeholder="Search.." />
            <div className='nav-items'>
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div> 
    )
}



/**
 * 
 * Instead of putting {props} in functional component, 
 * use destructuring method like {property1 , property2, property3, ... , propertyn}
 * in functional component
 */
const RestaurantCard = (props) => { 
    console.log(props);
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating } = props?.resData?.info;
    return (
        <div className='res-card' style={styleCard}>
            <img
                className='res-logo'
                alt='res-logo'
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div> 
    )
}




const Body = () => {
    return (
        <div className='body'>
            <div className='res-container'>
                {Restaurants.map((resInfo) => {
                    return<RestaurantCard key={resInfo.info.id} resData={resInfo}/>
                })}
                
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <HeaderComponent />
            <Body />
        </div>
    )
}

// rendering the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);