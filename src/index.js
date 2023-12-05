import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Index from "./pages/Index";
import Root from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

// Store
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AddPost = React.lazy(() => import("./pages/AddPost"));
const PostDetails = React.lazy(() => import("./pages/PostDetails"));
const EditPost = React.lazy(() => import("./pages/EditPost"));

const paramsHandler = (data) => {
  let postId = data.params.id;
  if (isNaN(postId)) {
    throw new Response("Bad Request", {
      statusText: "Insert correct post id",
      status: 400,
    });
  }
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "post/add",
        element: (
          <Suspense fallback="Loading...">
            <AddPost />
          </Suspense>
        ),
      },
      {
        path: "post",
        element: <Index />,
      },
      {
        path: "post/:id",
        element: (
          <Suspense fallback="Loading...">
            <PostDetails />
          </Suspense>
        ),
        loader: paramsHandler,
      },
      {
        path: "post/:id/edit",
        element: (
          <Suspense fallback="Loading...">
            <EditPost />
          </Suspense>
        ),
        loader: paramsHandler,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={route}></RouterProvider>
  </Provider>
);
