import { Background } from "@/components/Background";
import { FolderCard } from "@/components/FolderCard";
import { mockFolders } from "@/lib/mockData";

export default function Dashboard() {
    return (
        <Background>
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-10">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">
                            Desktop
                        </p>
                        <h1 className="text-5xl font-black">My Events</h1>
                    </div>

                    <button className="rounded-full bg-[#ff4fc3] px-6 py-3 font-black text-white shadow-lg shadow-pink-300/60 transition hover:-translate-y-0.5">
                        + New Folder
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {mockFolders.map((label) => (
                        <FolderCard
                            key={label}
                            href={`/folders/${label}`}
                            label={label}
                            photoCount={0}
                        />
                    ))}
                </div>
            </section>
        </Background>
    );
}
