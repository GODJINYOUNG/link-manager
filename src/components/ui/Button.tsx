interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-full bg-black text-white py-2 rounded-md text-sm font-medium hover:bg-opacity-80 transition"
      {...props}
    >
      {children}
    </button>
  );
}
