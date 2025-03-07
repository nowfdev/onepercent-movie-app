import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import ImgTemp from "../assets/temp-1.jpeg";
import IconPlay from "../assets/play-button.png";

const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="py-2 px-3 text-md text-white bg-gradient-to-r from-red-700 to-red-400">
            13+
          </p>
          <div className="flex flex-col space-y-4 text-white text-[40px] font-bold">
            <h2>Queen of tears</h2>
          </div>
          <div className=" flex items-center space-x-3">
            <img src={IconRating} alt="rating" className="w-8 h-8"></img>
            <img src={IconRating} alt="rating" className="w-8 h-8"></img>
            <img src={IconRating} alt="rating" className="w-8 h-8"></img>
            <img src={IconRating} alt="rating" className="w-8 h-8"></img>
            <img
              src={IconRatingHalf}
              alt="ratingHaft"
              className="w-8 h-8"
            ></img>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            magni quas quis error accusamus rerum maiores itaque excepturi
            possimus totam consequuntur culpa omnis doloremque impedit suscipit
            quia, aliquam nobis fugiat. dasd
          </p>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-white bg-red-700 font-bold text-sm uppercase">
              Booking
            </button>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img src={ImgTemp} className="w-full h-full object-cover"></img>
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={IconPlay}
                alt="play"
                className="w-16 h-16 relative z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
