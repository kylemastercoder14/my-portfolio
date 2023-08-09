import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./ThemeProvider";
import BodyContainer from "./components/BodyContainer";

function App() {
  return (
    <AnimatePresence mode="wait">
      <ThemeProvider>
        <BodyContainer />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default App;
