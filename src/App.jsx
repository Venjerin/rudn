import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import { Main } from "./pages/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
