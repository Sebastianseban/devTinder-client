
import { useState } from 'react';
import { Upload, User } from 'lucide-react';

const FileUpload = ({ label, onFileSelect }) => {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);  
    }
  };

  const processFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        if (onFileSelect) onFileSelect(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  return (
    <div className="mb-6">
      {label && (
        <label className="block text-sm font-medium text-white/80 mb-3">
          {label}
        </label>
      )}
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 cursor-pointer block backdrop-blur-sm ${
          isDragging 
            ? 'border-[#00D4FF] bg-[#00D4FF]/10' 
            : 'border-white/20 hover:border-[#00D4FF] hover:bg-white/5'
        }`}
      >
        <input
          type="file"
          accept="image/png,image/jpeg,image/gif"
          onChange={handleFileChange}
          className="hidden"
        />
        {preview ? (
          <div className="flex flex-col items-center">
            <img
              src={preview}
              alt="Preview"
              className="w-24 h-24 rounded-full object-cover mb-3 border-2 border-white/20"
            />
            <p className="text-[#00D4FF] text-sm font-medium">Click to change photo</p>
          </div>
        ) : (
          <>
            <User className="w-12 h-12 text-white/40 mx-auto mb-3" />
            <div className="flex items-center justify-center gap-2 text-[#00D4FF] mb-2">
              <Upload className="w-4 h-4" />
              <span className="font-medium">Upload your photo</span>
            </div>
            <p className="text-white/60 text-sm">Drag & drop or click to browse</p>
            <p className="text-white/40 text-xs mt-1">PNG, JPG, GIF up to 100MB</p>
          </>
        )}
      </label>
    </div>
  );
};

export default FileUpload;
