const company = [
  {
    name: 'Google',
    logo: 'https://img.icons8.com/win10/200/FFFFFF/google-logo.png',
  },
  {
    name: 'Meta',
    logo: 'https://pngimg.com/d/meta_PNG6.png',
  },
  {
    name: 'Shopify',
    logo: 'https://static-00.iconduck.com/assets.00/shopify-icon-1801x2048-hwzpsg02.png',
  },
  {
    name: 'Amazon',
    logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/amazon-white-icon.png',
  },
  {
    name: 'Nvidia',
    logo: 'https://companieslogo.com/img/orig/NVDA.W-79f7aa49.png?t=1722952498',
  },
  {
    name: 'Mozilla',
    logo: 'https://www.pngkey.com/png/full/208-2080415_mozilla-firefox-logo-black-and-white-logo-black.png',
  },
  {
    name: 'Cloudflare',
    logo: 'https://static-00.iconduck.com/assets.00/cloudflare-icon-2048x927-co3e7w38.png',
  },
  {
    name: 'Stripe',
    logo: 'https://creatella.ventures/wp-content/uploads/2021/10/282-2824123_stripe-logo-png-stripe-logo-white-transparent-clipart.png',
  },
];

export default function Companies() {
  return (
    <div className="bg-gradient-to-br from-purple-900 via-[#1A1B1E] to-teal-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl mb-2">
          Loved by frontend and design system teams
        </h2>
        <p className="text-4xl text-400 mb-20 font-bold">
          at the world's largest and most innovative companies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {company.map((comp, index) => (
            <div key={index}>
              <div className="text-2xl font-bold">
                <img
                  src={comp.logo}
                  alt="Error"
                  className="w-10 h-12 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
