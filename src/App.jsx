import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ContextProvider } from "./ContextApi";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Country } from "./pages/Country";
import { AppLayout } from "./layout/AppLayout";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./pages/CountryDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/country", element: <Country /> },
        { path: "/country/:name", element: <CountryDetails /> },
      ],
    },
  ]);

  return (
    // <ContextProvider.Provider>
      <RouterProvider router={router} />
    // </ContextProvider.>
  );
}

export default App;

// Todo Old Way to Create Route
// const router = createBrowserRouter(
//   createRoutesFromElements(
//    <Route path="/" element={<AppLayout />}>
//      <Route path="/" element={<Home />} />
//      <Route path="/about" element={<About />} />
//      <Route path="/contact" element={<Contact />} />
//      <Route path="/country" element={<Country />} />
//    </Route>
//   )
//  );

// todo New Way to Create Route
// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <AppLayout />,
//       children: [
//         { path: "/", element: <Home /> },
//         { path: "/about", element: <About /> },
//         { path: "/contact", element: <Contact /> },
//         { path: "/country", element: <Country /> },
//       ],
//     },
//   ]
// );
