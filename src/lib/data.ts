export interface Movie {
    id: string;
    title: string;
    year: number;
    director: string;
    poster: string; // URL to image
    rating: number; // IMDb
    synopsis: string;
}

export interface Comparison {
    id: string;
    original: Movie;
    remake: Movie;
    votes: {
        original: number;
        remake: number;
    };
}

export const comparisons: Comparison[] = [
    {
        id: "oldboy",
        original: {
            id: "oldboy-2003",
            title: "Oldboy",
            year: 2003,
            director: "Park Chan-wook",
            poster: "https://image.tmdb.org/t/p/w500/pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
            rating: 8.4,
            synopsis: "After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.",
        },
        remake: {
            id: "oldboy-2013",
            title: "Oldboy",
            year: 2013,
            director: "Spike Lee",
            poster: "https://image.tmdb.org/t/p/w500/5Kg7gr3z8jN9L9o6M5v499b78.jpg",
            rating: 5.7,
            synopsis: "A man, obsessed with vengeance, sets out to find out why he was kidnapped and locked in a solitary cell for twenty years without reason.",
        },
        votes: {
            original: 1250,
            remake: 120,
        },
    },
    {
        id: "psycho",
        original: {
            id: "psycho-1960",
            title: "Psycho",
            year: 1960,
            director: "Alfred Hitchcock",
            poster: "https://image.tmdb.org/t/p/w500/zV8K39l9f9e9l999.jpg",
            rating: 8.5,
            synopsis: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
        },
        remake: {
            id: "psycho-1998",
            title: "Psycho",
            year: 1998,
            director: "Gus Van Sant",
            poster: "https://image.tmdb.org/t/p/w500/fItdqv4iUvD2yXjI6QoHj8Gq.jpg",
            rating: 4.6,
            synopsis: "A young female embezzler arrives at the Bates Motel, which has terrible secrets.",
        },
        votes: {
            original: 890,
            remake: 45,
        },
    },
    {
        id: "lion-king",
        original: {
            id: "lion-king-1994",
            title: "The Lion King",
            year: 1994,
            director: "Roger Allers, Rob Minkoff",
            poster: "https://image.tmdb.org/t/p/w500/sKCr78MXRG3hJORHW5GFryDFZ9i.jpg",
            rating: 8.5,
            synopsis: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        },
        remake: {
            id: "lion-king-2019",
            title: "The Lion King",
            year: 2019,
            director: "Jon Favreau",
            poster: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNKI9VtQI5f5ox65KP.jpg",
            rating: 6.8,
            synopsis: "After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery.",
        },
        votes: {
            original: 3400,
            remake: 2100,
        },
    },
];
