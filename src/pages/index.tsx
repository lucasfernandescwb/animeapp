import Feed from "@/components/Feed"
import Metatags from "@/components/Metatags"
import Welcome from "@/components/Welcome"

export default function Home() {
  return (
    <main className="wrapper py-4">
      <Metatags description="Search & Track Animes" />
      <Welcome />
      <Feed sort="TRENDING_DESC" title='Trending Now' />
      <Feed sort="POPULARITY_DESC" seasonYear={2023} title='Popular this season' />
      <Feed sort="POPULARITY_DESC" title='All time popular' />
    </main>
  )
}
