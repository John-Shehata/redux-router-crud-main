import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <ul className="nav">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="post/add">Add Post</NavLink>
        </li>
        <li className="login">Login</li>
      </ul>
      <h1>CRUD APP</h1>
    </div>
  );
};

export default Header;
