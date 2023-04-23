import Character from "@/components/Character"
import Metatags from "@/components/Metatags"
import { useAnime } from "@/hooks/useAnime"
import { useRouter } from "next/router"

export default function AnimeDetails() {
    const { id } = useRouter().query
    const { data, error, loading } = useAnime(Number(id))

    if (loading) return <h2>Loading...</h2>

    if (error) return <h2>{error.message}</h2>

    return (
        <section>
            <Metatags title={`AnimeApp - ${data.Media.title.userPreferred}`} description={data.Media.description} />
            <header className="relative z-50">
                {data.Media.bannerImage && (
                    <div
                        style={{ backgroundImage: `url(${data.Media.bannerImage})` }}
                        className="h-[320px] bg-cover bg-no-repeat bg-[50% 35%] mt-[-70px]">
                        <div className="w-full h-full bg-black/20"></div>
                    </div>
                )}

                <div className="bg-white min-h-[280px]">
                    <div className="wrapper py-4 flex flex-col items-center sm:flex-row  sm:items-start gap-4">
                        <div className={`w-[215px] ${data.Media.bannerImage ? 'mt-[-180px]' : ''}`}>
                            <img
                                src={data.Media.coverImage.extraLarge}
                                alt="Cover"
                                className="rounded shadow-sm w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-[calc(100%_-_215px)]">
                            <h2 className="mb-4 text-center sm:text-start">{data.Media.title.userPreferred}</h2>
                            <div dangerouslySetInnerHTML={{ __html: data.Media.description }}></div>
                        </div>
                    </div>
                </div>

                <div className="wrapper top flex gap-4">
                    <aside className="hidden sm:w-[215px] sm:flex flex-col gap-4 bg-white rounded p-4">
                        <div>
                            <p>Format</p>
                            <p>{data.Media.format}</p>
                        </div>
                        <div>
                            <p>Episodes</p>
                            <p>{data.Media.episodes}</p>
                        </div>
                        <div>
                            <p>Genres</p>
                            {data.Media.genres.map((g: string) => (
                                <div key={g} className="text-primary">
                                    <span>{g}</span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p>Status</p>
                            <p>{data.Media.status}</p>
                        </div>
                        <div>
                            <p>Average Score</p>
                            <p>{data.Media.averageScore}%</p>
                        </div>
                        <div>
                            <p>Season</p>
                            <p>{data.Media.season}</p>
                        </div>
                        <div>
                            <p>Source</p>
                            <p>{data.Media.source}</p>
                        </div>
                    </aside>
                    <section className="w-full sm:w-[calc(100%_-_215px)]">
                        <h3 className="mb-4">Most popular characters</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-4">
                            {data.Media.characters.nodes.map((c: any) => <Character key={c.id} character={c} mediaId={data.Media.id} />)}
                        </div>
                    </section>
                </div>
            </header>
        </section>
    )
}
