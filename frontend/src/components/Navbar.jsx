import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Navigate to home or properties page with query params
    navigate(`/properties?search=${search}&location=${location}`);
    setShowSearch(false); // hide the form after search
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoText}>RealEstate</Link>
      </div>
      <div style={styles.links}>
        <button onClick={() => setShowSearch(!showSearch)} style={styles.linkBtn}>
          Search
        </button>
        <Link to="/properties" style={styles.linkBtn}>All Properties</Link>
        <Link to="/login" style={styles.linkBtn}>Login</Link>
      </div>

      {/* Toggleable Search Form */}
      {showSearch && (
        <form onSubmit={handleSearchSubmit} style={styles.searchForm}>
          <input
            type="text"
            placeholder="Search keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Location..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.searchBtn}>Go</button>
        </form>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px 20px",
    position: "relative",
  },
  logo: {
    marginBottom: "10px",
  },
  logoText: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "24px",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
    marginBottom: "10px",
  },
  linkBtn: {
    color: "#fff",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
  searchForm: {
    display: "flex",
    gap: "10px",
    width: "100%",
    maxWidth: "600px",
    justifyContent: "center",
    marginTop: "10px",
  },
  input: {
    padding: "8px 12px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    flex: 1,
  },
  searchBtn: {
    padding: "8px 16px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#10b981",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Navbar;
