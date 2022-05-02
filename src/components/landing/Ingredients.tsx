import React, { useEffect } from 'react';
import { ScrollTrigger, Tween } from 'react-gsap';

export default function Ingredients() {
  return (
    <>
      <div className="h-screen relative w-full overflow-hidden" id="skills">
        <ScrollTrigger scrub={2} start="bottom bottom" end={'top top'}>
          <Tween to={{ x: '1000px' }}>
            <div className="absolute top-1/2">
              <Icon id={1} />
            </div>
          </Tween>
          <Tween to={{ y: '-1000px' }} duration={2000}>
            <div className="absolute bottom-0 left-1/2">
              <Icon id={2} />
            </div>
          </Tween>
          <Tween to={{ x: '-1000px' }}>
            <div className="absolute right-0 top-1/2">
              <Icon id={3} />
            </div>
          </Tween>
        </ScrollTrigger>
      </div>
    </>
  );
}

function Icon({ id }: { id: number }) {
  switch (id) {
    case 1:
      return (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          <title>Clara Barton</title>
          <mask
            id="mask__beam"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
          </mask>
          <g mask="url(#mask__beam)">
            <rect width="36" height="36" fill="#405059"></rect>
            <rect
              x="0"
              y="0"
              width="36"
              height="36"
              transform="translate(5 3) rotate(191 18 18) scale(1.2)"
              fill="#edd75a"
              rx="6"
            ></rect>
            <g transform="translate(7 0) rotate(-1 18 18)">
              <path
                d="M15 21c2 1 4 1 6 0"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
              ></path>
              <rect
                x="13"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
              <rect
                x="21"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
            </g>
          </g>
        </svg>
      );
    case 2:
      return (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          <title>Willa Cather</title>
          <mask
            id="mask__beam"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
          </mask>
          <g mask="url(#mask__beam)">
            <rect width="36" height="36" fill="#0c8f8f"></rect>
            <rect
              x="0"
              y="0"
              width="36"
              height="36"
              transform="translate(4 4) rotate(280 18 18) scale(1.1)"
              fill="#ffad08"
              rx="36"
            ></rect>
            <g transform="translate(0 -2) rotate(0 18 18)">
              <path
                d="M15 20c2 1 4 1 6 0"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
              ></path>
              <rect
                x="14"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
              <rect
                x="20"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#000000"
              ></rect>
            </g>
          </g>
        </svg>
      );
    case 3:
      return (
        <svg
          viewBox="0 0 36 36"
          fill="none"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          <title>Margaret Chase</title>
          <mask
            id="mask__beam"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="36"
            height="36"
          >
            <rect width="36" height="36" rx="72" fill="#FFFFFF"></rect>
          </mask>
          <g mask="url(#mask__beam)">
            <rect width="36" height="36" fill="#edd75a"></rect>
            <rect
              x="0"
              y="0"
              width="36"
              height="36"
              transform="translate(1 1) rotate(183 18 18) scale(1)"
              fill="#0c8f8f"
              rx="36"
            ></rect>
            <g transform="translate(-7 0) rotate(3 18 18)">
              <path
                d="M15 19c2 1 4 1 6 0"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
              ></path>
              <rect
                x="11"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#FFFFFF"
              ></rect>
              <rect
                x="23"
                y="14"
                width="1.5"
                height="2"
                rx="1"
                stroke="none"
                fill="#FFFFFF"
              ></rect>
            </g>
          </g>
        </svg>
      );
  }
  return <></>;
}
