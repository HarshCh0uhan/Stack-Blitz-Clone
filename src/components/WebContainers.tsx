import { Box, Zap } from 'lucide-react';

const comparisonData = [
  { feature: 'Boot time', stackblitz: 'Milliseconds', legacy: 'Minutes' },
  { feature: 'Zero network latency', stackblitz: true, legacy: false },
  { feature: 'Work offline', stackblitz: true, legacy: false },
  {
    feature: 'Easily debug broken containers',
    stackblitz: true,
    legacy: false,
  },
  {
    feature: 'Reset broken containers',
    stackblitz: 'Page refresh',
    legacy: 'Not possible',
  },
];

export default function WebContainers() {
  return (
    <div className="bg-[#1A1B1E] text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* WebContainers Header */}
        <div className="flex items-center text-[#00E8C6] mb-6">
          <Box className="w-5 h-5 mr-2" />
          <span>Powered by WebContainers</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-6xl font-bold mb-20 max-w-2xl">
          <span className="text-[#00E8C6]">Faster</span> and{' '}
          <span className="text-[#00E8C6]">more secure</span>
          <br />
          than local.
        </h2>

        {/* WebContainers Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Introducing WebContainers:
            </h3>
            <p className="text-xl mb-6">Run Node.js in your browser</p>
            <button className="text-[#00E8C6] hover:text-[#00E8C6]/80 flex items-center group">
              Read the release
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400 text-lg">
              StackBlitz is powered by WebContainers, the first
              WebAssembly-based micro operating system which boots entire
              development environments in milliseconds, securely within your
              browser tab.
            </p>
          </div>
        </div>

        {/* IDE Comparison Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="mt-12">
            <h3 className="text-5xl py-12">What about online IDEs?</h3>
            <div className="space-y-6 mb-12 text-gray-400">
              <p>
                Legacy cloud-based IDEs run on remote servers and stream the
                results back to your browser. This approach yields few security
                benefits and provides a worse experience than your local machine
                in nearly every way.
              </p>
              <p>
                With StackBlitz, all compute occurs inside your browser, making
                use of decades of speed and security innovations.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#23262f] rounded-lg p-8">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-gray-400">Feature</div>
              <div className="flex items-center">
                <Zap className="w-4 h-4 mr-2 text-[#00E8C6]" />
                <span className="font-semibold">StackBlitz</span>
              </div>
              <div className="text-gray-400">Legacy Online IDEs</div>
            </div>
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 py-4 border-t border-gray-700"
              >
                <div className="text-gray-400">{item.feature}</div>
                <div>
                  {typeof item.stackblitz === 'boolean' ? (
                    <span className="text-[#00E8C6]">✓</span>
                  ) : (
                    <span className="text-white">{item.stackblitz}</span>
                  )}
                </div>
                <div>
                  {typeof item.legacy === 'boolean' ? (
                    <span className="text-red-500">✕</span>
                  ) : (
                    <span className="text-gray-400">{item.legacy}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
