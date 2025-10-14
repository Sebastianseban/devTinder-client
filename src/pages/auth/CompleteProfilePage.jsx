
import React, { useState } from "react";
import toast from "react-hot-toast";
import FileUpload from "../../components/form/FileUpload";
import Input from "../../components/ui/Input";
import SelectField from "../../components/form/SelectField";
import SkillSelector from "../../components/form/SkillSelector";
import TextArea from "../../components/form/TextArea";
import { Github, Linkedin, Globe, Twitter } from "lucide-react";
import Button from "../../components/ui/Button";
import { useCompleteProfile } from "../../hooks/useProfile";
import { completeProfileSchema } from "../../utils/validationSchemas";

const CompleteProfilePage = () => {
  const { mutate, isPending, isError, error } = useCompleteProfile();

  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    location: "",
    headline: "",
    phoneNumber: "",
    experienceLevel: "",
    skills: [],
    bio: "",
    github: "",
    linkedin: "",
    portfolio: "",
    twitter: "",
    photo: null,
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({ ...prev, photo: file }));
    setFieldErrors((prev) => ({ ...prev, photo: "" }));
  };

  const handleSkillsChange = (skills) => {
    setFormData((prev) => ({ ...prev, skills }));
    setFieldErrors((prev) => ({ ...prev, skills: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = completeProfileSchema.safeParse(formData);

    if (!result.success) {
      const errors = {};
      result.error.issues.forEach((issue) => {
        errors[issue.path[0]] = issue.message;
      });
      setFieldErrors(errors);
      toast.error("Please fix the errors in the form");
      return;
    }

    const payload = new FormData();
    for (const key in formData) {
      const value = formData[key];
      if (Array.isArray(value)) {
        value.forEach((item) => payload.append(`${key}[]`, item));
      } else if (value !== null && value !== "") {
        payload.append(key, value);
      }
    }

    const toastId = toast.loading("Saving profile...");
    mutate(payload, {
      onSuccess: () => {
        toast.dismiss(toastId);
        toast.success("Profile completed successfully!");
      },
      onError: (err) => {
        toast.dismiss(toastId);
        toast.error(err?.message || "Failed to complete profile");
      },
    });
  };

  const genderOptions = [
    { value: "", label: "Select gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const experienceOptions = [
    { value: "", label: "Select your experience level" },
    { value: "student", label: "Student" },
    { value: "junior", label: "Junior" },
    { value: "mid", label: "Mid" },
    { value: "senior", label: "Senior" },
    { value: "lead", label: "Lead" },
    { value: "freelancer", label: "Freelancer" },
  ];

  const availableSkills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "Node.js",
    "Django",
    "MongoDB",
    "Docker",
    "AWS",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] py-8 px-4">
      <div className="max-w-xl mx-auto relative">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-5 shadow-lg relative">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-white">Complete Your Profile</h1>
            <p className="text-white/60 text-sm">
              Add details to make your profile stand out
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <FileUpload
              label="Profile Photo"
              onFileSelect={handleFileChange}
              error={fieldErrors.photo}
            />

            <div className="grid grid-cols-2 gap-2 mb-2">
              <SelectField
                label="Gender"
                name="gender"
                value={formData.gender}
                options={genderOptions}
                onChange={handleChange}
                error={fieldErrors.gender}
              />
              <Input
                label="Age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                error={fieldErrors.age}
              />
            </div>

            <Input
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={fieldErrors.location}
            />
            <Input
              label="Headline"
              name="headline"
              value={formData.headline}
              onChange={handleChange}
              error={fieldErrors.headline}
            />
            <Input
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              error={fieldErrors.phoneNumber}
            />

            <SelectField
              label="Experience Level"
              name="experienceLevel"
              value={formData.experienceLevel}
              options={experienceOptions}
              onChange={handleChange}
              error={fieldErrors.experienceLevel}
            />

            <SkillSelector
              availableSkills={availableSkills}
              selectedSkills={formData.skills}
              onChange={handleSkillsChange}
              error={fieldErrors.skills}
            />

            <TextArea
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              error={fieldErrors.bio}
            />

            <div className="space-y-2 mb-4">
              {[
                { icon: Github, name: "github" },
                { icon: Linkedin, name: "linkedin" },
                { icon: Globe, name: "portfolio" },
                { icon: Twitter, name: "twitter" },
              ].map(({ icon: Icon, name }) => (
                <div key={name} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-white/60" />
                  <input
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={`https://${name}.com/username`}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm"
                  />
                </div>
              ))}
            </div>

            <Button type="submit" className="w-full">
              {isPending ? "Saving..." : "Save Profile"}
            </Button>
          </form>

          {isError && (
            <p className="text-red-400 mt-2 text-sm">{error?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompleteProfilePage;
