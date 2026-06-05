import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar">
            <h2>💖 Pookie Planner 💖</h2>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/notes">Notes</Link>
            </div>
        </nav>
    );
}
export default Navbar;