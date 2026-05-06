import { Header } from "@/components/ui/header";
import { FloatingFoodHero } from "@/components/ui/hero-section";
import { AnimatedFeatureSpotlight3D } from "@/components/ui/animated-feature-spotlight3d";
import { MenuCard } from "@/components/ui/menu-card";
import { SocialConnect } from "@/components/ui/connect-with-us";
import { MapPin, Star, Pizza, Cake, Users } from "lucide-react";
import { ScrollVideo } from "@/components/ui/scroll-video";

const heroImages = [
  {
    src: "/assets/delicious-pizza.webp",
    alt: "Delicious pizza",
    className:
      "w-36 sm:w-60 md:w-80 lg:w-96 absolute top-[12%] left-[15%] -translate-x-1/2",
  },
  {
    src: "/assets/burger-icon.webp",
    alt: "Burger",
    className:
      "w-36 sm:w-60 md:w-80 lg:w-96 absolute top-[10%] right-[10%] translate-x-1/2",
  },
  {
    src: "/assets/basil-leaf.webp",
    alt: "Basil leaf",
    className:
      "w-8 sm:w-14 md:w-20 absolute top-[30%] left-[35%]",
  },
];

const menuItems = [
  {
    name: "Cheesy Margherita",
    category: "New Arrivals",
    price: "₹129",
    rating: "4.2",
    imageUrl: "/assets/cheesy-margherita-pizza-stockcake-1.webp",
  },
  {
    name: "Mexicana Mix Veg",
    category: "New Arrivals",
    price: "₹179",
    rating: "4.3",
    imageUrl: "/assets/mexicana-mix-veg.webp",
  },
  {
    name: "Chicken Inferno",
    category: "New Arrivals",
    price: "₹209",
    rating: "4.6",
    imageUrl: "/assets/chicken-inferno.webp",
  },
  {
    name: "Farm Fresh Heaven",
    category: "New Arrivals",
    price: "₹319",
    rating: "4.7",
    imageUrl: "/assets/farm-fresh-heaven.webp",
  },
  {
    name: "Hot & Zing Chicken",
    category: "New Arrivals",
    price: "₹399",
    rating: "4.3",
    imageUrl: "/assets/hot-zing-chicken.webp",
  },
  {
    name: "Volcano Choco Puff",
    category: "New Arrivals",
    price: "₹79",
    rating: "4.8",
    imageUrl: "/assets/volcano-choco-puff.webp",
  },
  {
    name: "Fried Chicken Wings",
    category: "New Arrivals",
    price: "₹179",
    rating: "4.4",
    imageUrl: "/assets/Fried-Chicken-Wings.webp",
  },
  {
    name: "Rainbow Slice Pastry",
    category: "Desserts",
    price: "₹149",
    rating: "4.4",
    imageUrl: "/assets/rainbow-slice-pastry.webp",
  },
];

const testimonials = [
  { name: "Rahul", review: "The Vibes of the store is good. The foods were so good and our favorite were Hariyali chicken." },
  { name: "Venkatesan", review: "The food was good. The mojito and ice creams were also perfect. We loved the ambiance along with the books to read while waiting." },
  { name: "Meenakshi", review: "Great! The Garlic Toasties and the spicy butrizza was awesome and the pizza taste and softness was so good." },
  { name: "Yasodha", review: "Good Experience, our kids enjoyed well. I loved the service by the staffs. Thank you!" },
  { name: "Bruze Sagar", review: "The experience was pleasant and wonderful. The game space was a really good idea to keep customers occupied." },
];

const outletLocations = [
  "Villapuram", "Rediyarpalayam", "Kumbakonam", "Mayiladuthurai",
  "Thanjavur", "Thoothukudi", "Kovilpatti", "Virudhunagar", "Kalavasal Bypass",
  "Madurai", "Trichy", "Coimbatore", "Bengaluru",
];

