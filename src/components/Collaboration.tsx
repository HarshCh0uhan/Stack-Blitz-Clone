import { ExternalLink } from 'lucide-react';

export default function Collaboration() {
  return (
    <div className="bg-[#f1f4f8] text-white py-36 px-4">
      <div className="max-w-10xl mx-52">
        {/* Top Section */}
        <div className="mb-32">
          <div className="flex items-center text-[#47b0ff] mb-4">
            <ExternalLink className="w-5 h-5 mr-2" />
            <span>For everything you can't do on local</span>
          </div>
          <h2 className="text-6xl font-bold mb-10 leading-tight text-[#000000]">
            Simplify how you
            <br />
            collaborate on design
            <br />
            systems & frontend code
          </h2>
          <p className="text-gray-400 font-bold max-w-xl text-[#000000]">
            Local environments are critical for web development, but they have
            some major limitations.
          </p>
          <p className="text-gray-400 max-w-xl mt-4">
            When frontend and design system teams need to collaborate, they use
            StackBlitz to easily share secure development environments with a
            single URL.
          </p>
        </div>

        {/* Bug Reproduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-72 mb-52">
          <div className="flex flex-col justify-center">
            <h3 className="text-5xl text-[#000000] mb-10">
              Take the "ugh" out of bug reproductions
            </h3>
            <div className="space-y-7">
              <p className="text-gray-400">
                Share complete environments with only a URL and never spin up
                heavy local installations for a simple bug reproduction ever
                again.
              </p>
              <p className="text-gray-400">
                Provide the users of your internal design system or open source
                library with forkable reproduction template and spend less time
                reproducing bugs and more time squashing them.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://stackblitz.com/_astro/bug_reports.BGgRQnsM_ZUiMgO.webp"
              alt="Bug report interface"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Documentation Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-72 mb-52">
          <div className="order-2 lg:order-1 relative overflow-hidden h-[400px] w-[600px]">
            <img
              src="https://stackblitz.com/_astro/interactive_documentation.6m5EDrXi_Zdi3LG.webp"
              alt="Interactive documentation"
              className="rounded-lg object-cover object-center h-full w-full"
            />
          </div>
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h3 className="text-5xl mb-10 max-w-xl text-[#000000]">
              Ship live, interactive documentation
            </h3>
            <p className="text-gray-400 mb-10">
              Make it easy for your design system or open source users to get up
              and running quickly with live examples they can try out with a
              single click.
            </p>
            <p className="text-gray-400">
              Use the StackBlitz SDK to embed actual code in your documentation,
              blog, or website or build fully customized experiences with the
              WebContainer API.
            </p>
          </div>
        </div>

        {/* Prototype Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-72">
          <div className="flex flex-col justify-center">
            <h3 className="text-5xl text-[#000000] mb-10">
              Prototype new ideas
            </h3>
            <p className="text-gray-400 mb-4">
              Speed up your entire development process with real time
              hot-reloading in the fastest dev environment ever made.
            </p>
            <p className="text-gray-400">
              Don't let local configuration stand between you and building out
              your next great ideas.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://stackblitz.com/_astro/rapid_prototyping.B1aed1fE_ZVnnJ.webp"
              alt="Prototype interface"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
