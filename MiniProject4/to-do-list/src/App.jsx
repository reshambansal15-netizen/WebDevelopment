import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Todo from "./Todo";
import Notes from "./Notes";
import teddyGif from "./teddy.gif"

function App(){
  return(
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>

    <img src={teddyGif} alt="Teddy Bear" className="teddy-gif" />
    </>
  );
}
export default App;