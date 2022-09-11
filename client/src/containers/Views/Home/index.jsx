import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import ReactPaginate from 'react-paginate';
import Modal from '../../../components/Modal/index';
import { useLocation } from 'react-router-dom';

const Home = ({ tributes, deceased }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [dialog, setDialog] = useState(false);
  const itemsPerPage = 12;

  //dialog props
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [tribute, setTribute] = useState('peoples Tribute');

  useEffect(() => {
    // if (tributes > 0) {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(tributes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tributes.length / itemsPerPage));
    // }
  }, [itemOffset, itemsPerPage, tributes]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tributes.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
    var getMeTo = document.getElementById('tributes');
    getMeTo.scrollIntoView({ behavior: 'smooth' }, true);
  };

  const closePopup = () => {
    setDialog(false);
  };
  const openPopup = (val) => {
    if (val === 'main') {
      setName('Family');
      setHeading('Tribute to Mama');
      setTribute(deceased.bio);
    } else {
      setHeading(tributes[val].heading);
      setTribute(tributes[val].tribute);
      setName(tributes[val].name);
    }
    setDialog(true);
  };

  return (
    <>
      <section className="px-3 py-5 bg-neutral-100 lg:py-10">
        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
            <p
              className="text-4xl font-bold md:text-7xl text-orange-600"
              data-aos="fade-right"
            >
              Biography
            </p>
            <p className="text-4xl font-bold md:text-7xl" data-aos="fade-in">
              Mrs Nk Uzor
            </p>
            <p className="mt-2 text-sm md:text-lg">1956 - 2022</p>
            <button
              className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800"
              onClick={() => openPopup('main')}
            >
              Read
            </button>
          </div>
          <div className="order-1 lg:order-2">
            {deceased.images && (
              <img
                className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
                src={`http://localhost:5000/images/uploads/${deceased.images[1]}`}
                alt=""
              />
            )}
          </div>
        </div>
      </section>

      {/* tributes */}
      <section id="tributes">
        <div className="max-w-6xl px-5 mx-auto mt-12 text-center">
          <h2
            className="text-4xl font-bold text-center text-gray-600"
            data-aos="fade-in"
          >
            Tributes to Mama
          </h2>

          {tributes && (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-24 gap-10">
              {currentItems.map((e, i) => (
                <div
                  key={i}
                  className="items-center p-6 space-y-6 rounded-lg bg-neutral-100"
                  data-aos="fade-up"
                >
                  <h5 className="text-lg font-bold text-gray-600">{e.name}</h5>
                  <p className="text-sm text-darkGrayishBlue leading-relaxed">
                    {e.tribute}
                  </p>
                  <div className="text-center">
                    <button
                      className="rounded-full p-1 px-6 baseline hover:bg-brightRedLight text-darkGrayishBlue bg-brightRedSupLight"
                      onClick={() => openPopup(i)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />

      {/* <Modal></Modal> */}
      <Modal
        dialog={dialog}
        name={name}
        tribute={tribute}
        heading={heading}
        closeModal={closePopup}
      ></Modal>
    </>
  );
};

export default Home;