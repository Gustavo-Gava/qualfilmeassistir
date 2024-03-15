export const generateMappedArray = (map: Record<string, unknown>) => {
  return Object.entries(map).map(([key, value], index) => ({
    label: value,
    value: key,
    id: (index + 1).toString(),
  }));
};
