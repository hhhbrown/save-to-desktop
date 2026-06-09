export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden text-[#34213f]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background6.jpg')" }}
            />
            <div className="absolute inset-0 bg-white/40" />

            <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">

                <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <p className="mb-4 inline-block rounded-full border border-white/70 bg-white/50 px-4 py-2 text-sm font-bold shadow-sm backdrop-blur">
                            ✨ Event photo collection
                        </p>

                        <h1 className="text-6xl font-black tracking-tight sm:text-7xl lg:text-8xl">
                            Save to
                            <span className="block bg-gradient-to-r from-fuchsia-600 to-sky-500 bg-clip-text text-transparent">
                                Desktop
                            </span>
                        </h1>

                        <p className="mt-6 max-w-xl text-xl font-semibold leading-8 text-[#5b4268]">
                            Collect photos from any event.
                            <br />
                            No apps. No group chats. No lost memories.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="rounded-full bg-[#ff4fc3] px-7 py-3 font-black text-white shadow-lg shadow-pink-300/60 transition hover:-translate-y-0.5">
                                Log In
                            </button>

                            <button className="rounded-full border border-white/80 bg-white/50 px-7 py-3 font-black text-[#4a2c5c] shadow-sm backdrop-blur transition hover:-translate-y-0.5">
                                Create an Account
                            </button>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/70 bg-white/35 p-4 shadow-2xl shadow-fuchsia-300/40 backdrop-blur-xl">
                        <div className="overflow-hidden rounded-3xl border border-[#d8b4ff] bg-[#fff8fd]/80">
                            <div className="flex items-center gap-2 border-b border-[#e9c8ff] bg-gradient-to-r from-pink-300 to-sky-300 px-4 py-3">
                                <span className="h-3 w-3 rounded-full bg-pink-500" />
                                <span className="h-3 w-3 rounded-full bg-yellow-300" />
                                <span className="h-3 w-3 rounded-full bg-sky-400" />
                                <p className="ml-2 text-sm font-black">My Event Photos</p>
                            </div>

                            <div className="p-5">
                                <div className="mb-4 rounded-2xl border-2 border-dashed border-fuchsia-300 bg-white/70 p-7 text-center">
                                    <p className="text-5xl">💾</p>
                                    <p className="mt-2 text-lg font-black">Drop photos here</p>
                                    <p className="text-sm font-medium text-[#765982]">
                                        JPG, PNG, and memories accepted
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {["Party", "Camp", "Wedding", "Grad", "Show", "Trip"].map(
                                        (label) => (
                                            <div
                                                key={label}
                                                className="rounded-2xl bg-gradient-to-br from-pink-200 to-sky-200 p-3 shadow-sm"
                                            >
                                                <div className="mb-2 flex h-16 items-center justify-center rounded-xl bg-white/60 text-2xl">
                                                    📁
                                                </div>
                                                <p className="text-xs font-black">{label}</p>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}