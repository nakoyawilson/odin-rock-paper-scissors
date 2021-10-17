function computerPlay() {
    const moves = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
}