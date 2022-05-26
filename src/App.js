// import { Route, Switch } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min"
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./GlobalStyles";

// import components here
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import BlogPage from "./components/BlogPage";
import WorkPage from "./components/WorkPage";
import MySkillPage from "./components/MySkillpage";
import SoundBar from "./subComponents/SoundBar";

// import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  // const location = useLocation();
  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
        <SoundBar />

        <AnimatePresence exitBeforeEnter>
      
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route exact path="/about" element={<AboutPage />} />
              <Route exact path="/blog" element={<BlogPage />} />
              <Route exact path="/work" element={<WorkPage />} />
              <Route exact path="/skills" element={<MySkillPage />} />
            </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
