import * as React from "react"
const GitHubIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path
        strokeDasharray={32}
        d="M12 4c1.67 0 2.61.4 3 .5.53-.43 1.94-1.5 3.5-1.5.34 1 .29 2.22 0 3 .75 1 1 2 1 3.5 0 2.19-.48 3.58-1.5 4.5-1.02.92-2.11 1.37-3.5 1.5.65.54.5 1.87.5 2.5v3M12 4c-1.67 0-2.61.4-3 .5C8.47 4.07 7.06 3 5.5 3c-.34 1-.29 2.22 0 3-.75 1-1 2-1 3.5 0 2.19.48 3.58 1.5 4.5 1.02.92 2.11 1.37 3.5 1.5-.65.54-.5 1.87-.5 2.5v3"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="32;0"
        />
      </path>
      <path
        strokeDasharray={10}
        strokeDashoffset={10}
        d="M9 19c-1.41 0-2.84-.56-3.69-1.19-.84-.63-1.09-1.66-2.31-2.31"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.7s"
          dur="0.2s"
          to={0}
        />
      </path>
    </g>
  </svg>
)
export default GitHubIcon
