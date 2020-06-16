import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './RepositoryList.scss';
import { RepositoryItem } from '../RepositoryItem/RepositoryItem';
import { Spinner } from '../Spinner';

export const RepositoryList = (props) => {
	const [ repoList, setRepoList ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		(async () => {
			const { data } = await axios({
				url: 'https://api.github.com/users/ritathesaver/repos',
				method: 'GET'
			});

			setRepoList(data);
			setLoading(false);
		})();
	}, []);

	return (
		<div className="list">
			<div className="list_header">Repositories:</div>
			{loading && <Spinner />}
			{!loading &&
				repoList.map((item) => <RepositoryItem item={item} key={item.id} />)}
		</div>
	);
};
