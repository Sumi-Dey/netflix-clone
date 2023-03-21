import React from "react";
import './App.scss';
import Navbar from "./components/general/navbar/Navbar";
import EntryPage from "./pages/entryPage/EntryPage";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import MainMovie from "./pages/mainMovie/MainMovie";

const App = () => {
    return (
        <div>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/mainmovie/:id' element={<MainMovie />} />
                    <Route path="/login" element={<EntryPage />} />
                </Routes>
        </div>
    )
}

export default App;