import { Plugin } from 'unified';
import { Node } from 'unist';
import { visit } from 'unist-util-visit';
import type { Visitor } from 'unist-util-visit/complex-types';

type ImgNode = {
  data: {
    hProperties?: {
      width?: string;
      height?: string;
      src?: string;
    };
  };
  url?: string;
} & Node;

export const imageSize: Plugin = () => {
  const find = /=[0-9]+x[0-9]+/;

  const visitor: Visitor<ImgNode> = (node) => {
    let { data } = node;
    const { url } = node;

    if (!url) {
      return;
    }

    if (!data) {
      data = {};
      node.data = data;
    }

    if (!data.hProperties) {
      data.hProperties = {};
    }

    const match = find.exec(url);

    if (match) {
      const position = match.index;
      const [width, height] = match[0].slice(1).split('x');
      const imgUrl = url.slice(0, position);

      data.hProperties.src = imgUrl;
      data.hProperties.width = width;
      data.hProperties.height = height;
    }
  };

  return (ast) => visit(ast, 'image', visitor);
};
