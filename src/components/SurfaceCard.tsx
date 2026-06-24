import type { ReactNode } from "react";

type SurfaceCardProps = {
    children: ReactNode;
    className?: string;
};

export function SurfaceCard({ children, className = "" }: SurfaceCardProps) {
    return (
        <div
            className={`border-2 border-[#321034] bg-[#fff7fd] shadow-[6px_6px_0_#321034] ${className}`}
        >
            {children}
        </div>
    );
}
