// import { CDN_URL } from "../utils/constants";
import 'dotenv/config'


const styleCard = {
    backgroundColor: "#F0F0F0"
}

const RestaurantCard = (props) => { 
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating } = props?.resData?.info;
    return (
        <div className='res-card' style={styleCard}>
            <img
                className='res-logo'
                alt='res-logo'
                src={process.env.CDN_URL+cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
        </div> 
    )
}

export default RestaurantCard