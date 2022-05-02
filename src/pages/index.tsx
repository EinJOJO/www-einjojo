import type { NextPage } from 'next';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Ingredients from '../components/landing/Ingredients';
import { Tween } from 'react-gsap';

const Home: NextPage = () => {
  return (
    <>
      <div className="">
        <Hero />
        <About />
      </div>
    </>
  );
};

function About() {
  return (
    <div className="mt-10 container mb-10">
      <div className="">
        <h3 className="text-center">About me</h3>
      </div>
      <div className="flex md:flex-row">
        <div className=" p-1 rounded-xl">
          <div className="bg-secondary-bg rounded-xl p-4">
            <h5>WWW</h5>
            <p>A</p>
            <p>A</p>
            <input
              type={'range'}
              className="accent-cyan-400 bg-inherit h-5"
            ></input>
            <p>A</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="h-screen" id="hero">
      <Tween
        from={{ y: 20, opacity: 0 }}
        to={{ y: 0, opacity: 1 }}
        duration={2.5}
      >
        <div className="flex justify-center items-center md:bg-hero-pattern text-center bg-center bg-no-repeat bg-auto h-5/6">
          <div className="md:bg-black/90 rounded-md px-3 sm:px-10 py-8">
            <div className="">
              <h1 className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                <span className="block mb-2 text-white text-4xl md:text-5xl uppercase">
                  I bims
                </span>{' '}
                EinJOJO
              </h1>
              <hr className="w-10 my-4 mx-auto border-teal-400"></hr>
              <p className="sub">Wasting my time, to save other{"'"}s</p>
            </div>
            <div className="mt-5">
              <Link href="/" passHref>
                <a className="btn">Learn more</a>
              </Link>
            </div>
          </div>
        </div>
      </Tween>
      <div className="absolute bottom-3 left-1/2 h-8 w-8" id="arrow">
        <Image
          src={'/img/arrow.svg'}
          alt="Arrow down"
          layout="fill"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

export default Home;
