
const TextArea = ({ 
  label, 
  error, 
  maxLength, 
  showCounter = true, 
  value = '', 
  className = '',
  ...props 
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-white/80 mb-2">
          {label}
        </label>
      )}
      <textarea
        value={value}
        maxLength={maxLength}
        className={`w-full bg-white/5 border ${
          error ? 'border-red-500' : 'border-white/10'
        } rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-colors duration-300 resize-none backdrop-blur-sm ${className}`}
        {...props}
      />
      <div className="flex justify-between items-center mt-1">
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {showCounter && maxLength && (
          <p className={`text-xs ${error ? 'ml-auto' : ''} ${
            value.length > maxLength * 0.9 ? 'text-yellow-400' : 'text-white/40'
          }`}>
            {value.length}/{maxLength} characters
          </p>
        )}
      </div>
    </div>
  );
};

export default TextArea;