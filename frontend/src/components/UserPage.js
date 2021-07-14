import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

const UserPage = () => {

    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        
        let response = await fetch('http://localhost:3000/api/blogs/', {
            method: "GET"
        });

        if(response.ok) {
            let data = await response.json();
            let ar = data.blogs;

            setBlogs(ar);
        }
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <main>
            <h1 className="page-title">Your Blogs</h1>
            {blogs.map((blog) => (
                <Link to={{
                    pathname:`/blogs/${blog._id}`,
                    state: {blog: blog}
                    }}>
                    <article className="blog">
                        <h3 className="title">{blog.title}</h3>
                        <p className="snippet">{blog.subtitle}</p>
                        <p className="body">{blog.body}</p>
                    </article>
                </Link>
            ))}
        </main>
    );
}
 
export default UserPage;