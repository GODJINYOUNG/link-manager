interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        className="border rounded-md px-3 py-2 text-sm outline-none focus:border-black"
        {...props}
      />
    </div>
  );
}
