import styled from "styled-components"; 
import Syllabus from './Syllabus';
import Footer from './Footer';

const Home = (props) => {
    return <div>
        <H1>Welcome To Essential</H1>
        <Img src="/img/img1.jpg"></Img>
        <Section>
            <Card>
                <Title>Portfolio</Title>
                <Desc>Having a greate portfolio with greate<br/>
                    projects which will help you to land your 
                    drean job
                </Desc>
                <JoinP>Check out</JoinP>
            </Card>
            <Card2>
                <Title2>Experience</Title2>
                <Desc2>During this long time you will get a lot of <br/>
                    exprience that will help you to solve any kind of
                   real world problem.
                </Desc2>
                <Joinj>Check out</Joinj>
            </Card2>
            <Card3>
                <Title3>Certificate</Title3>
                <Desc3>You will get a certificate for completing the bootcamp<br/>
                    and this certificate along with your experience and porfolio can 
                    help you a lot
                </Desc3>
                <Joinr>Check out</Joinr>
            </Card3>
        </Section>
        <section>
            <ClassTitle>Join our classes Today!</ClassTitle>
            <img className="classes" src="/img/img2.jpg" alt="" />
        </section>
        <Syllabus />
        <Footer />
    </div>

};
const Img = styled.img`
height:80%;
width:100%;
position:absolute;
top: 60px;
z-index:-1;
`;
const H1 = styled.h1`
color: #f9f9f9;
position:absolute;
top: 20rem;
left: 40rem;
font-size: 40px;
background-color: #2D9DFF;
padding: 15px;
transition: transform .5s;
&:hover {
    border: 2px solid #2D9DFF;
    box-shadow: 2px black;
    transform: scale(1.1);
`;
const Section = styled.section`
display: flex;
height: 70rem;
`;
const Card = styled.div`
flex-direction: column;
width: 30rem;
height: 15rem;
position:absolute;
left:37rem;
top: 50rem;
background-color: #2D9DFF;
padding:10px;
margin-bottom: 10px;
transition: transform .5s;
&:hover {
    border: 1px solid #2D9DFF;
    box-shadow: 2px black;
    transform: scale(1.1);
}
`;
const Card2 = styled.div`
flex-direction: column;
width: 30rem;
height: 15rem;
position:absolute;
top: 50rem;
left: 3.4rem;
background-color: #2D9DFF;
padding:10px;
margin-bottom: 10px;
transition: transform .5s;
&:hover {
    border: 1px solid #2D9DFF;
    box-shadow: 2px black;
    transform: scale(1.1);
}
`;
const Card3 = styled.div`
flex-direction: column;
width: 30rem;
height: 15rem;
position:absolute;
top: 50rem;
left: 70rem;
background-color: #2D9DFF;
padding:10px;
margin-bottom: 10px;
align-item:center;
justify-content:center;
transition: transform .5s;
&:hover {
    border: 1px solid #2D9DFF;
    box-shadow: 2px black;
    transform: scale(1.1);
}
`;
const Title = styled.h2`
align-item:center;
justify-content:center;
text-align:center;
`;
const Desc = styled.p`
text-align:center;
margin-top: 40px;
color: #f9f9f9;
`;
const JoinP = styled.button`
text-align:center;
margin-top: 20px;
margin-left: 12.2rem;
padding: 10px;
border-radius: 10px;
background-color: #f9f9f9;
color: black;
`;
const Title2 = styled.h2`
text-align:center;
`;
const Desc2 = styled.p`
text-align:center;
margin-top: 40px;
color: #f9f9f9;
`;
const Joinj = styled.button`
text-align:center;
margin-top: 20px;
margin-left: 12.2rem;
padding: 10px;
border-radius: 10px;
background-color: #f9f9f9;
color: black;
`;
const Title3 = styled.h2`
text-align:center;

`;
const Desc3 = styled.p`
text-align:center;
margin-top: 40px;
color: #f9f9f9;
`;
const Joinr = styled.button`
text-align:center;
margin-top: 20px;
margin-left: 12.2rem;
padding: 10px;
border-radius: 10px;
background-color: #f9f9f9;
color: black;
`;

const ClassTitle = styled.h2`
position: absolute;
top: 80rem;
left: 15rem;
font-size: 45px;
font-weight: 500;
z-index: 1;
color: white;
`;
export default Home;