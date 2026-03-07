import { ChevronLeft } from "lucide-react";

interface PrivacyPolicyPageProps {
  onBack: () => void;
}

export function PrivacyPolicyPage({ onBack }: PrivacyPolicyPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <button
        type="button"
        data-ocid="privacy.back_button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm mb-8"
        aria-label="Back to home"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to home
      </button>

      <h1 className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-foreground mb-2">
        Privacy Policy
      </h1>
      <p className="text-muted-foreground text-sm mb-10">
        Last updated: March 7, 2026
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Information We Collect
          </h2>
          <p>
            WallpaperVault is designed to be as privacy-friendly as possible.
            When you browse our gallery, we collect only anonymized, aggregated
            usage data such as which categories and wallpapers are most popular.
            We do not collect personally identifiable information unless you
            voluntarily provide it, for example by contacting us via email. We
            do not require you to create an account to browse, search, or
            download any wallpaper on this platform.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            How We Use Your Data
          </h2>
          <p>
            Aggregated data helps us understand which wallpapers are trending,
            which categories are most popular, and how users navigate the site —
            so we can improve the experience for everyone. Download counts
            displayed on wallpaper cards are stored on-chain via the Internet
            Computer and are publicly visible by design. No personal profiles
            are built from this data, and we do not sell, rent, or trade any
            information to third parties under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Cookies &amp; Local Storage
          </h2>
          <p>
            WallpaperVault does not use tracking cookies. We may use browser
            local storage solely to preserve your session preferences (such as
            your last-selected category or search query) across page refreshes.
            This data never leaves your device and is not transmitted to our
            servers. You can clear your browser&apos;s local storage at any time
            through your browser settings without affecting your ability to use
            the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Third-Party Images &amp; Links
          </h2>
          <p>
            Wallpaper images on WallpaperVault are sourced from reputable public
            image providers. When you download a wallpaper, your browser fetches
            the image directly. We are not responsible for the privacy practices
            of third-party image hosts. Any external links on this site open in
            a new tab and are governed by those sites&apos; own privacy
            policies. We encourage you to review them before providing any
            personal information to those services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal, operational, or regulatory
            reasons. When we make changes, we will update the &ldquo;Last
            updated&rdquo; date at the top of this page. We encourage you to
            review this policy periodically. Continued use of WallpaperVault
            after any changes constitutes your acceptance of the updated policy.
          </p>
        </section>
      </div>
    </div>
  );
}
