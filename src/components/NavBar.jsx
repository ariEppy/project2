import { Link } from "react-router-dom";
import "./NavBar.css";


export default function NavBar() {
  return (
    <nav className="navBar">
        <div  className="link"> <Link to="/">Home</Link></div>
         <div  className="link"><Link to="/Delete">Delete</Link></div>
          <div  className="link"><Link to="/Search" >Search</Link></div>
           <div  className="link"> <Link to="/Add">Add</Link></div>
    </nav>
  );
}
