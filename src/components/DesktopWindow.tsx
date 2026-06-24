import type { ReactNode } from "react";

type DesktopWindowProps = {
    children: ReactNode;
    title: string;
};

export function DesktopWindow({ children, title }: DesktopWindowProps) {
    return (
        <div className="border-2 border-[#321034] bg-[#ffe8f7] shadow-[8px_8px_0_#321034]">
            <div className="flex items-center justify-between border-b-2 border-[#321034] bg-[#ff4fc3] px-3 py-2 text-white">
                <p className="text-sm font-black uppercase tracking-wide">{title}</p>
                <div className="flex gap-1.5">
                    <span className="h-4 w-4 border-2 border-[#321034] bg-[#fff8a8]" />
                    <span className="h-4 w-4 border-2 border-[#321034] bg-[#9ee7ff]" />
                    <span className="h-4 w-4 border-2 border-[#321034] bg-white" />
                </div>
            </div>

            <div className="bg-[#fff7fd] p-4 sm:p-5">{children}</div>
        </div>
    );
}
