import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [body, setBody] = useState('');
    const [err, setErr] = useState(false);

    const create = async(e) => {

        e.preventDefault();

        const blog = {
            user: '60eb370d0395817942c44ab5',
            title: title,
            subtitle: subtitle,
            body: body
        }

        let response = await fetch(`http://localhost:3000/api/blogs/`, {
            method: "POST",
            headers: {"content-Type": 'application/json'},
            body: JSON.stringify(blog)
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
            <h1>Create Blog</h1>
            <form onSubmit = {create} className="create-form">
                <label htmlFor="title">Title:</label>   
                <input 
                className ="form-input"
                type="text" 
                value = {title}
                onChange = {(e) => setTitle(e.target.value)}
                required />

                <label htmlFor="snippe">Subtitle:</label>
                <input 
                className ="form-input"
                type="text" 
                value = {subtitle}
                onChange = {(e) => setSubtitle(e.target.value)}
                required />

                <label htmlFor="body">Body:</label>
                <textarea 
                className ="form-input"
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                required>
                </textarea>

                <button className="click">Create</button>
            </form>
            {err? <p>Unable to Submit Form.</p> : <p></p>}
        </main>
    );
}
 
export default CreateBlog;