import { FaUsers, FaBolt, FaHandshake } from "react-icons/fa";

const steps = [
  {
    id: 1,
    gradient: "from-[#EC3DA0] to-[#8639F5]",
    icon: <FaUsers className="text-[#EC3DA0]" />,
    title: "Create your Dev Profile",
    description:
      "Showcase your skills, tech stack, and project interests. A great profile unlocks better matches and more collaborations!",
  },
  {
    id: 2,
    gradient: "from-[#FF9FFC] to-[#5227FF]",
    icon: <FaBolt className="text-[#FF9FFC]" />,
    title: "Discover & Match",
    description:
      "Swipe through developer profiles and connect with those that suit your collaboration style. Find your tech tribe easily!",
  },
  {
    id: 3,
    gradient: "from-[#FFD36C] to-[#B19EEF]",
    icon: <FaHandshake className="text-[#FFD36C]" />,
    title: "Connect & Collaborate",
    description:
      "Chat with matches, pair up on projects, and start building right away with instant messaging and team tools!",
  },
];

function HowItWorksStep({ step }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-lg w-full md:w-1/3">
      <span className={`bg-gradient-to-r ${step.gradient} p-3 rounded-full mb-4`}>
        <span className="text-white text-lg font-bold">{step.id}</span>
      </span>
      <h2 className="text-white text-xl mb-2 font-bold flex items-center gap-2">
        {step.icon} {step.title}
      </h2>
      <p className="text-white/80 text-sm text-center">{step.description}</p>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="w-full max-w-3xl mt-20 mb-8 px-2">
      <h1 className="text-white text-2xl md:text-3xl font-extrabold text-center mb-3">
        How it Works
      </h1>
      <p className="text-white/70 text-lg md:text-xl text-center mb-10">
        Simple steps to find your dev community and unlock collaboration opportunities!
      </p>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {steps.map(step => (
          <HowItWorksStep step={step} key={step.id} />
        ))}
      </div>
    </section>
  );
}
