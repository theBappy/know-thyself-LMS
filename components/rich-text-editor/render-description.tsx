"use client";

import { useMemo } from "react";
import { generateHTML } from "@tiptap/html";
import { type JSONContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import parse from "html-react-parser";

export function RenderDescription({ json }: { json: JSONContent | null }) {
  const output = useMemo(() => {
    if (!json) return "<p>No description available.</p>";

    try {
      return generateHTML(json, [
        StarterKit as any,
        TextAlign.configure({ types: ["heading", "paragraph"] }),
      ]);
    } catch (err) {
      console.error("Failed to render description:", err);
      return "<p>Invalid content.</p>";
    }
  }, [json]);

  return (
    <div className="prose dark:prose-invert prose-li:marker:text-primary">
      {parse(output)}
    </div>
  );
}
