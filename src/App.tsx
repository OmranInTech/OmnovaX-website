import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About"; 
import Services from "./pages/Services";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div key="loader">
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />

          <Home />

          {/* 🔥 SINGLE CONTROLLED ABOUT SECTION */}
          <About />

          <Services />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;