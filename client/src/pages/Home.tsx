import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Zap, Users, Palette, Search, Home as HomeIcon, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Music } from "lucide-react";
import { useState } from "react";

/**
 * Design System: Premium Dark Tech with Blue Accents
 * - Typography: Space Grotesk for headings, Poppins for body
 * - Colors: Deep navy (#0f172a) background, bright blue (#3b82f6) accents
 * - Layout: Full-width sections with asymmetric content placement
 * - Animations: Smooth hover effects, glowing elements, fade-in on scroll
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    employees: "",
    service: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", website: "", employees: "", service: "" });
  };

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Smooth, secure, and reliable software solutions tailored to your business needs.",
      link: "#",
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "Maximize revenue with analytics-based marketing strategies and campaigns.",
      link: "#",
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Our strong sales profile makes us a preferred BPO partner for CX solutions.",
      link: "#",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Grow a loyal customer base across digital platforms with strategic branding.",
      link: "#",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Satisfying search engines through facts-based SEO strategies and best practices.",
      link: "#",
    },
    {
      icon: HomeIcon,
      title: "Real Estate VA",
      description: "Back office operational support for real estate businesses and professionals.",
      link: "#",
    },
  ];

  const valueProps = [
    {
      title: "Boost Profitability",
      description: "Over the past several years we have built a reputation of providing unparalleled service to our clients, increasing revenue and ensuring financial success.",
    },
    {
      title: "Assistance & Support",
      description: "Each step of the process is kept transparent. We have the expertise to assist you with technical support or advice on the best solutions.",
    },
    {
      title: "One-Stop Marketing Resource",
      description: "We help you market better, reach more prospects, and expand your business with cost-effective, strategic solutions.",
    },
  ];

  const processSteps = ["Analysis", "Strategy", "Implementation", "Reporting", "Success"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/images/orca-logo.png" alt="Orca BPO Logo" className="h-12 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition">About</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-planet.jpg')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Intelligent Solutions to Help Your Business <span className="text-primary">Leap Into Success</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              BPO Orca Enterprises provides thorough, detailed, and customer-oriented services as a leading provider of business process outsourcing. We're committed to providing the best solutions to help you navigate the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">How Do We Add Value?</h2>
            <p className="text-lg text-muted-foreground">
              Embrace the future of digital services by partnering with our experienced professionals. We deliver comprehensive solutions across multiple domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 p-8 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                >
                  <div className="mb-6 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <a href={service.link} className="inline-flex items-center text-primary hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/about-office.jpg"
                alt="Orca BPO Team Collaboration"
                className="rounded-lg shadow-2xl shadow-primary/20 w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Celebrating More Than <span className="text-primary">10 Years of Impact</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Orca BPO, we are dedicated to providing exceptional customer support and engagement solutions. Our mission is to be the leading provider in Islamabad, setting new standards in sales with reliable, cost-effective services across various industries.
              </p>

              <div className="space-y-4 mb-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-primary rounded-full" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{prop.title}</h3>
                      <p className="text-muted-foreground">{prop.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white">
                Discover Our Process
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our 360° Value Creation Process</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-2">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition">
                  <div className="text-3xl font-bold text-primary mb-2">{index + 1}</div>
                  <p className="font-bold">{step}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 bg-card border border-border rounded-lg p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Once you choose Orca BPO as your service provider, we begin by analyzing your website, products, business, and competitors. The more we know about your business, the better we can serve you. Analyzing the market and building a buyer persona are crucial to promoting your brand effectively and achieving sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-block w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl text-primary">❝</span>
              </div>
            </div>
            <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
              Having worked with probably three SEO agencies so far, BPO Orca Enterprises stands out as the best. Their contribution has helped us improve conversion rates by making broader business strategy changes.
            </p>
            <p className="text-lg text-primary font-bold">Paul Andrew</p>
            <p className="text-muted-foreground">Client & Business Partner</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 via-primary/10 to-background border-t border-primary/20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            You Have the <span className="text-primary">VISION</span>, We Know the <span className="text-primary">WAY</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Often, businesses miss clues about their future success. Let us help you achieve sustainable growth with our sales and marketing solutions.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Start Your Journey Today
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Office Address</p>
                    <p className="text-muted-foreground">
                      Office No. 5, 2nd Floor, Muzafar Chamber, Near Tehzeeb Bakery, Blue Area, Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Phone</p>
                    <p className="text-muted-foreground">
                      <a href="tel:+92511111114" className="hover:text-primary transition">
                        +92-51-111-111-514
                      </a>
                      <br />
                      <a href="tel:+92512120101" className="hover:text-primary transition">
                        051 2120101
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold mb-1">Email</p>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@orca.com.pk" className="hover:text-primary transition">
                        info@orca.com.pk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition text-foreground placeholder-muted-foreground"
                  />
                </div>

                <div>
                  <input
                    type="url"
                    name="website"
                    placeholder="Website (Optional)"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition text-foreground placeholder-muted-foreground"
                  />
                </div>

                <div>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition text-foreground"
                  >
                    <option value="">Company Size</option>
                    <option value="1-10">1-10 Employees</option>
                    <option value="10-20">10-20 Employees</option>
                    <option value="20-30">20-30 Employees</option>
                    <option value="30-40">30-40 Employees</option>
                    <option value="50+">50+ Employees</option>
                  </select>
                </div>

                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition text-foreground"
                  >
                    <option value="">Select Service</option>
                    <option value="software">Software Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="cx">Customer Experience</option>
                    <option value="branding">Branding</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="realestateava">Real Estate VA</option>
                  </select>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/images/orca-logo.png" alt="Orca BPO Logo" className="h-16 w-auto mb-4" />
              <p className="text-muted-foreground text-sm">
                Leading provider of integrated customer experience and agency solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Software Development</a></li>
                <li><a href="#" className="hover:text-primary transition">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-primary transition">Customer Experience</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition">Our Team</a></li>
                <li><a href="#" className="hover:text-primary transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 BPO Orca Enterprises. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a
                href="https://www.facebook.com/share/1J89gjts2e/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition"
                aria-label="Follow Orca BPO on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/orca-enterprises-private-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition"
                aria-label="Follow Orca BPO on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/orcabpo545?igsh=MWFia3d4M3Z5NXo4MA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition"
                aria-label="Follow Orca BPO on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@orcabpo?_r=1&_t=ZS-93EffrGHWrZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:text-primary transition"
                aria-label="Follow Orca BPO on TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
