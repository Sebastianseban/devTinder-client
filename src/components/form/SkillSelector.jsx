
import { useState } from "react";
import { X } from "lucide-react";

const SkillSelector = ({ selectedSkills = [], onChange, availableSkills = [] }) => {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = (skill) => {
    if (!selectedSkills.includes(skill) && skill.trim()) {
      onChange([...selectedSkills, skill]);
    }
    setSkillInput("");
  };

  const removeSkill = (skill) => {
    onChange(selectedSkills.filter((s) => s !== skill));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (skillInput.trim()) {
        addSkill(skillInput.trim());
      }
    }
  };

  return (
    <div className="mb-8">
      <label className="block text-sm font-medium text-white/80 mb-3">
        Skills & Technologies
      </label>

      {/* Add Skill Input */}
      <div className="flex gap-3 mb-6">
        <input
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a skill (e.g., React, Python)"
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3
            text-white placeholder-white/40
            focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]
            transition-all duration-300 backdrop-blur-sm
          "
        />
        <button
          type="button"
          onClick={() => {
            if (skillInput.trim()) addSkill(skillInput.trim());
          }}
          className="bg-gradient-to-r from-[#00D4FF] to-[#7B68EE] hover:from-[#00C4EB] hover:to-[#6A5BCD]
            text-white px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl
            transition-all duration-300 transform hover:-translate-y-0.5
            flex items-center justify-center
          "
        >
          Add
        </button>
      </div>

      {/* Selected Skills */}
      {selectedSkills.length > 0 && (
        <div className="mb-6">
          <p className="text-white/60 text-sm font-medium mb-3">Selected skills:</p>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <span
                key={skill}
                className="bg-gradient-to-r from-[#00D4FF]/20 to-[#7B68EE]/20 border border-[#00D4FF]/30 
                  rounded-xl px-4 py-2 flex items-center gap-2 text-[#00D4FF] font-medium text-sm
                  transition-all duration-300 hover:from-[#00D4FF]/30 hover:to-[#7B68EE]/30 hover:border-[#00D4FF]/50
                  backdrop-blur-sm
                "
              >
                {skill}
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="hover:text-white transition-colors duration-300"
                  aria-label={`Remove skill ${skill}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Popular Skills */}
      {availableSkills.length > 0 && (
        <div>
          <p className="text-white/60 text-sm font-medium mb-3">Popular skills:</p>
          <div className="flex flex-wrap gap-2">
            {availableSkills
              .filter((s) => !selectedSkills.includes(s))
              .slice(0, 20)
              .map((skill) => (
                <button
                  key={skill}
                  type="button"
                  onClick={() => addSkill(skill)}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 
                    text-white/80 hover:text-white px-4 py-2 rounded-xl text-sm font-medium
                    transition-all duration-300 backdrop-blur-sm hover:transform hover:-translate-y-0.5
                    focus:outline-none focus:ring-1 focus:ring-[#00D4FF]
                  "
                >
                  {skill}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillSelector;