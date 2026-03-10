import Layout from "@/components/Layout";
import bakeryKitchen from "@/assets/bakery-kitchen.jpg";

const AboutPage = () => {
  return (
    <Layout>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-display text-4xl font-bold text-foreground text-center mb-12">
            About Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden bakery-shadow">
              <img
                src={bakeryKitchen}
                alt="Our warm bakery kitchen"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Sweet Treats Corner, baking is our passion! Founded by a lifelong
                baking enthusiast, we believe in creating treats that bring a smile to
                every face.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From our kitchen to your table, we pour our hearts into every cupcake,
                cookie, and cake we make. Every ingredient is carefully selected, every
                recipe perfected over years of love and dedication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
