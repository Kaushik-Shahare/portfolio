import React, { useState } from "react";

const awards = [
  {
    id: "award-1",
    title: "1st Place – Code Crafter DSA Competition",
    organization: "Parul University",
    date: "March 2025",
    shortDescription: "Secured 1st place among 800+ participants in competitive programming, demonstrating exceptional algorithmic proficiency and problem-solving skills.",
    description: "Secured 1st place in the Code Crafter competition held at Parul University, outperforming approximately 800 participants from various departments. This highly competitive event tested participants on a range of Data Structures and Algorithms (DSA) challenges, including problem-solving under time constraints, algorithm optimization, and efficient coding practices. Throughout the event, I demonstrated strong algorithmic proficiency, quick debugging, and optimal code implementation. The problems ranged from array and string manipulation to graph traversal, dynamic programming, and recursion.",
    certificate: "/certificates/CodeCrafter/CodeCrafter-Certificate.jpeg",
    image: "/certificates/CodeCrafter/Award-Photo.jpeg", 
    skills: ["Data Structures", "Algorithms", "Competitive Programming", "Problem Solving", "Time Complexity", "Dynamic Programming"]
  },
  {
    id: "award-2",
    title: "2nd Runner-Up – OnMySite HealthCare Hackathon (Team Leader)",
    organization: "OnMySite HealthCare (Hosted at Parul University)",
    date: "June 28, 2025",
    shortDescription: "Led team CodeBlue to 3rd place in a 36-hour inter-college hackathon, developing 'MedAudit' - an AI-powered healthcare audit system.",
    description: "Led team CodeBlue to achieve 3rd place (2nd Runner-Up) in a 36-hour hackathon organized by OnMySite HealthCare, hosted at Parul University, with participation from teams representing various colleges across India. As team leader, I coordinated the development of 'MedAudit'—a smart medical audit and validation system utilizing AI agents to validate Electronic Health Records (EHRs) and streamline insurance claim processing. Successfully managed team collaboration, task delegation, and technical decision-making while incorporating NFC-based patient identification for faster OPD check-ins and secure record access.",
    certificate: "/certificates/OnMySite-Hackathon/OnMysite-Hackathon-Certificate.pdf",
    image: "/certificates/OnMySite-Hackathon/TeamPhoto.jpeg", 
    skills: ["Team Leadership", "Project Management", "Backend Development", "AI Integration", "HealthTech", "NFC Authentication", "REST API", "Team Collaboration", "Rapid Prototyping"]
  }
];

