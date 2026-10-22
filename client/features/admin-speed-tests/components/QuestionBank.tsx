"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DataTable, type Column } from "@/components/ui/DataTable";
import { RowActions } from "@/components/ui/RowActions";
import type { Question } from "@/features/speed-test/types";

type Config = { subject: string; grade: string; questionCount: number; durationMinutes: number };

const columns: Column<Question>[] = [
  { key: "text", header: "Question", cell: (q) => <span className="font-medium text-slate-800">{q.text}</span> },
  { key: "options", header: "Options", cell: (q) => q.options.length, className: "hidden md:table-cell" },
  { key: "answer", header: "Correct answer", cell: (q) => q.options[q.answerIndex] },
  { key: "actions", header: "", cell: () => <RowActions actions={[{ label: "Edit" }, { label: "Delete", danger: true }]} /> },
];

export function QuestionBank({ questions, config }: { questions: Question[]; config: Config }) {
  const facts = [
    ["Subject", config.subject],
    ["Grade", config.grade],
    ["Questions per test", String(config.questionCount)],
    ["Duration", `${config.durationMinutes} min`],
  ];

  return (
    <div className="space-y-6">
      <Card>
        <h2 className="text-lg font-semibold text-slate-800">Current speed test</h2>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="text-sm text-slate-400">{label}</dt>
              <dd className="mt-1 text-lg font-medium text-slate-800">{value}</dd>
            </div>
          ))}
        </dl>
      </Card>

      <DataTable
        rows={questions}
        columns={columns}
        rowKey={(q) => q.id}
        searchText={(q) => q.text}
        searchPlaceholder="Search questions"
        toolbar={<Button variant="admin" size="toolbar">+ Add question</Button>}
      />
    </div>
  );
}
