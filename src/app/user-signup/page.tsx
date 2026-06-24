import { Background } from "@/components/Background";
import { ButtonLink } from "@/components/ButtonLink";
import { SurfaceCard } from "@/components/SurfaceCard";
import { TextInput } from "@/components/TextInput";
import Link from "next/link";

export default function UserSignUp() {
    return (
        <Background>
            <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8">
                <SurfaceCard className="w-full max-w-md p-8">
                    <div className="mb-8 text-center">
                        <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#7f2f86]">
                            Welcome
                        </p>

                        <h1 className="text-5xl font-black tracking-normal [text-shadow:3px_3px_0_#9ee7ff]">
                            New Account
                        </h1>

                        <p className="mt-3 text-sm font-medium text-[#6f5b7a]">
                            Enter email + new password below:
                        </p>
                    </div>

                    <form className="flex flex-col gap-5">
                        <TextInput
                            id="email"
                            label="Your Email"
                            type="email"
                            placeholder="example@gmail.com"
                        />

                        <TextInput
                            id="password"
                            label="New Password"
                            type="password"
                            placeholder="••••••••"
                        />

                        <ButtonLink href="/user-login" className="mt-2">
                            Create Account
                        </ButtonLink>
                    </form>

                    <p className="mt-6 text-center text-sm font-medium text-[#6f5b7a]">
                        Already have an account?{" "}
                        <Link
                            className="font-black text-[#d4149d] underline decoration-2 underline-offset-4"
                            href="/user-login"
                        >
                            Log In Here
                        </Link>
                    </p>
                </SurfaceCard>
            </section>
        </Background>
    );
}
