
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import PsalmSection from '@/components/PsalmSection';
import PromiseSection from '@/components/PromiseSection';
import Footer from '@/components/Footer';
import { getRandomPsalmVerses, getRandomBiblePromiseVerse } from '@/lib/bible-data';

type Language = 'en' | 'es';

const Index = () => {
  const [language, setLanguage] = useState<Language>('en');
  const [psalmVerses, setPsalmVerses] = useState(() => getRandomPsalmVerses(language));
  const [promiseVerse, setPromiseVerse] = useState(() => getRandomBiblePromiseVerse(language));

  // Effect to update content when language changes
  useEffect(() => {
    setPsalmVerses(getRandomPsalmVerses(language));
    setPromiseVerse(getRandomBiblePromiseVerse(language));
  }, [language]);

  // Function to refresh content at 4:00 AM IST (10:30 PM UTC)
  useEffect(() => {
    const checkAndUpdateVerses = () => {
      const now = new Date();
      const hours = now.getUTCHours();
      const minutes = now.getUTCMinutes();
      
      // If it's 10:30 PM UTC (4:00 AM IST), refresh content
      if (hours === 22 && minutes === 30) {
        setPsalmVerses(getRandomPsalmVerses(language));
        setPromiseVerse(getRandomBiblePromiseVerse(language));
      }
    };

    // Check every minute if it's time to refresh
    const interval = setInterval(checkAndUpdateVerses, 60000);
    
    return () => clearInterval(interval);
  }, [language]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroBanner language={language} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PsalmSection psalms={psalmVerses} language={language} />
          <PromiseSection promise={promiseVerse} language={language} />
        </div>
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
