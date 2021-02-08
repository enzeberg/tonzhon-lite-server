const NeteaseMusic = require('simple-netease-cloud-music');
const nm = new NeteaseMusic();

// nm.url('355992').then(data => {
//   console.log('歌曲地址', data)
// })

const getSongSource = (songId) => {
  return new Promise((resolve, reject) => {
    nm.url(songId).then(data => {
      const songSource = data.data[0].url;
      if (songSource) {
        resolve({
          songSource: songSource,
        })
      } else {
        reject({
          message: data.data[0].code,
        })
      }
    });
  });
};

module.exports = { getSongSource };