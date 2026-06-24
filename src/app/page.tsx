import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
import { DesktopWindow } from "@/components/DesktopWindow";
import { FolderCard } from "@/components/FolderCard";
import { mockFolders } from "@/lib/mockData";

export default function Home() {
    return (
        <Background>
            <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
                <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                        <p className="mb-4 inline-block rotate-[-2deg] border-2 border-[#321034] bg-[#fff8a8] px-3 py-2 text-sm font-black uppercase tracking-wide shadow-[4px_4px_0_#321034]">
                            ★ Event photo collection
                        </p>

                        <h1 className="max-w-3xl text-6xl font-black tracking-normal text-[#321034] [text-shadow:4px_4px_0_#9ee7ff] sm:text-7xl lg:text-8xl">
                            Save to
                            <span className="block text-[#ff4fc3] [text-shadow:4px_4px_0_#321034]">
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
                        <div className="mb-4 border-2 border-dashed border-[#321034] bg-[#ffe8f7] p-7 text-center shadow-[4px_4px_0_#321034]">
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
