import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

interface PsalmSectionProps {
  psalms: {
    verses: string[];
    reference: string;
    startVerse: number;
  };
  language: 'en' | 'es';
}

const PsalmSection = ({ psalms, language }: PsalmSectionProps) => {
  return (
    <Card className="card-glass h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {/* <Book className="h-5 w-5 text-spiritual" /> */}
          <CardTitle className="text-3xl text-spiritual-dark font-playfair">
            {language === 'en' ? 'Psalm Verses' : 'Versos de Paz'}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {psalms.verses.map((verse, index) => (
            <div
              key={index}
              className="verse-card verse-animation"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-foreground">
                <span className="font-semibold text-spiritual-dark mr-2">
                  {psalms.startVerse + index}.
                </span>
                {verse}
              </p>
            </div>
          ))}
        </div>

        {typeof psalms.startVerse === 'number' ? (
          <div className="text-right text-sm font-medium text-muted-foreground mt-4">
            {psalms.reference} — Verses {psalms.startVerse}–{psalms.startVerse + psalms.verses.length - 1}
          </div>
        ) : (
          <div className="text-right text-sm font-medium text-muted-foreground mt-4">
            {psalms.reference}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PsalmSection;
