import Home from './pages/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import Shows from './pages/Shows/Shows';
import Search from './pages/Search/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/explore/movies",
    element: <Movies/>
  },
  {
    path: "/explore/tv",
    element: <Shows/>
  },
  {
    path: "/search/:query",
    element: <Search/>
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
