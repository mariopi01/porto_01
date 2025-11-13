// Ini adalah Server Component
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Data dari App.jsx baris 35-39
const portfolioItems = [
  { title: 'Portofolio 1', image: 'https://api.builder.io/api/v1/image/assets/TEMP/de0dbec2a40220cff368fc623fa7b7ce9223f437?width=722' },
  { title: 'Portofolio 2', image: 'https://api.builder.io/api/v1/image/assets/TEMP/ece0fee8fb7cb3256420e682b722fd103956fb9d?width=722' },
  { title: 'Portofolio 3', image: 'https://api.builder.io/api/v1/image/assets/TEMP/d088fd233cc7bd07656a167ab2922bd94e503ea1?width=722' }
];

export default function Portfolio() {
  return (
    // JSX dari App.jsx baris 437-469
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            Built with Passion, Shipped with Precision
          </h2>
        </div>

        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {portfolioItems.map((item, idx) => (
              <CarouselItem key={idx}>
                <div className="p-1">
                  <Card className="border-0 shadow-none">
                    <CardContent className="relative flex aspect-square items-center justify-center p-0">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-md rounded-full px-6 py-2">
                        <span className="text-white font-bold">{item.title}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-14" />
          <CarouselNext className="mr-14" />
        </Carousel>
      </div>
    </section>
  );
}