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
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/4 z-0 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 skew-y-12 -translate-x-1/4 z-0 pointer-events-none" />
        
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
              className="text-5xl md:text-7xl lg:text-8xl font-black font-display uppercase leading-[0.9] text-secondary tracking-tighter mb-8"
            >
              Keep SFU Campus <span className="text-primary">Alive</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Inflation hit hard. Without modest increases, cuts are coming to clubs, DSUs, and services. We've been SO close before—<span className="text-foreground font-bold border-b-2 border-primary/30">43 votes last time!</span>
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
                    <p className="text-muted-foreground">No increase for years means real value is down. We're facing a $787k projected deficit without action.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Direct Impact</h4>
                    <p className="text-muted-foreground">This modest fee generates $519k/year revenue, directly funding the events and programming you love.</p>
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
              {/* Infographic Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-secondary to-secondary/90 rounded-3xl p-8 flex flex-col justify-center items-center text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-700">
                  {/* Image comment: Crowd of students at university event, representing engagement */}
                </div>
                <div className="relative z-10 text-center">
                  <div className="text-7xl font-black font-display mb-2">$8.00</div>
                  <div className="text-xl opacity-90 uppercase tracking-widest font-bold">Per Term</div>
                  <div className="w-16 h-1 bg-white/30 mx-auto my-6"></div>
                  <div className="text-2xl font-bold">Prevents $787k Deficit</div>
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
              title="SFPIRG Research"
              desc="Social justice and public interest research group for student advocacy."
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
            <div className="grid md:grid-cols-2">
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
                  The SFSS General Fee covers the student society's core operations. The CGS Groups are independent organizations (Radio, Newspaper, PIRG, Embark) that require distinct funding lines to maintain their independence and specific mandates.
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