// ─── Page ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">

      {/* 1. NAVIGATION */}
      <Header />

      {/* 2. TICKER BANNER */}
      <div className="bg-white overflow-hidden py-3 border-b border-gray-200" aria-label="Delivery offer ticker">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee gap-8 items-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="text-gray-800 text-sm font-semibold px-6 flex items-center gap-2">
                🍕 Order Now For Free Home Delivery
                <span className="text-red-500 mx-4">✦</span>
              </span>
            ))}
          </div>
          <div className="flex animate-marquee gap-8 items-center" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="text-gray-800 text-sm font-semibold px-6 flex items-center gap-2">
                🍕 Order Now For Free Home Delivery
                <span className="text-red-500 mx-4">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 3. HERO */}
      <FloatingFoodHero
        title="Discover The Unique Flavours Of Pizzas, Snacks, Desserts, and more."
        description="Tamil Nadu's favourite pizza chain — bold flavors from classic Italian to locally loved Indian recipes. Order online or visit one of our 40+ stores!"
        images={heroImages}
      />

      {/* 4. OUTLET LOCATION TICKER */}
      <div className="bg-red-600 overflow-hidden py-3" aria-label="Outlet locations ticker">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee-slow gap-0 items-center">
            {[...outletLocations, ...outletLocations, ...outletLocations].map((loc, i) => (
              <span key={i} className="text-white text-sm font-bold px-8 flex items-center gap-3">
                <MapPin className="w-3 h-3 text-white/70 inline" />
                {loc}
              </span>
            ))}
          </div>
          <div className="flex animate-marquee-slow gap-0 items-center" aria-hidden="true">
            {[...outletLocations, ...outletLocations, ...outletLocations].map((loc, i) => (
              <span key={i} className="text-white text-sm font-bold px-8 flex items-center gap-3">
                <MapPin className="w-3 h-3 text-white/70 inline" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 5. FEATURES / BRAND STORY */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Why Pie &amp; Patty Co?
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Every pizza we make is a promise — of quality, freshness, and bold flavor.
            </p>
          </div>

          <AnimatedFeatureSpotlight3D
            preheaderIcon={<Pizza className="w-4 h-4" />}
            preheaderText="Tamil Nadu's Favourite Pizza Chain"
            heading={
              <>
                One delicious slice{" "}
                <span className="text-red-600">at a time.</span>
              </>
            }
            description="Made with 100% pure dairy cheese from our FSSAI-approved factory — no preservatives, no shortcuts. From classic Margherita to fiery Chicken Inferno, every bite is crafted with love. 40+ stores across Tamil Nadu, now expanding to Bengaluru."
            buttonText="Find Nearby Outlet →"
            buttonHref="#services"
            imageUrl="/assets/delicious-slice.webp"
            imageAlt="Freshly baked Pie & Patty Co Pizza"
            className="mb-8"
          />

          {/* Value props grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { icon: "🧀", label: "100% Dairy Cheese", sub: "FSSAI approved factory" },
              { icon: "🕐", label: "Open 11AM–3AM", sub: "Always here for you" },
              { icon: "🚀", label: "30-Min Delivery", sub: "Hot pizza, fast" },
              { icon: "🏪", label: "40+ Stores", sub: "Across Tamil Nadu" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center hover:shadow-md hover:border-red-100 transition-all"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-gray-900 text-sm">{item.label}</div>
                <div className="text-gray-400 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="magic" className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-widest mb-3">
              The Pie & Patty Experience
            </p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Watch the Magic 🍕
            </h2>
          </div>

          <ScrollVideo
            src="/Videos/pizza-video1.webm"
            poster="/assets/pizza-poster.webp"
            className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative"
          />
        </div>
      </section>

      {/* 6. MENU CARDS — BESTSELLERS */}
      <section id="menu" className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Our Bestsellers 🔥
            </h2>
            <p className="text-gray-500 text-lg">
              Craving something? Our most-loved menu items — ordered fresh, delivered fast.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {menuItems.map((item) => (
              <MenuCard key={item.name} {...item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              id="view-full-menu"
              href="#menu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand inline-flex items-center gap-2 px-8 py-4 rounded-xl"
            >
              View Full Menu →
            </a>
          </div>
        </div>
      </section>

      {/* 7. PARTY FLOW — SERVICES */}
      {/* <PartyFlowSection /> */}

      {/* 9. CTA SECTION */}
      <section id="cta" className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <AnimatedFeatureSpotlight3D
            preheaderIcon={<Star className="w-4 h-4" />}
            preheaderText="Events & Celebrations"
            heading={
              <>
                We create{" "}
                <span className="text-red-600">memorable</span> experiences
              </>
            }
            description="Whether it's a cosy family dinner, a birthday celebration, or a large party order for your wedding — Pie & Patty Co delivers joy to every occasion. Game spaces, book nooks, and warm hospitality await you at every store."
            buttonText="🎉 Plan Your Event →"
            buttonHref="#services"
            imageUrl="/assets/delicious-slice-2.webp"
            imageAlt="Pie & Patty Co celebration"
            reverse={true}
          />
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F03025] font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
            <h2
              className="text-4xl md:text-5xl font-black text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Don't Take Our Word.
            </h2>
            <p className="text-gray-500 text-lg">Take the words of 1000+ Customers</p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-2xl p-6 max-w-sm shadow-sm hover:shadow-md hover:border-red-100 transition-all"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.review}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.name[0]}
                  </div>
                  <span className="font-bold text-gray-800 text-sm">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <SocialConnect />

    </main>
  );
}
