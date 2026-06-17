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
    const content = (
        <>
            <div
                className={
                    compact
                        ? "mb-2 flex h-16 items-center justify-center rounded-xl bg-white/60 text-2xl"
                        : "mb-4 flex h-32 items-center justify-center rounded-3xl bg-white/50 text-6xl"
                }
            >
                📁
            </div>
            <h2 className={compact ? "text-xs font-black" : "text-xl font-black"}>
                {label}
            </h2>
            {photoCount !== undefined && (
                <p className="mt-1 text-sm font-medium text-[#6f5b7a]">
                    {photoCount} photos saved
                </p>
            )}
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className="rounded-[2rem] border border-white/70 bg-white/35 p-5 shadow-xl shadow-fuchsia-300/30 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/50"
            >
                {content}
            </Link>
        );
    }

    return (
        <div className="rounded-2xl bg-gradient-to-br from-pink-200 to-sky-200 p-3 shadow-sm">
            {content}
        </div>
    );
}
