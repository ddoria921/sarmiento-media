export default function PricingSection() {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
            {/* <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
              Pricing
            </h2> */}
            <p className="text-3xl font-thin uppercase tracking-widest text-white">
              The right price for you, whoever you are
            </p>
            {/* <p className="text-xl text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
              sequi unde repudiandae natus.
            </p> */}
          </div>
        </div>
      </div>
      <div className="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto space-y-4 lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-5 lg:space-y-0">
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-52">
                  <div className="absolute inset-0 flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-black opacity-80"></div>
                    <h3 className="pl-8 font-cursive text-6xl z-10 text-white">
                      Blanc
                    </h3>
                  </div>
                  <img
                    className="object-cover object-top h-full w-full"
                    src="./blanc.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div className="flex justify-between">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 self-center">
                      Starting at
                    </h4>
                    <h5
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 ml-3"
                      id="tier-standard"
                    >
                      Most Affordable
                    </h5>
                  </div>
                  <div className="mt-2 flex items-baseline text-6xl font-extrabold">
                    $1k
                    {/* <span className="ml-1 text-2xl font-medium text-gray-500">
                      /mo
                    </span> */}
                  </div>
                  {/* <p className="mt-5 text-lg text-gray-500">
                    Our simplest and most affordable package.
                  </p> */}
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Up to eight hours of wedding day coverage
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        3-5 minute highlight film
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Recorded letter by bride/groom
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Custom USB delivery
                      </p>
                    </li>
                  </ul>
                  {/* <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                      aria-describedby="tier-standard"
                    >
                      Get started
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-52">
                  <div className="absolute inset-0 flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-black opacity-80"></div>
                    <h3 className="pl-8 font-cursive text-6xl z-10 text-white">
                      Meslier
                    </h3>
                  </div>
                  <img
                    className="object-cover object-top h-full w-full"
                    src="./meslier.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div className="flex justify-between">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 self-center">
                      Starting at
                    </h4>
                    <h5
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-700 ml-3"
                      id="tier-standard"
                    >
                      Most Popular
                    </h5>
                  </div>
                  <div className="mt-2 flex items-baseline text-6xl font-extrabold">
                    $3k
                    {/* <span className="ml-1 text-2xl font-medium text-gray-500">
                      /mo
                    </span> */}
                  </div>
                  {/* <p className="mt-5 text-lg text-gray-500">
                    Our most popular package at the best value.
                  </p> */}
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Up to twelve hours of wedding day coverage
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        7-9 minute highlight film
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Recorded letters by bride/groom
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Custom USB delivery
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Full edit of ceremony & speeches
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Instagram teaser film (~45 sec)
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Unique aerial drone footage*
                      </p>
                    </li>
                  </ul>
                  {/* <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                      aria-describedby="tier-standard"
                    >
                      Get started
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-52">
                  <div className="absolute inset-0 flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-black opacity-80"></div>
                    <h3 className="pl-8 font-cursive text-6xl z-10 text-white">
                      Juillet
                    </h3>
                  </div>
                  <img
                    className="object-cover object-top h-full w-full"
                    src="./juillet.jpg"
                    alt=""
                  />
                </div>
                <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                  <div className="flex justify-between">
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-gray-500 self-center">
                      Starting at
                    </h4>
                    <h5
                      className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-green-100 text-green-700 ml-3"
                      id="tier-standard"
                    >
                      Absolute Best
                    </h5>
                  </div>
                  <div className="mt-2 flex items-baseline text-6xl font-extrabold">
                    $5k
                    {/* <span className="ml-1 text-2xl font-medium text-gray-500">
                      /mo
                    </span> */}
                  </div>
                  {/* <p className="mt-5 text-lg text-gray-500">
                    The absolute best there is to offer.
                  </p> */}
                </div>
                <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Weekend coverage available (two days)
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        7-12 minute highlight film
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Recorded letters by bride/groom
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Custom USB delivery
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Full edit of ceremony & speeches
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Instagram teaser film (~60 sec)
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Unique aerial drone footage*
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Two cinematographers on wedding day
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        All RAW footage
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        Rehearsal dinner & pre/post events (4 hours max)
                      </p>
                    </li>

                    <li className="flex items-start">
                      <div className="flex-shrink-0">
                        {/* <!-- Heroicon name: check --> */}
                        <svg
                          className="h-6 w-6 text-gray-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-base text-gray-700">
                        1 hour sunrise/sunset shoot
                      </p>
                    </li>
                  </ul>
                  {/* <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900"
                      aria-describedby="tier-standard"
                    >
                      Get started
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
          <div className="max-w-md mx-auto lg:max-w-5xl">
            <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                    Discounted
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-600">
                  Get full access to all of standard license features for solo
                  projects that make less than $20k gross revenue for{" "}
                  <span className="font-semibold text-gray-900">$29</span>.
                </div>
              </div>
              <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                >
                  Buy Discounted License
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
