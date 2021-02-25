const songsMapper = (songs) => {
  return songs.map((song, index) => ({
    originalId: song.id,
    newId: `n${song.id}`,
    name: song.name,
    alias: song.alia[0], // if no alia: undefined
    mv: song.mv ? song.mv : null,
    artists: song.ar.map((artist) => {
      return {
        name: artist.name,
        id: artist.id,
      }
    }),
    album: {
      name: song.al.name,
      id: song.al.id,
    },
    platform: 'netease',
  }));
};

module.exports = songsMapper;