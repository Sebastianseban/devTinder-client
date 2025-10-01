
const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#00D4FF] via-[#7B68EE] to-[#FF6B95] text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm',
    outline: 'bg-transparent border border-white/20 hover:bg-white/5 text-white'
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;