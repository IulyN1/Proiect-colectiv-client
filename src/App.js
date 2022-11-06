import './App.css';

import React from 'react';
import ProductsPage from './pages/ProductsPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ProductsPage />}>
				</Route>
			</Routes>
		</BrowserRouter>
	)
};

export default App;