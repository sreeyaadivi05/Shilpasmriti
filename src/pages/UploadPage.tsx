import { useState } from "react";
import PageLayout from "../components/PageLayout";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("⚠️ Please select a file first!");
      return;
    }
    alert(`✅ File "${selectedFile.name}" uploaded successfully!`);
  };

  return (
    <PageLayout title="📤 Upload Inscriptions">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#0d47a1",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Select an image of a temple inscription to process.
        </p>

        <label
          htmlFor="fileInput"
          style={{
            backgroundColor: "#1976d2",
            color: "white",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            transition: "0.3s ease",
          }}
        >
          📎 Choose File
        </label>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />

        {previewUrl && (
          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#1565c0",
                marginBottom: "15px",
              }}
            >
              🖼️ Preview
            </h3>
            <img
              src={previewUrl}
              alt="Preview"
              style={{
                width: "500px",
                maxWidth: "90%",
                borderRadius: "15px",
                border: "2px solid #bbdefb",
                boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
              }}
            />
          </div>
        )}

        <button
          onClick={handleUpload}
          style={{
            marginTop: "40px",
            padding: "12px 40px",
            backgroundColor: "#2e7d32",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
            transition: "0.3s ease",
          }}
        >
          🚀 Upload
        </button>
      </div>
    </PageLayout>
  );
};

export default UploadPage;
