import React, { Component } from 'react';
import Axios from 'axios';

class Table extends Component {
    state = {
        repos: [],
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Axios.get('https://api.github.com/users/MCgabi/repos').then(res => {
            const data = [];

            res.data.sort((a, b) => b.id - a.id);
            res.data.sort((a, b) => b.stargazers_count - a.stargazers_count);
            const filteredRepos = res.data.slice(0, 5)

            filteredRepos.map(repo => data.push([repo.name, repo.html_url, repo.language, repo.stargazers_count]));
            this.setState({repos: data});
        });    
    }

    render() {
        const { repos } = this.state;

        return (
            <table className="project__table" margin="10">
                <tr className="project__table__head">
                    <th className="project__table__head__item">Name</th>
                    <th className="project__table__head__item">Language</th>
                    <th className="project__table__head__item">Stars</th>
                </tr>

                {repos.map((repo, index) => {
                    if(repo[0].length > 10) {
                        repo[0] = repo[0].slice(0, 10) + '..'
                    }

                    return (
                        <tr className="project__table__body" key={index}>
                            <th className="project__table__body__item">
                                <a href={repo[1]} target="blank">
                                    {repo[0] || '-'}
                                </a>
                            </th>
                            <th className="project__table__body__item">{repo[2] || '-'}</th>
                            <th className="project__table__body__item">{repo[3] || '0'}</th>
                        </tr>  
                    )
                })}
            </table>
        );
    }
}

export default Table;