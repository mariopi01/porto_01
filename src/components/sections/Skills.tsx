import { Card, CardContent } from "@/components/ui/card";

// Data dari App.jsx baris 9-18
const skills = [
  { name: 'HTML', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/bf51b0524e86c054a08cc5a21a5c1f472e90b426?width=37' },
  { name: 'CSS', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/d2d5cee08ff769dbc97abb1c7d5a87f906c4b675?width=32' },
  { name: 'Javascript', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e3c0a82c6a0043729ecbb937635cd4ce4991f4a8?width=47' },
  { name: 'React JS', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/11b0138593b9e743496838dc13a49586ceab940e?width=41' },
  { name: 'Mongo DB', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/33f6bfa5856806c8ba35661e2b7c1e0f814ef067?width=43' },
  { name: 'Docker', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c2accfa88ef5f9250bf990791bf23adcb379fd88?width=55' },
  { name: 'Express JS', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/a9724ce974b4fbaf395b34fa9507b745755078d7?width=44' },
  { name: 'PostgreSQL', percentage: 90, icon: 'https://api.builder.io/api/v1/image/assets/TEMP/222933485a2f01b0abde93b1d6fcede39e7119ee?width=39' }
];

export default function Skills() {
  return (
    // JSX dari App.jsx baris 277-302
    <section className="py-12 md:py-16 px-4 bg-primary">
      <div className="container mx-auto max-w-md md:max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 mb-2">
            <span className="text-sm font-bold text-white">Skillset</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
            Skills That Build Great Interfaces
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, idx) => (
            <Card key={idx} className="bg-white rounded-2xl p-4 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-28 h-28" viewBox="0 0 114 113">
                    <circle cx="54.2" cy="58" r="54.2" fill="#E4E4E7"/>
                    <circle cx="54.2" cy="58" r="46.6" fill="white"/>
                    <path d="M113.422 57.9791C113.422 49.5128 111.568 41.1492 107.99 33.4761C104.412 25.803 99.1968 19.0066 92.7113 13.5645C86.2257 8.12249 78.6269 4.16684 70.4491 1.97559C62.2712 -0.215655 53.7127 -0.589328 45.375 0.880835L48.0014 15.776C54.1641 14.6894 60.49 14.9656 66.5345 16.5852C72.5789 18.2048 78.1954 21.1286 82.9891 25.151C87.7828 29.1734 91.6374 34.1968 94.282 39.8682C96.9267 45.5396 98.2971 51.7214 98.2971 57.9791H113.422Z" fill="#F3B64C"/>
                    <text x="29" y="67" fill="#0A0D12" fontFamily="Mulish" fontSize="24" fontWeight="bold">{skill.percentage}%</text>
                  </svg>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center p-1">
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="font-bold text-gray-900">{skill.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}