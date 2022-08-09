import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Delete, DeleteD, EditD, Homepage, Reactions, SearchBar } from "./containers";
import { Blog } from "./containers";
import { Section } from "./containers";
import Drafts from "./containers/Section/drafts/Drafts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/new" element={<Section />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/deleteD" element={<DeleteD />} />
          <Route path="/drafts" element={<Drafts />} />
          <Route path="/editD" element={<EditD />} />
          <Route path="/reactions" element={<Reactions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
