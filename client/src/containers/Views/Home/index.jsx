import React from 'react';
import { useState, useEffect } from 'react';
import './index.css';
import ReactPaginate from 'react-paginate';
import Modal from '../../../components/Modal/index';

const Home = ({ tributes, deceased }) => {
  const [itemsOnCurrentPage, setItemsOnCurrentPage] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [dialog, setDialog] = useState(false);
  const numOfItemsPerPage = 12;

  //dialog props
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [tribute, setTribute] = useState('');
  const [relationship, setRelationship] = useState('');

  useEffect(() => {
    const setPageVariables = () => {
      const endOffset = itemOffset + numOfItemsPerPage;
      setItemsOnCurrentPage(tributes.slice(itemOffset, endOffset));
      setNumberOfPages(Math.ceil(tributes.length / numOfItemsPerPage));
    };
    setPageVariables();
  }, [itemOffset, numOfItemsPerPage, tributes]);

  const handlePageClick = (event) => {
    setItemOffset(setPageItemsStartIndex(event.selected));
    goToStartOfTributes();
  };

  const goToStartOfTributes = () => {
    var getMeTo = document.getElementById('tributes');
    getMeTo.scrollIntoView({ behavior: 'smooth' }, true);
  };

  const setPageItemsStartIndex = (paginationNumberClicked) => {
    return (paginationNumberClicked * numOfItemsPerPage) % tributes.length;
  };

  const closePopup = () => {
    setDialog(false);
  };
  const openPopup = (val) => {
    if (val === 'main') {
      setName('');
      setHeading('Tribute to Mummy');
      setTribute('');
      setRelationship('');
    } else {
      setHeading(itemsOnCurrentPage[val].heading);
      setTribute(itemsOnCurrentPage[val].tribute);
      setName(itemsOnCurrentPage[val].name);
      setRelationship(itemsOnCurrentPage[val].relationship);
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
            <p
              className="text-4xl font-bold md:text-7xl text-center"
              data-aos="fade-up"
            >
              Mrs Victoria Chinedu Uzor
            </p>
            <p className="mt-2 text-sm md:text-lg" data-aos="fade-up">
              1961 - 2022
            </p>
            <button
              className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800"
              onClick={() => openPopup('main')}
            >
              Read
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <img
              className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
              src={`./image_1663342060197.jpg`}
              alt=""
            />
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
            Tributes to Mummy
          </h2>

          {tributes && (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-24 gap-10">
              {itemsOnCurrentPage.map((e, i) => (
                <div
                  key={i}
                  className="items-center p-6 space-y-6 rounded-lg bg-neutral-100"
                  data-aos="fade-up"
                >
                  <h5 className="text-lg font-bold text-gray-600">{e.name}</h5>
                  <p className="text-sm text-darkGrayishBlue leading-relaxed">
                    {`${e.tribute.replace(/<[^>]*>?/gm, '').substring(0, 25)}`}
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
        pageCount={numberOfPages}
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
        relationship={relationship}
        closeModal={closePopup}
      ></Modal>
    </>
  );
};

export default Home;
