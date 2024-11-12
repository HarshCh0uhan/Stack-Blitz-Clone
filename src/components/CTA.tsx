export default function CTA() {
  return (
    <div className="relative bg-gradient-to-br from-purple-900 via-[#1A1B1E] to-teal-900 text-white py-32 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">See for yourself.</h2>
        <p className="text-4xl mb-12">
          Boot a fresh environment in <span className="font-bold">milliseconds</span>.
        </p>
        <button className="bg-transparent border-2 border-[#00E8C6] text-[#00E8C6] px-8 py-3 rounded-lg hover:bg-[#00E8C6] hover:text-black transition-colors duration-300">
          Create a new project
        </button>
      </div>
    </div>
  );
}