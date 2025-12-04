"use client";

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: React.ReactNode;       // 아이콘을 오른쪽에 넣고 싶을 때
  onRightIconClick?: () => void;     // 아이콘 클릭 이벤트
};

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  rightIcon,
  onRightIconClick,
}: InputProps) {
  return (
    <div className="w-full mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#5A43F0]"
        />

        {/* 오른쪽 아이콘 */}
        {rightIcon && (
          <button
            type="button"
            onClick={onRightIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {rightIcon}
          </button>
        )}
      </div>
    </div>
  );
}
