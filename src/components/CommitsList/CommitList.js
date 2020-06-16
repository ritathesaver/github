import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './CommitsList.scss';
import { CommitItem } from '../CommitItem/CommitItem';
import { Link } from 'react-router-dom';
import { Spinner } from '../Spinner';

export const CommitList = (props) => {
	const { repoId } = props.match.params;
	const [ commList, setCommList ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		(async () => {
			const { data } = await axios({
				url: `https://api.github.com/repos/ritathesaver/${repoId}/commits`,
				method: 'GET'
			});

			setCommList(data);
			setLoading(false);
		})();
	}, []);

	return (
		<div className="commit_list">
			<div className="commit_list_header">
				<span>
					<Link to="/">Repositories </Link>
				</span>
				/{' '}
				<span>
					<strong>{repoId}</strong> commits:
				</span>
			</div>
			{loading && <Spinner />}
			{!loading &&
				commList.map((item) => <CommitItem item={item} key={item.id} />)}
		</div>
	);
};
