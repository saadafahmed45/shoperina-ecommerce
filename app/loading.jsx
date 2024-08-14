import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center p-16 h-screen">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    </div>
  );
};

export default loading;
