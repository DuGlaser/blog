export const formatMDImage = (url: string, label?: string): string => {
  return `![${label ?? ''}](${url})`;
};
