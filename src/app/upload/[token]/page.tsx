import { Background } from "@/components/Background";
import { SurfaceCard } from "@/components/SurfaceCard";
import { TextInput } from "@/components/TextInput";
import { getFolderByToken } from "@/lib/mockData";

type UploadPageProps = {
    params: Promise<{
        token: string;
    }>;
};

export default async function UploadPage({ params }: UploadPageProps) {
    const { token } = await params;
    const folder = getFolderByToken(token);
    const folderName = folder?.name ?? "Event";

    return (
        <Background>
            <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center px-6 py-10">
                <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7f2f86]">
                            Guest Upload
                        </p>
                        <h1 className="mt-3 text-5xl font-black [text-shadow:3px_3px_0_#9ee7ff]">
                            Add photos to {folderName}
                        </h1>
                        <p className="mt-4 max-w-md text-lg font-bold leading-8 text-[#6f5b7a]">
                            Drop in your favorite shots and leave your name so the
                            organizer knows who shared them.
                        </p>
                    </div>

                    <SurfaceCard className="p-8">
                        <form className="flex flex-col gap-5">
                            <TextInput
                                id="guest-name"
                                label="Your Name"
                                placeholder="Hannah"
                            />

                            <TextInput
                                id="guest-email"
                                label="Email"
                                type="email"
                                placeholder="example@gmail.com"
                            />

                            <div className="flex flex-col gap-2">
                                <label
                                    htmlFor="photos"
                                    className="text-sm font-bold"
                                >
                                    Photos
                                </label>
                                <label
                                    htmlFor="photos"
                                    className="flex min-h-36 cursor-pointer flex-col items-center justify-center border-2 border-dashed border-[#321034] bg-[#ffe8f7] p-6 text-center shadow-[4px_4px_0_#321034] transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-white"
                                >
                                    <span className="text-5xl">💾</span>
                                    <span className="mt-2 text-lg font-black">
                                        Choose photos
                                    </span>
                                    <span className="text-sm font-bold text-[#765982]">
                                        JPG and PNG files
                                    </span>
                                </label>
                                <input
                                    id="photos"
                                    type="file"
                                    multiple
                                    accept="image/png,image/jpeg"
                                    className="sr-only"
                                />
                            </div>

                            <button className="mt-2 border-2 border-[#321034] bg-[#ff4fc3] px-5 py-3 font-black uppercase tracking-wide text-white shadow-[4px_4px_0_#321034] transition hover:-translate-x-0.5 hover:-translate-y-0.5">
                                Upload Photos
                            </button>
                        </form>
                    </SurfaceCard>
                </div>
            </section>
        </Background>
    );
}
