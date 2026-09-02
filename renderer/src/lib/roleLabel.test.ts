import { describe, expect, it } from 'vitest';
import { formatRoleName } from './roleLabel';

describe('formatRoleName', () => {
  it('converts snake_case slugs to title case', () => {
    expect(formatRoleName('super_admin')).toBe('Super Admin');
    expect(formatRoleName('org_manager')).toBe('Org Manager');
    expect(formatRoleName('branch_manager')).toBe('Branch Manager');
  });

  it('returns em dash for empty values', () => {
    expect(formatRoleName()).toBe('—');
    expect(formatRoleName(null)).toBe('—');
  });
});
