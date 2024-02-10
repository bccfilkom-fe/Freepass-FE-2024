const SkeletonCardDetail = () => {
  return (
    <div className="shadow-xl flex flex-col md:flex-row gap-8 p-10">
      <div className={`flex flex-col items-center gap-y-8  lg:flex-row`}>
        <div className="h-[200px] w-[150px] xl:h-[500px] xl:w-[400px] bg-secGray" />
      </div>
      <div className="flex flex-col items-start gap-6 ml-4 justify-end">
        <div className="bg-secGray px-3 py-1 rounded-md w-64 h-8" />
        <div className="flex gap-2 justify-end">
          <div className="bg-secGray px-3 py-1 rounded-md h-6 w-16" />
          <div className="bg-secGray px-3 py-1 rounded-md h-6 w-16" />
          <div className="bg-secGray px-3 py-1 rounded-md h-6 w-16" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardDetail;
