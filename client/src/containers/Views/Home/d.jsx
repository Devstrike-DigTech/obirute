import React from 'react';
import { useEffect, useState } from 'react';

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-xl font-semibold">Modal Title</h3>
                </div>

                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                    Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                    gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                    vulputate rutrum vel nec justo. Phasellus vitae est id felis
                    congue pharetra vitae vel enim. Etiam vulputate sit amet
                    lacus venenatis aliquam. Nam dignissim ex non eros
                    scelerisque tempor. Donec eget quam sed justo faucibus.
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                    Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                    gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                    vulputate rutrum vel nec justo. Phasellus vitae est id felis
                    congue pharetra vitae vel enim. Etiam vulputate sit amet
                    lacus venenatis aliquam. Nam dignissim ex non eros
                    scelerisque tempor. Donec eget quam sed justo faucibus.
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                    Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                    gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                    vulputate rutrum vel nec justo. Phasellus vitae est id felis
                    congue pharetra vitae vel enim. Etiam vulputate sit amet
                    lacus venenatis aliquam. Nam dignissim ex non eros
                    scelerisque tempor. Donec eget quam sed justo faucibus.
                  </p>
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                    Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                    gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                    vulputate rutrum vel nec justo. Phasellus vitae est id felis
                    congue pharetra vitae vel enim. Etiam vulputate sit amet
                    lacus venenatis aliquam. Nam dignissim ex non eros
                    scelerisque tempor. Donec eget quam sed justo faucibus.
                  </p>
                </div>
                <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Index;
