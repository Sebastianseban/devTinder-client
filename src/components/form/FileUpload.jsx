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
        <label className="block text-sm font-medium text-slate-300 mb-3">
          {label}
        </label>
      )}
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed ${
          isDragging ? 'border-cyan-500 bg-cyan-500/10' : 'border-slate-700'
        } rounded-lg p-12 text-center hover:border-cyan-500 transition-colors cursor-pointer block`}
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
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <p className="text-cyan-400 text-sm">Click to change photo</p>
          </div>
        ) : (
          <>
            <User className="w-12 h-12 text-slate-500 mx-auto mb-3" />
            <div className="flex items-center justify-center gap-2 text-cyan-400 mb-2">
              <Upload className="w-4 h-4" />
              <span className="font-medium">Upload your photo</span>
            </div>
            <p className="text-slate-500 text-sm">Drag & drop or click to browse</p>
            <p className="text-slate-600 text-xs mt-1">PNG, JPG, GIF up to 5MB</p>
          </>
        )}
      </label>
    </div>
  );
};

export default FileUpload;