import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AddNewCalculator from "./components/AddNewCalculator";
import CalculatorList from "./components/CalculatorList";

export default function App() {
  return (
      <>
        <HashRouter>
          <Routes>
            <Route path="/" element={<CalculatorList />} />
            <Route path="/add-calculator" element={<AddNewCalculator />} />
            <Route path="*" element={<div>Page not found! </div>} />
          </Routes>
        </HashRouter>
      </>
  );
}