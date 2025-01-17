import React from 'react'

export default function Loader() {
  return (
    <div>
      <style>{`
      .pl1 {
  display: block;
  width: 8em;
  height: 8em;
}

.pl1__g,
  .pl1__rect {
  animation: pl1-a 1.5s cubic-bezier(0.65,0,0.35,1) infinite;
}

.pl1__g {
  transform-origin: 64px 64px;
}

.pl1__rect:first-child {
  animation-name: pl1-b;
}

.pl1__rect:nth-child(2) {
  animation-name: pl1-c;
}

@keyframes pl1-a {
  from {
    transform: rotate(0);
  }

  80%,
      to {
    animation-timing-function: steps(1,start);
    transform: rotate(90deg);
  }
}

@keyframes pl1-b {
  from {
    animation-timing-function: cubic-bezier(0.33,0,0.67,0);
    width: 40px;
    height: 40px;
  }

  20% {
    animation-timing-function: steps(1,start);
    width: 40px;
    height: 0;
  }

  60% {
    animation-timing-function: cubic-bezier(0.65,0,0.35,1);
    width: 0;
    height: 40px;
  }

  80%,
      to {
    width: 40px;
    height: 40px;
  }
}

@keyframes pl1-c {
  from {
    animation-timing-function: cubic-bezier(0.33,0,0.67,0);
    width: 40px;
    height: 40px;
    transform: translate(0,48px);
  }

  20% {
    animation-timing-function: cubic-bezier(0.33,1,0.67,1);
    width: 40px;
    height: 88px;
    transform: translate(0,0);
  }

  40% {
    animation-timing-function: cubic-bezier(0.33,0,0.67,0);
    width: 40px;
    height: 40px;
    transform: translate(0,0);
  }

  60% {
    animation-timing-function: cubic-bezier(0.33,1,0.67,1);
    width: 88px;
    height: 40px;
    transform: translate(0,0);
  }

  80%,
      to {
    width: 40px;
    height: 40px;
    transform: translate(48px,0);
  }
}
`}</style>
      <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#000] z-[99999]' >
         <svg height="128px" width="128px" viewBox="0 0 128 128" class="pl1">
            <defs>
               <linearGradient y2="1" x2="1" y1="0" x1="0" id="pl-grad">
                  <stop stop-color="#000" offset="0%"></stop>
                  <stop stop-color="#fff" offset="100%"></stop>
               </linearGradient>
               <mask id="pl-mask">
                  <rect fill="url(#pl-grad)" height="128" width="128" y="0" x="0"></rect>
               </mask>
            </defs>
            <g fill="var(--primary)">
               <g class="pl1__g">
                  <g transform="translate(20,20) rotate(0,44,44)">
                     <g class="pl1__rect-g">
                        <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                        <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                     </g>
                     <g transform="rotate(180,44,44)" class="pl1__rect-g">
                        <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                        <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                     </g>
                  </g>
               </g>
            </g>
            <g mask="url(#pl-mask)" fill="hsl(0deg 0% 31.64%)">
               <g class="pl1__g">
                  <g transform="translate(20,20) rotate(0,44,44)">
                     <g class="pl1__rect-g">
                        <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                        <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                     </g>
                     <g transform="rotate(180,44,44)" class="pl1__rect-g">
                        <rect height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                        <rect transform="translate(0,48)" height="40" width="40" ry="8" rx="8" class="pl1__rect"></rect>
                     </g>
                  </g>
               </g>
            </g>
         </svg>
      </div>
    </div>
  )
}
