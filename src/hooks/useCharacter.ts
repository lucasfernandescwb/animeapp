import { useQuery, gql } from '@apollo/client'

const GET_CHARACTER = gql`
    query($id: Int) {
        Character(id: $id) {
            id
            name { userPreferred native alternative }
            image { large }
            description
            gender
            age
        }
    }
`;

export const useCharacter = (id: number) => {
    const { data, error, loading } = useQuery(GET_CHARACTER, { variables: { id } })

    return { data, error, loading }
}