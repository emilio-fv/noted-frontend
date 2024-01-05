import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; 
import ArtistProfile from './pages/ArtistProfile';
import AlbumProfile from './pages/AlbumProfile';
import ConnectPage from './pages/Connect';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/Landing';
import MusicPage from './pages/Music';
import ReviewsPage from './pages/Reviews';
import Root from './pages/Root';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import { useSelector } from 'react-redux';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<LandingPage />}/>
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn}/>}>
          <Route path='/home' element={<Dashboard />}/>
          {/* <Route path='/music' element={<MusicPage />}/> */}
          {/* <Route path='/connect' element={<ConnectPage />}/> */}
          {/* <Route path='/reviews' element={<ReviewsPage />}/> */}
          {/* <Route path='/user' element={<UserProfile />}/> */}
          {/* <Route path='/artist' element={<ArtistProfile />}/> */}
          {/* <Route path='/album' element={<AlbumProfile />}/> */}
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
};

export default App;