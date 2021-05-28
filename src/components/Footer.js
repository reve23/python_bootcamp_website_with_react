import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return(
		<div className="footer">
		<div className="contact">
			<h1>Contact us</h1>
			<h2>Phone number: 01816680988</h2>
			<h2>Email: znith347@gmail.com</h2>
		</div>
		<Fiv>
			<Logo src="/favicon.ico" alt=""/>
			<h2>Essential</h2>
		</Fiv>
		<Provide>
		<h3>We provide</h3>
		<h2>Roadmap</h2>
		<h2>Learning curve</h2>
		<h2>Real world Experiencence</h2>
		<h2>Certifications</h2>
		<h2>Job opportunity</h2>
		</Provide>
		

		</div>
		);
};

const Provide = styled.div`
position: absolute;
top: 3rem;
left:25rem;
display: flex;
flex-direction: column; 
h3{
	font-weight: 500;
	color: white;
}
h2{
	font-weight: 500;
	font-size: 15px;
	padding:10px;
	letter-spacing: 1px;
	color: white;
}
`;
const Logo = styled.img`
`;
const Fiv = styled.div`
display: flex;
position: absolute;
top: 5rem;
align-items: center;
letter-spacing: 1px;
left: 5rem;
`;
export default Footer;