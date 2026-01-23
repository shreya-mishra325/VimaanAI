const PlaneAnimation = () => {
  return (
    <div className="relative w-full h-72">
      <svg
        viewBox="0 0 400 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M20 150 C 140 40, 260 40, 380 150"
        fill="none"
        stroke="#93c5fd"
        strokeWidth="1.5"
        strokeDasharray="6 6"
        strokeOpacity="0.5"
        />

        <g>
          <g transform="rotate(90)">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="#2563eb"
            >
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3-1 3 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </g>

          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            rotate="auto"
            path="M20 150 C 140 40, 260 40, 380 150"
          />
        </g>
      </svg>
    </div>
  );
};

export default PlaneAnimation;
