import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAllArticles } from "@/lib/journal";

export default async function GrowthVault() {
  const allArticles = await getAllArticles();
  const publishedArticles = allArticles.filter((article) => article.published);

  // Take up to 3 published articles
  const displayArticles = publishedArticles.slice(0, 3);

  return (
    <section
      id="growth-vault"
      className="w-full bg-[#fdfbf7] py-20 sm:py-24 px-6 sm:px-10 md:px-16 lg:px-24 border-t border-gray-200/80"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-14 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <Badge variant="default" dot="amber" className="mb-3">
              Practical Intelligence
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold tracking-tight text-[#0b131e] mb-4">
              Insights from the Growth Vault
            </h2>

            <p className="max-w-2xl text-base sm:text-lg text-gray-600 font-light leading-relaxed">
              Practical insights on digital marketing, search visibility,
              website performance, and business growth — explained without
              unnecessary jargon or agency fluff.
            </p>
          </div>

          <Link href="/journal" className="shrink-0">
            <Button variant="slateOutline" size="default" className="gap-2">
              <span>Browse All Insights</span>
              <ArrowRight className="h-4 w-4 text-[#0b131e]" />
            </Button>
          </Link>
        </div>

        {/* Articles Grid with Baseline-Aligned CardFooters */}
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {displayArticles.map((article) => (
            <Card
              key={article.slug}
              variant="tactile"
              className="p-7 sm:p-8 flex flex-col justify-between"
            >
              <CardHeader className="p-0 pb-4">
                <div className="mb-3 flex items-center justify-between gap-2">
                  <Badge variant="secondary">
                    {article.category || "Marketing"}
                  </Badge>
                  <span className="flex items-center gap-1 text-[11px] text-gray-500 font-mono">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {article.readingTime || "5 min read"}
                  </span>
                </div>

                <CardTitle className="text-xl sm:text-2xl text-[#0b131e] hover:text-amber-800 transition-colors">
                  <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-0">
                <p className="text-sm leading-relaxed text-gray-600 font-light mb-4">
                  {article.description}
                </p>
              </CardContent>

              <CardFooter className="p-0 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link href={`/journal/${article.slug}`} className="w-full">
                  <Button
                    variant="slateOutline"
                    size="sm"
                    className="w-full justify-between group"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#0b131e] transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
