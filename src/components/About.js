import React from 'react'
import UserClass from "./User/UserClass"

class About extends React.Component {
    
    constructor(props){
        super(props)
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent Component Did Mount")
    }

    render(){
        console.log("Parent Render")
        return (
            <div>
                <h1>About Us Page</h1>
                <UserClass name={"First Class"} location={"Nanded"} />
            </div>
        )
    }

}

export default About