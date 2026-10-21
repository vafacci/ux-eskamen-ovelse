export function HicksDemo() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-2xl border border-black/10 bg-white p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-muted">
          Mange valg
        </p>
        <div className="flex flex-wrap gap-2">
          {['Express', 'Premium', 'Insekt', 'Undervogn', 'Polish', 'Voks', 'Dæk', 'Interiør'].map(
            (x) => (
              <span
                key={x}
                className="rounded-lg border border-black/10 px-2.5 py-1.5 text-sm"
              >
                {x}
              </span>
            ),
          )}
        </div>
        <p className="mt-3 text-sm text-ink-muted">Længere beslutningstid</p>
      </div>
      <div className="rounded-2xl border border-ww-green/40 bg-ww-green-soft p-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ww-green-dark">
          Færre valg (WashWorld)
        </p>
        <div className="flex flex-wrap gap-2">
          {['Ledig nu', 'Nærmest', 'Favoritter'].map((x) => (
            <span
              key={x}
              className="rounded-lg bg-ww-green px-2.5 py-1.5 text-sm font-medium text-ink"
            >
              {x}
            </span>
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-muted">Hurtigere beslutning</p>
      </div>
    </div>
  )
}

export function StatusDemo() {
  const items = [
    { label: 'Ledig', color: 'bg-ww-green', hint: 'Kør gerne' },
    { label: 'Optaget', color: 'bg-amber-400', hint: 'Ventetid' },
    { label: 'Defekt', color: 'bg-red-500', hint: 'Vælg anden' },
  ]
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((i) => (
        <div
          key={i.label}
          className="flex min-w-[120px] flex-1 items-center gap-3 rounded-2xl border border-black/10 bg-white p-4"
        >
          <span className={`h-3 w-3 rounded-full ${i.color}`} />
          <div>
            <p className="font-semibold">{i.label}</p>
            <p className="text-sm text-ink-muted">{i.hint}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function JakobDemo() {
  return (
    <div className="rounded-2xl border border-black/10 bg-ink p-4 text-white">
      <div className="mb-6 h-24 rounded-xl bg-white/10" />
      <div className="grid grid-cols-4 gap-2 text-center text-xs">
        {['Hjem', 'Kort', 'Favoritter', 'Profil'].map((t, i) => (
          <div
            key={t}
            className={`rounded-xl py-3 ${i === 1 ? 'bg-ww-green text-ink' : 'bg-white/10'}`}
          >
            <div className="mx-auto mb-1 h-2 w-2 rounded-full bg-current opacity-70" />
            {t}
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-white/60">
        Genkendelig bundnavigation (Jakob&apos;s Law)
      </p>
    </div>
  )
}

export function CrapDemo() {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="mb-1 flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-lg font-semibold">Brøndby Vaskehal</p>
          <p className="text-sm text-ink-muted">2,1 km · Åben til 22:00</p>
        </div>
        <span className="rounded-full bg-ww-green px-3 py-1 text-sm font-semibold text-ink">
          Ledig
        </span>
      </div>
      <p className="mt-3 text-xs text-ink-muted">
        Contrast (status), Proximity (navn+adresse), Alignment (grid), Repetition (kortmønster)
      </p>
    </div>
  )
}
