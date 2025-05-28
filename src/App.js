import {
  createBrowserRouter,
  //BrowserRouter,

  Route,
  // Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Skills from "./pages/skills"
import Education from "./pages/Education";



//layouts
import RootLayout from "./layouts/RootLayout";
import Help from "./layouts/Help";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/education" element={<Education/>} />
    
      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)
function App() {
  return (
   
    <RouterProvider router={router} />

  );
}

export default App
