import { useEffect, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";

const Details = () => {

    const history = useHistory();

    const { id } = useParams();
    const { state } = useLocation(); // If we have called the API before, we won't call it again
    
    const [blog, setBlog] = useState({});
    const [err, setErr] = useState(false);

    const getBlog = async () => {
        console.log(id);

        let response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            method: "GET"
        });

        console.log(response);
    
        if(response.ok) {
            let data = await response.json();
            let blog = data.blog;

            setBlog(blog);
        }
        else {
            history.push('/404')
        }
    }

    useEffect(() => {
        if(state) {
            setBlog(state.blog);
        }
        else {
            getBlog();
        }
    }, []);

    const deleteBlog = async () => {

        let response = await fetch(`http://localhost:3000/api/blogs/${id}`, {
            method: "DELETE",
            headers: {"content-Type": 'application/json'},
        });
        console.log(response);
        if(response.ok) {
            history.push("/");
        }
        else{
            setErr(true);
        }
    }

    return (
        <main>
            <h1>{blog.title}</h1>
            <article className="details">
                <p className="snippet">{blog.subtitle}</p>
                <p className="body">{blog.body}</p>
                <div className="tray">
                    <Link to={{
                    pathname:`/blogs/create`,
                    state: {
                        blog: blog
                    }
                    }}><img src="/assets/edit.svg" className="click"/></Link>
                    <img src="/assets/delete.svg" className="click" onClick = {deleteBlog} />
                </div>
            </article>
            {err? 
                <div>
                    <p>Failed to delete blog</p><br />
                </div> : <p></p>}
        </main>
    );
}
 
export default Details;