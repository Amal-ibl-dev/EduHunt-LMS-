export type Meeting = {
  id: string;
  title: string;
  description: string;
  /** ISO date */
  date: string;
  time: string;
  durationMinutes: number;
  platform: "Google Meet" | "Zoom" | "YouTube Live";
  url: string;
  registered: number;
  status: "upcoming" | "past";
};
