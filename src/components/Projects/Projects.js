import React, { Component } from 'react';
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
            <div className="container mx-auto px-6 py-16 pb-40">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-16">My projects:</h1>
                    <table className="text-left w-full border-collapse">
                        <thead>
                            <tr className="uppercase text-xs text-grey-dark border-b border-grey-light">
                                <th className="py-4 min-w-th max-w-th font-semibold">Name</th>
                                <th className="py-4 min-w-th max-w-th font-semibold">Language</th>
                                <th className="py-4 min-w-th max-w-th font-semibold">Stars</th>
                                <th className="py-4 min-w-th max-w-th font-semibold hidden sm:block">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentRepos.map((repo, index) => (
                                <tr className="border-b border-grey-light font-semibold text-xs text-grey-dark " key={index}>
                                    <th>
                                        <a href={repo[1]} target="blank">
                                            <div className="py-4 min-w-th max-w-th truncate">{repo[0] || '-'}</div>
                                        </a>
                                    </th>
                                    <th><div className="py-4 min-w-th max-w-th truncate">{repo[2] || '-'}</div></th>
                                    <th><div className="py-4 min-w-th max-w-th truncate">{repo[3] || '0'}</div></th>
                                    <td><div className="py-4 min-w-th max-w-th truncate hidden sm:block">{repo[4] || '-'}</div></td>
                                </tr>  
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-12">
                        <button onClick={this.changePageToPrevious} className="projectBtn bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l outline-none hover:bg-gray-400">Prev</button>
                        <button onClick={this.changePageToNext} className="projectBtn bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l outline-none hover:bg-gray-400">Next</button>
                    </div>
                </div>
            </div>
        );
    }
}
 

export default Projects;
