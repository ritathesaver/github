import React from 'react';
import './RepositoryItem.scss';
import { ReactComponent as LinkSvg } from '../../assets/sign.svg';
import { Link } from 'react-router-dom';

export const RepositoryItem = ({ item = {} }) => {
	return (
		<div>
			<div className="item">
				<div className="item_header">
					<Link to={`/commit-list/${item.name}`}>{item.name}</Link>

					<a href={item.html_url} target="_blank">
						<LinkSvg className="item_link" />
					</a>
				</div>

				<div className="item_info">
					<span className="item-language">{item.language}</span>
					<span className="item-date">
						Updated at {new Date(item.updated_at).toLocaleString()}
					</span>
				</div>
			</div>
		</div>
	);
};
