import React from 'react'


class UserClass extends React.Component {

    // to get the props we use the constructor.

    constructor(props){
        super(props); // to get access to the props anywhere in this class based component we use super keyword
        
        this.state = {
            count: 0,
        }
    }

    render() {
        // destructring the props
        const {name, location} = this.props;
        const { count } = this.state

        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>Increase Count</button>
                <h2>Name: {name}</h2>
                <p>Location: {location}</p>
                <p>Username: @_giriraj_soni</p>
            </div>
        )
    }
}


export default UserClass