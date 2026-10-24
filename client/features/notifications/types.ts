export type NotificationKind = "class" | "student" | "payment" | "upload" | "meeting" | "test" | "system";

export type AppNotification = {
  id: string;
  kind: NotificationKind;
  title: string;
  description: string;
  /** Display text, e.g. "2h ago" */
  time: string;
  group: "Today" | "Yesterday" | "Earlier";
  read: boolean;
  href?: string;
};
