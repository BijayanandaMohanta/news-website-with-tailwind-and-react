import Page from "../layout/Page";
import { useRef } from "react";

const Home = () => {
  const businessSliderRef = useRef(null);
  const travelSliderRef = useRef(null);

  const scrollSlider = (ref, offset) => {
    if (ref.current) {
      ref.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <Page>
      {/* Hero section */}
      <div
        id="hero-section"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4"
      >
        {/* Left column → 2 side by side */}
        <div className="grid grid-cols-2 gap-2 lg:col-start-1">
          <div>
            <img src="https://placehold.co/500" alt="News" />
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              quis.
            </h2>
          </div>
          <div>
            <img src="https://placehold.co/500" alt="News" />
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              quis.
            </h2>
          </div>
        </div>

        {/* Center big news */}
        <div className="lg:col-span-1 lg:col-start-2 md:border-l md:border-r md:px-4">
          <div>
            <img src="https://placehold.co/800" alt="News" />
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              quis.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et minus
              ab iste error, quod saepe! Deleniti similique delectus expedita?
              Magnam.
            </p>
          </div>
        </div>

        {/* Right column → 2 side by side below */}
        <div className="grid grid-cols-2 gap-2 lg:col-start-3">
          <div>
            <img src="https://placehold.co/500" alt="News" />
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              quis.
            </h2>
          </div>
          <div>
            <img src="https://placehold.co/500" alt="News" />
            <h2>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime,
              quis.
            </h2>
          </div>
        </div>
      </div>

      {/* Business News slider */}
      <div className="p-2">
        <h1>Business News</h1>
        <div className="relative">
          <button
            className="absolute md:hidden left-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2.5 py-1 rounded-full z-10"
            onClick={() => scrollSlider(businessSliderRef, -300)}
          >
            ◀
          </button>

          <div
            ref={businessSliderRef}
            className="flex overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory space-x-4 md:space-x-0 pb-2"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-[100vw] md:w-1/5 snap-start border p-2 flex-shrink-0"
              >
                <img
                  src="https://placehold.co/300"
                  className="h-[20rem] object-cover md:h-[20rem]"
                  alt="News"
                />
                <h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime, quis.
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  minus ab iste error, quod saepe! Deleniti similique delectus
                  expedita? Magnam.
                </p>
              </div>
            ))}
          </div>

          <button
            className="absolute md:hidden right-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2.5 py-1 rounded-full z-10"
            onClick={() => scrollSlider(businessSliderRef, 300)}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Politics News */}
      <div className="p-2">
        <h1>Politics News</h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-8/12">
            <div className="mb-4">
              <img src="https://placehold.co/800x400" alt="News" />
              <h2>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime, quis.
              </h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                minus ab iste error, quod saepe! Deleniti similique delectus
                expedita? Magnam.
              </p>
            </div>
          </div>
          <div className="lg:w-4/12 space-y-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="border mb-2 p-2 grid md:flex items-center"
              >
                <img
                  src="https://placehold.co/150"
                  alt="News"
                  className="mr-2 mb-0"
                />
                <div>
                  <h2>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Maxime, quis.
                  </h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                    minus ab iste error, quod saepe! Deleniti similique delectus
                    expedita? Magnam.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel News slider */}
      <div className="p-2">
        <h1>Travel News</h1>
        <div className="relative">
          <button
            className="absolute md:hidden left-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2.5 py-1 rounded-full z-10"
            onClick={() => scrollSlider(travelSliderRef, -300)}
          >
            ◀
          </button>

          <div
            ref={travelSliderRef}
            className="flex overflow-x-auto md:overflow-visible scroll-smooth snap-x snap-mandatory space-x-4 md:space-x-0 pb-2"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="w-[100vw] md:w-1/5 snap-start border p-2 flex-shrink-0"
              >
                <img
                  src="https://placehold.co/300"
                  className="h-[20rem] object-cover md:h-[25rem]"
                  alt="News"
                />
                <h2>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Maxime, quis.
                </h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  minus ab iste error, quod saepe! Deleniti similique delectus
                  expedita? Magnam.
                </p>
              </div>
            ))}
          </div>

          <button
            className="absolute md:hidden right-0 top-1/2 -translate-y-1/2 bg-gray-200 px-2.5 py-1 rounded-full z-10"
            onClick={() => scrollSlider(travelSliderRef, 300)}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Highlight two ads */}
      <div className="flex flex-col lg:flex-row p-2 gap-2">
        <div className="lg:w-6/12 relative">
          <img
            src="https://images.unsplash.com/photo-1670671278706-b655d374ef79?q=80&w=2070&auto=format&fit=crop"
            className="mb-0 h-full object-cover max-h-[40rem] aspect-square"
            alt="Ad"
          />
          <h1 className="absolute bottom-0 left-0 m-4 text-white">
            This is an Ad
          </h1>
        </div>
        <div className="lg:w-6/12">
          <img
            src="https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?q=80&w=988&auto=format&fit=crop"
            className="mb-0 h-full object-cover max-h-[40rem] aspect-square"
            alt="Ad"
          />
        </div>
      </div>
    </Page>
  );
};

export default Home;
