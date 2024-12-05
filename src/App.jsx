import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";

import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import Favorites from "./components/Favorites";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light");

  const location = useLocation();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async (ingredient = "") => {
    try {
      let response;
      if (ingredient) {
        response = await axios.get(
          `http://localhost:3001/recipes/search?ingredient=${ingredient}`
        );
      } else {
        response = await axios.get("http://localhost:3001/recipes");
      }
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchRecipes(searchTerm);
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Navbar>
              <h1>DefensePoint Recipe App</h1>
              <Toggle theme={theme} toggleTheme={themeToggler} />
          </Navbar>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <SearchBar
                      searchTerm={searchTerm}
                      onSearchChange={handleSearchChange}
                      onSearchSubmit={handleSearchSubmit}
                    />
                    <RecipeList recipes={recipes} />
                  </motion.div>
                }
              />
              <Route
                path="/recipe/:id"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <RecipeDetail />
                  </motion.div>
                }
              />
              <Route
                path="/favorites"
                element={
                  <motion.div
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                  >
                    <Favorites />
                  </motion.div>
                }
              />
            </Routes>
          </AnimatePresence>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
