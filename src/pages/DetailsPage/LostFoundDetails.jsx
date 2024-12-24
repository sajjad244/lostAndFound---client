import {useContext, useState} from "react";
import {useLoaderData, useParams} from "react-router-dom";
import AuthContext from "../../Provider/AuthContext";
import RecoveryModal from "../../Components/RecoveryModal";

const LostFoundDetails = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const {user} = useContext(AuthContext);
  const item = data.find((item) => item._id == id);
  const {PostType, title, description, imageURL, location, date, category} =
    item || {};

  // modal and form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recoveredLocation, setRecoveredLocation] = useState("");
  const [recoveredDate, setRecoveredDate] = useState(new Date());

  // Modal Submit Handler
  const handleSubmit = () => {
    const recoveredInfo = {
      item,
      recoveredLocation,
      recoveredDate: recoveredDate.toISOString().slice(0, 10),
      recoveredBy: {
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
      },
    };

    console.log("Recovery Info Submitted:", recoveredInfo);
    // TODO: Send this data to the server from here ///

    //
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 shadow-lg rounded-lg ">
      <img
        src={imageURL}
        alt={title}
        className="rounded-md w-full h-96 object-cover mb-4"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="badge text-sm font-serif bg-purple-600">{PostType}</p>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-600 mb-4">Category: {category}</p>
      <p className="text-sm text-gray-500">Location: {location}</p>
      <p className="text-sm text-gray-500">Date: {date}</p>

      {/* conditional button */}
      <button
        className="btn btn-primary mt-4"
        onClick={() => setIsModalOpen(true)}
      >
        {PostType === "Lost" ? "Found This!" : "This is Mine!"}
      </button>

      {/* Recovery Modal */}
      <RecoveryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        recoveredLocation={recoveredLocation}
        setRecoveredLocation={setRecoveredLocation}
        recoveredDate={recoveredDate}
        setRecoveredDate={setRecoveredDate}
        user={user}
        postType={PostType}
      ></RecoveryModal>
    </div>
  );
};

export default LostFoundDetails;
