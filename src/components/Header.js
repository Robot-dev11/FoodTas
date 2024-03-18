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


export default HeaderComponent