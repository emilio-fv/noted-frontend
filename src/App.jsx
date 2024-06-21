import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; 
import ArtistProfile from './pages/ArtistProfile';
import AlbumProfile from './pages/AlbumProfile';
import ConnectPage from './pages/Connect';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/Landing';
import MusicPage from './pages/Music';
// import ReviewsPage from './pages/Reviews';
import Root from './pages/Root';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './components/ProtectedRoute';
import { connect } from 'react-redux';
import { store } from './store';
import { musicApi } from './services/music/musicService';
import ErrorBoundary from './components/ErrorBoundary';

const App = ({ loggedInUser }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />} errorElement={<ErrorBoundary />}>
        <Route 
          index 
          element={<LandingPage />}
          loader={async () => {
            const response = await store.dispatch(musicApi.endpoints.getFeaturedAlbums.initiate());
            return response.data;
          }}
        />
        <Route element={<ProtectedRoute loggedInUser={loggedInUser}/>}>
          <Route path='/home' element={<Dashboard />} />
          <Route path='/music' element={<MusicPage />} />
          <Route path='/:artistId/artist' element={<ArtistProfile />} />
          <Route path='/:albumId/album' element={<AlbumProfile />} />
          <Route path='/connect' element={<ConnectPage />} />
          <Route path='/:username/profile' element={<UserProfile />} />
          {/* <Route path='/reviews' element={<ReviewsPage />}/> */}
        </Route>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  )
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.auth.loggedInUser,
  }
};

export default connect(mapStateToProps)(App);
