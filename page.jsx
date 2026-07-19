import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />

      <main style={{ flex: 1, textAlign: "center", padding: "60px 20px" }}>
        <h1>Hello</h1>
      </main>

      <Footer />
    </div>
  );
}