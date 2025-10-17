
import React, { useState } from "react";
import { FaReact, FaNodeJs, FaCss3Alt } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { GiAges } from "react-icons/gi";
import { Range, getTrackBackground } from "react-range";

const MIN = 18;
const MAX = 60;

const SideBar = ({ filters, onFilterChange }) => {
  const [ageRange, setAgeRange] = useState([
    filters.age?.min || 18,
    filters.age?.max || 40,
  ]);

  const handleCheckboxChange = (category, value) => {
    onFilterChange(category, value);
  };

  const handleAgeChange = (values) => {
    setAgeRange(values);
    onFilterChange("age", { min: values[0], max: values[1] });
  };

  const clearFilters = () => {
    onFilterChange("clear");
    setAgeRange([18, 40]);
  };

  return (
    <div className="h-screen w-[350px] bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] p-6 shadow-2xl shadow-black/60 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <BsStars className="text-amber-300 text-xl" />
          <h1 className="text-white text-xl font-semibold tracking-wide">Filters</h1>
        </div>
        <button
          onClick={clearFilters}
          className="flex items-center gap-1 text-amber-200 text-xs px-3 py-1 rounded hover:bg-amber-200 hover:text-[#16213E] transition-all"
        >
          <MdOutlineClear className="text-sm" />
          Clear
        </button>
      </div>

      <div className="border-b border-amber-100 mb-8 opacity-40"></div>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
          <BsStars className="text-purple-400 text-xl" />
          Skills
        </h2>
        <ul className="flex flex-col gap-3">
          {["React", "Node.js", "Tailwind"].map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-3 text-amber-100 hover:text-amber-300 transition-all cursor-pointer"
            >
              <input
                type="checkbox"
                id={skill}
                checked={filters.skills?.includes(skill) || false}
                onChange={() => handleCheckboxChange("skills", skill)}
                className="accent-purple-500 scale-110"
              />
              <label htmlFor={skill} className="flex items-center gap-2 cursor-pointer">
                {skill === "React" && <FaReact />}
                {skill === "Node.js" && <FaNodeJs />}
                {skill === "Tailwind" && <FaCss3Alt />}
                {skill}
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Age Range */}
      <section >
        <h2 className="text-white text-lg font-medium mb-4 flex items-center gap-2">
          <GiAges className="text-purple-400 text-xl" />
          Age
        </h2>
        <div className="text-amber-200 text-sm mb-2 flex justify-between">
          <span>{ageRange[0]}</span>
          <span>{ageRange[1]}</span>
        </div>

        <Range
          step={1}
          min={MIN}
          max={MAX}
          values={ageRange}
          onChange={handleAgeChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="h-2 w-full rounded-lg"
              style={{
                background: getTrackBackground({
                  values: ageRange,
                  colors: ["#7C3AED", "#F59E0B", "#7C3AED"],
                  min: MIN,
                  max: MAX,
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              className="h-5 w-5 rounded-full bg-white border border-purple-500 shadow-md"
            />
          )}
        />
      </section>
    </div>
  );
};

export default SideBar;
