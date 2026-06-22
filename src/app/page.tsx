import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
import { DesktopWindow } from "@/components/DesktopWindow";
import { FolderCard } from "@/components/FolderCard";
import { mockFolders } from "@/lib/mockData";

export default function Home() {
    return (
        <Background overlayClassName="bg-white/40">
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
                            <ButtonLink href="/user-login">Log In</ButtonLink>
                            <ButtonLink href="/user-signup" variant="secondary">
                                Create an Account
                            </ButtonLink>
                        </div>
                    </div>

                    <DesktopWindow title="My Event Photos">
                        <div className="mb-4 rounded-2xl border-2 border-dashed border-fuchsia-300 bg-white/70 p-7 text-center">
                            <p className="text-5xl">💾</p>
                            <p className="mt-2 text-lg font-black">Drop photos here</p>
                            <p className="text-sm font-medium text-[#765982]">
                                JPG, PNG, and memories accepted
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            {mockFolders.map((folder) => (
                                <FolderCard key={folder.id} label={folder.name} compact />
                            ))}
                        </div>
                    </DesktopWindow>
                </div>
            </section>
        </Background>
    );
}
