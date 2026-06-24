import type { ReactNode } from "react";

type BackgroundProps = {
    children: ReactNode;
    overlayClassName?: string;
};

export function Background({ children, overlayClassName = "" }: BackgroundProps) {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#ffd6f1] text-[#321034]">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, rgba(255,79,195,0.16) 1px, transparent 1px), linear-gradient(rgba(65,190,255,0.18) 1px, transparent 1px), radial-gradient(circle at 18px 18px, rgba(255,255,255,0.9) 2px, transparent 2px)",
                    backgroundSize: "28px 28px, 28px 28px, 56px 56px",
                }}
            />
            <div className="absolute left-4 top-4 hidden rotate-[-8deg] border-2 border-[#321034] bg-[#fff8a8] px-3 py-2 text-sm font-black shadow-[4px_4px_0_#321034] sm:block">
                ★ desktop mode
            </div>
            <div className="absolute bottom-6 right-6 hidden rotate-6 border-2 border-[#321034] bg-[#9ee7ff] px-3 py-2 text-3xl shadow-[4px_4px_0_#321034] md:block">
                ♡
            </div>
            {overlayClassName && (
                <div className={`absolute inset-0 ${overlayClassName}`} />
            )}
            {children}
        </main>
    );
}
