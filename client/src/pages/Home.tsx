import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { ArrowRight, Code, Zap, Users, Palette, Search, Home as HomeIcon, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Music, Menu, X, CheckCircle, Award, Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";

/**
 * Design System: Premium Dark Tech with Blue Accents
 * SEO & GEO Optimized Content Structure
 * - Clear, factual language without marketing fluff
 * - Proper H2/H3 heading hierarchy for content organization
 * - Service schema markup for each service
 * - FAQ sections for AI search engine optimization
 * - Trust elements and social proof
 */

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    setFormData({ name: "", email: "", phone: "", website: "", employees: "", service: "" });
  };

  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built for reliability and scalability. We develop applications that solve real business problems.",
      benefits: ["Custom development", "Cloud-ready architecture", "Security-focused design"],
      link: "#software-development",
    },
    {
      icon: Zap,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility and drive conversions. We focus on measurable results.",
      benefits: ["SEO optimization", "Content strategy", "Campaign management"],
      link: "#digital-marketing",
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Professional customer support and engagement solutions. We handle customer interactions with expertise and care.",
      benefits: ["24/7 support", "Multi-channel support", "Quality assurance"],
      link: "#customer-experience",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Strategic branding that builds customer loyalty and market presence. We create consistent brand experiences.",
      benefits: ["Brand strategy", "Visual identity", "Market positioning"],
      link: "#branding",
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization based on proven strategies and best practices. We improve your online visibility.",
      benefits: ["Keyword research", "On-page optimization", "Link building"],
      link: "#seo-optimization",
    },
    {
      icon: HomeIcon,
      title: "Real Estate VA",
      description: "Virtual assistant services for real estate professionals. We handle back-office operations efficiently.",
      benefits: ["Administrative support", "Lead management", "Data entry"],
      link: "#real-estate-va",
    },
  ];

  const valueProps = [
    {
      title: "Increase Revenue",
      description: "We help businesses improve profitability through efficient operations and strategic solutions.",
    },
    {
      title: "Transparent Process",
      description: "Every step is documented and communicated. You understand what we're doing and why.",
    },
    {
      title: "Cost-Effective Solutions",
      description: "Professional services at competitive rates. We deliver value without compromising quality.",
    },
  ];

  const processSteps = ["Analysis", "Strategy", "Implementation", "Reporting", "Success"];

  const faqItems = [
    {
      question: "What is Business Process Outsourcing (BPO)?",
      answer: "BPO involves contracting specific business processes to external service providers. This allows companies to focus on core activities while we handle specialized functions.",
    },
    {
      question: "How much do your services cost?",
      answer: "Pricing depends on service type, volume, and complexity. We provide customized quotes after understanding your specific needs.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve diverse industries including technology, e-commerce, healthcare, real estate, and financial services.",
    },
    {
      question: "How do you ensure quality?",
      answer: "We maintain quality through regular training, performance monitoring, and continuous improvement processes.",
    },
    {
      question: "Can you scale services as we grow?",
      answer: "Yes. Our infrastructure supports scaling from small projects to large-scale operations.",
    },
    {
      question: "What is your experience?",
      answer: "We have 10+ years of BPO experience serving 50+ global clients across multiple industries.",
    },
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform",
      result: "40% improvement in customer satisfaction",
      description: "Implemented comprehensive customer support system",
    },
    {
      title: "Tech Startup",
      result: "3x revenue growth in 12 months",
      description: "Digital marketing and lead generation services",
    },
    {
      title: "Real Estate Agency",
      result: "50% reduction in administrative time",
      description: "Virtual assistant and back-office support",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/images/orca-logo.png" alt="Orca BPO - Business Process Outsourcing Solutions" className="h-12 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition">About</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition">FAQ</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition">Contact</a>
          </div>
          <button 
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-white">Get Started</Button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t border-border">
            <div className="container py-4 flex flex-col gap-4">
              <a href="#services" className="text-sm font-medium hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white mt-2">Get Started</Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663236399068/nTrtRBvTjGzyxcsJ.jpg')`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional BPO Services for Business Growth
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
              Orca BPO provides business process outsourcing and digital agency services. We serve 50+ global clients with software development, digital marketing, customer support, and specialized business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
                Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Global Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">6</p>
                <p className="text-sm text-muted-foreground">Core Services</p>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Business Process Outsourcing Services</h2>
            <p className="text-lg text-muted-foreground">
              We provide specialized BPO and digital agency services. Each service is designed to solve specific business challenges and improve operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  id={service.link.substring(1)}
                  className="group bg-card hover:bg-card/80 border-border hover:border-primary/50 transition-all duration-300 p-8 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
                  role="article"
                  aria-label={`${service.title} service`}
                >
                  <div className="mb-6 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a href={service.link} className="inline-flex items-center text-primary hover:gap-2 transition-all text-sm font-medium">
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
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663236399068/SWcDbQmxYtpEFXVP.jpg"
                      alt="Orca BPO team providing customer support services"
                      className="w-full h-96 object-cover rounded-lg shadow-2xl shadow-primary/20"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663236399068/ByROIEDOtcifGQUC.jpg"
                      alt="Team collaboration in Orca BPO office"
                      className="w-full h-96 object-cover rounded-lg shadow-2xl shadow-primary/20"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663236399068/PWXQIRFETHuSEASG.jpg"
                      alt="Team discussion and business planning session"
                      className="w-full h-96 object-cover rounded-lg shadow-2xl shadow-primary/20"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About Orca BPO
              </h2>
              
              <h3 className="text-2xl font-bold mb-4 text-primary">Company Overview</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Orca BPO is a professional business process outsourcing and digital agency based in Islamabad, Pakistan. We provide integrated customer experience and agency solutions to businesses worldwide.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-primary">Our Experience</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2014, we have 10+ years of experience serving 50+ global clients. Our team of professionals handles complex business processes with expertise and attention to detail.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-primary">What We Deliver</h3>
              <div className="space-y-4 mb-8">
                {valueProps.map((prop, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 bg-primary rounded-full" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">{prop.title}</h4>
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
            <h3 className="text-2xl font-bold mb-4">How Our Process Works</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We begin by analyzing your business, products, and competitive landscape. Understanding your specific needs allows us to develop targeted solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our strategic approach focuses on sustainable growth through data-driven decisions and continuous optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">Client Success Stories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-card border-border p-8">
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{study.result}</p>
                <p className="text-muted-foreground">{study.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Testimonial Content */}
              <div className="text-center md:text-left">
                <div className="mb-8 flex justify-center md:justify-start">
                  <div className="inline-block w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl text-primary">❝</span>
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                  Having worked with multiple SEO agencies, Orca BPO stands out as the best. Their work improved our conversion rates significantly.
                </p>
                <div>
                  <p className="text-lg text-primary font-bold">Paul Andrew</p>
                  <p className="text-muted-foreground">Client & Business Partner</p>
                </div>
              </div>
              {/* Paul Andrew Image */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-3xl"></div>
                  <img
                    src="/images/paul-andrew.png"
                    alt="Paul Andrew - Client testimonial for Orca BPO"
                    className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CEO Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-3xl"></div>
                <img
                  src="/images/ceo.jpg"
                  alt="CEO of Orca BPO - Leadership"
                  className="relative w-full max-w-sm rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* CEO Bio */}
            <div>
              <div className="mb-6">
                <span className="text-sm font-bold text-primary uppercase tracking-widest">Leadership</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Meet Our CEO
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our CEO brings years of industry expertise and a commitment to delivering excellent results. He leads Orca BPO with a focus on customer success and innovation.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Under his leadership, Orca BPO has become a trusted partner for companies seeking professional BPO and digital agency services.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Connect With Leadership
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground text-center mb-16">
              Find answers to common questions about our BPO services and how we can help your business.
            </p>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="bg-card border-border p-8">
                  <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </Card>
              ))}
            </div>

            {/* FAQ Schema */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                  "@type": "Question",
                  "name": item.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": item.answer
                  }
                }))
              })}
            </script>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/20 via-primary/10 to-background border-t border-primary/20">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you achieve sustainable growth with our professional BPO and digital agency services.
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
                      Office No. 5, 2nd Floor, Muzafar Chamber, Near Tehzeeb Bakery, Blue Area, Islamabad, Pakistan 44000
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
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-foreground placeholder-muted-foreground"
                    required
                    aria-label="Full Name"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-foreground placeholder-muted-foreground"
                    required
                    aria-label="Email Address"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-foreground placeholder-muted-foreground"
                    aria-label="Phone Number"
                  />
                </div>

                <div>
                  <input
                    type="url"
                    name="website"
                    placeholder="Website (Optional)"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-foreground placeholder-muted-foreground"
                    aria-label="Website"
                  />
                </div>

                <div>
                  <select
                    name="employees"
                    value={formData.employees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-foreground"
                    aria-label="Company Size"
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
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition text-foreground"
                    aria-label="Select Service"
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
                Professional BPO and digital agency services for business growth.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#software-development" className="hover:text-primary transition">Software Development</a></li>
                <li><a href="#digital-marketing" className="hover:text-primary transition">Digital Marketing</a></li>
                <li><a href="#customer-experience" className="hover:text-primary transition">Customer Experience</a></li>
                <li><a href="#seo-optimization" className="hover:text-primary transition">SEO Optimization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
                <li><a href="#faq" className="hover:text-primary transition">FAQ</a></li>
                <li><a href="#contact" className="hover:text-primary transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-primary transition">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-primary transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Orca BPO. All rights reserved.
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
