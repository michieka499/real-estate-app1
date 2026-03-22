import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";
import Carousel from "../components/Carousel";

function Home() {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [showFilter, setShowFilter] = useState(false);
  const [location, setLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Store current filter params to preserve them when paginating
  const [currentFilters, setCurrentFilters] = useState({});

  const fetchProperties = (filters = {}) => {
    let url = `http://127.0.0.1:8000/api/properties/?page=${page}`;

    if (filters.location) url += `&location=${filters.location}`;
    if (filters.minPrice) url += `&price_min=${filters.minPrice}`;
    if (filters.maxPrice) url += `&price_max=${filters.maxPrice}`;

    axios
      .get(url)
      .then((res) => {
        setProperties(res.data.results);
        setTotalPages(Math.ceil(res.data.count / 8));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    // fetch using current filters whenever page changes
    fetchProperties(currentFilters);
  }, [page]);

  const handleFilter = (e) => {
    e.preventDefault();

    const filters = {
      location: location.trim(),
      minPrice: minPrice.trim(),
      maxPrice: maxPrice.trim(),
    };

    setCurrentFilters(filters); // store for pagination
    setPage(1); // reset to first page
    fetchProperties(filters);
    setShowFilter(false); // hide form after search
  };

  return (
    <div style={{ padding: "20px" }}>
      <Carousel />

      {/* Toggle Search Form */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={() => setShowFilter(!showFilter)}
          style={styles.toggleBtn}
        >
          {showFilter ? "Hide Search" : "Search Properties"}
        </button>
      </div>

      {showFilter && (
        <form onSubmit={handleFilter} style={styles.filterForm}>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            style={styles.input}
          />
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Go
          </button>
        </form>
      )}

      {/* Properties Grid */}
      <div style={styles.grid}>
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No properties found.
          </p>
        )}
      </div>

      {/* Pagination */}
      {properties.length > 0 && (
        <div style={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              style={{
                ...styles.pageBtn,
                backgroundColor: page === i + 1 ? "#1e3a8a" : "#f0f0f0",
                color: page === i + 1 ? "#fff" : "#000",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  toggleBtn: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    cursor: "pointer",
  },
  filterForm: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minWidth: "150px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
    justifyItems: "center",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "30px",
    gap: "10px",
  },
  pageBtn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;