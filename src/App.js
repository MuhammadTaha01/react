import './App.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pagesJSX/home';
import About from './pagesJSX/aboutus'
import Contact from './pagesJSX/contact'
import SafeZoneAreas from './pagesJSX/safezoneareas'
import DestroyedAreas from './pagesJSX/destroyedareas'
import Captured from './pagesJSX/capturedareas'

function App() {

  let allRoutes = createBrowserRouter(
    [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'About-Hackunia',
        element: <About/>
      },
      {
        path: 'Contact-Hackunia',
        element: <Contact/>
      },
      {
        path: 'Safezone-Areas',
        element: <SafeZoneAreas/>
      },
      {
        path: 'Destroyed-Areas',
        element: <DestroyedAreas/>
      },
      {
        path: 'Captured-Areas',
        element: <Captured/>
      }
    ]
  )

  return (
    <div className="App">
      <RouterProvider router={allRoutes}/>
    </div>
  );
}

export default App;
