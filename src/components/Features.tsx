const categories = [
  { name: 'Popular', active: true },
  { name: 'Frontend', active: false },
  { name: 'Backend', active: false },
  { name: 'Fullstack', active: false },
  { name: 'Docs, Blogs & Slides', active: false },
  { name: 'Creative', active: false },
  { name: 'Mobile & VR', active: false },
  { name: 'Vanilla', active: false },
  { name: 'Native Languages', active: false },
];

const templates = [
  {
    name: 'Astro Basics',
    tech: 'Node.js',
    icon: 'https://lsvp.com/wp-content/uploads/2023/03/kjaylzshptwsi5tpaivw.webp',
  },
  {
    name: 'Next.js',
    tech: 'Node.js',
    icon: 'https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png',
  },
  {
    name: 'Nuxt',
    tech: 'Node.js',
    icon: 'https://nuxt.com/assets/design-kit/icon-green.png',
  },
  {
    name: 'React',
    tech: 'TypeScript',
    icon: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
  },
  {
    name: 'Vanilla',
    tech: 'JavaScript',
    icon: 'https://static-00.iconduck.com/assets.00/javascript-js-icon-256x256-2o2kq55k.png',
  },
  {
    name: 'Vanilla',
    tech: 'TypeScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
  },
  {
    name: 'Static',
    tech: 'HTML/JS/CSS',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256',
  },
  {
    name: 'Node.js',
    tech: 'Blank project',
    icon: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
  },
  {
    name: 'Angular',
    tech: 'TypeScript',
    icon: 'https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png',
  },
  {
    name: 'Vue',
    tech: 'JavaScript',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png',
  },
  {
    name: 'WebContainer API',
    tech: 'Node.js',
    icon: 'https://cdn-icons-png.flaticon.com/512/384/384838.png',
  },
];

export default function Features() {
  return (
    <div className="bg-[#1A1B1E] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">
          Boot a shareable environment in{' '}
          <span className="text-[#00E8C6]">milliseconds</span>.
        </h2>

        <div className="mt-12">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  category.active
                    ? 'text-white border-b-2 border-[#00E8C6]'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {templates.map((template, index) => (
              <div
                key={index}
                className={`bg-[#23262f] p-6 rounded-lg hover:bg-opacity-50 transition-all cursor-pointer group`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={template.icon}
                      alt={template.name}
                      className="w-10 h-12 object-contain"
                    />
                    <div className="text-left">
                      <h3 className="text-lg font-semibold group-hover:text-[#00E8C6] transition-colors">
                        {template.name}
                      </h3>
                      <p className="text-sm text-gray-400">{template.tech}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
