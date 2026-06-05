import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <h1>🎀 Welcome To My Pookie Planner 🎀</h1>

            <p>
              ✨ Organize Tasks • Save Notes • Stay Productive ✨
            </p>

            <div className="buttons">
                <Link to="/todo">
                    <button>Open Todo App </button>
                </Link>

                <Link to="/notes">
                    <button>Open Notes App </button>
                </Link>
            </div>
        </div>

    );
}
export default Home;