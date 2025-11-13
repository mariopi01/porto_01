// Ini adalah Server Component
import { Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Anda bisa menambahkan lebih banyak testimoni di sini
const testimonials = [
  {
    name: "Sarah Lim",
    title: "Product Manager at Loopware",
    avatar: "https://api.builder.io/api/v1/image/assets/TEMP/e87d40be84a37d8bffb7d2ab8c1f15da32070080?width=160",
    quote: "Edwin delivered beyond expectations. The interface he built was clean, fast, and user-friendly. Truly a frontend craftsman."
  },
  // Tambahkan testimoni lain di sini
];

export default function Testimonial() {
  return (
    // JSX dari App.jsx baris 623-652
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">Testimony</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            Built with Trust & Collaboration
          </h2>
        </div>

        <Carousel className="w-full max-w-lg mx-auto" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((item, idx) => (
              <CarouselItem key={idx}>
                <div className="p-1">
                  <div className="relative pt-10 mb-8">
                    <Card className="bg-white rounded-2xl shadow-lg p-6 pt-16">
                      <CardContent className="p-0">
                        {/* Avatar */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                          <img 
                            src={item.avatar} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="space-y-4">
                          <div className="flex justify-center gap-1">
                            {[1,2,3,4,5].map((star) => (
                              <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          
                          <p className="text-gray-900 font-semibold text-center">
                            "{item.quote}"
                          </p>

                          <div className="text-center">
                            <p className="text-sm font-bold text-gray-900">— {item.name}</p>
                            <p className="text-sm font-medium text-gray-900">{item.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
}