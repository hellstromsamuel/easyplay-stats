import { X } from "lucide-react";
import React from "react";

interface Props {
  value: string;
  setValue: (value: string) => void;
}

function SearchInput({ value, setValue }: Props) {
  const ref = React.useRef<HTMLInputElement>(null);
  return (
    <div className="relative w-full border0">
      <input
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full h-16 rounded-2xl p-6 text-black text-xl focus:outline-[blue]"
        placeholder="Søk stats ..."
      />
      {value && (
        <button
          onClick={() => {
            setValue("");
            ref.current?.focus();
          }}
          className="text-black absolute top-4 right-4 rounded-lg hover:bg-gray-200 focus:outline-[blue]"
        >
          <X className="size-8" />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
