export const formatMDImage = (url: string, label?: string) => {
  return `![${label ?? ''}](${url})`;
};
