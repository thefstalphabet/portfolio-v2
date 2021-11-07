import React from 'react';
import "./GithubGraph.css";
import GitHubCalendar from 'react-github-calendar';

function GithubGraph() {
    return (
        <div className="githubGraph">
            <h1>GitHub Contributions</h1>
            <GitHubCalendar
            className="graph"
            username="thefstalphabet"
            blockMargin={5}
            blockSize={20}
            color="#FFC312"
            fontSize={20}
            />
        </div>
    )
}

export default GithubGraph
