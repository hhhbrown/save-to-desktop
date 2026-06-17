import type { ReactNode } from "react";

type DesktopWindowProps = {
    children: ReactNode;
    title: string;
};

export function DesktopWindow({ children, title }: DesktopWindowProps) {
    return (
        <div className="rounded-[2rem] border border-white/70 bg-white/35 p-4 shadow-2xl shadow-fuchsia-300/40 backdrop-blur-xl">
            <div className="overflow-hidden rounded-3xl border border-[#d8b4ff] bg-[#fff8fd]/80">
                <div className="flex items-center gap-2 border-b border-[#e9c8ff] bg-gradient-to-r from-pink-300 to-sky-300 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-pink-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300" />
                    <span className="h-3 w-3 rounded-full bg-sky-400" />
                    <p className="ml-2 text-sm font-black">{title}</p>
                </div>

                <div className="p-5">{children}</div>
            </div>
        </div>
    );
}
