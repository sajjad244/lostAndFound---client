/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {Link} from "react-router-dom";

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
    status,
  } = item || {};

  return (
    <div className="card  bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure>
        <img
          src={imageURL}
          alt={title}
          className="h-48 w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title text-lg font-semibold text-gray-700">
            {title}
          </h2>
        </div>
        <p className="badge text-sm  text-white  bg-orange-600">{status}</p>

        <p className="text-sm text-gray-600">
          <span className="font-medium">Category:</span> {PostType}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Location:</span> {location}
        </p>
        <p className="text-xs text-gray-500">{date}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} className="btn btn-sm btn-outline   ">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