const Awards = () => {
  const [selectedAward, setSelectedAward] = useState(null);

  const openCertificate = (certificate) => {
    window.open(certificate, '_blank');
  };

  const openModal = (award) => {
    setSelectedAward(award);
  };

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-6xl mx-auto pt-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-green-400 pt-20">
            Awards & Achievements
          </h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-green-300 text-base max-w-2xl mx-auto">
            Recognition and certifications that showcase my dedication to continuous learning and excellence in development.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="bg-black bg-opacity-80 border border-green-400 rounded-lg p-6 hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-400/20"
            >
              {/* Award Image/Certificate Preview */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-full h-48 bg-green-400 bg-opacity-10 rounded-lg border border-green-400 border-opacity-30 overflow-hidden group">
                  {award.image ? (
                    <img
                      src={award.image}
                      alt={`${award.title} certificate`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  {/* Fallback icon if image fails to load */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-green-400 bg-opacity-20"
                    style={{ display: award.image ? 'none' : 'flex' }}
                  >
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 text-green-400 mx-auto mb-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-green-400 text-xs">Certificate</p>
                    </div>
                  </div>
                  
                  {/* Overlay with certificate indicator */}
                  <div className="absolute top-2 right-2 bg-green-400 bg-opacity-80 text-black text-xs px-2 py-1 rounded">
                    Award
                  </div>
                </div>
              </div>

              {/* Award Content */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-green-400 mb-2">
                  {award.title}
                </h3>
                <p className="text-green-300 font-medium mb-1">
                  {award.organization}
                </p>
                <p className="text-green-400 text-sm mb-3">
                  {award.date}
                </p>
                <p className="text-green-200 text-sm leading-relaxed mb-3">
                  {award.shortDescription || award.description}
                </p>
                
                {/* Skills Tags */}
                {award.skills && (
                  <div className="flex flex-wrap justify-center gap-2 mb-3">
                    {award.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => openModal(award)}
                  className="px-4 py-2 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded hover:bg-opacity-30 transition-all duration-300 text-sm font-medium"
                >
                  View Details
                </button>
                <button
                  onClick={() => openCertificate(award.certificate)}
                  className="px-4 py-2 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-all duration-300 text-sm font-medium"
                >
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Personal Achievement Showcase */}
        <div className="mt-16 bg-black bg-opacity-60 border border-green-400 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/Profile.jpeg"
                alt="Kaushik - Developer"
                className="w-32 h-32 rounded-full border-2 border-green-400 object-cover"
                onError={(e) => {
                  e.target.src = "/Profile1.png";
                }}
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-green-400 mb-3">
                Competitive Programming Champion & Tech Leader
              </h3>
              <p className="text-green-300 mb-4">
                From beating 800+ participants in DSA competitions to leading teams in 36-hour hackathons, 
                I consistently deliver excellence under pressure. As a team leader in the OnMySite HealthCare Hackathon, 
                I successfully coordinated cross-functional development, managed project timelines, and guided technical decisions 
                that led our team CodeBlue to a podium finish. My achievements reflect not just technical expertise, but proven 
                leadership, strategic thinking, and the ability to transform complex challenges into winning solutions.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm">
                  Competition Winner
                </span>
                <span className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm">
                  Team Leader
                </span>
                <span className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm">
                  Software Engineer
                </span>
                <span className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm">
                  AI Innovator
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-black bg-opacity-60 border border-green-400 rounded-lg p-4">
            <h4 className="text-2xl font-bold text-green-400">2</h4>
            <p className="text-green-300 text-sm">Total Awards</p>
          </div>
          <div className="bg-black bg-opacity-60 border border-green-400 rounded-lg p-4">
            <h4 className="text-2xl font-bold text-green-400">800+</h4>
            <p className="text-green-300 text-sm">Competitors Beat</p>
          </div>
          <div className="bg-black bg-opacity-60 border border-green-400 rounded-lg p-4">
            <h4 className="text-2xl font-bold text-green-400">15</h4>
            <p className="text-green-300 text-sm">Skills Certified</p>
          </div>
          <div className="bg-black bg-opacity-60 border border-green-400 rounded-lg p-4">
            <h4 className="text-2xl font-bold text-green-400">1st</h4>
            <p className="text-green-300 text-sm">Place Winner</p>
          </div>
        </div>
      </div>

      {/* Modal for Award Details */}
      {selectedAward && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-black border-2 border-green-400 rounded-lg max-w-2xl w-full max-h-[90vh] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-green-400 flex-shrink-0">
              <h3 className="text-2xl font-bold text-green-400">
                {selectedAward.title}
              </h3>
              <button
                onClick={closeModal}
                className="text-green-400 hover:text-green-300 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content with hidden scrollbar */}
            <div className="flex-1 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="p-6">
                {/* Certificate Image in Modal */}
                {selectedAward.image && (
                  <div className="mb-6">
                    <img
                      src={selectedAward.image}
                      alt={`${selectedAward.title} certificate`}
                      className="w-full max-h-64 object-contain rounded-lg border border-green-400 border-opacity-30"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-green-400 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-green-300 mb-2">
                    {selectedAward.organization}
                  </h4>
                  <p className="text-green-400 mb-4">{selectedAward.date}</p>
                  <p className="text-green-200 leading-relaxed mb-4">
                    {selectedAward.description}
                  </p>
                  
                  {/* Skills in Modal */}
                  {selectedAward.skills && (
                    <div className="mb-6">
                      <h5 className="text-green-400 font-medium mb-3">Skills Covered:</h5>
                      <div className="flex flex-wrap justify-center gap-2">
                        {selectedAward.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-green-400 bg-opacity-20 border border-green-400 text-green-400 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer - Fixed at bottom */}
            <div className="p-6 border-t border-green-400 border-opacity-30 flex-shrink-0">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => openCertificate(selectedAward.certificate)}
                  className="px-6 py-3 bg-green-400 text-black rounded hover:bg-green-300 transition-all duration-300 font-medium"
                >
                  Download Certificate
                </button>
                {selectedAward.image && (
                  <button
                    onClick={() => window.open(selectedAward.image, '_blank')}
                    className="px-6 py-3 bg-transparent border border-green-400 text-green-400 rounded hover:bg-green-400 hover:text-black transition-all duration-300 font-medium"
                  >
                    View Full Image
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Awards;
