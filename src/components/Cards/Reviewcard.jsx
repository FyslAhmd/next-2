import { useState } from "react";

const ReviewCard = ({ reviewData }) => {
  const {
    user,
    email,
    photo,
    rating,
    review,
    likes,
    date,
  } = reviewData;

  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 space-y-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-gray-800">{user}</h3>
          <p className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`text-lg ${
                i < rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 leading-relaxed">{review}</p>

      {/* Actions */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 text-sm font-medium transition ${
            liked
              ? "text-orange-500"
              : "text-gray-500 hover:text-orange-500"
          }`}
        >
          <span>{liked ? "❤️" : "🤍"}</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
