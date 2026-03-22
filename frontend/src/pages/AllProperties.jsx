import { useEffect, useState } from "react";
import axios from "axios";
import PropertyCard from "../components/PropertyCard";

function AllProperties() {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/properties/?page=${page}`)
      .then((res) => {
        setProperties(res.data.results);
        setTotalPages(Math.ceil(res.data.count / 8)); // 8 per page
      })
      .catch((err) => console.error(err));
  }, [page]);

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        All Properties
      </h1>

      {/* Property Cards Grid */}
      <div style={styles.grid}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination */}
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
    </div>
  );
}

const styles = {
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

export default AllProperties;