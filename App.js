import React  from 'react';
import ReactDOM from 'react-dom/client';

// few more important things from react.

// will the order of js file matter --> it will matter cdn link should be have priority first

// React Element is an object => HTMLElement 
// creating component

//JSX- HTML like syntax or XML-like-syntax
// JSX transpiled before it reaches the JS Engine - Parcel - Babel
// JSX => Babel Transpiles it to React.createELement => HTML Element
// Babel is convert your JSX to the HTML Element
// It is also create object
// creating the root for DOM

//React functional Component
// const Title = () => (
//     <h1 className='head' tabIndex="5">
//         Namaste React using JSX
//     </h1>
// )

// const Footer = () => {
//     return <h1>This is footer</h1>
// }

// const img = <img src='https://picsum.photos/id/237/200/300'></img>

// creating UI with React Element tool
// const heading  = React.createElement('div', 
//     {className: 'title'},
//     [React.createElement('h1', {
//         id: 'heading'
//     }, 'This is heading 1'),
//     React.createElement('h2', {
//         id: 'heading2'
//     }, 'This is Heading 2'),
//     React.createElement('h3', {
//         id: 'heading3'
//     }, 'This is heading 3')]
//     )

// console.log(heading)


// creating UI with element in JSX
// const head1 = <h1 className='heading'>This is heading1</h1>
// const head2 = <h2 className='heading2'>This is heading2</h2>
// const head3 = <h3 className='heading3'>This is heading3</h3>



// const heading = (
//     <div className='title'>
//         {head1}
//         {head2}
//         {head3}
//     </div>
// )

// component composition
// const HeadingComponent = () => (
//     this is component composition
//     <div id='container'>
//         <Title /> 
//         <h1 className='heading'>Namaste React Functional Component</h1>
//         {img}
//         <Footer />
//     </div>  
    
// )


// Creating Header Component as assignment

const logo = (
    <a href='#default' className='logo'>Portfolio</a>
)


const SearchBar = () => {
    return(
        <input type='text' placeholder='Search' className='searchbar'/>
    )
}

const userLogo = (
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
        width="30.000000pt" height="30.000000pt" viewBox="0 0 512.000000 512.000000"
        preserveAspectRatio="xMidYMid meet">

        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M2415 4438 c-425 -47 -806 -359 -944 -773 -179 -536 50 -1111 552
        -1386 l49 -27 -53 -17 c-78 -25 -251 -108 -328 -156 -270 -171 -473 -393 -614
        -675 -90 -180 -153 -404 -164 -584 -5 -94 -5 -95 22 -122 57 -57 147 -23 159
        60 3 20 8 64 11 97 4 33 13 89 21 125 106 471 427 857 869 1041 723 302 1555
        -17 1890 -725 78 -164 120 -317 140 -509 8 -75 41 -117 92 -117 45 0 69 14 88
        50 13 25 14 44 5 122 -64 562 -394 1043 -890 1297 -63 32 -150 71 -192 86
        l-78 28 76 43 c651 371 783 1249 269 1793 -251 266 -604 392 -980 349z m312
        -193 c213 -40 379 -130 525 -283 119 -125 196 -259 240 -420 19 -65 22 -104
        22 -247 0 -156 -3 -177 -28 -259 -118 -388 -445 -660 -834 -694 -484 -42 -907
        262 -1028 738 -25 100 -26 333 -1 434 109 437 489 742 928 745 53 1 133 -6
        176 -14z"/>
        </g>
    </svg>
)
const HeaderComponent = () => (
    <header className='header'>
        {logo}
        <div className="header-middle">
            <SearchBar />
            {userLogo}
        </div>
    </header>
)

const root = ReactDOM.createRoot(document.getElementById('root'));

// <HeadingComponet> babel sees angular bracket '<' and then it sees like as a component

// rendering the component
root.render(<HeaderComponent/>);
// it will replace the object by heading

