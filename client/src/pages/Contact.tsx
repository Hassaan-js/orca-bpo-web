import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Music } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    alert("Thank you for your inquiry! We'll be in touch soon.");
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
          <h1 className="text-5xl font-bold text-white mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info Cards */}
            <Card className="bg-slate-800 border-slate-700 p-8">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300 mb-1">info@orcabpo.com</p>
              <p className="text-slate-400 text-sm">We'll respond within 24 hours</p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-slate-300 mb-1">+92 (51) 2345-6789</p>
              <p className="text-slate-400 text-sm">Mon-Fri, 9am-6pm PKT</p>
            </Card>

            <Card className="bg-slate-800 border-slate-700 p-8">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <MapPin className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Office</h3>
              <p className="text-slate-300 mb-1">Islamabad, Pakistan</p>
              <p className="text-slate-400 text-sm">Global presence in 5 countries</p>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="+92 (51) 2345-6789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Service Interest</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Software Development</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="customer">Customer Experience</option>
                    <option value="branding">Branding</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="real-estate">Real Estate VA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Additional Info */}
            <div className="space-y-8">
              <Card className="bg-slate-800 border-slate-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Orca BPO?</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>10+ years of industry experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>50+ satisfied global clients</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Expert team of 100+ professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Proven track record of success</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>24/7 customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">✓</span>
                    <span>Competitive pricing and flexible terms</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-slate-800 border-slate-700 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/share/1J89gjts2e/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition">
                    <Facebook className="w-6 h-6 text-blue-400" />
                  </a>
                  <a href="https://www.linkedin.com/company/orca-enterprises-private-limited/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </a>
                  <a href="https://www.instagram.com/orcabpo545?igsh=MWFia3d4M3Z5NXo4MA==" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition">
                    <Instagram className="w-6 h-6 text-blue-400" />
                  </a>
                  <a href="https://www.tiktok.com/@orcabpo?_r=1&_t=ZS-93EffrGHWrZ" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition">
                    <Music className="w-6 h-6 text-blue-400" />
                  </a>
                </div>
              </Card>
            </div>
          </div>
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
