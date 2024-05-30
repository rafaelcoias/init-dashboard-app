import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';

function App() {

	const Layout = ({ children }: { children: any }) => {
		return (
			<div className='flex flex-col oitocentos:flex-row'>
				<Navbar />
				<div className='w-full text-[var(--black)] pt-[5rem] oito:pt-0 oito:pl-[17rem]'>
					{children}
				</div>
			</div>
		);
	};

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<Login />} />
					<Route path="/home" element={<Layout><Home /></Layout>} />
					<Route path="*" element={<NotFoundPage/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
