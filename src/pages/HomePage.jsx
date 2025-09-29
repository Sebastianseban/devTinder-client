import {
  FaUsers,
  FaBolt,
  FaHandshake,
  FaArrowRight,
  FaStar,
  FaRocket,
} from "react-icons/fa";

import SectionOne from "../components/home/SectionOne";
import HowItWorksSection from "../components/home/HowItWorksStep";

const HomePage = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] overflow-x-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00D4FF] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF6B95] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7B68EE] rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-pulse delay-500"></div>
    </div>

    <div className="relative flex flex-col items-center w-full px-4 py-12 md:py-24">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mt-16 md:mt-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <FaRocket className="text-[#00D4FF] text-sm" />
          <span className="text-white/80 text-sm font-medium">
            Join 10,000+ developers worldwide
          </span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl font-black mb-4 bg-gradient-to-r from-white via-[#00D4FF] to-[#7B68EE] bg-clip-text text-transparent">
          Code Together.
          <br />
          <span className="bg-gradient-to-r from-[#FF6B95] via-[#FFD93D] to-[#6BCF7F] bg-clip-text text-transparent">
            Grow Faster.
          </span>
        </h1>

        <p className="text-white/70 text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto leading-relaxed">
          The intelligent platform that connects developers based on skills,
          interests, and project goals. Find your perfect coding partner in
          minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button className="group relative px-8 py-4 rounded-2xl font-bold text-black bg-gradient-to-r from-[#00D4FF] via-[#7B68EE] to-[#FF6B95] hover:from-[#00C4EB] hover:via-[#6A5BCD] hover:to-[#E55A85] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
            <span className="flex items-center gap-2">
              Start Matching Now
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          </button>

          <button className="group px-8 py-4 rounded-2xl font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/30 transition-all duration-300 backdrop-blur-xl">
            <span className="flex items-center gap-2">
             i Have Account
              <FaStar className="text-[#FFD93D]" />
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-white/60 text-sm">Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">15K+</div>
            <div className="text-white/60 text-sm">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">92%</div>
            <div className="text-white/60 text-sm">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-6xl mt-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose DevMatch?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Smart matching powered by AI and community insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#00D4FF] to-[#7B68EE] flex items-center justify-center mb-6">
              <FaUsers className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Smart Matching
            </h3>
            <p className="text-white/60 leading-relaxed">
              Our AI analyzes your skills, interests, and goals to find the
              perfect coding partner.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#FF6B95] to-[#FFD93D] flex items-center justify-center mb-6">
              <FaBolt className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Instant Connect
            </h3>
            <p className="text-white/60 leading-relaxed">
              Real-time messaging and video calls to kickstart your
              collaboration immediately.
            </p>
          </div>

          <div className="group p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:-translate-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#6BCF7F] to-[#00D4FF] flex items-center justify-center mb-6">
              <FaHandshake className="text-2xl text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Project Hub</h3>
            <p className="text-white/60 leading-relaxed">
              Manage your collaborative projects with built-in version control
              and task management.
            </p>
          </div>
        </div>
      </div>

      <SectionOne className="w-full max-w-6xl mt-32" />
      <HowItWorksSection className="w-full max-w-6xl mt-32" />

      {/* Final CTA Section */}
      <div className="relative mt-32 w-full max-w-4xl">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#FF6B95] rounded-3xl blur-xl opacity-20"></div>
        <div className="relative p-12 text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
          <h2 className="text-4xl font-black text-white mb-6">
            Ready to Transform Your Coding Journey?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Join developers from top companies who are already building amazing
            projects together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 rounded-2xl font-bold bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Create Free Account
            </button>
            <button className="px-10 py-4 rounded-2xl font-semibold text-white border border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300">
              Enterprise Solutions
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 mt-6 text-white/50 text-sm">
            <FaStar className="text-[#FFD93D]" />
            <span>
              No credit card required • 7-day free trial • Cancel anytime
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
