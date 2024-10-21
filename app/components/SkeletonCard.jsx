import React from "react";

const SkeletonCard = () => {
  // const item = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className=" mx-8 lg:mx-4 my-16  space-x-4 ">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center place-items-center">
        {item.map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-4 rounded shadow-md w-56 animate-pulse h-80"
          >
            <div className=" lg:w-full ">
              <div className="w-full h-64 bg-gray-300 rounded-lg "></div>

              <h1 className="w-52 h-2 mt-4 bg-gray-200 rounded-lg "></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 rounded-lg "></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
