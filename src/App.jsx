import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Rudn } from "./pages/Rudn/Rudn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/rudn" element={<Rudn></Rudn>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
