interface PDFViewerProps {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: PDFViewerProps) => {
  return (
    <iframe
      src={pdfUrl}
      width="100%"
      height="100%"
      style={{ border: "none" }}
      title="PDF Viewer"
    />
  );
};

export default PDFViewer;
