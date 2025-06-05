import React from 'react'

const SandboxLogo = ({ size = 24, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Container/Box */}
    <rect 
      x="3" 
      y="8" 
      width="18" 
      height="12" 
      rx="2" 
      stroke={color} 
      strokeWidth="1.5" 
      fill="none"
    />
    
    {/* Sand particles */}
    <circle cx="7" cy="14" r="1" fill={color} opacity="0.6" />
    <circle cx="12" cy="16" r="1" fill={color} opacity="0.8" />
    <circle cx="17" cy="13" r="1" fill={color} opacity="0.6" />
    <circle cx="9" cy="17" r="0.5" fill={color} opacity="0.4" />
    <circle cx="15" cy="15" r="0.5" fill={color} opacity="0.4" />
    
    {/* Security shield overlay */}
    <path 
      d="M12 3L16 5V9C16 11.5 14 13.5 12 14C10 13.5 8 11.5 8 9V5L12 3Z" 
      stroke={color} 
      strokeWidth="1.5" 
      fill="none"
      opacity="0.7"
    />
  </svg>
)

export default SandboxLogo