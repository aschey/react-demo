import { useState } from "react"
import { Player } from "./player";
import { Square } from "./Square"


export const Board: React.FC<{}> = () => {
    // These are called hooks https://reactjs.org/docs/hooks-intro.html
    // Hooks are the most common method of dealing with state
    // We need hooks in order to persist state through re-renders
    // Re-renders happen whenever something changes and the DOM needs to update
    const [squares, setSquares] = useState<Player[]>(Array(9).fill(undefined));
    const [nextPlayer, setNextPlayer] = useState(Player.X);

    const calculateWinner = (): Player | undefined => {
        // Check all possible winning combinations to see if a player has won
        const lines = [
            // horizontal
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            // vertical
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            // diagonal
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            // There's a winner if three in a row are equal
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return undefined;
    }

    const handleClick = (i: number): void => {
        // If the game is over or the square has already been clicked, do nothing
        if (calculateWinner() || squares[i]) {
            return;
        }

        squares[i] = nextPlayer;
        // Note that setSquares(squares) will not work here because React needs to detect that the state variable has changed
        // For primitive types such as string and integers this works as expected
        // For complex types such as arrays and objects, you must create a new object instead of passing the existing one
        // [...squares] uses the spread operator to recreate the array in memory
        setSquares([...squares]);
        setNextPlayer(next => next === Player.X ? Player.O : Player.X);
    }

    const renderSquare = (i: number): JSX.Element => {
        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
    }

    const winner = calculateWinner();

    return <div>
        <div className="status">
            {winner ? `Winner: ${winner}` : `Next player: ${nextPlayer}`}
        </div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
}