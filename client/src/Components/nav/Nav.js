import "./Nav.css";
import stack from "../images/icon.png";
import search from "../images/search.png";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import setCurrentUser from "../../actions/currentUser";
import decode from "jwt-decode";

function Nav() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let user = useSelector((state) => (state.currentUserReducer));

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/Auth');
    dispatch(setCurrentUser(null));
  }

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedtoken = decode(token);
      if (decodedtoken * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [dispatch]);

  return (
    <div className="navbar">
      <div className="nav">
        <Link to="/" className="nav-item nav-logo">
          <img src={stack} />
        </Link>
        <Link to="/" className="nav-item nav-btn">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn">
          For Teams
        </Link>
        <form>
          <input type="text" placeholder="Search..." />
          <img src={search} width="25" className="nav-btn" />
        </form>
        {user === null ? (
          <Link to="/Auth" className="nav-item nav-link">
            Log in
          </Link>
        ) : (
          <>
            <Link to={`/Users/${user.result._id}`} style={{ textDecoration: "none" }}>
              <Avatar
                name={user.result.name[0].toUpperCase()}
                radius="50%"
                height="5vh"
                width="5vh"
                font="3vh"
                color="skyblue"
              />
            </Link>
            <button
              className="nav-item nav-link"
              onClick={handleLogout}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Nav;
