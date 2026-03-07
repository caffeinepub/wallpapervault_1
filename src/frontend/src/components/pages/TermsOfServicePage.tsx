import { ChevronLeft } from "lucide-react";

interface TermsOfServicePageProps {
  onBack: () => void;
}

export function TermsOfServicePage({ onBack }: TermsOfServicePageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <button
        type="button"
        data-ocid="terms.back_button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm mb-8"
        aria-label="Back to home"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to home
      </button>

      <h1 className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-foreground mb-2">
        Terms of Service
      </h1>
      <p className="text-muted-foreground text-sm mb-10">
        Last updated: March 7, 2026
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using WallpaperVault (the &ldquo;Service&rdquo;),
            you agree to be bound by these Terms of Service. If you do not agree
            with any part of these terms, please do not use the Service. We
            reserve the right to modify these terms at any time. Continued use
            of WallpaperVault following any changes constitutes your acceptance
            of the revised terms. The most current version will always be
            available on this page.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            2. Permitted Use
          </h2>
          <p>
            Wallpapers available on WallpaperVault are provided for personal,
            non-commercial use only. You may download and set wallpapers as
            backgrounds on your personal devices — computers, phones, tablets,
            and similar equipment. You may not redistribute, resell, sublicense,
            or use any wallpaper for commercial purposes (including advertising,
            merchandise, or paid digital content) without obtaining explicit
            written permission from the original rights holders. When in doubt,
            assume the wallpaper is protected by copyright.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            3. Intellectual Property
          </h2>
          <p>
            All wallpaper images displayed on WallpaperVault remain the property
            of their respective creators and rights holders. WallpaperVault does
            not claim ownership over any user-submitted or third-party artwork.
            The WallpaperVault name, logo, and site design are the property of
            WallpaperVault and may not be used without permission. If you
            believe any content infringes your intellectual property rights,
            please contact us at{" "}
            <a
              href="mailto:hello@wallpapervault.app"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@wallpapervault.app
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            4. Disclaimer of Warranties
          </h2>
          <p>
            WallpaperVault is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, either express or
            implied. We do not guarantee that the Service will be uninterrupted,
            error-free, or free from viruses or other harmful components. We
            make no warranties regarding the accuracy, completeness, or
            suitability of the content for any particular purpose. Your use of
            the Service is entirely at your own risk.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            5. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, WallpaperVault
            and its operators shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages arising out of or
            related to your use of (or inability to use) the Service. This
            includes, but is not limited to, loss of data, loss of profits, or
            any other intangible losses, even if we have been advised of the
            possibility of such damages. Our total liability for any claim
            relating to the Service shall not exceed $10 USD.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            6. Governing Law
          </h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with applicable laws, without regard to conflict-of-law principles.
            Any disputes arising from these terms or your use of WallpaperVault
            will be resolved through good-faith negotiation first. If you have
            questions about these terms, please contact us at{" "}
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
