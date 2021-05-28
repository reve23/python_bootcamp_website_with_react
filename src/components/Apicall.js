import react, {useState, useEffect} from 'react';
import Blog from './Blog';

const Apicall = () =>{

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetchDb()
    }, [])

    const fetchDb = async () => {
        const data = await fetch("https://course-api.com/react-tours-project");
        const items = await data.json();
        console.log(items);
        setBlogData(items);
    }
    return(
        <div>
            {blogData.map((elem,ind) => (
                <Blog key={ind}
                name={elem.name}
                info={elem.info}
                image={elem.image}
                alt={elem.name}
                />
            ))}
        </div>
    );
};

export default Apicall;
