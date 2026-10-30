type SectionLabelProps = {
  number: string
  label: string
}

export function SectionLabel({ number, label }: SectionLabelProps) {
  return (
    <p className="mb-6 flex items-baseline gap-3 text-[11px] font-medium tracking-[0.22em] text-muted uppercase">
      <span className="text-accent">{number}</span>
      <span className="h-px w-8 bg-line" aria-hidden="true" />
      <span>{label}</span>
    </p>
  )
}
