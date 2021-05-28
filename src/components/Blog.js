import react from 'react';

const Blog = (props) => {
	return (
			<main>
				<h2 key={props.key}>{props.name}</h2>
				<h3>{props.info}</h3>
				<img src={props.image} alt={props.alt}/>
			</main>
		);
};
export default Blog;
