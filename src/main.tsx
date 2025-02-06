import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './layouts/MainLayout.tsx'
import { Provider } from 'react-redux'
import { store } from './store'

import Home from './pages/HomePage.tsx'
import About from './pages/AboutPage.tsx'
import Movies from './pages/MoviesPage.tsx'
import MovieDetails from './pages/MovieDetailsPage.tsx'
import NotFound from './pages/NotFoundPage.tsx'

import 'react-loading-skeleton/dist/skeleton.css'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)