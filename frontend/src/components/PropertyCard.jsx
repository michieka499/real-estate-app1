import { useState } from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  const [hover, setHover] = useState(false);

  const badgeText = property.type === "rent" ? "For Rent" : "For Sale";
  const badgeColor = property.type === "rent" ? "#f97316" : "#10b981";

  return (
    <div
      style={{
        ...styles.card,
        transform: hover ? "scale(0.97)" : "scale(1)", // Zoom out slightly on hover
        boxShadow: hover
          ? "0 5px 20px rgba(0,0,0,0.25)"
          : "0 2px 8px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to={`/property/${property.id}`} style={{ textDecoration: "none" }}>
        <div style={styles.imageWrapper}>
          <img
            src={property.images[0]?.image || "https://via.placeholder.com/400x250"}
            alt={property.title}
            style={{
              ...styles.image,
              transform: hover ? "scale(0.95)" : "scale(1)", // image zoom out a bit too
            }}
          />
          <span style={{ ...styles.badge, backgroundColor: badgeColor }}>
            {badgeText}
          </span>
        </div>
        <div style={styles.details}>
          <h3 style={styles.title}>{property.title}</h3>
          <p style={styles.location}>{property.location}</p>
          <p style={styles.price}>Ksh {property.price}</p>
        </div>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    width: "100%",
    maxWidth: "300px",
  },
  imageWrapper: {
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  badge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    padding: "5px 10px",
    borderRadius: "4px",
    color: "white",
    fontWeight: "600",
    fontSize: "12px",
    textTransform: "uppercase",
  },
  details: {
    padding: "10px",
    backgroundColor: "#fff",
  },
  title: { margin: "5px 0", fontSize: "18px", color: "#111" },
  location: { margin: "5px 0", color: "#555" },
  price: { margin: "5px 0", fontWeight: "bold", color: "#1e3a8a" },
};

export default PropertyCard;