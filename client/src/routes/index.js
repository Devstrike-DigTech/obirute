import { Route, Routes, BrowserRouter } from 'react-router-dom';

/**
 * import Layouts
 */
import MainLayout from '../containers/Layouts/MainLayout';
// import UserLayout from "../containers/Layouts/UserLayout";
/**
 * import views
 */
import Home from '../containers/Views/Home';
import Write from '../containers/Views/Write';

const Router = () => {
  const tributes = [
    {
      name: 'Agu Ejindu',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Euphoria zimuzor',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Eugene Lenglet',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Jane Humphrey',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etiboksdjf',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Agu Ejindu',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Euphoria zimuzor',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Eugene Lenglet',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Jane Humphrey',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
    {
      name: 'Samuel Etibo',
      heading: 'A Tribute to my beloved',
      tribute: 'Lorem dolor sit  amet',
    },
  ];

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home tributes={tributes} />} />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
