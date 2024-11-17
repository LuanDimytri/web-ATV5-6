const animeRepository = require('../repositories/animeRepository');

class animeService {
  create(animeData) {
    if (!animeData.name || !animeData.genre || !animeData.studio) {
      throw new Error('Todos os campos são obrigatórios');
    }
    return animeRepository.create(animeData);
  }

  findAll() {
    return animeRepository.findAll();
  }

  findById(id) {
    return animeRepository.findById(id);
  }

  update(id, animeData) {
    return animeRepository.update(id, animeData);
  }

  delete(id) {
    return animeRepository.delete(id);
  }
}

module.exports = new animeService();
