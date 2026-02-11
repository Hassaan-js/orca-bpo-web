import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <img src="/images/orca-logo.png" alt="Orca BPO" className="h-12 w-auto" />
          </a>
          <a href="/" className="flex items-center gap-2 text-primary hover:gap-3 transition">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="py-20 md:py-32">
        <div className="container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Orca BPO ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Name and email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Website URL</li>
                <li>Company size</li>
                <li>Service interests</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Generate leads and conduct business</li>
                <li>Fulfill and manage your requests for our services</li>
                <li>Email you regarding updates, news, and general information</li>
                <li>Improve our website and services</li>
                <li>Respond to your inquiries and provide customer service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may share your information with third parties only when necessary to provide our services or as required by law. We do not sell, trade, or rent your personal information to others.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="font-bold mb-2">Orca BPO</p>
                <p className="text-muted-foreground">
                  Office No. 5, 2nd Floor, Muzafar Chamber<br />
                  Near Tehzeeb Bakery, Blue Area<br />
                  Islamabad, Pakistan 44000<br />
                  <br />
                  Email: info@orca.com.pk<br />
                  Phone: +92-51-111-111-514
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this privacy policy at any time. Changes and clarifications will take effect immediately upon their posting to the website.
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Return to Home
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
