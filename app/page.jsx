import Hero from "./_components/Hero";
import Weather from "./_components/Weather";
import LatestBlogs from "./_components/LatestBlogs";

const Home = () => {
  return (
      <div className="grid grid-cols-3 grid-rows-2 gap-6">
        <div>
          <Hero />
        </div>
        <div>
          <Weather />
        </div>
        <div className="col-span-2 row-span-2 col-start-2 row-start-1">
          <LatestBlogs className="h-full" />
        </div>
      </div>
  );
};
export default Home;
