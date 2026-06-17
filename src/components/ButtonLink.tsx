import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
    variant?: "primary" | "secondary";
};

const variants = {
    primary:
        "bg-[#ff4fc3] text-white shadow-lg shadow-pink-300/60 hover:bg-[#f23bb7]",
    secondary:
        "border border-white/80 bg-white/50 text-[#4a2c5c] shadow-sm backdrop-blur hover:bg-white/65",
};

export function ButtonLink({
    className = "",
    variant = "primary",
    ...props
}: ButtonLinkProps) {
    return (
        <Link
            className={`inline-flex items-center justify-center rounded-full px-7 py-3 font-black transition hover:-translate-y-0.5 ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
