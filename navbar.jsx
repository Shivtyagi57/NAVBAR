// demo data
const navLinks = [
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Services" },
  { id: 4, label: "Contact" },
];

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>MyApp</span>
      <ul style={styles.links}>
        {navLinks.map((link) => (
          <li key={link.id}>{link.label}</li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    background: "#222",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20px",
  },
  links: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};