import React, { Component } from 'react';
import "./Projects.scss";
import Axios from 'axios';

class Projects extends Component {
    state = {
        repos: [],
        currentPage: 1,
        reposPerPage: 5,
    }

    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
        this.changePageToPrevious = this.changePageToPrevious.bind(this);
        this.changePageToNext = this.changePageToNext.bind(this);
    }

    componentDidMount() {
        Axios.get('https://api.github.com/users/MCgabi/repos').then(res => {
            const data = [];
            res.data.map(repo => data.push([repo.name, repo.html_url, repo.language, repo.stargazers_count, repo.description]));
            this.setState({repos: data});
        });    
    }

    changePageToNext() {
        const pages = [];
        for (let i = 1; i <= Math.ceil(this.state.repos.length / this.state.reposPerPage); i++) {
            pages.push(i);
        }

        const pageNumber = this.state.currentPage + 1;
        if(pageNumber <= pages.length) {
            this.setState({currentPage: pageNumber});
        }  
    }

    changePageToPrevious() {
        const pageNumber = this.state.currentPage - 1;

        if(pageNumber > 0) {
            this.setState({currentPage: pageNumber});
        }
    }

    changePage(e) {
        const pageNumber = e.target.value;

        if(pageNumber !== '') {
            this.setState({currentPage: pageNumber});
        }
    }

    render() {
    const { repos, currentPage, reposPerPage } = this.state;
    
    while(repos.length % this.state.reposPerPage !== 0) {
        this.state.repos.push([]);
    }

    const indexOfLastRepo = currentPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);

    return (
      <div>
        <h1 className="overview">My profession as Full-Stack developer:</h1>
        <p className="overview">JavaScript, Node.js, React.js, Express.js, Golang and many more!</p>
        <div className="projectsWrapper">
            <h1 className="textCenter">My projects:</h1>
            <table>
                <tbody tr="5">
                    <tr>
                        <td><div className="repoDescription boldFont">Name</div></td>
                        <td><div className="repoDescription boldFont">Language</div></td>
                        <td><div className="repoDescription boldFont">Stars</div></td>
                        <td><div className="repoDescription boldFont">Description</div></td>
                    </tr>
                    {currentRepos.map((repo, index) => (
                        <tr key={index}>
                            <td><a href={repo[1]} target="blank" className="repoLink"><div className="repoDescription">{repo[0] || '-'}</div></a></td>
                            <td><div className="repoDescription">{repo[2] || '-'}</div></td>
                            <td><div className="repoDescription">{repo[3] || '0'}</div></td>
                            <td><div className="repoDescription">{repo[4] || '-'}</div></td>
                        </tr>  
                    ))}
                </tbody>
            </table>
            <div className="numberSelectorWrapper">
                <button onClick={this.changePageToPrevious}>Previous</button>
                <button onClick={this.changePageToNext}>Next</button>
            </div>
        </div>
      </div>
    );
    }
}

export default Projects;
