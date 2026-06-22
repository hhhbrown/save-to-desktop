import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
import { SurfaceCard } from "@/components/SurfaceCard";
import { TextInput } from "@/components/TextInput";

export default function NewFolderPage() {
    return (
        <Background>
            <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center px-6 py-10">
                <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">
                            New Folder
                        </p>
                        <h1 className="mt-3 text-5xl font-black">
                            Create an event folder
                        </h1>
                        <p className="mt-4 max-w-md text-lg font-bold leading-8 text-[#6f5b7a]">
                            Set up the collection space guests will use to send
                            photos from your event.
                        </p>
                    </div>

                    <SurfaceCard className="p-8 shadow-2xl shadow-fuchsia-300/40">
                        <form className="flex flex-col gap-5">
                            <TextInput
                                id="folder-name"
                                label="Folder Name"
                                placeholder="Birthday Party"
                            />

                            <TextInput
                                id="event-date"
                                label="Event Date"
                                type="date"
                            />

                            <TextInput
                                id="upload-token"
                                label="Guest Link Slug"
                                placeholder="birthday-drop"
                            />

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button className="rounded-full bg-[#ff4fc3] px-7 py-3 font-black text-white shadow-lg shadow-pink-300/60 transition hover:-translate-y-0.5 hover:bg-[#f23bb7]">
                                    Create Folder
                                </button>
                                <ButtonLink href="/dashboard" variant="secondary">
                                    Cancel
                                </ButtonLink>
                            </div>
                        </form>
                    </SurfaceCard>
                </div>
            </section>
        </Background>
    );
}
