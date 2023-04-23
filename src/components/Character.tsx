import { CHARACTER } from "@/@types"

interface CharacterProps {
  character: CHARACTER;
}

export default function Character({ character }: CharacterProps) {
  return (
    <div className='bg-white h-20 rounded shadow-sm flex gap-2 hover:scale-105 transition-transform'>
      <img
        src={character.image.large}
        alt="Profile"
        className="w-1/3 h-full object-cover"
      />
      <div>
        <p className="mb-4 font-bold text-primary">{character.name.userPreferred}</p>
        <small>{character.name.native}</small>
      </div>
    </div>
  )
}
