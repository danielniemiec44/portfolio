export function chooseActiveSection(
  sections: { id: string; top: number }[],
  scrollY: number,
  navHeight: number,
  innerHeight: number,
  docHeight: number
) {
  if (!sections.length) return null;

  // dynamic buffer: smaller on short screens to avoid jumping
  const baseBuffer = innerHeight < 600 ? 12 : 20;
  const topOffset = navHeight + baseBuffer;
  const scrollPoint = scrollY + topOffset;

  const tops = sections.map((s) => s.top - topOffset);

  // compute midpoints between consecutive section tops
  const boundaries: number[] = [];
  for (let i = 0; i < tops.length - 1; i++) {
    boundaries.push((tops[i] + tops[i + 1]) / 2);
  }

  let chosenIndex = tops.length - 1;
  for (let i = 0; i < boundaries.length; i++) {
    if (scrollPoint < boundaries[i]) {
      chosenIndex = i;
      break;
    }
  }

  // near-bottom override to ensure last section becomes active
  const distToBottom = docHeight - (scrollY + innerHeight);
  const bottomThreshold = innerHeight < 600 ? 120 : 200;
  if (distToBottom <= bottomThreshold) chosenIndex = tops.length - 1;

  return sections[chosenIndex]?.id ?? null;
}
