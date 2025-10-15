import { describe, it, expect } from 'vitest';
import { chooseActiveSection } from './activeSection';

// helper to build sections with given tops
function sectionsFromTops(tops: number[], heights: number[]) {
  return tops.map((t, i) => ({ id: `s${i}`, top: t, bottom: t + (heights[i] ?? 400) }));
}

describe('chooseActiveSection', () => {
  it('selects first section when at top', () => {
    const secs = sectionsFromTops([100, 800, 1400], [600, 600, 600]);
    const chosen = chooseActiveSection(secs, 0, 80, 800, 1800);
    expect(chosen).toBe('s0');
  });

  it('selects middle when scrolled between first and second', () => {
    const secs = sectionsFromTops([100, 800, 1400], [600, 600, 600]);
    const scrollY = 450; // arbitrary
    const chosen = chooseActiveSection(secs, scrollY, 80, 800, 1800);
    expect(chosen).toBe('s1');
  });

  it('selects last when near bottom', () => {
    const secs = sectionsFromTops([100, 800, 1400], [600, 600, 600]);
    const scrollY = 1000;
    const docH = 1700;
    const chosen = chooseActiveSection(secs, scrollY, 80, 800, docH);
    expect(chosen).toBe('s2');
  });

  it('returns null for empty', () => {
    const chosen = chooseActiveSection([], 0, 80, 800, 1000);
    expect(chosen).toBeNull();
  });
});
