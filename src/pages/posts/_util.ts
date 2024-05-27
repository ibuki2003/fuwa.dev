type Entry = {
  data: { title?: string; date: Date };
  body: string;
};

export function get_title(entry: Entry) {
  if (entry.data.title) return entry.data.title;

  const m = /^# *(.+)$/m.exec(entry.body);
  if (m) return m[1];

  // return "";
  throw new Error("title not found");
}

export function date_str(date: Date): string {
  // YYYY-MM-DD
  return date.toISOString().slice(0, 10);
}
