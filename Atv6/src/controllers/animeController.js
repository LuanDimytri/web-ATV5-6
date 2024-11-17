const AnimeService = require('../services/animeServices');

class AnimeController {
  create(req, res) {
    try {
      const anime = AnimeService.create(req.body);
      res.status(201).json(anime);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  findAll(req, res) {
    const animes = AnimeService.findAll();
    res.status(200).json(animes);
  }

  findById(req, res) {
    const anime = AnimeService.findById(Number(req.params.id));
    if (anime) {
      res.status(200).json(anime);
    } else {
      res.status(404).json({ message: 'Anime não encontrado' });
    }
  }

  update(req, res) {
    const updatedAnime = AnimeService.update(Number(req.params.id), req.body);
    if (updatedAnime) {
      res.status(200).json(updatedAnime);
    } else {
      res.status(404).json({ message: 'Anime não encontrado' });
    }
  }

  delete(req, res) {
    const deletedAnime = AnimeService.delete(Number(req.params.id));
    if (deletedAnime) {
      res.status(200).json(deletedAnime);
    } else {
      res.status(404).json({ message: 'Anime não encontrado' });
    }
  }
}

module.exports = new AnimeController();
