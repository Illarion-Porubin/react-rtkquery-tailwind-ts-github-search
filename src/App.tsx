import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage/HomePage";
import { FavoritePage } from "./pages/favoritePage/FavoritePage";
import { Navigation } from "./components/Navigations";

function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
      <h1 className="font-bold text-center mt-10">Hello world!</h1>
    </>
  );
}

export default App;
