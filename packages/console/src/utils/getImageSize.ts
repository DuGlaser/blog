export const getImageSize = (
  url: string
): Promise<{ width: number; height: number }> => {
  return new Promise<{
    width: number;
    height: number;
  }>((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = () => reject();
  });
};
