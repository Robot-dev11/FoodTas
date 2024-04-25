import React  from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';
import Body  from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

/**
 * 
 * Instead of putting {props} in functional component, 
 * use destructuring method like {property1 , property2, property3, ... , propertyn}
 * in functional component
 */


const AppLayout = () => {
    return (
        <div className='app'>
            <HeaderComponent />
            <Outlet />
        </div>
    )
}


const Router = createBrowserRouter([
    {
        path:'/',
        element: <AppLayout />,
        children: [
            {
                path:'/', // Basic routing
                element: <Body />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'contact-us',
                element: <Contact />
            },
            {
                path: 'restaurants/:resId', //Dynamic Routing and route with params
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

// rendering the component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Router} />);