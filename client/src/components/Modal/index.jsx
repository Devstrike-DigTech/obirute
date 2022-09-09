import React from 'react';
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Index = ({ dialog, closeModal, heading, tribute, name }) => {
  let [isOpen, setIsOpen] = useState(false);

  // function closeModal() {
  //   setIsOpen(false);
  // }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={dialog} as={Fragment}>
        <Dialog
          open={dialog}
          onClose={() => setIsOpen(false)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mx-auto rounded bg-white max-w-3xl">
                  <Dialog.Title className="text-4xl leading-relaxed text-gray-600 justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    {heading}
                    <div className="text-sm block"> by {name}</div>
                  </Dialog.Title>

                  <div className="relative p-6 flex-auto">
                    {tribute}
                    {/* <p className="my-4 text-slate-500 text-md leading-relaxed">
                      feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                      Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                      gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                      vulputate rutrum vel nec justo. Phasellus vitae est id
                      felis congue pharetra vitae vel enim. Etiam vulputate sit
                      amet lacus venenatis aliquam. Nam dignissim ex non eros
                      scelerisque tempor. Donec eget quam sed justo faucibus.
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                      Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                      gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                      vulputate rutrum vel nec justo. Phasellus vitae est id
                      felis congue pharetra vitae vel enim. Etiam vulputate sit
                      amet lacus venenatis aliquam. Nam dignissim ex non eros
                      scelerisque tempor. Donec eget quam sed justo faucibus.
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                      Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                      gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                      vulputate rutrum vel nec justo. Phasellus vitae est id
                      felis congue pharetra vitae vel enim. Etiam vulputate sit
                      amet lacus venenatis aliquam. Nam dignissim ex non eros
                      scelerisque tempor. Donec eget quam sed justo faucibus.
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                      Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                      gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                      vulputate rutrum vel nec justo. Phasellus vitae est id
                      felis congue pharetra vitae vel enim. Etiam vulputate sit
                      amet lacus venenatis aliquam. Nam dignissim ex non eros
                      scelerisque tempor. Donec eget quam sed justo faucibus.
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                      Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                      gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                      vulputate rutrum vel nec justo. Phasellus vitae est id
                      felis congue pharetra vitae vel enim. Etiam vulputate sit
                      amet lacus venenatis aliquam. Nam dignissim ex non eros
                      scelerisque tempor. Donec eget quam sed justo faucibus.
                    </p>
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      feugiat magna. Nam ac nibh libero. In eget venenatis ex.
                      Vestibulum lacinia felis eget sem cursus, eu egestas nisi
                      gravida. Vivamus a diam nisi. Fusce aliquam velit non est
                      vulputate rutrum vel nec justo. Phasellus vitae est id
                      felis congue pharetra vitae vel enim. Etiam vulputate sit
                      amet lacus venenatis aliquam. Nam dignissim ex non eros
                      scelerisque tempor. Donec eget quam sed justo faucibus.
                    </p> */}
                  </div>
                  <div className="flex items-center justify-end border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => closeModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Index;
