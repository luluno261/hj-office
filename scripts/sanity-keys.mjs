import { randomUUID } from 'node:crypto';

export function randomKey() {
  return randomUUID().replace(/-/g, '').slice(0, 12);
}

export function keyed(item) {
  return { _key: randomKey(), ...item };
}

/** Portable Text blocks + span children need _key for Studio editing. */
export function portableTextBlock(style, text) {
  return {
    _key: randomKey(),
    _type: 'block',
    style,
    markDefs: [],
    children: [
      {
        _key: randomKey(),
        _type: 'span',
        marks: [],
        text,
      },
    ],
  };
}

/** Recursively add _key to Portable Text nodes missing them. */
export function ensurePortableTextKeys(nodes) {
  if (!Array.isArray(nodes)) return nodes;

  return nodes.map((node) => {
    const next = { ...node };
    if (!next._key) next._key = randomKey();

    if (Array.isArray(next.children)) {
      next.children = next.children.map((child) => {
        const c = { ...child };
        if (!c._key) c._key = randomKey();
        if (!c.marks) c.marks = [];
        return c;
      });
    }

    if (!next.markDefs) next.markDefs = [];

    return next;
  });
}
