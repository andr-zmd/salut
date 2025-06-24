import { BrowserRouter, Routes, Route, Router } from "react-router";
import MainLayout from "./layout/MainLayout";
import Chat from "./pages/Chat";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
