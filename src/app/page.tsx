import { Auth } from "@/components/auth";
import { Logo } from "@/components/logo";
import { Rocket, Zap, BrainCircuit } from "lucide-react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#0a192f] relative overflow-hidden">
      {/* Animated Waves Background */}
      <div className="absolute inset-0 opacity-20 animate-wave">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#2C3E50"
            d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,128C960,96,1056,64,1152,74.7C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <header className="px-4 mt-5 lg:px-6 h-14 flex items-center backdrop-blur-sm bg-white/5 rounded-full mx-4">
        <Logo />
      </header>

      <main className="flex-1 relative z-10">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Ultimate AI Content Generator
                </h2>
                <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Our platform offers a suite of powerful tools to help you
                  generate social media content with the power of AI.
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-24 items-center justify-center text-center">
              <div className="inline-block rounded-lg bg-white/10 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm">
                Key Features
              </div>
            </div>

            <div className="mx-auto mt-10 grid max-w-5xl items-start gap-8 py-12 lg:grid-cols-3 lg:gap-12">
              {[
                { icon: Rocket, title: "Increased Efficiency", color: "blue" },
                { icon: Zap, title: "Accelerated Growth", color: "purple" },
                { icon: BrainCircuit, title: "AI Powered", color: "green" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-lg border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`rounded-full bg-${feature.color}-500/20 p-3 text-${feature.color}-400`}
                    >
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sign In Button Centered Below the 3 Cards */}
            <div className="flex justify-center mt-12">
              <Auth />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
