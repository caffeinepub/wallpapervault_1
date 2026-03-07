import { ChevronLeft, Layers } from "lucide-react";

interface AboutUsPageProps {
  onBack: () => void;
}

export function AboutUsPage({ onBack }: AboutUsPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <button
        type="button"
        data-ocid="about.back_button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm mb-8"
        aria-label="Back to home"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to home
      </button>

      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
          <Layers className="w-5 h-5 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-foreground">
          About Us
        </h1>
      </div>
      <p className="text-muted-foreground text-sm mb-10">
        The story behind WallpaperVault
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Why We Built This
          </h2>
          <p>
            WallpaperVault was born out of a simple frustration: finding a
            beautiful, high-quality wallpaper shouldn&apos;t require signing up
            for yet another account, sitting through pop-up ads, or wading
            through blurry thumbnails. We wanted a clean, fast, and genuinely
            free destination where anyone could discover and download stunning
            HD and 4K wallpapers without friction. So we built it ourselves.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Our Collection
          </h2>
          <p>
            Every wallpaper in our library is handpicked and organized across
            carefully curated categories — Anime, Nature, Cars, Gaming, AMOLED,
            Space, and Minimal. We obsess over quality over quantity: each image
            is evaluated for composition, color balance, resolution, and overall
            impact before it makes the cut. Whether you&apos;re setting up a
            dark AMOLED display or looking for a sweeping nature scene for your
            desktop, we have something that will make your screen feel alive.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Built on the Internet Computer
          </h2>
          <p>
            WallpaperVault runs entirely on the Internet Computer blockchain — a
            decentralized cloud platform that keeps our app online without
            relying on traditional centralized servers. This means no single
            point of failure, true ownership of the platform, and transparent
            on-chain data like download counts. We believe the future of the web
            is open, permanent, and community-owned, and WallpaperVault is our
            small contribution to that vision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Always Free, Always Growing
          </h2>
          <p>
            Every wallpaper on WallpaperVault is free to download and use for
            personal backgrounds — no watermarks, no paywalls, no hidden fees.
            We regularly refresh the collection with new additions across all
            categories. If you have a wallpaper you&apos;d love to see in the
            vault, or if you have a question or suggestion, we&apos;d love to
            hear from you at{" "}
            <a
              href="mailto:hello@wallpapervault.app"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@wallpapervault.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
