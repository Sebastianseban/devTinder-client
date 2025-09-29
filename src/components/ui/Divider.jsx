const Divider = ({ text }) => {
  return (
    <div className="flex items-center gap-4 my-6">
      <div className="flex-1 h-px bg-slate-700"></div>
      <span className="text-slate-500 text-sm">{text}</span>
      <div className="flex-1 h-px bg-slate-700"></div>
    </div>
  );
};

export default Divider;