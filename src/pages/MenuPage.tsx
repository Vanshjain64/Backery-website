import Layout from "@/components/Layout";
import chocolateCupcakes from "@/assets/chocolate-cupcakes.jpg";
import butterCookies from "@/assets/butter-cookies.jpg";
import redVelvetCake from "@/assets/red-velvet-cake.jpg";
import blueberryMuffins from "@/assets/blueberry-muffins.jpg";
import vanillaCake from "@/assets/vanilla-cake.jpg";
import chocChipCookies from "@/assets/choc-chip-cookies.jpg";

const products = [
  { name: "Chocolate Cupcakes", desc: "Rich chocolate cupcakes with velvety frosting", price: "$12", note: "6 pack", image: chocolateCupcakes },
  { name: "Classic Butter Cookies", desc: "Golden, buttery, melt-in-your-mouth cookies", price: "$8", note: "", image: butterCookies },
  { name: "Red Velvet Cake", desc: "Layered red velvet with cream cheese frosting", price: "$25", note: "", image: redVelvetCake },
  { name: "Blueberry Muffins", desc: "Fluffy muffins bursting with fresh blueberries", price: "$10", note: "", image: blueberryMuffins },
  { name: "Vanilla Celebration Cake", desc: "Classic vanilla cake perfect for any occasion", price: "$22", note: "", image: vanillaCake },
  { name: "Chocolate Chip Cookies", desc: "Chewy cookies loaded with chocolate chips", price: "$9", note: "", image: chocChipCookies },
];

const MenuPage = () => {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-display text-4xl font-bold text-foreground text-center mb-4">
            Our Menu
          </h1>
          <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
            Handcrafted treats made fresh daily with love and premium ingredients.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="bg-card rounded-lg overflow-hidden bakery-shadow hover:bakery-shadow-hover transition-shadow duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <span className="text-primary font-semibold text-sm whitespace-nowrap ml-2">
                      {product.price}
                      {product.note && (
                        <span className="text-muted-foreground font-normal text-xs block">
                          {product.note}
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
