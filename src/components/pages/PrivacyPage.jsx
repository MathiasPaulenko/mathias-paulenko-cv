import { useTranslation } from '../../hooks/useTranslation'
import { Navbar } from '../layout/Navbar'
import { Footer } from '../layout/Footer'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../helpers/animations'

export const PrivacyPage = () => {
  const t = useTranslation()

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-[#d0d0d0]">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 md:px-6 pt-28 pb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <div className="mb-8">
            <span className="text-[#33ff33] font-mono text-sm">$ cat privacy-policy.md</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#d0d0d0] mt-4 mb-2">
              {t.privacyPolicyTitle || 'Privacy Policy'}
            </h1>
            <p className="text-[#999999] font-mono text-sm">Last updated: June 2026</p>
          </div>

          <div className="space-y-8 font-mono text-sm leading-relaxed">
            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">1. Data Controller</h2>
              <p className="text-[#999999]">
                <span className="text-[#d0d0d0]">Name:</span> Mathias Vladimir Paulenko Echeverz<br />
                <span className="text-[#d0d0d0]">Website:</span>{' '}
                <a href="https://mathiaspaulenko.com" className="text-[#6688cc] hover:text-[#33ff33] transition-colors">
                  mathiaspaulenko.com
                </a><br />
                <span className="text-[#d0d0d0]">Email:</span>{' '}
                <a href="mailto:mathias.paulenko@outlook.com" className="text-[#6688cc] hover:text-[#33ff33] transition-colors">
                  mathias.paulenko@outlook.com
                </a>
              </p>
            </section>

            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">2. Information We Collect</h2>
              <p className="text-[#999999] mb-3">
                This website uses <strong className="text-[#d0d0d0]">Google Analytics 4</strong> to collect anonymous usage statistics. The data collected includes:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-1">
                <li>Pages visited and time spent on each page</li>
                <li>Device type, browser, and operating system</li>
                <li>Approximate geographic location (country/city level)</li>
                <li>Referrer URL (how you arrived at this site)</li>
              </ul>
              <p className="text-[#999999] mt-3">
                Google Analytics processes this data according to their{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6688cc] hover:text-[#33ff33] transition-colors"
                >
                  Privacy Policy
                </a>.
              </p>
            </section>

            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">3. Purpose of Data Collection</h2>
              <p className="text-[#999999]">
                The collected data is used solely to understand how visitors interact with this portfolio website, enabling continuous improvement of content and user experience. No personal data is sold or shared with third parties beyond Google Analytics processing.
              </p>
            </section>

            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">4. Cookies & Local Storage</h2>
              <p className="text-[#999999] mb-3">
                This website uses:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-1">
                <li>
                  <strong className="text-[#d0d0d0]">Google Analytics cookies</strong> — for traffic analysis (Category: Analytics)
                </li>
                <li>
                  <strong className="text-[#d0d0d0]">Local Storage</strong> — to remember your cookie consent preference (Category: Essential)
                </li>
              </ul>
            </section>

            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">5. Your Rights (GDPR)</h2>
              <p className="text-[#999999] mb-3">
                Under the General Data Protection Regulation (GDPR), you have the right to:
              </p>
              <ul className="list-disc list-inside text-[#999999] space-y-1">
                <li>Access your personal data</li>
                <li>Request rectification of inaccurate data</li>
                <li>Request erasure of your data (&quot;right to be forgotten&quot;)</li>
                <li>Object to data processing</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-[#999999] mt-3">
                To exercise these rights, contact us at{' '}
                <a href="mailto:mathias.paulenko@outlook.com" className="text-[#6688cc] hover:text-[#33ff33] transition-colors">
                  mathias.paulenko@outlook.com
                </a>.
              </p>
            </section>

            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">6. Data Retention</h2>
              <p className="text-[#999999]">
                Google Analytics retains user-level data for <strong className="text-[#d0d0d0]">14 months</strong> by default. You can opt out of Google Analytics tracking by installing the{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#6688cc] hover:text-[#33ff33] transition-colors"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </section>

            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">7. Changes to This Policy</h2>
              <p className="text-[#999999]">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>

            <section className="border border-[#2a2a2a] bg-[#141414] p-6 md:p-8">
              <h2 className="text-[#ffb000] font-bold mb-3 text-base">8. Contact</h2>
              <p className="text-[#999999]">
                For any questions regarding this privacy policy or data processing, please contact:<br />
                <span className="text-[#d0d0d0]">Mathias Paulenko</span><br />
                <a href="mailto:mathias.paulenko@outlook.com" className="text-[#6688cc] hover:text-[#33ff33] transition-colors">
                  mathias.paulenko@outlook.com
                </a>
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
