import { useState, useRef } from "react";
import PageLayout from "../components/PageLayout";
import templeImage from "../assets/TEMPLE.jpeg";

const ExplorePage = () => {
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPoint = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const hotspots = [
    {
      id: "1",
      name: "Main Entrance Inscription",
      info: "Welcoming verse praising Lord Shiva.",
      top: "30%",
      left: "20%",
    },
    {
      id: "2",
      name: "Central Pillar Script",
      info: "Describes temple construction details and dynasty.",
      top: "55%",
      left: "50%",
    },
    {
      id: "3",
      name: "Sanctum Wall Text",
      info: "Ancient mantra carved in Brahmi script.",
      top: "70%",
      left: "75%",
    },
  ];

  // Zoom control
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomSpeed = 0.1;
    setScale((prev) =>
      Math.min(Math.max(prev - e.deltaY * zoomSpeed * 0.01, 1), 3)
    );
  };

  // Pan control
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startPoint.current = {
      x: e.clientX - translate.x,
      y: e.clientY - translate.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setTranslate({
        x: e.clientX - startPoint.current.x,
        y: e.clientY - startPoint.current.y,
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  // Reset zoom and pan
  const handleResetView = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
  };

  return (
    <PageLayout title="🛕 Temple Exploration">
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
            color: "#0d47a1",
            fontSize: "18px",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          Scroll to zoom, drag to move, and click glowing markers to learn about
          inscriptions.
        </p>

        <div
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{
            position: "relative",
            width: "85%",
            maxWidth: "1100px",
            height: "600px",
            borderRadius: "20px",
            overflow: "hidden",
            cursor: isDragging ? "grabbing" : "grab",
            background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          }}
        >
          {/* Reset Button */}
          <button
            onClick={handleResetView}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              zIndex: 5,
              padding: "10px 18px",
              backgroundColor: "#1976d2",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "600",
              boxShadow: "0 3px 8px rgba(0,0,0,0.25)",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#0d47a1")
            }
            onMouseOut={(e) =>
              ((e.target as HTMLButtonElement).style.backgroundColor = "#1976d2")
            }
          >
            🔄 Reset View
          </button>

          <div
            style={{
              transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})`,
              transformOrigin: "center center",
              transition: isDragging ? "none" : "transform 0.25s ease-out",
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <img
              src={templeImage}
              alt="Temple"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Hotspots */}
            {hotspots.map((spot) => (
              <div
                key={spot.id}
                onClick={() => setSelectedHotspot(spot.id)}
                title={spot.name}
                style={{
                  position: "absolute",
                  top: spot.top,
                  left: spot.left,
                  transform: "translate(-50%, -50%)",
                  width: "22px",
                  height: "22px",
                  backgroundColor:
                    selectedHotspot === spot.id ? "#ff7043" : "#1976d2",
                  borderRadius: "50%",
                  border: "3px solid white",
                  cursor: "pointer",
                  animation: "pulse 1.5s infinite",
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                }}
              />
            ))}
          </div>
        </div>

        {/* Popup modal */}
        {selectedHotspot && (
          <div
            onClick={() => setSelectedHotspot(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "#fff",
                padding: "30px",
                borderRadius: "16px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
                maxWidth: "420px",
                textAlign: "center",
                animation: "fadeIn 0.3s ease",
              }}
            >
              <h3
                style={{
                  color: "#1976d2",
                  marginBottom: "10px",
                  fontSize: "22px",
                }}
              >
                {hotspots.find((h) => h.id === selectedHotspot)?.name}
              </h3>
              <p style={{ color: "#333", fontSize: "17px", marginBottom: "20px" }}>
                {hotspots.find((h) => h.id === selectedHotspot)?.info}
              </p>
              <button
                onClick={() => setSelectedHotspot(null)}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#1976d2",
                  color: "#fff",
                  border: "none",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "600",
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* CSS Animations */}
        <style>
          {`
            @keyframes pulse {
              0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
              50% { transform: translate(-50%, -50%) scale(1.3); opacity: 0.7; }
              100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            }

            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
      </div>
    </PageLayout>
  );
};

export default ExplorePage;
