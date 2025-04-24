
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";

interface PromiseSectionProps {
  promise: {
    reference: string;
    text: string;
  };
  language: 'en' | 'es';
}

const PromiseSection = ({ promise, language }: PromiseSectionProps) => {
  return (
    <Card className="card-glass h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {/*<Sun className="h-5 w-5 text-divine" />*/}
          <CardTitle className="text-3xl text-divine-dark font-playfair">
            {language === 'en' ? "Today's Bible Promise" : "Promesa Bíblica de Hoy"}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="verse-card verse-animation p-6 bg-divine/10 border-divine">
          <p className="text-foreground text-lg font-medium">{promise.text}</p>
          <div className="text-right mt-3 text-sm text-muted-foreground">
            {promise.reference}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromiseSection;
