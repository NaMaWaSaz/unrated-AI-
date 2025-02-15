"use client";

import { useEffect, useState } from "react";
import { contentTemplates } from "@/lib/content-templates";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const TemplateList = ({ searchInput }: { searchInput: string }) => {
  const [templateList, setTemplateList] = useState(contentTemplates);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get("category");

  // Filtering logic remains the same

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-8">
      {templateList.map((template) => (
        <div key={template.slug} className="group relative">
          <Link
            href={`/dashboard/${template.slug}`}
            className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col items-center justify-center 
                      border border-white/20 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10
                      transition-all duration-300 ease-out hover:-translate-y-1.5"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 
                           group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Category badge */}
            {template.category && (
              <span className="absolute top-3 right-3 px-3 py-1 bg-black/5 rounded-full text-xs font-medium text-muted-foreground">
                {template.category}
              </span>
            )}

            {/* Icon container */}
            <div className="p-4 mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5">
              <template.icon className="h-8 w-8 text-primary" />
            </div>

            {/* Content */}
            <h2 className="text-xl font-bold text-foreground mb-2">
              {template.name}
            </h2>
            <p className="text-sm text-muted-foreground text-center line-clamp-2">
              {template.description}
            </p>

            {/* Hover indicator */}
            <div className="absolute bottom-4 w-[40%] h-1 bg-primary/10 rounded-full opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      ))}
    </div>
  );
};