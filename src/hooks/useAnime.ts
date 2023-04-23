import { useQuery, gql } from '@apollo/client'

const GET_ANIME = gql`
    query($id: Int) {
        Media(id: $id, type: ANIME) {
          id
          title { userPreferred }
          bannerImage
          season
          seasonYear
          type
          source
          format
          episodes
          averageScore
          status
          genres
          coverImage { extraLarge }
          description
          characters(sort: FAVOURITES_DESC, perPage: 15) {
            nodes {
              id
              name { userPreferred native }
              image { large }
            }
          }
        }
    }
`;

export const useAnime = (id: number) => {
    const { data, error, loading } = useQuery(GET_ANIME, { variables: { id } })

    return { data, error, loading }
}