export const formatDate = (iso: string) => iso.replace(/-/g, "/");

export const formatTime = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
};

export const pluralItems = (n: number) => `${n} ${n === 1 ? "Item" : "Items"} Found`;
