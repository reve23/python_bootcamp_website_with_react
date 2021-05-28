import styled from "styled-components";
import {Link} from "react-router-dom";

const Header = (props) => {
    return <Nav>
            <h1 className="title">{props.name}</h1>
            <Ul>
                <Link to="/">
                    <Li>HOME</Li>
                </Link>
                <Link to="/about">
                    <Li>ABOUT</Li>
                </Link>
                <Link to="/document">
                    <Li>DOCUMENTATION</Li>
                </Link>
                <Link to="/lecture">
                    <Li>LECTURE</Li>
                </Link>
            </Ul>
            <Search>
                <input type="text" className="inp" />
                <Button type="submit">Search</Button>
            </Search>
            <SignIn>Sign In</SignIn>
        </Nav>
}
    const Nav = styled.nav`
padding: 10px;
background-color: #5284B0;
width: full;
height: full;
display: flex;
`;
const Ul = styled.ul`
display: flex;
list-style: none;
display: flex;
`;
const Li = styled.li`
margin: 12px;
position: relative;
top: -3px;
left: 30px;
color: #f9f9f9;
text-decoration: none;
`;

const Search = styled.p`
position: relative;
border-radius: 7px;
top: 5px;
left: 760px;
`;
const Button = styled.button`
background-color: #2D9DFF;
padding: 5px;
margin: 1px;
border-radius: 7px;
&:hover {
    border: none;
    background-color: #F9f9f9;
}
`;
const SignIn = styled.button`
width: 5rem;
height: 2.7rem;
border-radius: 12px;
position: relative;
left: 790px;
top: 4px;
background-color: #399AE1;
&:hover{
    border: none;
    background-color: #F9f9f9;
}
`;

export default Header;
