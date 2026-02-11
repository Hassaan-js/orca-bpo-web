import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Orca BPO's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Orca BPO's website are provided on an 'as is' basis. Orca BPO makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Orca BPO or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Orca BPO's website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Orca BPO's website could include technical, typographical, or photographic errors. Orca BPO does not warrant that any of the materials on its website are accurate, complete, or current. Orca BPO may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Orca BPO has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Orca BPO of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Orca BPO may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Pakistan, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
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
