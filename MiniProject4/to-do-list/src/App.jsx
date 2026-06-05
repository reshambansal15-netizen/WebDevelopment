import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Todo from "./Todo";
import Notes from "./Notes";

function App(){
  return(
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
    </>
  );
}
export default App;