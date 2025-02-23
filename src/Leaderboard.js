import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
    const players = [
        { rank: 1, name: "Player Name", score: 2980, stars: 5, medal: "gold" },
        { rank: 2, name: "Player Name", score: 2721, stars: 4, medal: "silver" },
        { rank: 3, name: "Player Name", score: 2579, stars: 4, medal: "bronze" },
        { rank: 4, name: "Player Name", score: 1874, stars: 3 },
        { rank: 5, name: "Player Name", score: 1756, stars: 3 },
        { rank: 6, name: "Player Name", score: 1756, stars: 3 },
        { rank: 7, name: "Player Name", score: 1756, stars: 3 },
    ];

    const renderStars = (numStars) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < numStars ? "star filled" : "star"}>★</span>
        ));
    };

    return (
        <div className="leaderboard-container">
            <h1 className="leaderboard-title">LEADERBOARD</h1>
            <div className="leaderboard">
                {players.map((player, index) => (
                    <div key={index} className="player-row">
                        <div className="player-rank">
                            {player.medal ? (
                                <img
                                    src={process.env.PUBLIC_URL + `/images/${player.medal}.png`} // Updated to use PUBLIC_URL
                                    alt={`${player.medal} medal`}
                                    className="medal-icon"
                                />
                            ) : 
                            player.rank === 2 ? (
        <img
            src={process.env.PUBLIC_URL + "/images/silver.png"}
            alt="Silver medal"
            className="medal-icon"
        />
    ) : player.rank === 3 ? (
        <img
            src={process.env.PUBLIC_URL + "/images/bronze.png"}
            alt="Bronze medal"
            className="medal-icon"
        />
    ) : 
                            
                            (
                                <span>{player.rank}</span>
                            )}
                        </div>
                        <div className="player-avatar">
                            <img src="/images/player1.png" alt="Player Avatar" />
                        </div>
                        <div className="player-info">
                            <span className="player-name">{player.name}</span>
                            <div className="player-stars">{renderStars(player.stars)}</div>
                        </div>
                        <div className="player-score">{player.score}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leaderboard;
