
const SocialButton = ({ icon: Icon, children, className = '', ...props }) => {
  return (
    <button
      className={`w-full bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm hover:transform hover:-translate-y-0.5 ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
};

export default SocialButton;