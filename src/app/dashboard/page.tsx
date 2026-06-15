import Link from "next/link";
const events = ["Party", "Camp", "Wedding", "Grad", "Show", "Trip"];

export default function Dashboard() {
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
                        <h1 className="text-5xl font-black">My Events</h1>
                    </div>

                    <button className="rounded-full bg-[#ff4fc3] px-6 py-3 font-black text-white shadow-lg shadow-pink-300/60 transition hover:-translate-y-0.5">
                        + New Folder
                    </button>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((label) => (
                        <Link
                            key={label}
                            href={`/folders/${label}`}
                            className="rounded-[2rem] border border-white/70 bg-white/35 p-5 shadow-xl shadow-fuchsia-300/30 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/50"
                        >
                            <div className="mb-4 flex h-32 items-center justify-center rounded-3xl bg-white/50 text-6xl">
                                📁
                            </div>

                            <h2 className="text-xl font-black">{label}</h2>
                            <p className="mt-1 text-sm font-medium text-[#6f5b7a]">
                                0 photos saved
                            </p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}