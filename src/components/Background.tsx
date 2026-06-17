import type { ReactNode } from "react";

type BackgroundProps = {
    children: ReactNode;
    overlayClassName?: string;
};

export function Background({
    children,
    overlayClassName = "bg-white/35",
}: BackgroundProps) {
    return (
        <main className="relative min-h-screen overflow-hidden text-[#34213f]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background6.jpg')" }}
            />
            <div className={`absolute inset-0 ${overlayClassName}`} />
            {children}
        </main>
    );
}
