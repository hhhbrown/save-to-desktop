import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonLinkProps = ComponentProps<typeof Link> & {
    variant?: "primary" | "secondary";
};

const variants = {
    primary: "bg-[#ff4fc3] text-white hover:bg-[#ff83d8]",
    secondary: "bg-[#fff8a8] text-[#321034] hover:bg-white",
};

export function ButtonLink({
    className = "",
    variant = "primary",
    ...props
}: ButtonLinkProps) {
    return (
        <Link
            className={`inline-flex items-center justify-center border-2 border-[#321034] px-5 py-3 font-black uppercase tracking-wide shadow-[4px_4px_0_#321034] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#321034] active:translate-x-1 active:translate-y-1 active:shadow-[2px_2px_0_#321034] ${variants[variant]} ${className}`}
            {...props}
        />
    );
}
