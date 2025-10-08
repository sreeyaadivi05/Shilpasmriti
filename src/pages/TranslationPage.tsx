import { useState } from "react";
import PageLayout from "../components/PageLayout";

const TranslationPage = () => {
  const [originalText, setOriginalText] = useState<string | null>(null);
  const [translatedText, setTranslatedText] = useState<string | null>(null);

  // Simulated OCR + Translation
  const handleTranslate = () => {
    const extracted = "वति कुट्टि (Sample inscription in Devanagari)";
    const translated = "“Glory to the temple of Lord Shiva” (English Translation)";
    setOriginalText(extracted);
    setTranslatedText(translated);
  };

  return (
    <PageLayout title="🕉️ Translation">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "100%",
          width: "100%",
          padding: "40px 20px",
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
          View extracted and translated text from temple inscriptions.
        </p>

        <button
          onClick={handleTranslate}
          style={{
            padding: "14px 40px",
            backgroundColor: "#1976d2",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s ease",
            boxShadow: "0 5px 10px rgba(0,0,0,0.2)",
          }}
          onMouseOver={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#0d47a1")
          }
          onMouseOut={(e) =>
            ((e.target as HTMLButtonElement).style.backgroundColor = "#1976d2")
          }
        >
          📜 Show Sample Translation
        </button>

        {originalText && (
          <div
            style={{
              marginTop: "40px",
              width: "80%",
              maxWidth: "1000px",
              textAlign: "left",
            }}
          >
            <h3 style={{ color: "#37474f", marginBottom: "10px" }}>
              🪶 Original Inscription Text:
            </h3>
            <div
              style={{
                background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
                padding: "20px",
                borderRadius: "12px",
                fontFamily: "'Noto Sans Devanagari', serif",
                border: "1px solid #e0b084",
                color: "#2c3e50",
                fontSize: "20px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
                marginBottom: "25px",
              }}
            >
              {originalText}
            </div>

            <h3 style={{ color: "#37474f", marginBottom: "10px" }}>
              🌐 English Translation:
            </h3>
            <div
              style={{
                background: "linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)",
                padding: "20px",
                borderRadius: "12px",
                border: "1px solid #a0bde5",
                color: "#1a237e",
                fontSize: "20px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
              }}
            >
              {translatedText}
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default TranslationPage;
