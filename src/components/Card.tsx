import Link from "next/link"

interface CardProps {
  src: {
    id: number;
    title: { userPreferred: string }
    coverImage: { extraLarge: string }
  }
}

export default function Card({ src }: CardProps) {
  return (
    <div className={`w-[190px] h-[310px] group hover:cursor-pointer`}>
      <Link href={`/anime/${src.id}`}>
        <img
          src={src.coverImage.extraLarge}
          alt={src.title.userPreferred}
          className='w-full h-[90%] rounded shadow-sm group-hover:scale-105 transition-transform mb-2'
        /></Link>
      <Link href={`/anime/${src.id}`} className="card-title">{src.title.userPreferred}</Link>
    </div>
  )
}
