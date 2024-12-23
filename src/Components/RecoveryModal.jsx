/* eslint-disable react/prop-types */
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RecoveryModal = ({
  isOpen,
  onClose,
  onSubmit,
  recoveredLocation,
  setRecoveredLocation,
  recoveredDate,
  setRecoveredDate,
  user,
  postType,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h3 className="text-lg font-bold mb-4">
          {postType === "Lost" ? "Confirm Found Item" : "Claim Found Item"}
        </h3>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Recovered Location */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Recovered Location
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={recoveredLocation}
              onChange={(e) => setRecoveredLocation(e.target.value)}
              placeholder="Enter the recovered location"
              required
            />
          </div>

          {/* Recovered Date */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">
              Recovered Date
            </label>
            <DatePicker
              selected={recoveredDate}
              onChange={(date) => setRecoveredDate(date)}
              className="input input-bordered w-full"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          {/* Recovered Person Info */}
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Recovered By</label>
            <div className="flex items-center gap-4">
              <img
                src={user?.photoURL || "https://via.placeholder.com/50"}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">{user?.displayName}</p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end">
            <button
              className="btn btn-success mr-2 text-white"
              onClick={onSubmit}
            >
              Submit
            </button>
            <button className="btn btn-outline" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecoveryModal;
