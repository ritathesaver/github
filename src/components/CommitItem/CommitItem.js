import React from 'react';
import './CommitItem.scss';
import { ReactComponent as LinkSvg } from '../../assets/sign.svg';

export const CommitItem = ({ item } = {}) => {
	const cutMessage = (message) => {
		return message.replace(/(\r\n|\n|\r)/gm, '');
	};
	return (
		<div className="commit_item">
			<div className="commit_item_header">
				<div className="commit_item_name">
					{cutMessage(item.commit.message)}
				</div>
				<div>
					<a href={item.html_url} target="_blank">
						<LinkSvg className="commit_item_link" />
					</a>
				</div>
			</div>
			<div className="commit_item_info">
				<strong>{item.commit.author.name}</strong> commited on {' '}
				{new Date(item.commit.committer.date).toLocaleString()}
			</div>
		</div>
	);
};
