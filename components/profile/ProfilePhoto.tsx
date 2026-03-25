import Image from 'next/image'

interface ProfilePhotoProps {
  src?: string
  alt: string
  initials: string
  size?: number
}

export function ProfilePhoto({ src, alt, initials, size = 96 }: ProfilePhotoProps) {
  const containerStyle = { width: size, height: size }

  if (!src) {
    return (
      <div
        className="rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white text-2xl font-light shrink-0"
        style={containerStyle}
        role="img"
        aria-label={alt}
      >
        {initials}
      </div>
    )
  }

  return (
    <div
      className="rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0"
      style={containerStyle}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="object-cover w-full h-full"
        priority
      />
    </div>
  )
}
