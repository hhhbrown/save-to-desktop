const mockPhotos = [
    { id: 1, name: "IMG_001.jpg", status: "pending" },
    { id: 2, name: "IMG_002.jpg", status: "pending" },
    { id: 3, name: "IMG_003.jpg", status: "approved" },
];

export default function FolderPage() {
    return (
        <main className="relative min-h-screen overflow-hidden text-[#34213f]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background6.jpg')" }}
            />
            <div className="absolute inset-0 bg-white/35" />

            <section className="relative z-10 mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">
                            Folder
                        </p>
                        <h1 className="text-5xl font-black">Event Title</h1>
                    </div>

                    <button className="rounded-full bg-[#ff4fc3] px-6 py-3 font-black text-white shadow-lg shadow-pink-300/60">
                        Publish Gallery
                    </button>
                </div>

                <div className="mb-8 rounded-[2rem] border border-white/70 bg-white/40 p-6 shadow-xl backdrop-blur-xl">
                    <p className="mb-2 text-sm font-bold text-[#6f5b7a]">
                        Guest upload link
                    </p>
                    <div className="rounded-xl bg-white/70 p-4 font-bold">
                        save-to-desktop.com/upload/event-title
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <PhotoSection title="Pending Photos" photos={mockPhotos.filter(p => p.status === "pending")} />
                    <PhotoSection title="Approved Photos" photos={mockPhotos.filter(p => p.status === "approved")} />
                    <button className="rounded-full bg-[#ff4fc3] px-6 py-3 font-black text-white shadow-lg shadow-pink-300/60">
                        Rejected Photos
                    </button>
                </div>
            </section>
        </main>
    );
}

function PhotoSection({
    title,
    photos,
}: {
    title: string;
    photos: { id: number; name: string; status: string }[];
}) {
    return (
        <div className="rounded-[2rem] border border-white/70 bg-white/40 p-6 shadow-xl backdrop-blur-xl">
            <h2 className="mb-4 text-2xl font-black">{title}</h2>

            <div className="space-y-3">
                {photos.map((photo) => (
                    <div
                        key={photo.id}
                        className="rounded-2xl bg-white/60 p-4"
                    >
                        <p className="font-black">{photo.name}</p>

                        {photo.status === "pending" && (
                            <div className="mt-3 flex gap-2">
                                <button className="rounded-full bg-pink-500 px-4 py-2 text-sm font-bold text-white">
                                    Approve
                                </button>
                                <button className="rounded-full bg-white px-4 py-2 text-sm font-bold">
                                    Reject
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}