export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "16px 24px",
    background: "#222",
    color: "#fff",
  },
};