export default function FolderPage() {
    return (
        <main className="relative min-h-screen overflow-hidden text-[#34213f]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background6.jpg')" }}
            />
            <div className="absolute inset-0 bg-white/35" />

            <section className="relative z-10 mx-auto max-w-6xl px-6 py-10">
                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">
                            Desktop
                        </p>
                        <h1 className="text-5xl font-black">Event Title</h1>
                    </div>
                </div>
            </section>
        </main>
    );
}