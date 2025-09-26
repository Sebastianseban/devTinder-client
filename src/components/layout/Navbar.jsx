// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="w-full h-16 flex items-center justify-between px-8 shadow-lg">
//       <h1 className="text-2xl font-extrabold text-white tracking-widest drop-shadow-sm">devTinder</h1>
//       <div className="flex gap-4">
//         <button
//           className="px-5 py-2 rounded-lg text-white/85 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
//         >
//           Sign In
//         </button>
//         <button
//           className="px-5 py-1 rounded-lg font-semibold text-white bg-gradient-to-r from-[#EC3DA0] to-[#8639F5]
//           hover:from-[#da3791] hover:to-[#6b28bc] shadow-md transition-all duration-200"
//         >
//           Sign Up
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center   bg-gradient-to-br from-[#1F1F47] via-[#5227FF] to-[#FF80DF] justify-between px-8 shadow-lg "
    >
      <h1 className="text-2xl font-extrabold text-white tracking-widest drop-shadow-sm">
        devTinder
      </h1>
      <div className="flex gap-4">
        <button
          className="px-5 py-2 rounded-lg text-white/85 hover:text-white hover:bg-white/20
            transition-all duration-200 font-medium border border-white/10
            backdrop-blur-sm"
        >
          Sign In
        </button>
        <button
          className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r
            from-[#EC3DA0] to-[#8639F5] hover:from-[#da3791] hover:to-[#6b28bc]
            shadow-lg transition-all duration-200 border border-white/10
            backdrop-blur-sm"
        >
          Sign Up
        </button>

        
      </div>
    </nav>
  );
};

export default Navbar;
