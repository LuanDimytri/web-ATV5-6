const Anime = require('../models/anime');

class AnimeRepository {
  constructor() {
    this.animes = [];
  }

  create(animeData) {
    const newAnime = new Anime(Date.now(), animeData.name, animeData.genre, animeData.studio);
    this.animes.push(newAnime);
    return newAnime;
  }

  findById(id) {
    return this.animes.find(anime => anime.id === id);
  }

  findAll() {
    return this.animes;
  }

  update(id, animeData) {
    const anime = this.findById(id);
    if (anime) {
      anime.name = animeData.name || anime.name;
      anime.genre = animeData.genre || anime.genre;
      anime.studio = animeData.studio || anime.studio;
      return anime;
    }
    return null;
  }

  delete(id) {
    const index = this.animes.findIndex(anime => anime.id === id);
    if (index !== -1) {
      const deletedAnime = this.animes.splice(index, 1);
      return deletedAnime[0];
    }
    return null;
  }
}

module.exports = new AnimeRepository();
