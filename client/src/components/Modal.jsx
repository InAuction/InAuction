import React from "react";

const Card = () => {
  return (
    <>
      <div className="container flex flex-auto">
        <p className="grid-span-1 flex justify-center text-lg">Garfield</p>
        <p className="grid-span-1 flex justify-center text-lg">10,000</p>
      </div>
    </>
  );
};
export default function Modal() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal" className="modal content-center">
        <div className="full card modal-box w-1/4 bg-base-100 shadow-xl">
          <figure>
            <img
              className=""
              src="https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div className="container flex flex-auto">
              <p className="grid-span-1 flex justify-center text-lg">Bidder</p>
              <p className="grid-span-1 flex justify-center text-lg">Amount</p>
            </div>
            {[1, 1, 1, 1, 1].map((l, index) => {
              return <Card key={index} />;
            })}
            <div className="card-actions justify-around">
              <button className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral">
                +10,000
              </button>
              <button className="btn min-w-20 bg-orange-300 bg-opacity-90 text-neutral">
                +50,000
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
