// const SelectField = ({ label, error, options = [], className = '', ...props }) => {
//   return (
//     <div className="mb-4">
//       {label && (
//         <label className="block text-sm font-medium text-slate-300 mb-2">
//           {label}
//         </label>
//       )}
//       <select
//         className={`w-full bg-slate-800 border ${
//           error ? 'border-red-500' : 'border-slate-700'
//         } rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors cursor-pointer ${className}`}
//         {...props}
//       >
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//       {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
//     </div>
//   );
// };

// export default SelectField;

const SelectField = ({ label, error, options = [], className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-white/80 mb-2">
          {label}
        </label>
      )}
      <select
        className={`w-full bg-white/5 border ${
          error ? 'border-red-500' : 'border-white/10'
        } rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-colors duration-300 cursor-pointer backdrop-blur-sm ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value} className="bg-[#1A1A2E]">
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectField;