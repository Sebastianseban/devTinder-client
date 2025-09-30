
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput = ({ label, error, className = '', ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-white/80 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          className={`w-full bg-white/5 border ${
            error ? 'border-red-500' : 'border-white/10'
          } rounded-xl px-4 py-3 pr-11 text-white placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-colors duration-300 backdrop-blur-sm ${className}`}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors duration-300"
        >
          {showPassword ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
      {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordInput;