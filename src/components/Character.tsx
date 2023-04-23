import { CHARACTER } from "@/@types"
import Link from "next/link";

interface CharacterProps {
  character: CHARACTER;
  mediaId: number;
}

export default function Character({ character, mediaId }: CharacterProps) {
  return (
    <Link href={`${mediaId}/${character.id}`} className='bg-white h-20 rounded shadow-sm flex gap-2 hover:scale-105 transition-transform'>
      <img
        src={character.image.large}
        alt="Profile"
        className="w-1/3 h-full object-cover"
      />
      <div>
        <p className="mb-4 font-bold text-primary">{character.name.userPreferred}</p>
        <small>{character.name.native}</small>
      </div>
    </Link>
  )
}
