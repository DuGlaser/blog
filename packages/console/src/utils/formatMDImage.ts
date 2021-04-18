export const formatMDImage = (image: {
  url: string;
  label?: string;
  width: number;
  height: number;
}): string => {
  return `![${image.label ?? ''}](${image.url}=${image.width}x${image.height})`;
};
