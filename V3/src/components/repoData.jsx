import React, { Component } from 'react';

class RepoData extends Component {
    state = {
        repo: " "
    }

    loadRepo = async () => {
        const { username } = this.props.match.params;
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        return data;
    };

    componentDidMount = async () => {
        const userRepo = await this.loadRepo();
        this.setState({
            repo: userRepo
        })
    }

    render() {
        const { repo } = this.state;
        return (
            <div>
                <p>{repo.description}</p>
            </div>
            
        )
    }
};

export default RepoData;