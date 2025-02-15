"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const staticImages = [
  "/analytics-1.jpg.png",
  "/analytics-2.jpg.png",
  "/analytics-3.jpg.png",
  "/analytics-4.jpg.png",
  "/analytics-5.jpg.png",
  "/analytics-6.jpg.png",
  "/analytics-7.jpg.png",
  "/analytics-8.jpg.png",
  "/analytics-9.jpg.png",
  "/analytics-10.jpg.png",
];

const mockHashtagData = Array.from({ length: 10 }, (_, i) => ({
  rank: i + 1,
  hashtag: `TrendingHashtag${i + 1}`,
  topic: `Topic ${i + 1}`,
  analyticsImage: staticImages[i],
}));

const TemplatePage = () => {
  const router = useRouter();
  const [selectedAnalytics, setSelectedAnalytics] = useState<number | null>(null);
  const [selectedGeneration, setSelectedGeneration] = useState<{
    rank: number | null;
    type: string | null;
    output: string;
  }>({ rank: null, type: null, output: "" });
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleGenerate = (rank: number, type: string) => {
    setOpenDropdown(null);
    setSelectedGeneration({
      rank,
      type,
      output: `🔄 Generating ${type} for #${mockHashtagData[rank - 1].hashtag}...`
    });

    setTimeout(() => {
      setSelectedGeneration(prev => ({
        ...prev,
        output: `✅ ${type} content generated for #${mockHashtagData[rank - 1].hashtag}`
      }));
    }, 2000);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-[2rem] shadow-2xl border border-white/20">
        <div className="p-8">
          <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-10 text-center animate-gradient">
            🚀 Trending Hashtags Analytics Dashboard
          </h3>

          <div className="grid grid-cols-3 gap-4 mb-6 px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20">
            <div className="text-white/90 font-bold text-xl tracking-wider flex items-center">
              <span className="mr-3">🏆</span>
              Rank
            </div>
            <div className="text-white/90 font-bold text-xl tracking-wider flex items-center">
              <span className="mr-3">🔖</span>
              Hashtag
            </div>
            <div className="text-white/90 font-bold text-xl tracking-wider flex items-center">
              <span className="mr-3">📌</span>
              Topic
            </div>
          </div>

          <div className="space-y-6">
            {mockHashtagData.map((item) => (
              <div 
                key={item.rank}
                className="relative bg-white transition-all duration-300 rounded-xl shadow-lg border border-gray-200/50 hover:bg-blue-50 group"
              >
                <div className="grid grid-cols-3 gap-4 px-8 py-6 items-center text-xl">
                  <div className="font-bold text-blue-500">#{item.rank}</div>
                  <div className="font-semibold text-purple-600">#{item.hashtag}</div>
                  <div className="text-gray-700 truncate">{item.topic}</div>
                  
                  <div className="absolute right-8 top-6 flex gap-3">
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedAnalytics(prev => prev === item.rank ? null : item.rank);
                        setOpenDropdown(null);
                      }}
                      className="bg-white/90 hover:bg-white border border-blue-200 shadow-md hover:shadow-lg text-blue-600 rounded-xl px-6 py-3 transition-all z-10"
                    >
                      📊 Analytics
                    </Button>
                    
                    <div className="relative z-20">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenDropdown(prev => prev === item.rank ? null : item.rank);
                          setSelectedAnalytics(null);
                        }}
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg rounded-xl px-6 py-3 transition-transform"
                      >
                        🚀 Generate
                      </Button>
                      <div className={`absolute right-0 mt-2 flex bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-200/50 overflow-hidden transition-all ${
                        openDropdown === item.rank ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>
                        <div className="flex">
                          <button 
                            onClick={() => handleGenerate(item.rank, 'Text')}
                            className="px-5 py-3.5 hover:bg-blue-50/50 transition-colors flex items-center gap-2"
                          >
                            <span className="text-blue-500">✍️</span> Text
                          </button>
                          <button 
                            onClick={() => handleGenerate(item.rank, 'Image')}
                            className="px-5 py-3.5 hover:bg-blue-50/50 transition-colors flex items-center gap-2"
                          >
                            <span className="text-purple-500">🖼️</span> Image
                          </button>
                          <button 
                            onClick={() => handleGenerate(item.rank, 'Video')}
                            className="px-5 py-3.5 hover:bg-blue-50/50 transition-colors flex items-center gap-2"
                          >
                            <span className="text-red-500">🎥</span> Video
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {selectedAnalytics === item.rank && (
                  <div className="mx-6 mb-6 p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200/50 shadow-inner">
                    <img 
                      src={item.analyticsImage}
                      alt={`Analytics for ${item.hashtag}`}
                      className="w-full h-56 object-cover rounded-lg shadow-md transform transition-transform hover:scale-[1.02]"
                    />
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-medium">
                        📈 Analytics for #{item.hashtag}
                      </span>
                    </div>
                  </div>
                )}

                {selectedGeneration.rank === item.rank && (
                  <div className="mx-6 mb-6 p-4 bg-emerald-50/80 backdrop-blur-sm rounded-lg border border-emerald-200 shadow-sm animate-fade-in">
                    <div className="flex items-center gap-3 text-emerald-700 font-medium">
                      <span>✨</span>
                      {selectedGeneration.output}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;