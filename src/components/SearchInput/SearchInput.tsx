import { X } from "lucide-react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

function SearchInput({ value, setValue }: Props) {
  return (
    <div className="relative w-full border0">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-16 shadow-xl rounded-2xl p-6 text-xl focus:outline-[blue]"
        placeholder="Filtrer stats ..."
      />
      {value && (
        <button
          onClick={() => setValue("")}
          className="absolute top-4 right-4 rounded-lg hover:bg-gray-200 focus:outline-[blue]"
        >
          <X className="size-8" />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
