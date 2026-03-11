interface CategoryButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function CategoryButton({ label, isActive = false, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
        isActive
          ? 'bg-black text-white'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}
