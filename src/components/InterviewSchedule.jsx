
import React from "react";
import { Calendar, Clock, User } from "lucide-react"; // icons

const InterviewSchedule = ({ date, time, interviewer, name }) => {
  return (
    <div className="glass p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
      {/* Title */}
      <h3 className="font-semibold text-3xl text-white mb-4 flex items-center gap-2">
        {/* <Calendar className="text-yellow-400" size={} /> */}
        Interview Schedule
      </h3>

      {/* Details */}
      <div className="space-y-2 text-white/80 text-lg">
        <p className="text-xl font-semibold text-white">Candidate: {name}</p>
        <p className="flex items-center gap-2">
          <Calendar size={18} className="text-white/60" /> {date}
        </p>
        <p className="flex items-center gap-2">
          <Clock size={18} className="text-white/60" /> {time}
        </p>
        <p className="flex items-center gap-2">
          <User size={18} className="text-white/60" /> {interviewer}
        </p>
      </div>
    </div>
  );
};

export default InterviewSchedule;
