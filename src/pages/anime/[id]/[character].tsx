import { useRouter } from "next/router"
import { useCharacter } from "@/hooks/useCharacter"

import ReactMarkdown from 'react-markdown'
import React from "react"

export default function CharacterDetails() {
  const { character } = useRouter().query
  const { data, error, loading } = useCharacter(Number(character))

  if (loading) return <h2>Loading...</h2>

  return (
    <section className="wrapper top">
      <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2">
        <div className="w-[240px]">
          <img 
            src={data.Character.image.large} 
            alt={data.Character.name.userPreferreed} 
            className="rounded shadow-sm"
          />
        </div>

        <div className="w-full sm:w-[calc(100%_-_240px)]">
          <h2 className="text-center sm:text-start mb-2 font-bold">{data.Character.name.userPreferred}</h2>
          <p className="text-center sm:text-start mb-4">{data.Character.name.native}</p>
          <ReactMarkdown>{data.Character.description}</ReactMarkdown>
        </div>
      </div>
    </section>
  )
}
