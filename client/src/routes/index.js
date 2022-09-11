import { Route, Routes, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

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
  const [deceased, setDeceased] = useState([]);
  const [tributes, setTributes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/deceased').then((res) => {
      setDeceased(res.data.deceased[0]);
    });

    axios.get('http://localhost:5000/api/v1/tributes').then((res) => {
      setTributes(res.data.data.tributes);
    });
  }, []);

  const fetchDeaceasedInfo = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/deceased');
      return res.data.deceased[0];
    } catch (error) {
      return 'something went wrong';
    }
  };

  const fetchTributes = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/v1/tributes');
      console.log(res);
      return res.data.tributes;
    } catch (error) {
      return 'something went wrong';
    }
  };

  const setDeaceasedInfo = async () => {
    const projects = await fetchDeaceasedInfo();
    setDeceased(projects);
  };

  const setTributesInfo = async () => {
    const projects = await fetchTributes();
    setTributes(projects);
  };

  // const tributes = [
  //   {
  //     name: 'Agu Ejindu',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Euphoria zimuzor',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Eugene Lenglet',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Jane Humphrey',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etiboksdjf',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Agu Ejindu',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Euphoria zimuzor',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Eugene Lenglet',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Jane Humphrey',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  //   {
  //     name: 'Samuel Etibo',
  //     heading: 'A Tribute to my beloved',
  //     tribute: 'Lorem dolor sit  amet',
  //   },
  // ];

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route
              path=""
              element={<Home tributes={tributes} deceased={deceased} />}
            />
            <Route path="/write" element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;