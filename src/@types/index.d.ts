export type GET_MEDIA_QUERY = {
    sort: 'POPULARITY_DESC' | 'POPULARITY' | 'TRENDING' | 'TRENDING_DESC'
    seasonYear?: number;
    title: string;
}

export type MEDIA = {
    id: number;
    title: { userPreferred: string }
    coverImage: { extraLarge: string }
}

export type ANIME = {
    id: number;
    title: { userPreferred: string }
    bannerImage: string;
    coverImage: { extraLarge: string }
    description: string;
    format: string;
    seasonYear: string;
    season: string;
}

export type CHARACTER = {
    id: number;
    name: { userPreferred: string; native: string; };
    image: { large: string };
}
