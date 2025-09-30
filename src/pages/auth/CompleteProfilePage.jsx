
import React from "react";
import FileUpload from "../../components/form/FileUpload";
import Input from "../../components/ui/Input";
import SelectField from "../../components/form/SelectField";
import SkillSelector from "../../components/form/SkillSelector";
import TextArea from "../../components/form/TextArea";
import { Github, Linkedin, Globe, Twitter } from 'lucide-react';
import Button from "../../components/ui/Button";

const CompleteProfilePage = () => {
  const availableSkills = [
    'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust',
    'React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'Express',
    'Django', 'Flask', 'Spring Boot', 'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes', 'AWS', 'GraphQL', 'Flutter', 'Swift',
    'Kotlin', 'C++', 'C#', '.NET', 'Ruby on Rails', 'PHP'
  ];

  const genderOptions = [
    { value: '', label: 'Select gender' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
    { value: 'prefer-not', label: 'Prefer not to say' }
  ];

  const experienceOptions = [
    { value: '', label: 'Select your experience level' },
    { value: 'beginner', label: 'Beginner (0-1 years)' },
    { value: 'intermediate', label: 'Intermediate (1-3 years)' },
    { value: 'advanced', label: 'Advanced (3-5 years)' },
    { value: 'expert', label: 'Expert (5+ years)' }
  ];

  return (


    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] py-8 px-4">
  <div className="max-w-xl mx-auto relative">
    <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-5 shadow-lg relative">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-white via-[#00D4FF] to-[#7B68EE] bg-clip-text text-transparent">
          Complete Your Profile
        </h1>
        <p className="text-white/60 text-sm">Add details to make your profile stand out</p>
      </div>

      <form>
        {/* Profile Photo */}
        <FileUpload label="Profile Photo" className="mb-3" />

        {/* Gender & Age */}
        <div className="grid grid-cols-2 gap-2 mb-2">
          <SelectField
            label="Gender"
            name="gender"
            options={genderOptions}
            className="bg-white/5 border-white/10 text-white text-sm focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
          />
          <Input
            label="Age"
            type="number"
            name="age"
            placeholder="25"
            className="bg-white/5 border-white/10 text-white text-sm placeholder-white/40 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
          />
        </div>

        <Input
          label="Location"
          name="location"
          placeholder="San Francisco, CA"
          className="bg-white/5 border-white/10 text-white text-sm placeholder-white/40 mb-2 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
        />

        <Input
          label="Headline"
          name="headline"
          placeholder="Full Stack Developer | React Enthusiast"
          className="bg-white/5 border-white/10 text-white text-sm placeholder-white/40 mb-2 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
        />

        <Input
          label="Phone Number"
          name="phone"
          placeholder="+1 (555) 123-4567"
          className="bg-white/5 border-white/10 text-white text-sm placeholder-white/40 mb-2 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
        />

        <SelectField
          label="Experience Level"
          name="experience"
          options={experienceOptions}
          className="bg-white/5 border-white/10 text-white text-sm mb-2 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
        />

        {/* Skills */}
        <SkillSelector availableSkills={availableSkills} className="mb-2" />

        {/* Bio */}
        <TextArea
          label="Bio"
          name="bio"
          placeholder="Tell us about yourself..."
          rows={3}
          className="bg-white/5 border-white/10 text-white text-sm mb-2 focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF]"
        />

        {/* Social Links */}
        <div className="space-y-2 mb-4">
          {[
            { icon: Github, name: "github", placeholder: "https://github.com/username" },
            { icon: Linkedin, name: "linkedin", placeholder: "https://linkedin.com/in/username" },
            { icon: Globe, name: "portfolio", placeholder: "https://yourportfolio.com" },
            { icon: Twitter, name: "twitter", placeholder: "https://twitter.com/username" },
          ].map(({ icon: Icon, name, placeholder }) => (
            <div className="flex items-center gap-2" key={name}>
              <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-white/60" />
              </div>
              <input
                name={name}
                placeholder={placeholder}
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] transition-colors duration-200"
              />
            </div>
          ))}
        </div>

        <Button
          type="submit"
          className="w-full py-2.5 text-sm bg-gradient-to-r from-[#00D4FF] via-[#7B68EE] to-[#FF6B95] font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
        >
          Create Account
        </Button>

        <p className="text-center text-white/60 mt-3 text-xs">
          Already have an account?{" "}
          <button className="text-[#00D4FF] hover:text-[#00C4EB] font-medium transition-colors duration-200">
            Sign in
          </button>
        </p>
      </form>
    </div>

    <p className="text-center text-white/40 text-xs mt-4">
      By creating an account, you agree to our Terms of Service and Privacy Policy
    </p>
  </div>
</div>

  );
};

export default CompleteProfilePage;