import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
import { SurfaceCard } from "@/components/SurfaceCard";
import {
    getFolderById,
    getPhotosByFolderId,
    type MockPhoto,
} from "@/lib/mockData";

type FolderPageProps = {
    params: Promise<{
        folderId: string;
    }>;
};

export default async function FolderPage({ params }: FolderPageProps) {
    const { folderId } = await params;
    const folder = getFolderById(folderId);
    const photos = getPhotosByFolderId(folder?.id ?? folderId);
    const pendingPhotos = photos.filter((photo) => photo.status === "pending");
    const approvedPhotos = photos.filter((photo) => photo.status === "approved");
    const displayName = folder?.name ?? "Event Title";
    const uploadToken = folder?.uploadToken ?? "event-title";

    return (
        <Background>
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">
                            Folder
                        </p>
                        <h1 className="text-5xl font-black">{displayName}</h1>
                        {folder && (
                            <p className="mt-2 font-bold text-[#6f5b7a]">
                                {folder.eventDate} · {folder.photoCount} photos saved
                            </p>
                        )}
                    </div>

                    <button className="rounded-full bg-[#ff4fc3] px-6 py-3 font-black text-white shadow-lg shadow-pink-300/60 transition hover:-translate-y-0.5">
                        Publish Gallery
                    </button>
                </div>

                <SurfaceCard className="mb-8">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <p className="mb-2 text-sm font-bold text-[#6f5b7a]">
                                Guest upload link
                            </p>
                            <div className="rounded-xl bg-white/70 p-4 font-bold">
                                save-to-desktop.com/upload/{uploadToken}
                            </div>
                        </div>

                        <ButtonLink href={`/upload/${uploadToken}`} variant="secondary">
                            Preview Upload Page
                        </ButtonLink>
                    </div>
                </SurfaceCard>

                <div className="grid gap-6 lg:grid-cols-2">
                    <PhotoSection
                        title="Pending Photos"
                        photos={pendingPhotos}
                        emptyLabel="No pending photos yet"
                    />
                    <PhotoSection
                        title="Approved Photos"
                        photos={approvedPhotos}
                        emptyLabel="No approved photos yet"
                    />
                </div>
            </section>
        </Background>
    );
}

function PhotoSection({
    title,
    photos,
    emptyLabel,
}: {
    title: string;
    photos: MockPhoto[];
    emptyLabel: string;
}) {
    return (
        <SurfaceCard>
            <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-black">{title}</h2>
                <span className="rounded-full bg-white/70 px-3 py-1 text-sm font-black text-fuchsia-600">
                    {photos.length}
                </span>
            </div>

            <div className="space-y-3">
                {photos.length === 0 && (
                    <div className="rounded-2xl border border-dashed border-fuchsia-300 bg-white/45 p-5 text-sm font-bold text-[#6f5b7a]">
                        {emptyLabel}
                    </div>
                )}

                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="rounded-2xl bg-white/60 p-4 shadow-sm"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <p className="font-black">{photo.name}</p>
                                <p className="text-sm font-bold text-[#6f5b7a]">
                                    Uploaded by {photo.uploadedBy}
                                </p>
                            </div>
                            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black uppercase text-sky-600">
                                {photo.status}
                            </span>
                        </div>

                        {photo.status === "pending" && (
                            <div className="mt-3 flex gap-2">
                                <button className="rounded-full bg-pink-500 px-4 py-2 text-sm font-bold text-white shadow-md shadow-pink-200 transition hover:-translate-y-0.5">
                                    Approve
                                </button>
                                <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#4a2c5c] transition hover:-translate-y-0.5">
                                    Reject
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </SurfaceCard>
    );
}
