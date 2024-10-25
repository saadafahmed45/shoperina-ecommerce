import React from "react";

const SkeletonCard = () => {
  const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="mx-2 my-8">
      <div className="grid grid-cols-2 gap-2 md:gap-6 lg:grid-cols-4 items-center">
        {item.map((item) => (
          <div
            key={item}
            className="flex flex-col m-2 md:m-4 rounded-lg shadow-md w-full animate-pulse h-80 sm:h-72 md:h-80 lg:h-96"
          >
            <div className="w-full h-full p-4 flex flex-col space-y-4">
              {/* Image skeleton */}
              <div className="w-full h-48 sm:h-44 md:h-52 lg:h-56 bg-gray-300 rounded-lg"></div>

              {/* Title skeleton */}
              <div className="w-3/4 h-4 bg-gray-200 rounded-lg"></div>

              {/* Price skeleton */}
              <div className="w-1/4 h-4 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
