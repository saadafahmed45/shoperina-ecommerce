import React from "react";

const SkeletonCard = () => {
  const item = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return (
    <div className=" mx-8 lg:mx-4 my-16  space-x-4 ">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 items-center place-items-center">
        {item.map((item) => (
          <div
            key={item.id}
            className="flex flex-col m-8 rounded shadow-md w-60 sm:w-80 animate-pulse h-96"
          >
            <div className="h-28 rounded-t dark:bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
              <div className="w-full h-6 rounded dark:bg-gray-300"></div>
              <div className="w-full h-6 rounded dark:bg-gray-300"></div>
              <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
