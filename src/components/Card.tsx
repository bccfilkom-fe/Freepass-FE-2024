import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  image,
}: {
  id: string;
  name: string;
  image: string;
}) => {
  return (
    <div key={id} className="flex flex-col gap-2 cursor-pointer">
      <Link to={`/playlist/${id}`}>
        <img src={image} alt="" className="w-96 h-96" />
        <h3>{name}</h3>
      </Link>
    </div>
  );
};

export default Card;
