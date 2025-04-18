// src/utils/remark-insert-help.js
import { visit } from 'unist-util-visit';

export default function remarkInsertHelp() {
  return (tree, vfile) => {
    const fm = vfile.data.frontmatter;
    if (!fm || !fm.help) return;
    const node = {
      type: 'mdxJsxFlowElement',
      name: 'CardAide',
      attributes: [
        {
          type: 'mdxJsxAttribute',
          name: 'variant',
          value: fm.help,
        },
      ],
      children: [],
    };
    tree.children.push(node);
  };
}