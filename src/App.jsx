import { Route, createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom';
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";
import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={ <h1>My App</h1>} />)
);

const App = () => {
  return <RouterProvider router={router} />
};

export default App;
