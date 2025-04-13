
import React from 'react';

interface WordProps {
  word: string;
  isSelected: boolean;
  onClick: () => void;
  disabled?: boolean;
}

const Word: React.FC<WordProps> = ({ word, isSelected, onClick, disabled = false }) => {
  return (
    <div 
      className={`
        transition-all py-2 px-4 rounded-md text-center cursor-pointer 
        border shadow-sm text-sm font-medium
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
        ${isSelected ? 'border-[#9b87f5] bg-[#9b87f5]/10 text-[#9b87f5]' : 'border-gray-200 bg-white text-gray-700'}
      `}
      onClick={disabled ? undefined : onClick}
    >
      {word}
    </div>
  );
};

export default Word;
