export default function UserSignUp() {
    return (
        <main className="relative min-h-screen overflow-hidden text-[#34213f]">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/background6.jpg')" }}
            />
            <div className="absolute inset-0 bg-white/35" />

            <section className="relative z-10 flex min-h-screen items-center justify-center px-6 py-8">
                <div className="w-full max-w-md rounded-[2rem] border border-white/70 bg-white/40 p-8 shadow-2xl shadow-fuchsia-300/40 backdrop-blur-xl">
                    <div className="mb-8 text-center">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-600">
                            Welcome
                        </p>

                        <h1 className="text-5xl font-black tracking-tight">
                            New Account
                        </h1>

                        <p className="mt-3 text-sm font-medium text-[#6f5b7a]">
                            Enter email + new password below:
                        </p>
                    </div>

                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-bold">
                                Your Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="example@gmail.com"
                                className="h-12 w-full rounded-xl border border-white/80 bg-white/75 px-4 text-[#34213f] outline-none transition focus:border-[#ff4fc3] focus:ring-4 focus:ring-pink-200"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-bold">
                                New Password
                            </label>

                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="h-12 w-full rounded-xl border border-white/80 bg-white/75 px-4 text-[#34213f] outline-none transition focus:border-[#ff4fc3] focus:ring-4 focus:ring-pink-200"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 rounded-full bg-[#ff4fc3] px-7 py-3 font-black text-white shadow-lg shadow-pink-300/60 transition hover:-translate-y-0.5 hover:bg-[#f23bb7]"
                        >
                            Log In
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm font-medium text-[#6f5b7a]">
                        Already have an account?{" "}
                        <span className="font-black text-fuchsia-600">
                            Login
                        </span>
                    </p>
                </div>
            </section>
        </main>
    );
}