import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { lazy, Suspense, useState, useEffect } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));
const App = () => {
  const [userName, setuserName] = useState();

  useEffect(() => {
    const data = {
      user: "lakshmi",
    };
    setuserName(data.user);
  }, []);

  return (
    <Provider store={appStore}>
      {/* <UserContext.Provider value={{ loggedInUser: userName, setuserName }}> */}
        <div className="App">
          <Header />
          <Outlet />
        </div>
      {/* </UserContext.Provider> */}
    </Provider>
  );
};
export const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.......</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default App;
