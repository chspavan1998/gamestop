package com.gamestop.backend.model;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;

@Entity
@Table(name = "games")
@Data
public class Game {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private BigDecimal price;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private String imageUrl;

    @Column(nullable = false)
    private Integer minPlayers;

    @Column(nullable = false)
    private Integer maxPlayers;

    @Column(nullable = false)
    private Integer minAge;

    @Column(nullable = false)
    private Integer playTime; // in minutes

    @Column(nullable = false)
    private Boolean isAvailable = true;

    @Column(nullable = false)
    private Integer stock;
} 