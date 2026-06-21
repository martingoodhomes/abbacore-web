import React from 'react'

type LogoSize = 'sm' | 'md' | 'lg'

interface AbbaCoreLogoProps {
  size?: LogoSize
  dark?: boolean
}

const sizeMap = {
  sm: { iconSize: 24, textClass: 'text-base'  },
  md: { iconSize: 32, textClass: 'text-xl'    },
  lg: { iconSize: 44, textClass: 'text-2xl'   },
}

export function AbbaCoreIcon({ size = 32, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,4 76,72 58,72 40,36 22,72 4,72" fill={dark ? '#ffffff' : '#0d0f14'} />
      <polygon points="40,36 31,54 40,64 49,54" fill="#2563eb" />
    </svg>
  )
}

export default function AbbaCoreLogo({ size = 'md', dark = false }: AbbaCoreLogoProps) {
  const { iconSize, textClass } = sizeMap[size]
  return (
    <div className="flex items-center gap-2 select-none">
      <AbbaCoreIcon size={iconSize} dark={dark} />
      <span
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className={`font-bold tracking-tight ${textClass}`}
      >
        <span style={{ color: dark ? '#ffffff' : '#0d0f14' }}>ABBA</span>
        <span style={{ color: '#2563eb' }}>CORE</span>
      </span>
    </div>
  )
}
