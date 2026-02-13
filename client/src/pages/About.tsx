import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from service delivery to customer support."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, understanding their goals and delivering tailored solutions."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With clients across the globe, we understand diverse markets and cultural nuances."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We're committed to helping our clients achieve sustainable growth and long-term success."
    }
  ];

  const milestones = [
    { year: "2013", event: "Orca BPO Founded" },
    { year: "2015", event: "Expanded to 50+ Employees" },
    { year: "2017", event: "Launched Software Development Division" },
    { year: "2019", event: "Reached 50+ Global Clients" },
    { year: "2021", event: "Achieved ISO Certification" },
    { year: "2023", event: "Expanded Digital Marketing Services" }
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
          <h1 className="text-5xl font-bold text-white mb-6">About Orca BPO</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We're a team of experienced professionals dedicated to delivering exceptional business process outsourcing and digital services.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-slate-300 mb-4">
                Founded in 2013, Orca BPO has grown from a small startup to a trusted partner for businesses worldwide. We started with a simple mission: to provide high-quality business process outsourcing services that help companies focus on their core competencies.
              </p>
              <p className="text-slate-300 mb-4">
                Over the past decade, we've expanded our services to include software development, digital marketing, customer experience solutions, and specialized business services. Our team has grown to over 100 professionals across multiple locations.
              </p>
              <p className="text-slate-300">
                Today, we serve 50+ global clients across various industries, delivering measurable results and building long-term partnerships based on trust and excellence.
              </p>
            </div>
            <div className="bg-blue-500/10 rounded-lg p-8 border border-blue-500/20">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-blue-400">10+</div>
                  <p className="text-slate-300">Years of Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">50+</div>
                  <p className="text-slate-300">Global Clients</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">100+</div>
                  <p className="text-slate-300">Team Members</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-blue-400">6</div>
                  <p className="text-slate-300">Service Divisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-blue-600/10 border-y border-slate-700">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const IconComponent = value.icon;
              return (
                <Card key={idx} className="bg-slate-800 border-slate-700 p-8">
                  <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-slate-300">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663236399068/OEDRYpUXNmzhjgom.JPG" 
                alt="Orca BPO Team - Professional developers and consultants collaborating" 
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663236399068/afSBWYBNWcPamvrF.JPG" 
                alt="Orca BPO Team - Developers working together on laptops" 
                className="rounded-lg shadow-2xl w-full object-cover"
              />
            </div>
          </div>
          <p className="text-center text-slate-300 mt-8 text-lg">Our talented team of 100+ professionals is dedicated to delivering excellence and driving your business growth.</p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500/20 border border-blue-500/50">
                    <span className="text-blue-400 font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-lg text-white font-semibold">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-8">
            Join our growing list of satisfied clients and experience the Orca BPO difference.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-blue-500 hover:bg-blue-600 text-lg px-8 py-6">
                Get in Touch <ArrowRight className="w-4 h-4 ml-2" />
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
