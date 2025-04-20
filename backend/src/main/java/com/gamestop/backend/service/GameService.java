package com.gamestop.backend.service;

import com.gamestop.backend.model.Game;
import com.gamestop.backend.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GameService {

    private final GameRepository gameRepository;

    @Autowired
    public GameService(GameRepository gameRepository) {
        this.gameRepository = gameRepository;
    }

    public List<Game> getAllGames() {
        return gameRepository.findAll();
    }

    public Optional<Game> getGameById(Long id) {
        return gameRepository.findById(id);
    }

    public List<Game> getGamesByCategory(String category) {
        return gameRepository.findByCategory(category);
    }

    public List<Game> getAvailableGames() {
        return gameRepository.findByIsAvailableTrue();
    }

    public List<Game> searchGames(String query) {
        return gameRepository.findByTitleContainingIgnoreCase(query);
    }

    public Game saveGame(Game game) {
        return gameRepository.save(game);
    }

    public void deleteGame(Long id) {
        gameRepository.deleteById(id);
    }

    public Game updateGame(Long id, Game gameDetails) {
        return gameRepository.findById(id)
            .map(game -> {
                game.setTitle(gameDetails.getTitle());
                game.setDescription(gameDetails.getDescription());
                game.setPrice(gameDetails.getPrice());
                game.setCategory(gameDetails.getCategory());
                game.setImageUrl(gameDetails.getImageUrl());
                game.setMinPlayers(gameDetails.getMinPlayers());
                game.setMaxPlayers(gameDetails.getMaxPlayers());
                game.setMinAge(gameDetails.getMinAge());
                game.setPlayTime(gameDetails.getPlayTime());
                game.setIsAvailable(gameDetails.getIsAvailable());
                game.setStock(gameDetails.getStock());
                return gameRepository.save(game);
            })
            .orElseThrow(() -> new RuntimeException("Game not found with id: " + id));
    }
} 