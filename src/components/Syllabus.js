import react,{ useState } from 'react';
import styled from "styled-components"; 

const Syllabus = () => {

	const [newobj, setNewobj] = useState([
		{
			name: "optional parameters"
		},
		{
			name: "static and class methods",	
		},
		{
			name: "map function",
		},
		{
			name: "filter function",
		},
		{
			name: "lambda function",
		},
		{
			name: "collections",
		},
		{
			name: "named tuple",
		},
		{
			name: "deque",
		},
			])
	const [last, setLast] = useState([
 		{
 			name: "overview",
 		},
 		{
 			name: "dunder method",
 		},
 		{
 			name: "metaclass",
 		},
 		{
 			name: "decorators",
 		},
 		{
 			name: "generators",
 		},
 		{
 			name: "context managers.",
 		},
		])

	const [lists, setList] = useState([
	{
		id: 1,
		name: "Introduction"
	},
	{
		id: 2,
		name: "Variables & Data Types",
	},
	{
		id: 3,
		name: "Basic oparators & inputs",
	},
	{
		id: 4,
		name: "conditons",
	},
	{
		id: 5,
		name: "if-else",
	},
	{
		id: 6,
		name: "chained conditionals",
	},
	{
		id: 7,
		name: "for loop",
	},
	{
		id: 8,
		name: "while loop",
	},
	{
		id: 9,
		name: "list’s & tuples",
	},
		{
		id: 10,
		name: "Iteration by items",
	},
		])
	const [secondList, setSecondList] = useState([
	{
		id: 11,
		name: "string methods",
	},
	{
		id: 14,
		name: "slice operators",
	},
	{
		id: 15,
		name: "functions",
	},
	{
		id: 16,
		name: "How to read a text file",
	},
	{
		id: 17,
		name: "how to write a text file",
	},
	{
		id: 18,
		name: "using .count() & .find()",
	},
	{
		id: 19,
		name: "modular programming",
	},
	{
		id: 20,
		name: "optional parameters"
	},
	{
		id: 21,
		name: "try-except",
	},
	{
		id: 22,
		name: "global & local variables",
	},

		])
	
	
	return (
			<div className="row">
				<Ul>
				<h1>Basic</h1>
					{lists.map(list =>(
						<>
						<Li>{list.name}</Li>
						</>
						))}
				</Ul>
				<UL__T>
					{secondList.map(liste =>(<Li__t>{liste.name}</Li__t>))}
				</UL__T>
				<UL__TH>
				<h1>Intermediate</h1>
					{newobj.map(listes =>(<Li__tH>{listes.name}</Li__tH>))}
				</UL__TH>
				<UL__L>
				<h1>Advance</h1>
					{last.map(l =>(<Li__L>{l.name}</Li__L>))}
				</UL__L>
			</div>
		);
};
const UL__L = styled.ul`
display: flex;
list-style: none;
padding: 10px;
margin: 30px;
justify-content: center;
height: 40rem;
position: relative;
flex-direction: column;
`;
const Li__L = styled.li`
padding: 10px;
justify-content: center;
align-items: center;
border: 1px solid skyblue;
border-radius: 10px;
`;
const UL__TH = styled.ul`
display: flex;
list-style: none;
padding: 10px;
margin: 30px;
justify-content: center;
height: 40rem;
position: relative;
flex-direction: column;
`;
const Li__tH = styled.li`
padding: 10px;
justify-content: center;
align-items: center;
border: 1px solid skyblue;
border-radius: 10px;
`;
const UL__T = styled.ul`
display: flex;
list-style: none;
padding: 10px;
margin: 30px;
justify-content: center;
height: 40rem;
position: relative;
flex-direction: column;
`;
const Li__t = styled.li`
padding: 10px;
justify-content: center;
align-items: center;
border: 1px solid skyblue;
border-radius: 10px;
`;
const Ul = styled.ul`
display: flex;
list-style: none;
padding: 10px;
margin: 30px;
justify-content: center;
height: 40rem;
position: relative;
flex-direction: column;
`;
const Li = styled.li`
padding: 10px;
border: 1px solid skyblue;
border-radius: 10px;
justify-content: center;
align-items: center;
`;
export default Syllabus;