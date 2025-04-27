import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

interface PsalmSectionProps {
  psalms: {
    verses: string[];
    reference: string;
    startVerse?: number; // Made optional for safety
  };
  language: 'en' | 'es';
}

const PsalmSection = ({ psalms, language }: PsalmSectionProps) => {
  // Fallback to verse 1 if startVerse is missing
  const startingVerse = typeof psalms.startVerse === 'number' ? psalms.startVerse : 1;

  return (
    <Card className="card-glass h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {/* Uncomment if you want the icon */}
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
              <p className="text-foreground">{verse}</p>
            </div>
          ))}
        </div>

        {/* Display Psalm number and verse range at the bottom */}
        <div className="text-right text-sm font-medium text-muted-foreground mt-4">
          {psalms.reference} : {startingVerse}–{startingVerse + psalms.verses.length - 1}
        </div>
      </CardContent>
    </Card>
  );
};

export default PsalmSection;
