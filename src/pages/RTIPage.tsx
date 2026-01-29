import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
const pdfMap: Record<string, string> = {
  english: "/assets/rtienglish.pdf",
  telugu: "/assets/rtitelugu.pdf",
  handbook: "/assets/rtiact2005.pdf",
};

const RTIPage = () => {
  const { type } = useParams<{ type: string }>();
  const pdfUrl = type ? pdfMap[type] : null;

  if (!pdfUrl) {
    return <h2 style={{ textAlign: "center" }}>PDF Not Found</h2>;
  }

  return (
    <div
      style={{
        background: "#f2f2f2",
        paddingTop: "30px",
        paddingBottom: "0px"

      }}
    >
      {/* PDF CONTAINER (CENTERED & LIMITED WIDTH) */}
      <div
        style={{
          width: "80%",              // 🔹 smaller like official site
          maxWidth: "1000px",        // 🔹 prevents too large screens
          margin: "0 auto 30px auto",
          background: "#000",
          padding: "10px",
        }}
      >
  <div style={{ background: "#f2f2f2", paddingBottom: "0" }}>
  <iframe
    src={pdfUrl}
    title="RTI PDF"
    width="100%"
    height="900px"
    style={{
      border: "none",
      display: "block",
      background: "#fff"
    }}
  />
</div>


      </div>
      <Footer />
    </div>
  );
};

export default RTIPage;
