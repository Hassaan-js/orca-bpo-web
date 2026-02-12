import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users, Palette, Search, HomeIcon, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "software-development",
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions built for reliability and scalability. We develop applications that solve real business problems.",
      benefits: [
        "Custom development tailored to your needs",
        "Cloud-ready architecture for scalability",
        "Security-focused design and implementation",
        "Full-stack development expertise",
        "Agile development methodology"
      ],
      process: [
        "Requirements analysis and planning",
        "Design and architecture",
        "Development and testing",
        "Deployment and support"
      ]
    },
    {
      id: "digital-marketing",
      icon: Zap,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that increase visibility and drive conversions. We focus on measurable results.",
      benefits: [
        "SEO optimization for search visibility",
        "Content strategy and creation",
        "Campaign management and optimization",
        "Social media marketing",
        "Analytics and reporting"
      ],
      process: [
        "Market research and analysis",
        "Strategy development",
        "Campaign execution",
        "Performance monitoring and optimization"
      ]
    },
    {
      id: "customer-experience",
      icon: Users,
      title: "Customer Experience",
      description: "Professional customer support and engagement solutions. We handle customer interactions with expertise and care.",
      benefits: [
        "24/7 customer support availability",
        "Multi-channel support (phone, email, chat)",
        "Quality assurance and monitoring",
        "Customer satisfaction tracking",
        "Multilingual support options"
      ],
      process: [
        "Support team training",
        "Process implementation",
        "Quality monitoring",
        "Continuous improvement"
      ]
    },
    {
      id: "branding",
      icon: Palette,
      title: "Branding",
      description: "Strategic branding that builds customer loyalty and market presence. We create consistent brand experiences.",
      benefits: [
        "Brand strategy and positioning",
        "Visual identity development",
        "Market positioning and differentiation",
        "Brand guidelines creation",
        "Consistent brand messaging"
      ],
      process: [
        "Brand discovery and research",
        "Strategy development",
        "Visual design creation",
        "Implementation and rollout"
      ]
    },
    {
      id: "seo-optimization",
      icon: Search,
      title: "SEO Optimization",
      description: "Search engine optimization based on proven strategies and best practices. We improve your online visibility.",
      benefits: [
        "Keyword research and analysis",
        "On-page optimization",
        "Technical SEO improvements",
        "Link building and authority",
        "Monthly reporting and analytics"
      ],
      process: [
        "SEO audit and analysis",
        "Strategy development",
        "Implementation",
        "Monitoring and optimization"
      ]
    },
    {
      id: "real-estate-va",
      icon: HomeIcon,
      title: "Real Estate VA",
      description: "Virtual assistant services for real estate professionals. We handle back-office operations efficiently.",
      benefits: [
        "Administrative support and management",
        "Lead management and follow-up",
        "Data entry and organization",
        "Appointment scheduling",
        "Document preparation"
      ],
      process: [
        "Process documentation",
        "VA training and onboarding",
        "Daily operations support",
        "Performance monitoring"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-xl font-bold text-blue-400 hover:text-blue-300">Orca BPO</a>
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/services">
              <a className="text-slate-300 hover:text-white transition">Services</a>
            </Link>
            <Link href="/about">
              <a className="text-slate-300 hover:text-white transition">About</a>
            </Link>
            <Link href="/testimonials">
              <a className="text-slate-300 hover:text-white transition">Testimonials</a>
            </Link>
            <Link href="/contact">
              <a className="text-slate-300 hover:text-white transition">Contact</a>
            </Link>
            <Link href="/contact">
              <a>
                <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
              </a>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Comprehensive business solutions designed to help your company grow. From software development to customer support, we provide expert services across multiple industries.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-200 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/services/${service.id}`}>
                    <a>
                      <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/10">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </a>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600/10 border-t border-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6">
                Get Started Today
              </Button>
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 Orca BPO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
