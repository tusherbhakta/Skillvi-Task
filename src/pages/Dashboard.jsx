
// import React, { useState } from "react";
// import CandidateCard from "../components/CandidateCard";
// import InterviewSchedule from "../components/InterviewSchedule";
// import FeedbackCard from "../components/FeedbackCard";

// const Dashboard = () => {
//     const [search, setSearch] = useState("");

//     const candidates = [
//         { name: "Alice Johnson", role: "Frontend Developer", experience: 3, rating: 4 },
//         { name: "Bob Smith", role: "Backend Developer", experience: 5, rating: 5 },
//         { name: "Charlie Lee", role: "UI/UX Designer", experience: 2, rating: 3 },
//     ];

//     const filteredCandidates = candidates.filter((c) =>
//         c.name.toLowerCase().includes(search.toLowerCase())
//     );

//     return (
//         <div
//             className="w-11/12  mx-auto pt-16 min-h-screen bg-cover bg-center p-6"
//             style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}
//         >
//             <div className="p-10 glass">
//                 {/* Header with Search Bar */}
//                 <div className=" p-6 flex flex-col md:flex-row justify-between items-center gap-4">
//                     <h1 className="text-4xl  font-monument  font-bold text-white">Interview Dashboard</h1>
//                     <input
//                         type="text"
//                         placeholder="Search candidate..."
//                         className="w-64 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white outline-none border border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/40 transition"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                 </div>

//                 {/* Candidate Profiles */}
//                 <div className=" p-6">
//                     <h2 className="text-3xl font-poppins font-semibold text-white mb-4">Candidates</h2>
//                     <div className="flex flex-wrap gap-6">
//                         {filteredCandidates.map((c, i) => (
//                             <CandidateCard key={i} {...c} />
//                         ))}
//                     </div>
//                 </div>

//                 {/* Interview Schedule */}
//                 <div className=" p-6">
//                     <InterviewSchedule
//                         date="2025-09-10"
//                         time="10:00 AM"
//                         interviewer="Mr. David"
//                     />
//                 </div>

//                 {/* Feedback Section */}
//                 <div className=" p-6">
//                     <h2 className="text-3xl font-poppins font-semibold text-white mb-4">Company Feedback</h2>
//                     <div className="flex flex-wrap gap-6">
//                         <FeedbackCard company="TechCorp" rating={4} notes="Good communication skills." />
//                         <FeedbackCard company="InnoSoft" rating={5} notes="Strong technical knowledge." />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;

import React, { useState } from "react";
import CandidateCard from "../components/CandidateCard";
import InterviewSchedule from "../components/InterviewSchedule";
import FeedbackCard from "../components/FeedbackCard";

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(0); // default first candidate

  const candidates = [
    {
      name: "Alice Johnson",
      role: "Frontend Developer",
      experience: 3,
      rating: 4,
      interview: { date: "2025-09-10", time: "10:00 AM", interviewer: "Mr. David" },
    },
    {
      name: "Bob Smith",
      role: "Backend Developer",
      experience: 5,
      rating: 5,
      interview: { date: "2025-09-11", time: "2:00 PM", interviewer: "Ms. Sarah" },
    },
    {
      name: "Charlie Lee",
      role: "UI/UX Designer",
      experience: 2,
      rating: 3,
      interview: { date: "2025-09-12", time: "11:30 AM", interviewer: "Mr. John" },
    },
  ];

  const filteredCandidates = candidates.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      className="w-11/12 mx-auto pt-16 min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}
    >
      <div className="p-10 glass">
        {/* Header */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-monument font-bold text-white">Interview Dashboard</h1>
          <input
            type="text"
            placeholder="Search candidate..."
            className="w-64 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white outline-none border border-white/30 focus:border-white/60 focus:ring-2 focus:ring-white/40 transition"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Candidate Profiles */}
        <div className="p-6">
          <h2 className="text-3xl font-poppins font-semibold text-white mb-4">Candidates</h2>
          <div className="flex flex-wrap gap-6">
            {filteredCandidates.map((c, i) => (
              <div
                key={i}
                onClick={() => setSelectedCandidate(candidates.indexOf(c))}
                className="cursor-pointer"
              >
                <CandidateCard {...c} />
              </div>
            ))}
          </div>
        </div>

        {/* Interview Schedule */}
        <div className="p-6">
          <InterviewSchedule
            name={candidates[selectedCandidate].name}
            date={candidates[selectedCandidate].interview.date}
            time={candidates[selectedCandidate].interview.time}
            interviewer={candidates[selectedCandidate].interview.interviewer}
          />
        </div>

        {/* Feedback Section */}
        <div className="p-6">
          <h2 className="text-3xl font-poppins font-semibold text-white mb-4">Company Feedback</h2>
          <div className="flex flex-wrap gap-6">
            <FeedbackCard company="TechCorp" rating={4} notes="Good communication skills." />
            <FeedbackCard company="InnoSoft" rating={5} notes="Strong technical knowledge." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
