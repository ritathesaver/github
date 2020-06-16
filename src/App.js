import React from 'react';
import { RepositoryList } from './components/RepositoryList';
import { CommitList } from './components/CommitsList/CommitList';
import './App.scss';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route path="/commit-list/:repoId" component={CommitList} />
					<Route path="/" component={RepositoryList} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
