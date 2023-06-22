// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       { index: true, element: <HomePage /> },
//       { path: "about", element: <AboutPage /> },
//       { path: "contact", element: <ContactPage /> },
//     ],
//   },
// ]);

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage, { homePageLoader } from "./Pages/Home/HomePage.jsx";
import AboutPage from "./Pages/About/AboutPage.jsx";
import ContactPage, { contactAction } from "./Pages/Contact/ContactPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import PostsPage from "./Pages/Posts/PostsPage.jsx";
import Posts, { postsLoader } from "./components/Posts/Posts.jsx";
import CategoryPage from "./Pages/Category/CategoryPage.jsx";
import Category, { categoryLoader } from "./components/Category/Category.jsx";
import PostPage, { postLoader } from "./Pages/Post/PostPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index loader={homePageLoader} element={<HomePage />} />
      <Route path="contact" action={contactAction} element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="posts" element={<PostsPage />}>
        <Route index loader={postsLoader} element={<Posts />} />
      </Route>
      <Route path="category" element={<CategoryPage />}>
        <Route
          path=":categoryName"
          loader={categoryLoader}
          element={<Category />}
        />
      </Route>
      <Route path="post">
        <Route path=":postUrl" loader={postLoader} element={<PostPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// TODO Search results (and search complete)
// TODO Subscribe page
// TODO Authors page and search by author (add new keyNames to db.json)
