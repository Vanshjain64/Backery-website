import { Link } from "react-router-dom";
import { CakeSlice, Cookie, Cherry } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-bakery.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Delicious baked goods display at Sweet Treats Corner"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-bakery-brown/50" />
        <div className="relative z-10 text-center px-4 animate-fade-in-up">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4">
            Sweet Treats Corner
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg mx-auto">
            Freshly baked happiness in every bite.
          </p>
          <Link
            to="/menu"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Our Menu
          </Link>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">
            Made with Love, Baked with Care
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Welcome to Sweet Treats Corner — your neighborhood bakery where every treat is handcrafted
            with the finest ingredients. From fluffy cupcakes to decadent cakes, we bring warmth
            and sweetness to your special moments.
          </p>
        </div>
      </section>

      {/* Decorative icons */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: CakeSlice, title: "Custom Cakes", desc: "Tailored to your celebration" },
              { icon: Cookie, title: "Fresh Cookies", desc: "Baked daily with love" },
              { icon: Cherry, title: "Premium Ingredients", desc: "Only the finest quality" },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-bakery-pink-light flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
