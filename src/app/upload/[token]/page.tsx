import { Background } from "@/components/Background";

export default function UploadPage() {
    return (
        <Background>
            <section className="relative z-10 mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">
                            Folder
                        </p>
                        <h1 className="text-5xl font-black">
                            Welcome to Event Title Page
                        </h1>
                    </div>

                    <button className="rounded-full bg-[#ff4fc3] px-6 py-3 font-black text-white shadow-lg shadow-pink-300/60">
                        Upload Photos
                    </button>
                </div>
            </section>
        </Background>
    );
}
