interface ProfileInfoProps {
  name: string
  bio: string
}

export function ProfileInfo({ name, bio }: ProfileInfoProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-white text-xl font-semibold tracking-tight">{name}</h1>
      <p className="text-white/70 text-sm leading-relaxed max-w-[240px]">{bio}</p>
    </div>
  )
}
