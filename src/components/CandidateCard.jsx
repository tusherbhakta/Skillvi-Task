import React from "react";
import { Star } from "lucide-react"; // modern star icon

const CandidateCard = ({ name, role, experience, rating }) => {
  return (
    <div className="glass w-72 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Candidate Info */}
      <h2 className="text-2xl font-semibold text-white">{name}</h2>
      <p className="text-lg text-white/80">{role}</p>
      <p className="text-lg text-white/70">Experience: {experience} years</p>

      {/* Rating */}
      <div className="flex items-center gap-1 mt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-white/30"}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateCard;
