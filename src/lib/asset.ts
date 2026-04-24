export const assetPath = (path: string) => {
  const normalizedPath = path.replace(/^\/+/, "");
  if (typeof document !== "undefined") {
    return new URL(normalizedPath, document.baseURI).pathname;
  }

  return `/${normalizedPath}`;
};
