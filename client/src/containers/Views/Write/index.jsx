import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Write = () => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [tribute, setTribute] = useState('');
  const [heading, setHeading] = useState('');

  // Error variables
  const [nameError, setNameError] = useState('');
  const [relationshipError, setRelationshipError] = useState('');
  const [tributeError, setTributeError] = useState('');
  const [headingError, setHeadingError] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();

    //validate input
    setNameError('');
    setRelationshipError('');
    setTributeError('');
    if (!name) return setNameError('Name is required.');
    if (!relationship) {
      return setRelationshipError('Relationship to mummy should be stated.');
    }
    if (!tribute) return setTributeError('tribute is required.');
    if (!heading) return setHeadingError('heading is required.');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('relationship', relationship);
    formData.append('heading', heading);
    formData.append('tribute', tribute);
    if (image) {
      formData.append('image', image);
    }
    if (phone) {
      formData.append('phone', phone);
    }
    await sendTribute(formData);
  };

  const sendTribute = async (data) => {
    try {
      const res = await axios.post(
        'http://localhost:5000/api/v1/tributes',
        data
      );
      console.log(res);
      toast.success('Tribute submitted successfully!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        className: {
          background: '#00FF00 !important',
        },
      });
      setName('');
      setPhone('');
      setRelationship('');
      setImage(null);
      setHeading('');
      setTribute('');
    } catch (error) {
      toast.error('Error! Something went wrong', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    }
  };

  const tributeChange = (e) => {
    setTribute(e.target.value);
  };

  return (
    <>
      <section className="pt-16">
        <div className="container items-center justify-center flex flex-col-reverse md:flex-row space-y-0 md:space-y-0 mt-10 mx-auto">
          <form className="w-full  p-4" onSubmit={submitRequest}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  *Full Name
                </label>
                <input
                  className={
                    nameError
                      ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-first-name"
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">{nameError}</p>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  *Relationship
                </label>
                <input
                  className={
                    headingError
                      ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-last-name"
                  type="text"
                  placeholder="Friend"
                  value={heading}
                  onChange={(e) => setHeading(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">{headingError}</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Phone number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="0800000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Letter Head
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="file"
                  placeholder="letter head"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                *Heading
              </label>
              <input
                className={
                  relationshipError
                    ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                    : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                }
                id="grid-last-name"
                type="text"
                placeholder="Tribute to my beloved"
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
              />
              <p className="text-red-500 text-xs italic">{relationshipError}</p>
            </div>
            <div>
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                *Tribute
              </label>
              <p className="text-red-500 text-xs italic">{tributeError}</p>
              <textarea
                maxLength={700}
                className={
                  tributeError
                    ? 'py-3 px-4 block w-full bg-gray-200 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                    : 'py-3 px-4 block w-full bg-gray-200 border-red-500 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400'
                }
                rows="9"
                placeholder="Enter Tribute here(less than 300 words)"
                value={tribute}
                onChange={(e) => tributeChange(e)}
              ></textarea>
            </div>
            <div className="text-center pt-8">
              <button
                className="rounded-sm p-1 px-6 baseline hover:bg-brightRedLight hover:text-darkBlue text-white bg-green-600"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Write;
