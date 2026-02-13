'use client';

import { WifiOff } from 'lucide-react';
import Link from 'next/link';

export default function OfflinePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 bg-background text-foreground"
      role="main"
      aria-label="Página offline"
    >
      <div className="flex flex-col items-center gap-4 text-center max-w-md">
        <div className="rounded-full bg-muted p-4" aria-hidden>
          <WifiOff className="h-12 w-12 text-muted-foreground" />
        </div>
        <h1 className="text-2xl font-bold">Você está offline</h1>
        <p className="text-muted-foreground">
          Não foi possível carregar esta página. Verifique sua conexão e tente
          novamente.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
        >
          Tentar novamente
        </button>
        <Link
          href="/"
          className="rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background text-center"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
