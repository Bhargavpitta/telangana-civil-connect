import Navbar from "@/components/Navbar/Navbar";
import telanganaLogo from "@/assets/telangana-logo.jpeg";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <header style={{ background: "#fff", borderBottom: "1px solid #ddd", width: "100%" }}>
  <div 
    style={{ 
      width: "100%",           // 🔹 Changed from maxWidth to 100%
      padding: "15px 30px",    // 🔹 Added 30px horizontal padding for a small gap from screen edge
      display: "flex", 
      alignItems: "center",    // 🔹 Centers the logo and text vertically
      justifyContent: "flex-start" // 🔹 Ensures everything pushes to the left
    }}
  >
    <img
      src={telanganaLogo}
      alt="Telangana Logo"
      style={{ height: "70px", marginRight: "20px" }}
    />
    <div>
      <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold", color: "#333" }}>
        CONSUMER AFFAIRS, FOOD AND CIVIL SUPPLIES DEPARTMENT
      </h1>
      <h2 style={{ margin: 0, fontSize: "16px", color: "#666" }}>
        GOVERNMENT OF TELANGANA - INDIA
      </h2>
    </div>
  </div>
</header>

      {/* NAVBAR */}
      <Navbar isSticky={false} />

      {/* PAGE CONTENT */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
