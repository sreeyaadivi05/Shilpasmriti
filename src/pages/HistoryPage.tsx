import { useState } from "react";

const HistoryPage = () => {
  const [history] = useState([
    {
      id: 1,
      name: "Brihadeeswarar Temple",
      script: "Grantha",
      uploadDate: "2025-10-02",
      buildDate: "1010 CE",
      status: "✅ Translated",
      image: "/temple1.jpg",
      translation:
        "Glory to Lord Shiva, protector of Cholas. This temple was built under the reign of Raja Raja Chola I. The inscriptions describe daily rituals, temple management, and offerings. The script is finely carved on the granite walls and reflects the advanced craftsmanship of the Chola era.",
    },
    {
      id: 2,
      name: "Shore Temple, Mahabalipuram",
      script: "Brahmi",
      uploadDate: "2025-09-25",
      buildDate: "700 CE",
      status: "🕓 Pending",
      image: "/temple2.jpg",
      translation:
        "Translation pending — inscription yet to be reviewed by experts.",
    },
    {
      id: 3,
      name: "Virupaksha Temple, Hampi",
      script: "Lipi",
      uploadDate: "2025-09-20",
      buildDate: "740 CE",
      status: "✅ Translated",
      image: "/temple3.jpg",
      translation:
        "Dedicated to Lord Shiva, this inscription describes the glory of the Vijayanagara Empire and mentions donations by merchants and kings. The script is clearly visible on the outer sanctum and highlights socio-religious harmony of the period.",
    },
  ]);

  const [filterScript, setFilterScript] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedTemple, setSelectedTemple] = useState<any>(null);

  const filteredHistory = history.filter((item) => {
    const matchesScript = filterScript === "All" || item.script === filterScript;
    const matchesStatus = filterStatus === "All" || item.status.includes(filterStatus);
    return matchesScript && matchesStatus;
  });

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        background: "linear-gradient(135deg, #fff8e1, #ffe0b2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h1 style={{ color: "#b45309", marginBottom: "10px", textAlign: "center" }}>
        📜 Temple Upload History
      </h1>
      <p style={{ color: "#5c3d03", marginBottom: "30px", textAlign: "center", maxWidth: "800px" }}>
        View your uploaded inscriptions, translation status, and temple details.
      </p>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div>
          <label style={{ marginRight: "10px", fontWeight: "bold", color: "#7c2d12" }}>
            Filter by Script:
          </label>
          <select
            value={filterScript}
            onChange={(e) => setFilterScript(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #b45309",
              color: "#5c3d03",
              backgroundColor: "#fff3e0",
            }}
          >
            <option value="All">All</option>
            <option value="Grantha">Grantha</option>
            <option value="Brahmi">Brahmi</option>
            <option value="Lipi">Lipi</option>
          </select>
        </div>

        <div>
          <label style={{ marginRight: "10px", fontWeight: "bold", color: "#7c2d12" }}>
            Filter by Status:
          </label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #b45309",
              color: "#5c3d03",
              backgroundColor: "#fff3e0",
            }}
          >
            <option value="All">All</option>
            <option value="Translated">Translated</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "25px",
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {filteredHistory.length > 0 ? (
          filteredHistory.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "#fffefc",
                borderRadius: "12px",
                border: "2px solid #f59e0b",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "transform 0.2s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <div style={{ padding: "15px", color: "#4e1a05" }}>
                <h3 style={{ color: "#b45309", marginBottom: "8px" }}>{item.name}</h3>
                <p>🧱 <b>Built:</b> {item.buildDate}</p>
                <p>📅 <b>Uploaded:</b> {item.uploadDate}</p>
                <p>✍️ <b>Script:</b> {item.script}</p>
                <p
                  style={{
                    color: item.status.includes("Pending") ? "#e67e22" : "#2e7d32",
                    fontWeight: "bold",
                  }}
                >
                  {item.status}
                </p>
                <button
                  onClick={() => setSelectedTemple(item)}
                  style={{
                    marginTop: "10px",
                    padding: "8px 15px",
                    backgroundColor: "#b45309",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#7c2d12" }}>No records match your filters.</p>
        )}
      </div>

      {/* Modal */}
      {selectedTemple && (
        <div
          onClick={() => setSelectedTemple(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fffaf0",
              padding: "25px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "600px",
              maxHeight: "80vh",
              overflowY: "auto",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              color: "#3a1f04",
            }}
          >
            <h2 style={{ color: "#b45309" }}>{selectedTemple.name}</h2>
            <p><b>Script:</b> {selectedTemple.script}</p>
            <p><b>Built:</b> {selectedTemple.buildDate}</p>
            <p><b>Uploaded:</b> {selectedTemple.uploadDate}</p>
            <p><b>Status:</b> {selectedTemple.status}</p>
            <hr />
            <p><b>Translation:</b></p>
            <p style={{ lineHeight: "1.6", color: "#4e1a05" }}>
              {selectedTemple.translation}
            </p>
            <button
              onClick={() => setSelectedTemple(null)}
              style={{
                marginTop: "20px",
                padding: "8px 15px",
                backgroundColor: "#ff7043",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;
