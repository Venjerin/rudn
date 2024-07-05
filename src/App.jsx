import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main/Main";
import { Rudn } from "./pages/Rudn/Rudn";
import Error404 from "./pages/Error404/Error404";
import { Science } from "./pages/Science/Science";
import { Education } from "./pages/Education/Education";
import { Phoenix } from "./pages/Phoenix/Phoenix";
import { useState } from "react";

function App() {
  const [isBlur, setBlur] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main isBlur={isBlur} setBlur={setBlur}></Main>}></Route>
        <Route path="/rudn" element={<Rudn isBlur={isBlur} setBlur={setBlur}></Rudn>}></Route>
        <Route path="/employees" element={<Error404></Error404>}></Route>
        <Route path="/science" element={<Science isBlur={isBlur} setBlur={setBlur}></Science>}></Route>
        <Route path="/education" element={<Education isBlur={isBlur} setBlur={setBlur}></Education>}></Route>
        <Route path="/clinic" element={<Error404></Error404>}></Route>
        <Route path="/facial-prosthetic" element={<Error404></Error404>}></Route>
        <Route path="/phoenix" element={<Phoenix isBlur={isBlur} setBlur={setBlur}></Phoenix>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
