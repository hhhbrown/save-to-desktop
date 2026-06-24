import Link from "next/link";

type FolderCardProps = {
    href?: string;
    label: string;
    photoCount?: number;
    compact?: boolean;
};

export function FolderCard({
    href,
    label,
    photoCount,
    compact = false,
}: FolderCardProps) {
    const iconClass = compact
        ? "mb-2 flex h-16 items-center justify-center border-2 border-[#321034] bg-[#fff8a8] text-3xl shadow-[3px_3px_0_#321034]"
        : "mb-4 flex h-28 items-center justify-center border-2 border-[#321034] bg-[#fff8a8] text-6xl shadow-[4px_4px_0_#321034]";

    const content = (
        <>
            <div className={iconClass}>📁</div>
            <h2 className={compact ? "text-xs font-black" : "text-xl font-black"}>
                {label}
            </h2>
            {photoCount !== undefined && (
                <p className="mt-1 text-sm font-black text-[#7f2f86]">
                    {photoCount} photos saved
                </p>
            )}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="border-2 border-[#321034] bg-[#fff7fd] p-4 shadow-[6px_6px_0_#321034] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white hover:shadow-[8px_8px_0_#321034]"
            >
                {content}
            </Link>
        );
    }

    return (
        <div className="border-2 border-[#321034] bg-[#9ee7ff] p-3 shadow-[4px_4px_0_#321034]">
            {content}
        </div>
    );
}
