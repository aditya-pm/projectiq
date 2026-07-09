type LogoProps = {
  size?: number
}

function Logo({ size = 30 }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <path
        d="M50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80C56.5 80 62.5 77.8 67.3 74.1L80 86"
        stroke="var(--pq-primary)"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="45" y="40" width="10" height="20" rx="2" fill="var(--pq-primary)" />
    </svg>
  )
}

export default Logo
