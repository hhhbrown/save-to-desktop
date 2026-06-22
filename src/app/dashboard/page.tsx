import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
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

                    <ButtonLink href="/folders/new" className="px-6">
                        + New Folder
                    </ButtonLink>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {mockFolders.map((folder) => (
                        <FolderCard
                            key={folder.id}
                            href={`/folders/${folder.id}`}
                            label={folder.name}
                            photoCount={folder.photoCount}
                        />
                    ))}
                </div>
            </section>
        </Background>
    );
}
