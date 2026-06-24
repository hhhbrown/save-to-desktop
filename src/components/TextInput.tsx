import type { InputHTMLAttributes } from "react";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
};

export function TextInput({ id, label, className = "", ...props }: TextInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-sm font-black uppercase tracking-wide">
                {label}
            </label>

            <input
                id={id}
                className={`h-12 w-full border-2 border-[#321034] bg-white px-3 font-bold text-[#321034] outline-none shadow-[3px_3px_0_#321034] transition placeholder:text-[#9f6c9f] focus:bg-[#fff8d8] focus:shadow-[5px_5px_0_#321034] ${className}`}
                {...props}
            />
        </div>
    );
}
