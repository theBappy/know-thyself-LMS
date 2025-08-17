"use client";

import { TooltipProvider } from "@radix-ui/react-tooltip";
import { type Editor } from "@tiptap/react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../ui/tooltip";
import { Toggle } from "../ui/toggle";
import {
  Bold,
  Italic,
  Strikethrough,
  Underline,
  Code,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  ListOrdered,
  List,
  ListChecks,
  Quote,
  Code2,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link as LinkIcon,
  Image as ImageIcon,
  Minus,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface iAppProps {
  editor: Editor | null;
}

// 👇 Helper that renders a simple "|" separator
function Separator() {
  return <span className="mx-2 text-muted-foreground select-none">|</span>;
}

export function Menubar({ editor }: iAppProps) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-1 border border-t-0 border-x-0 rounded-md p-2 bg-background shadow-sm">
      <TooltipProvider>
        {/* Headings */}
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <Tooltip key={level}>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive("heading", { level })}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: level as any }).run()
                }
                className={cn(
                  editor.isActive("heading", { level }) &&
                    "bg-muted text-muted-foreground"
                )}
              >
                {level === 1 && <Heading1Icon />}
                {level === 2 && <Heading2Icon />}
                {level === 3 && <Heading3Icon />}
                {level === 4 && <Heading4Icon />}
                {level === 5 && <Heading5Icon />}
                {level === 6 && <Heading6Icon />}
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>{`Heading ${level}`}</TooltipContent>
          </Tooltip>
        ))}

        <Separator />

        {/* Text Formatting */}
        {[
          {
            name: "bold",
            icon: <Bold />,
            action: () => editor.chain().focus().toggleBold().run(),
          },
          {
            name: "italic",
            icon: <Italic />,
            action: () => editor.chain().focus().toggleItalic().run(),
          },
          {
            name: "underline",
            icon: <Underline />,
            action: () => editor.chain().focus().toggleUnderline().run(),
          },
          {
            name: "strike",
            icon: <Strikethrough />,
            action: () => editor.chain().focus().toggleStrike().run(),
          },
          {
            name: "code",
            icon: <Code />,
            action: () => editor.chain().focus().toggleCode().run(),
          },
        ].map(({ name, icon, action }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive(name)}
                onPressedChange={action}
                className={cn(
                  editor.isActive(name) && "bg-muted text-muted-foreground"
                )}
              >
                {icon}
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </TooltipContent>
          </Tooltip>
        ))}

        <Separator />

        {/* Lists */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("bulletList")}
              onPressedChange={() =>
                editor.chain().focus().toggleBulletList().run()
              }
              className={cn(
                editor.isActive("bulletList") && "bg-muted text-muted-foreground"
              )}
            >
              <List />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Bullet List</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("orderedList")}
              onPressedChange={() =>
                editor.chain().focus().toggleOrderedList().run()
              }
              className={cn(
                editor.isActive("orderedList") && "bg-muted text-muted-foreground"
              )}
            >
              <ListOrdered />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Ordered List</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("taskList")}
              onPressedChange={() =>
                editor.chain().focus().toggleTaskList().run()
              }
              className={cn(
                editor.isActive("taskList") && "bg-muted text-muted-foreground"
              )}
            >
              <ListChecks />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Task List</TooltipContent>
        </Tooltip>

        <Separator />

        {/* Blocks */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("blockquote")}
              onPressedChange={() =>
                editor.chain().focus().toggleBlockquote().run()
              }
              className={cn(
                editor.isActive("blockquote") && "bg-muted text-muted-foreground"
              )}
            >
              <Quote />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Blockquote</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("codeBlock")}
              onPressedChange={() =>
                editor.chain().focus().toggleCodeBlock().run()
              }
              className={cn(
                editor.isActive("codeBlock") && "bg-muted text-muted-foreground"
              )}
            >
              <Code2 />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Code Block</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              onPressedChange={() =>
                editor.chain().focus().setHorizontalRule().run()
              }
            >
              <Minus />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Horizontal Rule</TooltipContent>
        </Tooltip>

        <Separator />

        {/* Alignment */}
        {[
          { name: "left", icon: <AlignLeft /> },
          { name: "center", icon: <AlignCenter /> },
          { name: "right", icon: <AlignRight /> },
          { name: "justify", icon: <AlignJustify /> },
        ].map(({ name, icon }) => (
          <Tooltip key={name}>
            <TooltipTrigger asChild>
              <Toggle
                size="sm"
                pressed={editor.isActive({ textAlign: name })}
                onPressedChange={() =>
                  editor.chain().focus().setTextAlign(name).run()
                }
                className={cn(
                  editor.isActive({ textAlign: name }) &&
                    "bg-muted text-muted-foreground"
                )}
              >
                {icon}
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>{`Align ${name}`}</TooltipContent>
          </Tooltip>
        ))}

        <Separator />

        {/* Link + Image */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              pressed={editor.isActive("link")}
              onPressedChange={() => {
                const url = prompt("Enter URL:");
                if (url) {
                  editor
                    .chain()
                    .focus()
                    .extendMarkRange("link")
                    .setLink({ href: url })
                    .run();
                } else {
                  editor.chain().focus().unsetLink().run();
                }
              }}
              className={cn(
                editor.isActive("link") && "bg-muted text-muted-foreground"
              )}
            >
              <LinkIcon />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Insert Link</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              onPressedChange={() => {
                const url = prompt("Enter image URL:");
                if (url) {
                  editor.chain().focus().setImage({ src: url }).run();
                }
              }}
            >
              <ImageIcon />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Insert Image</TooltipContent>
        </Tooltip>

        <Separator />

        {/* Undo/Redo */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              onPressedChange={() => editor.chain().focus().undo().run()}
            >
              <Undo />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Undo</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Toggle
              size="sm"
              onPressedChange={() => editor.chain().focus().redo().run()}
            >
              <Redo />
            </Toggle>
          </TooltipTrigger>
          <TooltipContent>Redo</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
