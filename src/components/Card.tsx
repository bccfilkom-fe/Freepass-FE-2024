import { truncateText } from "@utils/truncateText";
import { Link } from "react-router-dom";

const Card = ({
  type,
  id,
  name,
  image,
}: {
  type: string;
  id: string;
  name: string;
  image: string;
}) => {
  return (
    <div key={id} className="flex flex-col gap-2 cursor-pointer py-8">
      <Link to={`/${type}/${id}`}>
        <img src={image} alt="" className="w-96 h-96" />
        <h3 className="mt-4">{truncateText(name, 20)}</h3>
      </Link>
    </div>
  );
};

export default Card;
