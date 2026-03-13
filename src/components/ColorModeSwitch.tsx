import { useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ToggleSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <motion.div
      onClick={toggleColorMode}
      style={{
        width: "56px",
        height: "28px",
        borderRadius: "999px",
        background: isDark
          ? "linear-gradient(135deg, #1a1a2e, #2d2d4e)"
          : "linear-gradient(135deg, #f6d365, #fda085)",
        display: "flex",
        alignItems: "center",
        padding: "3px",
        cursor: "pointer",
        border: isDark ? "1px solid #3a3a5e" : "1px solid #f0a070",
        boxShadow: isDark
          ? "0 2px 8px rgba(0,0,0,0.4), inset 0 1px 3px rgba(0,0,0,0.3)"
          : "0 2px 8px rgba(253,160,133,0.4), inset 0 1px 3px rgba(255,255,255,0.3)",
        transition: "background 0.4s ease, box-shadow 0.4s ease",
        flexShrink: 0,
      }}
      whileTap={{ scale: 0.92 }}
    >
        
      <motion.div
        layout
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        style={{
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: isDark
            ? "linear-gradient(135deg, #c4b5fd, #a78bfa)"
            : "linear-gradient(135deg, #ffffff, #ffe8d6)",
          boxShadow: isDark
            ? "0 2px 6px rgba(167,139,250,0.5)"
            : "0 2px 6px rgba(253,160,133,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={colorMode}
            initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            {isDark
              ? <FaMoon size={11} color="#1a1a2e" />
              : <FaSun size={11} color="#f97316" />
            }
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ToggleSwitch;