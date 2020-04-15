import React, { Component } from 'react';

class SingleUser extends Component {
    state = {
        user: " "
    }

    loadUser = async () => {
        const { username } = this.props.match.params;
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        return data; 
    }

    componentDidMount = async () => {
        const userData = await this.loadUser();
        this.setState({ 
           user : userData 
        })
    }

    render() {
        const { user } = this.state;
        return(
            <div>
                <h2>{user.login}</h2>
                <img src={user.avatar_url} alt="User Pic"></img>
                <br></br>
                <a href={`/users/${user.login}/repos`} target="_blank" rel="noopener noreferrer" key={user.id}>Click Here to View Repos</a>
            </div>
        )
    }
};

export default SingleUser;