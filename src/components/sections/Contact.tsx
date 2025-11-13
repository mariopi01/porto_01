// Ini bisa jadi Server Component, tetapi akan menjadi 'use client' jika Anda menambahkan form handling
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label"; // Gunakan Label ShadCN untuk aksesibilitas

export default function Contact() {
  return (
    // JSX dari App.jsx baris 708-775
    <section className="py-12 md:py-16 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        {/* Profile */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center overflow-hidden">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/d9f9140c6e8a94963431024ef17ce44ec863ecea?width=126" 
              alt="Edwin Anderson"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold">Edwin Anderson</h3>
            <p className="text-sm font-semibold">edwinanderson@email.com</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
          Great results begin with clear ideas.
        </h2>

        {/* Social Icons */}
        <div className="flex gap-3 mb-6">
          {['facebook', 'instagram', 'linkedin', 'tiktok'].map((social) => (
            <div key={social} className="w-10 h-10 rounded-full bg-primary border border-primary flex items-center justify-center">
              <div className="w-5 h-5 bg-white/20 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="h-px bg-gray-800 my-6"></div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-800 mb-3">
            <span className="text-sm font-bold">Contact</span>
          </div>
          <h3 className="text-3xl font-display font-bold">Start Your Next Project</h3>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-bold">
              Name<span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="What should I call you?..."
              className="w-full bg-transparent border-0 border-b border-gray-800 rounded-none py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600 focus-visible:ring-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-bold">
              Email<span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Where can I reach you? ..."
              className="w-full bg-transparent border-0 border-b border-gray-800 rounded-none py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600 focus-visible:ring-0"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-bold">
              Message<span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              placeholder="Tell me about your project or just say hi :) ..."
              rows={3}
              className="w-full bg-transparent border-0 border-b border-gray-800 rounded-none py-4 px-3 text-gray-400 placeholder-gray-600 focus:outline-none focus:border-gray-600 resize-none focus-visible:ring-0"
            ></Textarea>
          </div>

          <Button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors h-auto text-base">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}