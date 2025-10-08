import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ margin: "10px" }}>Upload</Link>
      <Link to="/translate" style={{ margin: "10px" }}>Translation</Link>
      <Link to="/explore" style={{ margin: "10px" }}>Explore</Link>
      <Link to="/history" style={{ margin: "10px" }}>History</Link>
      <Link to="/profile" style={{ margin: "10px" }}>Profile</Link>
    </nav>
  );
};

export default Navbar;
