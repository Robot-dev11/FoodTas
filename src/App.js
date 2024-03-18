import React  from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';
import Body  from './components/Body';







/**
 * 
 * Instead of putting {props} in functional component, 
 * use destructuring method like {property1 , property2, property3, ... , propertyn}
 * in functional component
 */







const AppLayout = () => {
    console.log(<Body />)
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