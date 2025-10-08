import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageLayoutProps {
  title?: string;
  children: ReactNode;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "linear-gradient(120deg, #cfe9ff 0%, #e3f2fd 100%)",
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
          width: "90%",
          maxWidth: "1400px",
          minHeight: "800px",
          backgroundColor: "#ffffff",
          borderRadius: "25px",
          boxShadow: "0 10px 35px rgba(0,0,0,0.15)",
          padding: "60px 80px",
          overflowY: "auto",
        }}
      >
        {title && (
          <h2
            style={{
              color: "#0d47a1",
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "40px",
            }}
          >
            {title}
          </h2>
        )}
        {children}
      </motion.div>

      <style>{`
        @media (max-width: 1300px) {
          div[style*="padding: 60px 80px"] {
            padding: 40px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLayout;
