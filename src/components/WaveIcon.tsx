export default function WaveIcon({ className = "w-20 h-8" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 80 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M2 16C2 16 8 8 16 16C24 24 32 8 40 16C48 24 56 8 64 16C72 24 78 16 78 16" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}
