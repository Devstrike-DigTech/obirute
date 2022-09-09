import React from 'react';
import { useState } from 'react';

const Write = () => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState(null);
  const [tribute, setTribute] = useState('');

  // Error variables
  const [nameError, setNameError] = useState('');
  const [relationshipError, setRelationshipError] = useState('');
  const [tributeError, setTributeError] = useState('');

  const submitRequest = (e) => {
    e.preventDefault();

    //validate input
    setNameError('');
    setRelationshipError('');
    setTributeError('');
    if (!name) return setNameError('Name is required.');
    if (!relationship) {
      return setRelationshipError('Relationship to mama should be stated.');
    }
    if (!tribute) return setTributeError('tribute is required.');
    const data = {
      name,
      relationship,
      phone,
      image,
      tribute,
    };
    console.log(data);
  };

  const tributeChange = (e) => {
    setTribute(e.target.value);

    // const trib = tribute.split(' ');
    // const isLess = trib.length < 5;
    // if (isLess) {
    //   setTribute(e.target.value);
    // } else {
    //   return setTributeError('tribute should be less than 5 words');
    // }
  };

  // const keyUp = (e) => {
  //   const trib = tribute.split(' ');
  //   const isLess = trib.length < 5;
  //   if (!isLess) {
  //     if (e.keyCode == 8 || e.keyCode == 46) {
  //       const newTrib = tribute.split('');
  //       const newOne = newTrib.slice(0, 1);
  //       console.log(newOne);
  //       // setTribute(newTrib);
  //     }
  //   }
  // };

  return (
    <>
      <nav className="container mx-auto p-2 bg-veryLightGray">
        <div className="flex items-center justify-between">
          <div className="logo">Obirute</div>
          <ul>
            <li>
              <a
                className="text-white rounded-md bg-slate-500 px-4 py-2"
                href="/"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>

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
                  placeholder="Jane"
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
                    relationshipError
                      ? 'appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                      : 'appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  }
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">
                  {relationshipError}
                </p>
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
                  placeholder="Your fullname"
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
                placeholder="This is a textarea placeholder"
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
