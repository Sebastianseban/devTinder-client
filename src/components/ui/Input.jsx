
const Input = ({ label, error, icon: Icon, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-white/80 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
        )}
        <input
          className={`w-full bg-white/5 border ${
            error ? 'border-red-500' : 'border-white/10'
          } rounded-xl px-4 py-3 ${
            Icon ? 'pl-11' : ''
          } text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-colors duration-300 backdrop-blur-sm ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;