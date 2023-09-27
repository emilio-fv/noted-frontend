import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; 
import ConnectPage from './pages/Connect';
import HomePage from './pages/Home';
import LandingPage from './pages/Landing';
import MusicPage from './pages/Music';
import Root from './pages/Root';
import ReviewsPage from './pages/Reviews';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<LandingPage />}/>
        {/* TODO: handle protected routes */}
        <Route path='/home' element={<HomePage />}/>
        <Route path='/music' element={<MusicPage />}/>
        <Route path='/reviews' element={<ReviewsPage />}/>
        <Route path='/connect' element={<ConnectPage />}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
};

export default App;