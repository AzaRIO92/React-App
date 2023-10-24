import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TextComponent from "./components/TextComponent";
import ScrollbarComponent from "./components/ScrollbarComponent";
import PaginationComponent from "./components/PaginationComponent";
import RatingComponent from "./components/RatingComponent";
import CardComponent from "./components/CardComponent";

const cards = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" }
];

const texts = ["London - Capital of the UK", "Madrid - Capital of the Spain", "Bishkek - Capital of the Kyrgyzstan"];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/cards" element={<CardComponent cards={cards} />} />
        <Route path="/textcomponent" element={<TextComponent texts={texts} />} />
        <Route path="/scrollbar" element={<ScrollbarComponent />} />
        <Route
          path="/pagination"
          element={<PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}
        />
        <Route path="/rating" element={<RatingComponent />} />
      </Routes>
    </>
  );
};

export default App;











