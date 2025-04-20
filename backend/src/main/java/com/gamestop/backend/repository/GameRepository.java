package com.gamestop.backend.repository;

import com.gamestop.backend.model.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
    List<Game> findByCategory(String category);
    List<Game> findByIsAvailableTrue();
    List<Game> findByTitleContainingIgnoreCase(String title);
} 