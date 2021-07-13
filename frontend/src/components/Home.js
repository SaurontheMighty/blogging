import { useEffect, useState } from 'react'

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        
        let response = await fetch('http://localhost:3000/api/blogs/', {
            method: "GET"
        });

        if(response.ok) {
            let data = await response.json();

            let ar = data.blogs;
            console.log(ar);

            setBlogs(ar);
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <main>
            {blogs.map((blog) => (
                <div>
                    <h3>{blog.title}</h3>
                    <p>{blog.subtitle}</p>
                </div>
            ))}
        </main>
    );
}
 
export default Home;