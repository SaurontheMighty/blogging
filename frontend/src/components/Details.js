import { useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

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

    const deletePost = async () => {

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
                    <img src="/assets/edit.svg"/>
                    <img src="/assets/delete.svg" className="click" onClick = {deletePost} />
                </div>
                {err? <p>Unable to Submit Form.</p> : <p></p>}
            </article>
        </main>
    );
}
 
export default Details;