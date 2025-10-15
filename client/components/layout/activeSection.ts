export function chooseActiveSection(
  sections: { id: string; top: number; bottom: number }[],
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

  // ensure chosen section is actually at least slightly visible (helps on mobile)
  const chosen = sections[chosenIndex];
  if (chosen) {
    const visTop = Math.max(chosen.top - scrollY, navHeight);
    const visBottom = Math.min(chosen.bottom - scrollY, innerHeight);
    const visibleHeight = Math.max(0, visBottom - visTop);

    // require some visibility for last section unless near bottom
    if (chosenIndex === sections.length - 1 && distToBottom > bottomThreshold && visibleHeight < 40) {
      // try falling back to previous section if visible
      const prev = sections[chosenIndex - 1];
      if (prev) {
        const prevVisTop = Math.max(prev.top - scrollY, navHeight);
        const prevVisBottom = Math.min(prev.bottom - scrollY, innerHeight);
        const prevVisible = Math.max(0, prevVisBottom - prevVisTop);
        if (prevVisible >= 40) return prev.id;
      }
      return null;
    }
  }

  return sections[chosenIndex]?.id ?? null;
}
