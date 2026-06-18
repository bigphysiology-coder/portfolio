import { useMagnetic } from '../../hooks/useMagnetic'
import { techIcons } from './techIcons'

interface Props {
  label: string
}

export default function TechBadge({ label }: Props) {
  const ref = useMagnetic<HTMLSpanElement>()
  const icon = techIcons[label]

  return (
    <span
      ref={ref}
      className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-card border border-border rounded-lg text-sm font-medium text-text-primary hover:border-accent hover:text-accent hover:bg-surface-alt transition-all duration-300 cursor-default"
    >
      {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
      {label}
    </span>
  )
}
