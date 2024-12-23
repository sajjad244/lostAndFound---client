import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({item}) => {
  const {
    PostType,
    category,
    date,
    description,
    imageURL,
    location,
    name,
    title,
    _id,
  } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={imageURL}
          alt={title}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Category:</span> {PostType}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Location:</span> {location}
        </p>
        <p className="text-xs text-gray-500">{date}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
