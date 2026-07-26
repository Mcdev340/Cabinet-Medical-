"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { HealthArticle, HealthCategory } from "@/types";
import { healthCategories } from "@/data/healthLibrary";
import HealthArticleCard from "@/components/about/HealthArticleCard";

export default function HealthLibraryExplorer({ articles }: { articles: HealthArticle[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<HealthCategory | "all">("all");

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory = category === "all" || article.categorie === category;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = [
        article.titre,
        article.extrait,
        ...article.motsCles,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [articles, category, query]);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search
            size={18}
            strokeWidth={1.75}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un sujet de santé…"
            aria-label="Rechercher dans la bibliothèque de santé"
            className="w-full rounded-xl border border-line bg-surface py-3 pr-4 pl-11 text-sm text-ink placeholder:text-ink-soft/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
            category === "all"
              ? "bg-primary text-white"
              : "bg-primary-soft text-primary hover:bg-primary/10"
          }`}
        >
          Tous les sujets
        </button>
        {healthCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setCategory(cat.id)}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
              category === cat.id
                ? "bg-primary text-white"
                : "bg-primary-soft text-primary hover:bg-primary/10"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="stagger-children grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <HealthArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-card border border-line bg-surface px-8 py-12 text-center">
          <p className="font-heading text-lg font-semibold text-primary">Aucun article trouvé</p>
          <p className="mt-2 text-sm text-ink-soft">
            Essayez un autre mot-clé ou parcourez une autre catégorie.
          </p>
        </div>
      )}
    </div>
  );
}
