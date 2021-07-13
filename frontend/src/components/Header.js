import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="title">
                <Link to="/" style={{textDecoration: "none"}}><h1>HOOLOOVOO</h1></Link>
            </div>
            <div>
                <NavLink exact activeClassName="active" to="/" className="link">Blogs</NavLink>
                <NavLink exact activeClassName="active" to="/newblog" className="link">New Blog</NavLink>
                <NavLink exact activeClassName="active" to="/user" className="link">Ashish</NavLink>
            </div>
        </nav>
    );
}
 
export default Header;