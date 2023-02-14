let bestSellingAlbums = [
    {
      artist: "Michael Jackson",
      title: "Thriller",
      year: 1982,
      genres: ["pop", "post-disco", "funk", "rock"],
      sale: 70000000,
    },
    {
      artist: "AC/DC",
      title: "Back in Black",
      year: 1980,
      genres: ["hard rock"],
      sale: 50000000,
    },
    {
      artist: "Whitney Houston",
      title: "The Bodyguard",
      year: 1992,
      genres: ["r&b", "soul", "pop", "soundtrack"],
      sale: 45000000,
    },
    {
      artist: "Pink Floyd",
      title: "The Dark Side of the Moon",
      year: 1973,
      genres: ["progressive rock"],
      sale: 45000000,
    },
    {
      artist: "Eagles",
      title: "Their Greatest Hits (1971 - 1975)",
      year: 1976,
      genres: ["country rock", "soft rock", "folk rock"],
      sale: 44000000,
    },
    {
      artist: "Eagles",
      title: "Hotel California",
      year: 1976,
      genres: ["soft rock"],
      sale: 42000000,
    },
    {
      artist: "Shania Twain",
      title: "Come On Over",
      year: 1997,
      genres: ["country", "pop"],
      sale: 40000000,
    },
    {
      artist: "Fleetwood Mac",
      title: "Rumours",
      year: 1977,
      genres: ["soft rock"],
      sale: 40000000,
    },
];

// DO NOT MODIFY THE CODE ABOVE THIS LINE
// WRITE YOUR CODE BELOW THIS LINE
let averageSale = 0;
for (const album of bestSellingAlbums) {
    averageSale += album.sale;
}
averageSale /= bestSellingAlbums.length;
console.log(averageSale);

let averageAge = 0;
for (const album of bestSellingAlbums) {
    averageAge += (2023 - album.year);
}
averageAge /= bestSellingAlbums.length;
console.log(averageAge);

let newestAlbum = bestSellingAlbums[0];
for (const album of bestSellingAlbums) {
    if (album.year > newestAlbum.year) {
        newestAlbum = album;
    }
}
console.log(newestAlbum);

let oldestAlbum = bestSellingAlbums[0];
for (const album of bestSellingAlbums) {
    if (album.year < oldestAlbum.year) {
        oldestAlbum = album;
    }
}
console.log(oldestAlbum);

let eaglesSum = 0;
for (let i = 0; i < bestSellingAlbums.length; i++) {
    const album = bestSellingAlbums[i];
    if (album.artist === "Eagles") {
        eaglesSum += album.sale; 
    }
}
console.log(eaglesSum);

for (const album of bestSellingAlbums) {
    if (album.artist === "Michael Jackson" && album.title === "Thriller") {
        album.iLikeIt = false;
    } else if (album.artist === "Eagles" && album.title === "Hotel California") {
        album["iLikeIt"] = false;
    } else if (album.artist === "Pink Floyd" || album.title === "The Dark Side of the Moon") {
        album["iLikeIt"] = false;
    } else {
        album.iLikeIt = true;
    }
}
console.log(bestSellingAlbums);

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
  {name: "averageSale", content: averageSale, type: "number"},
    {name: "averageAge", content: averageAge, type: "number"},
    {name: "newestAlbum", content: newestAlbum, type: "object"},
    {name: "oldestAlbum", content: oldestAlbum, type: "object"},
    {name: "albumsOfEagles", content: albumsOfEagles, type: "object"}
  ]
} catch (error) {
  toExport = {error: error.message}
}

export {toExport};

