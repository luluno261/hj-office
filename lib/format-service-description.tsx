type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] };

function parseDescription(description: string): Block[] {
  const blocks: Block[] = [];
  let listItems: string[] = [];

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: 'list', items: listItems });
      listItems = [];
    }
  };

  for (const line of description.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      flushList();
      blocks.push({ type: 'heading', text: trimmed.replace(/^\d+\.\s*/, '') });
      continue;
    }

    if (/^[*-]\s/.test(trimmed)) {
      listItems.push(trimmed.replace(/^[*-]\s*/, ''));
      continue;
    }

    flushList();
    blocks.push({ type: 'paragraph', text: trimmed });
  }

  flushList();
  return blocks;
}

export function FormattedServiceDescription({ description }: { description: string }) {
  const blocks = parseDescription(description);

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h4
              key={index}
              className="font-sans text-lg font-semibold text-teal-900 first:mt-0">
              {block.text}
            </h4>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={index} className="list-disc space-y-1 pl-5">
              {block.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="font-sans text-base font-light leading-relaxed text-dark/80">
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className="font-sans text-base font-light leading-relaxed text-dark/80">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
