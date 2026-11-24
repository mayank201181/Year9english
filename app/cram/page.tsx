import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Exam Cram Sheet — Year 9 English",
  description: "Select any Year 9 English topics in your test for an instant Year 9 English Exam Cram & Mark-Savers Sheet.",
};

export default function CramPage() {
  const packs = TOPICS.map(buildTopicCramPack);
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Building Year 9 English Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel="Year 9 English" />
    </Suspense>
  );
}
