import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Users, Radio, LeafyGreen, Newspaper, FlaskConical, Leaf } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { VoteSimulator } from "@/components/VoteSimulator";
import { VolunteerForm } from "@/components/VolunteerForm";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/students-cheering.png" 
            className="w-full h-full object-cover opacity-10 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Students cheering"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-block px-4 py-1 mb-6 border border-primary/20 bg-primary/5 rounded-full text-primary font-bold tracking-wider text-sm uppercase"
            >
              2026 Referendum Campaign
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-display uppercase leading-[1.1] text-secondary tracking-normal mb-8"
            >
              Protect Campus Life, Clubs & Unions
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Help us make campus life better again. Inflation hit hard and without support, cuts are coming to clubs, DSUs, and services.
              </motion.p>
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button 
                onClick={() => scrollToSection("sfss")}
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group"
              >
                Learn SFSS Referendum
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection("cgs")}
                className="px-8 py-4 bg-white border-2 border-secondary text-secondary rounded-xl font-bold text-lg hover:bg-secondary hover:text-white transition-all hover:scale-105 flex items-center justify-center"
              >
                Learn CGS Groups
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Simulator Section */}
      <section id="impact" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase mb-4 text-secondary">Why It Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">See exactly where your money goes and what's at stake.</p>
          </motion.div>
          
          <motion.div {...fadeIn}>
            <VoteSimulator />
          </motion.div>
        </div>
      </section>

      {/* SFSS Section */}
      <section id="sfss" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center gap-2 font-bold text-primary text-lg">
                <AlertCircle className="w-6 h-6" />
                <span>Referendum 1</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-display uppercase leading-tight mb-8 text-secondary">
                SFSS General Fee
              </h2>
              <div className="bg-secondary/5 p-8 rounded-2xl border-l-4 border-primary mb-8">
                <p className="font-medium text-lg italic text-secondary/80">
                  "Do you support the SFSS general fee levy increase of $8 for full-time students and $4 for part-time students... to prevent cuts in club, DSU, and student services funding?"
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">The Reality Check</h4>
                    <p className="text-muted-foreground">SFSS, the Simon Fraser Student Society, has not had a fee increase for years. Inflation has reduced the real value of student fees, creating a $787k projected deficit without action.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Direct Impact</h4>
                    <p className="text-muted-foreground">This modest fee increase generates $519k/year revenue, directly funding SFSS student society operations, campus events, and student programming.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 relative"
            >
              <div className="relative group">
                <img 
                  src="/matcha-illustration.png" 
                  alt="Cost of one matcha" 
                  className="rounded-3xl shadow-2xl w-full transform group-hover:rotate-1 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-[200px] transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <p className="font-black font-display text-2xl uppercase leading-none mb-1">$8.00</p>
                  <p className="text-sm font-bold opacity-90 uppercase">Just the cost of one matcha per term.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CGS Groups Section */}
      <section id="cgs" className="py-24 bg-secondary text-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <div className="mb-4 inline-flex items-center gap-2 font-bold text-primary-foreground/80 text-lg">
              <Users className="w-6 h-6" />
              <span>Referendum 2</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase mb-6">Support Independent Groups</h2>
            <p className="text-xl text-white/70">
              Essential independent voices need funding after SFU cuts. Support media, sustainability, and research for less than the cost of a coffee.
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="whileInView" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <GroupCard 
              icon={<Radio className="w-8 h-8" />}
              title="CJSF Radio"
              desc="Campus community radio station giving students a voice on the airwaves."
              price="$1.50"
            />
            <GroupCard 
              icon={<Leaf className="w-8 h-8" />}
              title="Embark Sustainability"
              desc="Student-led sustainability initiatives and climate action projects."
              price="$1.50"
            />
            <GroupCard 
              icon={<FlaskConical className="w-8 h-8" />}
              title="SFPIRG"
              desc="Social justice and public interest advocacy group for student initiatives."
              price="$1.50"
            />
            <GroupCard 
              icon={<Newspaper className="w-8 h-8" />}
              title="The Peak"
              desc="Independent student newspaper holding power accountable since 1965."
              price="$1.50"
            />
          </motion.div>
        </div>
      </section>

      {/* The Stakes Table */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div {...fadeIn} className="bg-muted/30 rounded-3xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-3">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border bg-white flex flex-col items-center text-center justify-center">
                <img src="/services-icons.png" alt="Student services at risk" className="w-48 h-48 mb-6 grayscale" />
                <p className="font-bold text-secondary uppercase tracking-widest text-sm">Action Required</p>
              </div>
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-border">
                <h3 className="text-3xl font-black font-display uppercase text-red-600 mb-6">Without YES</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="text-lg">Massive cuts to club budgets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="text-lg">Reduced support for Departmental Student Unions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="text-lg">$787,000 projected deficit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                    <span className="text-lg">Student services facing closure</span>
                  </li>
                </ul>
              </div>
              <div className="p-8 md:p-12 bg-secondary/5">
                <h3 className="text-3xl font-black font-display uppercase text-green-600 mb-6">With YES</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-lg font-medium">Fully funded campus events</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-lg font-medium">Robust support for student advocacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-lg font-medium">Sustainable future for independent groups</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="text-lg font-medium">Vibrant, active student life</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center mt-12">
            <div className="inline-block px-6 py-3 bg-primary/10 rounded-full text-primary font-bold">
              🎉 2025 Proof: Students already passed one-time increases! Let's make it permanent.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.h2 {...fadeIn} className="text-4xl font-black font-display uppercase text-center mb-12">
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div {...fadeIn}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-border bg-white px-6 rounded-xl mb-4 shadow-sm">
                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary">Is $8 a lot?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  It's less than the price of lunch on campus. For $8 per term, you ensure that the entire ecosystem of clubs, events, and advocacy remains funded for everyone.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-border bg-white px-6 rounded-xl mb-4 shadow-sm">
                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary">Why separate fees?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  The SFSS General Fee covers the Simon Fraser Student Society's core operations as the official student government. The CGS Groups are independent student organizations (Radio, Newspaper, SFPIRG, Embark) that require separate funding to maintain their independence and specific mandates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-border bg-white px-6 rounded-xl mb-4 shadow-sm">
                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-primary">What if I vote no?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  If the referendum fails, the SFSS will face a significant deficit. This will inevitably lead to cuts in services, reduced funding for student clubs, fewer campus events, and a less vibrant student experience at SFU.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="volunteer" className="py-24 bg-secondary text-white relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-5xl md:text-7xl font-black font-display uppercase mb-6 leading-none">
                Don't Let <br/>The Music <br/><span className="text-primary">Stop.</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-md">
                We need your voice. Join the campaign team and help us reach every student on campus.
              </p>
              <div className="flex gap-4 items-center text-white/60">
                <div className="h-px bg-white/20 flex-1"></div>
                <span className="uppercase tracking-widest text-sm font-bold">Contact Us</span>
                <div className="h-px bg-white/20 flex-1"></div>
              </div>
              <div className="mt-4 text-center lg:text-left">
                <a href="mailto:vpinternal@sfss.ca" className="text-2xl font-bold hover:text-primary transition-colors">vpinternal@sfss.ca</a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <VolunteerForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-display font-bold uppercase text-xl text-secondary">SFSS Referendum 2026</h4>
            <p className="text-sm text-muted-foreground mt-2">Authorized by the Simon Fraser Student Society.</p>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; 2026 SFSS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function GroupCard({ icon, title, desc, price }: { icon: any, title: string, desc: string, price: string }) {
  return (
    <motion.div variants={fadeIn} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/20 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 font-display uppercase">{title}</h3>
      <p className="text-sm text-white/70 mb-4 h-16">{desc}</p>
      <div className="flex justify-between items-center pt-4 border-t border-white/10">
        <span className="text-xs uppercase tracking-wide opacity-60">Increase</span>
        <span className="font-bold text-lg">{price}</span>
      </div>
    </motion.div>
  );
}
