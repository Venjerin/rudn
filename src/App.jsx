import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Rudn } from "./pages/Rudn/Rudn";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/rudn" element={<Rudn></Rudn>}></Route>
        <Route path="/employees" element={<Main></Main>}></Route>
        <Route path="/science" element={<Main></Main>}></Route>
        <Route path="/education" element={<Main></Main>}></Route>
        <Route path="/clinic" element={<Main></Main>}></Route>
        <Route path="/facial-prosthetic" element={<Main></Main>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
