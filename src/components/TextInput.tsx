import type { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export function TextInput({ id, label, className = "", ...props }: TextInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-sm font-bold">
                {label}
            </label>

            <input
                id={id}
                className={`h-12 w-full rounded-xl border border-white/80 bg-white/75 px-4 text-[#34213f] outline-none transition focus:border-[#ff4fc3] focus:ring-4 focus:ring-pink-200 ${className}`}
                {...props}
            />
        </div>
    );
}
