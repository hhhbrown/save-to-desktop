import type { ReactNode } from "react";

type SurfaceCardProps = {
    children: ReactNode;
    className?: string;
};

export function SurfaceCard({ children, className = "" }: SurfaceCardProps) {
    return (
        <div
            className={`rounded-[2rem] border border-white/70 bg-white/40 p-6 shadow-xl backdrop-blur-xl ${className}`}
        >
            {children}
        </div>
    );
}
