export default function Hero() {
  return (
    <div className="pt-32 pb-20 px-4 bg-[#1A1B1E] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold leading-tight mb-8">
          How <span className="text-blue-400">design systems</span>
          <br />& <span className="text-blue-400">frontend</span> teams
          <br />
          work together
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl">
          Collaborate on web development without the hassle of setting up local
          environments. StackBlitz lets you{' '}
          <span className="text-white">write</span>,{' '}
          <span className="text-white">run</span>, and{' '}
          <span className="text-white">debug</span> frontend code directly in
          your browser.
        </p>
        <div className="flex space-x-4">
          <button className="bg-[#1A7EF8] text-white px-6 py-3 rounded-lg hover:bg-blue-600">
            Create your first project
          </button>
          <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Get a demo
          </button>
        </div>
      </div>
    </div>
  );
}
