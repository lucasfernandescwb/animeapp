import { ANIME, GET_MEDIA_QUERY } from "@/@types"
import { useMedia } from "@/hooks/useMedia"
import Card from "./Card"

export default function Feed({ sort, seasonYear, title }: GET_MEDIA_QUERY) {
  const { data, error, loading } = useMedia(sort, seasonYear)

  if (loading) return <h2 className="hidden">Loading...</h2>

  return (
    <section className="text-primary-contrast mb-6">
      {error && <h2 className="mb-2">{error.message}</h2>}
      {!error && <h2 className="mb-2 text-center sm:text-start text-primary">{title}</h2>}
      
      <div className="flex items-center flex-wrap gap-4 justify-center sm:justify-normal scaleUp">
        {data.Page.media.map((anime: ANIME) => <Card key={anime.id} src={anime} />)}
      </div>
    </section>
  )
}
