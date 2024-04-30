import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'

const HeaderComponent = () => {

    const navigate = useNavigate()

    const [loginLogoutButton, setloginLogoutButton] = useState('Logout')
    /**
     * 
     * Definition of State React Variable -> Whenever state variable update, react triggers reconciliation cycle(
     * re-render the component with the help of diff algorithm)
     */

    const handleLoginLogout = () => {
        navigate("/login")
    }


    return (
        <div className='header'>
            <a className='logo' href='#default'>FoodTas</a>
            <div className='nav-items'>
                <ul>
                    <li> 
                        <Link to='/'>Home</Link>
                    </li>
                    <li> 
                        <Link to='/contact-us'>Contact</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <button className="loginLogoutButton" onClick={handleLoginLogout}>{loginLogoutButton}</button>
                </ul>
                
            </div>
            
        </div> 
    )
}


export default HeaderComponent