import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About */}
        <div style={styles.section}>
          <h3 style={styles.title}>About Us</h3>
          <p>
            We help you find your dream home with ease. Browse properties for
            sale or rent in your favorite locations.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.section}>
          <h3 style={styles.title}>Quick Links</h3>
          <ul style={styles.list}>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">All Properties</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={styles.section}>
          <h3 style={styles.title}>Contact</h3>
          <p>123 Real Estate St, Nairobi, Kenya</p>
          <p>Email: info@realestate.com</p>
          <p>Phone: +254 700 123 456</p>
        </div>

        {/* Social Media */}
        <div style={styles.section}>
          <h3 style={styles.title}>Follow Us</h3>
          <div style={styles.socials}>
            <a href="#" style={styles.socialLink}>Facebook</a>
            <a href="#" style={styles.socialLink}>Twitter</a>
            <a href="#" style={styles.socialLink}>Instagram</a>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        &copy; {new Date().getFullYear()} RealEstate Inc. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#1e3a8a",
    color: "#fff",
    paddingTop: "40px",
    paddingBottom: "20px",
    marginTop: "50px",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  section: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "18px",
    marginBottom: "15px",
    fontWeight: "600",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  socials: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  socialLink: {
    color: "#fff",
    textDecoration: "none",
  },
  bottom: {
    textAlign: "center",
    marginTop: "30px",
    fontSize: "14px",
    opacity: 0.8,
  },
};

export default Footer;