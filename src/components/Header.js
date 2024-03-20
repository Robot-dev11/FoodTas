import { useState } from "react"

const HeaderComponent = () => {

    const [loginLogoutButton, setloginLogoutButton] = useState('Login')
    /**
     * 
     * Definition of State React Variable -> Whenever state variable update, react triggers reconciliation cycle(
     * re-render the component with the help of diff algorithm)
     */
    return (
        <div className='header'>
            <a className='logo' href='#default'>FoodTas</a>
            <div className='nav-items'>
                <a className="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <button className="loginLogoutButton" onClick={() => {
                    loginLogoutButton === 'Login'? setloginLogoutButton("Logout"): setloginLogoutButton("Login");
                }}>{loginLogoutButton}</button>
            </div>
            
        </div> 
    )
}


export default HeaderComponent