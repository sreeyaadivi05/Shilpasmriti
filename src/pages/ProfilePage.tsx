import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/PageLayout";
const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Sreeya Adivi",
    username: "sreeya_25",
    email: "sreeya@example.com",
    phone: "+91 98765 43210",
    dob: "2002-06-15",
    location: "Bengaluru, Karnataka, India",
  });

  const [profileImage, setProfileImage] = useState(
    "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #bbdefb 0%, #e3f2fd 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        padding: "50px 0",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "92%",
          maxWidth: "1385px",
          minHeight: "850px",
          display: "grid",
          gridTemplateColumns: "380px 1fr",
          backgroundColor: "#ffffff",
          borderRadius: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          overflow: "hidden",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            background: "linear-gradient(160deg, #2196f3, #1565c0)",
            color: "white",
            textAlign: "center",
            padding: "50px 25px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={profileImage}
              alt="Profile"
              style={{
                width: "190px",
                height: "190px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "6px solid white",
                marginBottom: "20px",
                boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
              }}
            />
            {isEditing && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  id="uploadPhoto"
                  style={{ display: "none" }}
                />
                <label
                  htmlFor="uploadPhoto"
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    backgroundColor: "#fff",
                    color: "#1976d2",
                    borderRadius: "50%",
                    padding: "8px",
                    cursor: "pointer",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.3)",
                    fontSize: "20px",
                  }}
                >
                  📸
                </label>
              </>
            )}
          </div>

          <h2
            style={{
              fontSize: "28px",
              margin: "15px 0 8px 0",
              fontWeight: "600",
            }}
          >
            {profile.name}
          </h2>
          <p style={{ opacity: 0.9, fontStyle: "italic", fontSize: "16px" }}>
            @{profile.username}
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            padding: "70px 100px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Edit / Save Button */}
          <button
            onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            style={{
              position: "absolute",
              top: "35px",
              right: "80px",
              padding: "12px 28px",
              backgroundColor: isEditing ? "#2e7d32" : "#1976d2",
              border: "none",
              borderRadius: "10px",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              transition: "0.3s ease",
            }}
          >
            {isEditing ? "💾 Save" : "✏️ Edit"}
          </button>

          <h2
            style={{
              color: "#0d47a1",
              marginBottom: "40px",
              fontSize: "32px",
              fontWeight: "700",
            }}
          >
            👤 Profile Details
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px 80px",
            }}
          >
            {Object.entries(profile).map(([key, value]) => (
              <div key={key} style={{ display: "flex", flexDirection: "column" }}>
                <label
                  style={{
                    fontWeight: 600,
                    color: "#1e40af",
                    marginBottom: "8px",
                    textTransform: "capitalize",
                    fontSize: "15px",
                  }}
                >
                  {key === "dob" ? "Date of Birth" : key}
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name={key}
                    value={value}
                    onChange={handleChange}
                    style={{
                      padding: "14px",
                      borderRadius: "10px",
                      border: "1px solid #90caf9",
                      outline: "none",
                      fontSize: "16px",
                      background: "#fff",
                      boxShadow:
                        "inset 2px 2px 4px rgba(0,0,0,0.05), inset -2px -2px 4px rgba(255,255,255,0.8)",
                    }}
                  />
                ) : (
                  <p
                    style={{
                      backgroundColor: "#e3f2fd",
                      padding: "14px",
                      borderRadius: "10px",
                      color: "#1a237e",
                      fontSize: "16px",
                      minHeight: "50px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 1300px) {
          div[style*="grid-template-columns: 380px 1fr"] {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          div[style*="padding: 70px 100px"] {
            padding: 40px 30px;
          }
          button[style*="position: absolute"] {
            right: 25px;
            top: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;
