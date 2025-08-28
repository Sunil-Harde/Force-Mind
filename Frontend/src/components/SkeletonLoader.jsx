// components/SkeletonLoader.jsx
const SkeletonLoader = () => {
  return (
    <div className=" w-screen h-screen text-center px-4 bg-gray-600 flex justify-center items-center flex-col">
      <div className="animate-pulse space-y-4 w-full max-w-3xl mx-auto text-center px-4 ">
        <div className="h-6 bg-gray-800 rounded w-1/3 mx-auto" />
        <div className="h-12 bg-gray-800 rounded w-3/4 mx-auto" />
        <div className="h-4 bg-gray-800 rounded w-full" />
        <div className="h-4 bg-gray-800 rounded w-5/6 mx-auto" />
        <div className="flex justify-center gap-4 mt-6">
          <div className="h-10 w-32 bg-gray-800 rounded" />
          <div className="h-10 w-32 bg-gray-800 rounded" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
