import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-primary-bg to-secondary-bg text-white">
        <div className="h-screen">
          <div className="flex justify-center items-center sm:bg-hero-pattern text-center bg-center bg-no-repeat h-full">
            <div className="sm:bg-black/90 sm:rounded-md px-10 py-5">
              <h1>Hello</h1>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Home;
