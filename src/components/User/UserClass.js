import React from 'react'
import { Octokit } from 'octokit';
import 'dotenv/config'

class UserClass extends React.Component {

    // to get the props we use the constructor.
    
    constructor(props){
        super(props); // to get access to the props anywhere in this class based component we use super keyword
        this.octokit = new Octokit({
            auth: process.env.GITHUB_TOKEN
        })
        this.state = {
            userInfo: {
                name: 'dummy name',
                followers: 0
            }
        }
    }


    async componentDidMount(){
        console.log("username: ", process.env.REACT_APP_GITHUB_USERNAME);
        const userData = await this.octokit.request('GET /users/{username}', {
            username: process.env.REACT_APP_GITHUB_USERNAME,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })

        this.setState({
            userInfo: userData
        }, () => {
            // Callback function to log the updated state
            console.log(this.state);
        });

        console.log(userData);
    }

    render() {
        // destructring the props
        const { location } = this.props;
        const userData = this.state.userInfo.data; // Get user data from state
        const name = userData?.name || 'Unknown'; // Use optional chaining and provide a default value if name is undefined
        const followers = userData?.followers || 0; // Use optional chaining and provide a default value if followers is undefined
        const avatarUrl = userData?.avatar_url; // Use optional chaining to access avatar_url
    
        return (
            <div className="user-card">
                <img src={avatarUrl} />
                <h2>Name: {name}</h2>
                <p>Location: {location}</p>
                <p>followers: {followers}</p>
                <p>Username: @_giriraj_soni</p>
            </div>
        )
    }
}


export default UserClass