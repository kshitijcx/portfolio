import Hero from "./_components/Hero";
import Weather from "./_components/Weather";
import LatestBlogs from "./_components/LatestBlogs";

const Home = () => {
  return (
      <div className="grid grid-cols-3 grid-rows-2 gap-6 max-md:gap-4 animate-pop max-md:flex flex-col max-md:px-6 max-md:mb-4">
        <div>
          <Hero />
        </div>
        <div>
          <Weather />
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-1">
          <LatestBlogs/>
        </div>
      </div>
  );
};
export default Home;
