/** Human-readable label for a system role slug (e.g. `org_admin` → `Org Admin`). */
export function formatRoleName(name?: string | null): string {
  if (!name) return '—';
  return name
    .split('_')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
