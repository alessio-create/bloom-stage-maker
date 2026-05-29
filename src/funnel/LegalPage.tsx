import { ReactNode } from "react";

interface LegalPageProps {
  title: string;
  children: ReactNode;
}

/**
 * Shared layout for legal pages (Privacy Policy, Cookie Policy).
 * Uses the same neutral typography family as the funnel pages.
 */
export function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="legal-page">
      <header className="legal-page__bar">
        <div className="legal-page__bar-inner">
          <a href="/" className="legal-page__logo" aria-label="EuroMedPartner — Home">
            <img src="/logo-full.jpg" alt="EuroMedPartner" />
          </a>
          <a href="/" className="legal-page__back">← Torna alla home</a>
        </div>
      </header>

      <main className="legal-page__main">
        <article className="legal-page__article">
          <h1 className="legal-page__title">{title}</h1>
          <div className="legal-page__body">{children}</div>
        </article>
      </main>

      <footer className="funnel-footer">
        <div className="funnel-footer__inner">
          Copyright © 2026 - EUROMEDPARTNER LA BOUTIQUE DI FINANZA AGEVOLATA S.R.L. P.IVA 07322520821 |{" "}
          <a href="/privacy">Privacy Policy</a> | <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </footer>
    </div>
  );
}
