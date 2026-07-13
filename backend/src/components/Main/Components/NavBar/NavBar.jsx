import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          Around<span>The U.S.</span>
        </div>

        <div>
          <Link to="/login">Ir a login</Link> | <Link to="/">Home</Link> |{" "}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
