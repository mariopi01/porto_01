// Ini adalah Server Component
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Gunakan tombol ShadCN

// Data untuk kartu, sama seperti di App.jsx
const myStrengths = [
  'React Expert',
  'Precise Website Implementation',
  'TypeScript Proficiency',
  'Clean, Maintainable Code',
  'Responsive Website Development',
  'UI Design Proficiency (Figma)'
];

const otherDevWeaknesses = [
  'Basic React Knowledge',
  'Inconsistent Design Translation',
  'Little to No TypeScript Knowledge',
  'Unstructured Code',
  'Inconsistent Responsiveness',
  'No Design Skills'
];

// Ikon Bintang dari lucide-react (seperti di App.jsx)
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-8 h-8 text-primary flex-shrink-0" viewBox="0 0 32 32" fill="currentColor" {...props}>
    <path d="M16.0177 0L18.4008 8.66546L25.4222 3.05573L22.2568 11.467L31.2345 11.0557L23.7297 16L31.2345 20.9443L22.2568 20.533L25.4222 28.9443L18.4008 23.3346L16.0177 32L13.6345 23.3346L6.61312 28.9443L9.77854 20.533L0.800781 20.9443L8.30569 16L0.800781 11.0557L9.77854 11.467L6.61312 3.05573L13.6345 8.66546L16.0177 0Z"/>
  </svg>
);

const OtherDevIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg className="w-12 h-12 text-gray-500" viewBox="0 0 48 48" fill="currentColor" {...props}>
    <path d="M24 4C18.76 4 14.5 8.26 14.5 13.5C14.5 18.64 18.52 22.8 23.76 22.98C23.92 22.96 24.08 22.96 24.2 22.98C24.24 22.98 24.26 22.98 24.3 22.98C24.32 22.98 24.32 22.98 24.34 22.98C29.46 22.8 33.48 18.64 33.5 13.5C33.5 8.26 29.24 4 24 4Z"/>
    <path d="M34.1599 28.2998C28.5799 24.5798 19.4799 24.5798 13.8599 28.2998C11.3199 29.9998 9.91992 32.2998 9.91992 34.7598C9.91992 37.2198 11.3199 39.4998 13.8399 41.1798C16.6399 43.0598 20.3199 43.9998 23.9999 43.9998C27.6799 43.9998 31.3599 43.0598 34.1599 41.1798C36.6799 39.4798 38.0799 37.1998 38.0799 34.7198C38.0599 32.2598 36.6799 29.9798 34.1599 28.2998Z"/>
  </svg>
);

export default function Superiority() {
  return (
    // JSX dari App.jsx baris 304-435
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-gray-900">Superiority</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">
            Built with design, speed, and UX in mind.
          </h2>
        </div>

        {/* Card "Working with me" */}
        <Card className="bg-yellow-400 rounded-3xl p-6 mb-4 border-0">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-center text-gray-900 text-lg font-bold">Working with me</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-16 h-16 rounded-full bg-primary mx-auto mb-6 overflow-hidden">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/ae0fdd3b8fa9ef8be7f8ad1a0cec7b55e30e7e5e?width=134" 
                alt="Edwin"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              {myStrengths.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3">
                    <StarIcon />
                    <span className="font-bold text-gray-900">{item}</span>
                  </div>
                  {idx < myStrengths.length - 1 && <div className="h-px bg-white/50 my-4"></div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Card "Another Developer" */}
        <Card className="border-gray-300 rounded-2xl p-4 mb-6">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-center text-gray-900 text-lg font-bold">Another Developer</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
              <OtherDevIcon />
            </div>
            <div className="space-y-4">
              {otherDevWeaknesses.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3">
                    <StarIcon className="text-primary/40" />
                    <span className="text-gray-900 opacity-70">{item}</span>
                  </div>
                  {idx < otherDevWeaknesses.length - 1 && <div className="h-px bg-gray-300 my-4"></div>}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button className="w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-blue-600 transition-colors h-auto text-base">
          Hire Me
        </Button>
      </div>
    </section>
  );
}