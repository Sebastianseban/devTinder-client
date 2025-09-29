
import React from "react";
import SocialButton from "../../components/ui/SocialButton";
import { Github, Mail } from "lucide-react";
import Divider from "../../components/ui/Divider";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router";

const SignUpPage = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00D4FF] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF6B95] rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="w-full max-w-2xl relative">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-white via-[#00D4FF] to-[#7B68EE] bg-clip-text text-transparent">
              Create Your Account
            </h1>
            <p className="text-white/60 text-lg">
              Let's start with your basic information
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3 mb-6">
            <SocialButton 
              icon={Github} 
              className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Sign up with GitHub
            </SocialButton>
            <SocialButton 
              icon={Mail}
              className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white transition-all duration-300 backdrop-blur-sm"
            >
              Sign up with Google
            </SocialButton>
          </div>

          <Divider text="or create an account" />

          <form action="">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Input
                label="First Name *"
                name="firstName"
                placeholder="sebastian"
                className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
              />
              <Input 
                label="Last Name *" 
                name="lastName" 
                placeholder="andrews"
                className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
              />
            </div>

            {/* Username */}
            <Input
              label="Username *"
              name="username"
              placeholder="sebastianseban"
              className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
            />
            <p className="text-white/40 text-xs -mt-3 mb-4">
              3-30 characters, letters, numbers, dots, and underscores only
            </p>

            {/* Email */}
            <Input
              label="Email Address *"
              type="email"
              name="email"
              placeholder="john@example.com"
              className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
            />

            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-4">
              <PasswordInput
                label="Password *"
                name="password"
                placeholder="Create a strong password"
                className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
              />
              <PasswordInput
                label="Confirm Password *"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="mt-6 w-full py-4 bg-gradient-to-r from-[#00D4FF] via-[#7B68EE] to-[#FF6B95] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Continue to Profile Setup
            </Button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-white/60 mt-6">
            Already have an account?{" "}
            <button onClick={() => navigate('/auth/signin')} className="text-[#00D4FF] hover:text-[#00C4EB] font-medium transition-colors duration-300">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;