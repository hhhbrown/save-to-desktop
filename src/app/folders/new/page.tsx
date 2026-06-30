"use client";

import { useState } from "react";
import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
import { SurfaceCard } from "@/components/SurfaceCard";
import { TextInput } from "@/components/TextInput";
import { useRouter } from "next/navigation";

export default function NewFolderPage() {
    const router = useRouter();

    const [folderName, setFolderName] = useState("");
    const [isCreating, setIsCreating] = useState(false);
    const [message, setMessage] = useState("");

    async function createFolder() {
        if (!folderName.trim()) return;

        setIsCreating(true);
        setMessage("");

        const response = await fetch("/api/folders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: folderName }),
        });

        if (response.ok) {
            router.push('/dashboard');
        } else {
            setMessage("Something went wrong.");
        }

        setIsCreating(false);
    }

    return (
        <Background>
            <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl items-center px-6 py-10">
                <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7f2f86]">
                            New Folder
                        </p>
                        <h1 className="mt-3 text-5xl font-black [text-shadow:3px_3px_0_#9ee7ff]">
                            Create an event folder
                        </h1>
                        <p className="mt-4 max-w-md text-lg font-bold leading-8 text-[#6f5b7a]">
                            Set up the collection space guests will use to send photos from
                            your event.
                        </p>
                    </div>

                    <SurfaceCard className="p-8">
                        <form className="flex flex-col gap-5">
                            <TextInput
                                id="folder-name"
                                label="Folder Name"
                                placeholder="Birthday Party"
                                value={folderName}
                                onChange={(e) => setFolderName(e.target.value)}
                            />

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={createFolder}
                                    disabled={isCreating}
                                    className="border-2 border-[#321034] bg-[#ff4fc3] px-5 py-3 font-black uppercase tracking-wide text-white shadow-[4px_4px_0_#321034] transition hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:opacity-50"
                                >
                                    {isCreating ? "Creating..." : "Create Folder"}
                                </button>
                                <ButtonLink href="/dashboard" variant="secondary">
                                    Cancel
                                </ButtonLink>
                                {message && <p className="font-bold text-[#321034]">{message}</p>}
                            </div>
                        </form>
                    </SurfaceCard>
                </div>
            </section>
        </Background>
    );
}