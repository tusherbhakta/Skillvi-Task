
import React from "react";
import { Star } from "lucide-react"; // star icon for rating

const FeedbackCard = ({ company, rating, notes }) => {
  return (
    <div className="glass w-80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Company Name */}
      <h2 className="text-xl font-semibold text-white">{company}</h2>

      {/* Rating with icons */}
      <div className="flex items-center gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"}
          />
        ))}
      </div>

      {/* Notes */}
      <p className="mt-3 text-lg text-white/80">{notes}</p>
    </div>
  );
};

export default FeedbackCard;
