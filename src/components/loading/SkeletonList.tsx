const SkeletonList = () => {
  return (
    <div className="bg-white h-[400px] shadow-xl flex flex-col justify gap-12 py-20 px-16">
      <div className="h-8 w-96 md:w-[750px] xl:[1200px] bg-secGray"></div>
      <div className="h-8 w-96 md:w-[750px] xl:[1200px] bg-secGray"></div>
      <div className="h-8 w-96 md:w-[750px] xl:[1200px] bg-secGray"></div>
      <div className="h-8 w-96 md:w-[750px] xl:[1200px] bg-secGray"></div>
    </div>
  );
};

export default SkeletonList;
