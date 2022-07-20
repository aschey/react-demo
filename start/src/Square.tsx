import { Player } from "./player";

interface SquareProps {
  onClick: () => void;
  value: Player;
}

export const Square: React.FC<SquareProps> = ({ onClick, value }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
