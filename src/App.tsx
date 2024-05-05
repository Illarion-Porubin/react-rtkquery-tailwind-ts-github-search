import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { FavoritePage } from "./pages/favoritePage/FavoritePage";
import { Navigation } from "./components/Navigations";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritePage />} />
      </Routes>
    </>
  );
}

export default App;
