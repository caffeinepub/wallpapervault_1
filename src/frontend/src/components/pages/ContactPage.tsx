import { ChevronLeft, Mail, MessageSquare } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
      <button
        type="button"
        data-ocid="contact.back_button"
        onClick={onBack}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors duration-150 text-sm mb-8"
        aria-label="Back to home"
      >
        <ChevronLeft className="w-4 h-4" />
        Back to home
      </button>

      <h1 className="text-4xl sm:text-5xl font-black font-heading tracking-tight text-foreground mb-2">
        Contact
      </h1>
      <p className="text-muted-foreground text-sm mb-10">
        We&apos;d love to hear from you
      </p>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Get in Touch
          </h2>
          <p>
            Have a question, a suggestion, or just want to say hello? We
            genuinely read every message and do our best to respond
            thoughtfully. Whether you&apos;ve spotted a broken image, want to
            request a new category, or have feedback about the browsing
            experience, we&apos;re all ears. WallpaperVault is a community-first
            project and your input directly shapes what we build next.
          </p>
        </section>

        {/* Contact card */}
        <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-8 space-y-5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm mb-1">
                Email us
              </p>
              <a
                href="mailto:hello@wallpapervault.app"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
              >
                hello@wallpapervault.app
              </a>
              <p className="text-muted-foreground text-sm mt-1.5">
                We typically respond within 1–2 business days.
              </p>
            </div>
          </div>

          <div className="border-t border-border" />

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground font-semibold text-sm mb-1">
                What to include
              </p>
              <p className="text-muted-foreground text-sm">
                To help us respond faster, please mention your device type and
                browser when reporting a technical issue, and include a link or
                description of the wallpaper if you&apos;re flagging a specific
                image.
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Reporting Copyright Issues
          </h2>
          <p>
            We take intellectual property rights seriously. If you believe any
            wallpaper in our collection infringes on your copyright, please
            contact us at{" "}
            <a
              href="mailto:hello@wallpapervault.app"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@wallpapervault.app
            </a>{" "}
            with the subject line &ldquo;Copyright Removal Request.&rdquo;
            Include a description of the work, evidence of your ownership, and
            the specific wallpaper URL. We will review and respond within 2
            business days and will promptly remove any content confirmed to
            infringe on intellectual property rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground font-heading mb-3">
            Wallpaper Submissions
          </h2>
          <p>
            Interested in having your photography or digital artwork featured in
            WallpaperVault? We&apos;d love to see your work. Send us a link to
            your portfolio or a selection of your best pieces at{" "}
            <a
              href="mailto:hello@wallpapervault.app"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              hello@wallpapervault.app
            </a>{" "}
            with the subject line &ldquo;Wallpaper Submission.&rdquo; We curate
            all submissions carefully and will credit artists whose work is
            featured in the collection.
          </p>
        </section>
      </div>
    </div>
  );
}
