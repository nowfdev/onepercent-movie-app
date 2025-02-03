const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4">
        <div>Content</div>
        <div>Image</div>
      </div>
    </div>
  );
};

export default Banner;
