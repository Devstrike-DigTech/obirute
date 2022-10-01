import React from 'react';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Modal from '../../../components/Modal/index';
import { toast } from 'react-toastify';
import axios from 'axios';

const Dashboard = ({ tributes }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [dialog, setDialog] = useState(false);
  const itemsPerPage = 12;

  //dialog props
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [tribute, setTribute] = useState('peoples Tribute');
  const [relationship, setRelationship] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    // if (tributes > 0) {
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(tributes.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tributes.length / itemsPerPage));
    // }
  }, [itemOffset, itemsPerPage, tributes]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tributes.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
    var getMeTo = document.getElementById('tributes');
    getMeTo.scrollIntoView({ behavior: 'smooth' }, true);
  };

  const closePopup = () => {
    setDialog(false);
  };
  const openPopup = (val) => {
    setHeading(currentItems[val].heading);
    setTribute(currentItems[val].tribute);
    setName(currentItems[val].name);
    setImage(currentItems[val].image);
    setRelationship(currentItems[val].relationship);
    setDialog(true);
  };

  const deleteTribute = (id) => {
    try {
      axios.delete(`https://tributetoourbeloved.site/api/v1/tributes/${id}`);
      // axios.delete(`http://localhost:5000/api/v1/tributes/${id}`);
      toast.success('Tribute deleted successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        className: {
          background: '#00FF00 !important',
        },
      });
      window.location.reload();
    } catch (e) {
      console.log(e);
      toast.error('Error! Something went wrong', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  return (
    <>
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
                    {`${e.tribute.replace(/<[^>]*>?/gm, '').substring(0, 25)}`}
                  </p>
                  <div className="text-center">
                    <button
                      className="rounded-full p-1 px-6 baseline hover:bg-brightRedLight text-darkGrayishBlue bg-brightRedSupLight"
                      onClick={() => openPopup(i)}
                    >
                      Read more
                    </button>
                    <button
                      className="p-2"
                      onClick={() => {
                        deleteTribute(e._id);
                      }}
                    >
                      <i className="fa fa-trash"></i>
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
        image={image}
        isAdmin={'yes'}
        relationship={relationship}
      ></Modal>
    </>
  );
};

export default Dashboard;
