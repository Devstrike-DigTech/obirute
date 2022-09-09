import React from 'react';
import './index.css';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Modal from '../../../components/Modal/index';

const Home = ({ tributes }) => {
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
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(tributes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tributes.length / itemsPerPage));
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
      setTribute(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
      reiciendis. Eum laboriosam nostrum deserunt alias. Velit
      blanditiis veritatis nobis eveniet quod voluptatum in sequi,
      debitis necessitatibus alias? Non, maiores ratione?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
      reiciendis. Eum laboriosam nostrum deserunt alias. Velit
      blanditiis veritatis nobis eveniet quod voluptatum in sequi,
      debitis necessitatibus alias? Non, maiores ratione?`);
    } else {
      setHeading(tributes[val].heading);
      setTribute(tributes[val].tribute);
      setName(tributes[val].name);
    }
    setDialog(true);
  };

  return (
    <>
      {/* navbar  */}
      <nav className="container mx-auto p-2 bg-veryLightGray">
        <div className="flex items-center justify-between">
          <div className="logo">Obirute</div>
          <ul>
            <li>
              <a
                className="text-white rounded-md bg-slate-500 px-4 py-2"
                href="/write"
              >
                write tribute
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* hero section */}
      <section id="hero">
        <div className="container flex flex-col-reverse md:flex-row space-y-0 md:space-y-0 mt-10 mx-auto">
          {/* biography goes here */}
          <div className="flex flex-col mb-3 md:w-1/2">
            <h1 className="max-w-md text-2xl font-bold text-center md:5xl md:text-left text-gray-600">
              Tribute to Our Mom, sister, wife, grandmother and friend.
            </h1>

            <p className="max-w-sm text-left md:text-left py-4 text-slate-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              reiciendis. Eum laboriosam nostrum deserunt alias. Velit
              blanditiis veritatis nobis eveniet quod voluptatum in sequi,
              debitis necessitatibus alias? Non, maiores ratione?
            </p>

            <p className="max-w-sm text-left md:text-left py-4 text-slate-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              reiciendis. Eum laboriosam nostrum deserunt alias. Velit
              blanditiis veritatis nobis eveniet quod voluptatum in sequi,
              debitis necessitatibus alias? Non, maiores ratione?
            </p>

            <div className="flex justify-center md:justify-start">
              <button
                className="rounded-full p-1 px-6 baseline hover:bg-brightRedLight text-veryDarkBlue bg-veryLightGray"
                onClick={() => openPopup('main')}
              >
                Read more
              </button>
            </div>
          </div>
          {/* images */}
          <div className="md:w-1/2">
            <img
              src="images.jpeg"
              alt="Rest well mama"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* tributes */}
      <section id="tributes">
        <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-center text-gray-600">
            Tributes to Mama
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-24 gap-10">
            {currentItems.map((e, i) => (
              <div
                key={i}
                className="items-center p-6 space-y-6 rounded-lg bg-veryLightGray"
              >
                <h5 className="text-lg font-bold text-gray-600">{e.name}</h5>
                <p className="text-sm text-darkGrayishBlue leading-relaxed">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Omnis voluptates laborum, assumenda ullam, similique fugit
                  officia ducimus exercitationem maxime dolor quos voluptas
                  cupiditate sit repellendus vero dicta aliquid consectetur
                  nostrum!
                </p>
                <div className="text-center">
                  <button
                    className="rounded-full p-1 px-6 baseline hover:bg-brightRedLight text-darkGrayishBlue bg-brightRedSupLight"
                    onClick={() => openPopup(i)}
                  >
                    Read more
                  </button>
                  {/* <Modal
                    dialog={dialog}
                    name="Abu abubata"
                    tribute={e.tribute}
                    closeModal={closePopup}
                  ></Modal> */}
                </div>
              </div>
            ))}
          </div>
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

      <footer className="container mx-auto bg-veryLightGray py-6 px-2 mt-32">
        <div className="flex items-center justify-between">Devstrike</div>
      </footer>
    </>
  );
};

export default Home;
