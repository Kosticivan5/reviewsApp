import person from "../src/assets/person-3.jpeg";

const ReviewsArticle = ({ name, image, text, job }) => {
  return (
    <div className="flex flex-col text-center justify-between items-center md:flex-row md:text-left ">
      <div className="rounded-full bg-blue-700 w-24 h-24 shadow-lg shadow-cyan-500/50 mb-2 sm:w-32 sm:h-32">
        <img
          className=" w-full h-full object-cover rounded-full"
          src={image}
          alt={name}
        />
      </div>
      <article className="flex flex-col font-semibold sm:w-3/4">
        <h2 className="capitalize text-2xl ">{name}</h2>
        <h4 className="capitalize text-slate-400 mb-3 ">{job}</h4>
        <p className="text-grey text-xs sm:text-sm font-light ">{text}</p>
      </article>
    </div>
  );
};
export default ReviewsArticle;
