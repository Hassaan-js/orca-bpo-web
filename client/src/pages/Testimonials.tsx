import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Paul Andrew",
      title: "Client & Business Partner",
      company: "Tech Innovations Inc.",
      rating: 5,
      quote: "Having worked with probably three SEO agencies so far, BPO Orca Enterprises stands out as the best. Their contribution has helped us improve conversion rates by making broader business strategy changes.",
      image: "/images/testimonial-paul.jpg",
      metrics: "40% improvement in conversions"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "CEO",
      company: "Global Solutions Ltd.",
      rating: 5,
      quote: "The team at Orca BPO is professional, responsive, and delivers results. Their digital marketing strategies have significantly increased our online visibility and customer engagement.",
      image: "/images/testimonial-sarah.jpg",
      metrics: "3x increase in leads"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Operations Director",
      company: "E-Commerce Plus",
      rating: 5,
      quote: "Excellent customer support service. The team handles our customer interactions with professionalism and care. Response times are quick and customer satisfaction has improved dramatically.",
      image: "/images/testimonial-michael.jpg",
      metrics: "95% customer satisfaction"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      title: "Marketing Manager",
      company: "Creative Agency Co.",
      rating: 5,
      quote: "Outstanding branding work. Orca BPO helped us develop a cohesive brand identity that resonates with our target audience. Their strategic approach is refreshing and results-driven.",
      image: "/images/testimonial-emma.jpg",
      metrics: "50% brand recognition increase"
    },
    {
      id: 5,
      name: "David Thompson",
      title: "Founder",
      company: "StartUp Ventures",
      rating: 5,
      quote: "Their software development team is top-notch. They built our entire platform from scratch with clean code, great architecture, and delivered on time. Highly recommended.",
      image: "/images/testimonial-david.jpg",
      metrics: "Project delivered 2 weeks early"
    },
    {
      id: 6,
      name: "Lisa Martinez",
      title: "Real Estate Broker",
      company: "Premier Properties",
      rating: 5,
      quote: "The Real Estate VA service has been a game-changer for my business. They handle all the administrative tasks efficiently, allowing me to focus on closing deals. Worth every penny.",
      image: "/images/testimonial-lisa.jpg",
      metrics: "20 hours saved per week"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-600"}`}
          />
        ))}
      </div>
    );
  };

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
          <h1 className="text-5xl font-bold text-white mb-6">Client Testimonials</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Hear from our satisfied clients about how Orca BPO has transformed their businesses and delivered exceptional results.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-slate-800 border-slate-700 hover:border-blue-500 transition p-8 flex flex-col">
                <div className="mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-slate-300 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                
                <div className="border-t border-slate-700 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-400 font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-400">{testimonial.title}</p>
                      <p className="text-sm text-blue-400 font-semibold mt-1">{testimonial.company}</p>
                      <p className="text-xs text-slate-500 mt-2">📊 {testimonial.metrics}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-blue-600/10 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <p className="text-slate-300">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
              <p className="text-slate-300">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">4.9/5</div>
              <p className="text-slate-300">Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
              <p className="text-slate-300">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's work together to achieve your business goals and create your own success story.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6">
                Get Started Today <ArrowRight className="w-4 h-4 ml-2" />
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
