import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
import { SurfaceCard } from "@/components/SurfaceCard";
import { TextInput } from "@/components/TextInput";
import Link from "next/link";

export default function UserLogin() {
    return (
        <Background>
            <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8">
                <SurfaceCard className="w-full max-w-md p-8">
                    <div className="mb-8 text-center">
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#7f2f86]">
                            Welcome back
                        </p>

                        <h1 className="text-5xl font-black tracking-normal [text-shadow:3px_3px_0_#9ee7ff]">
                            Log In
                        </h1>

                        <p className="mt-3 text-sm font-medium text-[#6f5b7a]">
                            Open your folders and manage your event photos.
                        </p>
                    </div>

                    <form className="flex flex-col gap-5">
                        <TextInput
                            id="email"
                            label="Email"
                            type="email"
                            placeholder="example@gmail.com"
                        />

                        <TextInput
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                        />

                        <ButtonLink href="/dashboard" className="mt-2">
                            Log In
                        </ButtonLink>
                    </form>

                    <p className="mt-6 text-center text-sm font-medium text-[#6f5b7a]">
                        New here?{" "}
                        <Link
                            className="font-black text-[#d4149d] underline decoration-2 underline-offset-4"
                            href="/user-signup"
                        >
                            Create an account
                        </Link>
                    </p>
                </SurfaceCard>
            </section>
        </Background>
    );
}
