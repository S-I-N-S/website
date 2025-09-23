import React from 'react'

const GameDayLogo = ({ size = 24, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Football field background */}
    <rect 
      x="2" 
      y="6" 
      width="20" 
      height="12" 
      rx="1" 
      stroke={color} 
      strokeWidth="1.5" 
      fill="none"
      opacity="0.3"
    />
    
    {/* Field lines */}
    <line x1="12" y1="6" x2="12" y2="18" stroke={color} strokeWidth="1" opacity="0.5" />
    <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
    
    {/* Football */}
    <ellipse 
      cx="8" 
      cy="10" 
      rx="1.5" 
      ry="1" 
      fill={color} 
      opacity="0.8"
    />
    
    {/* Football laces */}
    <line x1="7.5" y1="9.5" x2="8.5" y2="9.5" stroke="var(--color-onPrimary)" strokeWidth="0.3" />
    <line x1="7.5" y1="10.5" x2="8.5" y2="10.5" stroke="var(--color-onPrimary)" strokeWidth="0.3" />
    
    {/* Goal posts */}
    <line x1="3" y1="6" x2="3" y2="4" stroke={color} strokeWidth="1.5" />
    <line x1="2" y1="4" x2="4" y2="4" stroke={color} strokeWidth="1.5" />
    
    <line x1="21" y1="6" x2="21" y2="4" stroke={color} strokeWidth="1.5" />
    <line x1="20" y1="4" x2="22" y2="4" stroke={color} strokeWidth="1.5" />
    
    {/* Stats visualization elements */}
    <circle cx="16" cy="9" r="0.8" fill={color} opacity="0.6" />
    <circle cx="18" cy="11" r="0.8" fill={color} opacity="0.8" />
    <circle cx="17" cy="13" r="0.8" fill={color} opacity="0.6" />
    
    {/* Chart/Graph icon */}
    <path 
      d="M5 15L7 13L9 14L11 12" 
      stroke={color} 
      strokeWidth="1.5" 
      fill="none" 
      opacity="0.7"
    />
    <circle cx="5" cy="15" r="0.5" fill={color} />
    <circle cx="7" cy="13" r="0.5" fill={color} />
    <circle cx="9" cy="14" r="0.5" fill={color} />
    <circle cx="11" cy="12" r="0.5" fill={color} />
  </svg>
)

export default GameDayLogo
