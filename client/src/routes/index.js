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
import Dashboard from '../containers/Views/Dashboard';

const Router = () => {
  const [deceased, setDeceased] = useState([]);
  const [tributes, setTributes] = useState([]);
  useEffect(() => {
    axios
      .get('https://tributetoourbeloved.site/api/v1/deceased')
      .then((res) => {
        setDeceased(res.data.deceased[0]);
      });

    fetchTribute().then((res) => setTributes(res.data.data.tributes));
    //   axios.get('https://tributetoourbeloved.site/api/v1/tributes').then((res) => {
    //   setTributes(res.data.data.tributes);
    // });
  }, []);

  const fetchTribute = async () => {
    try {
      const res = axios.get('https://tributetoourbeloved.site/api/v1/tributes');
      // const res = axios.get('http://localhost:5000/api/v1/tributes');
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  const searchForName = (val) => {
    if (val) {
      const tribute = tributes.filter(({ name }) =>
        name.toLowerCase().includes(val.toLowerCase())
      );
      setTributes(tribute);
    } else {
      fetchTribute().then((res) => setTributes(res.data.data.tributes));
    }
  };

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainLayout emitSearchValue={searchForName} />}
          >
            <Route
              path=""
              element={<Home tributes={tributes} deceased={deceased} />}
            />
            <Route path="/write" element={<Write />} />
            <Route
              path="/dashboard/589b6423364a2dfbc7a4b6eda470e10138e198d2644f6f0cb082133499f53bbd"
              element={<Dashboard tributes={tributes} />}
            />
          </Route>
          {/* <Route path="/dashboard" element={<AdminLayout />}>
            <Route path="" element={<Dashboard tributes={tributes} />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
