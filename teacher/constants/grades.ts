export const GRADES = Array.from({ length: 13 }, (_, i) => ({
  value: String(i + 1),
  label: `Grade ${i + 1}`,
}));
