import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="hooloovoo">
                <Link to="/" style={{textDecoration: "none"}}><h1>HOOLOOVOO</h1></Link>
            </div>
            <div>
                <NavLink exact activeClassName="active" to="/" className="link">Blogs</NavLink>
                <NavLink exact activeClassName="active" to="/blogs/create" className="link">New Blog</NavLink>
                <NavLink exact activeClassName="active" to="/users/" className="link">Ashish</NavLink>
            </div>
        </nav>
    );
}
 
export default Header;