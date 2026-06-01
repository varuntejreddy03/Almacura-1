import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Calendar, Mail, Clock } from 'lucide-react';
import useSEO from '../hooks/useSEO';

export default function Contact() {
  useSEO(
    'Contact ALMACURA | Location & Appointments',
    'Get in touch with ALMACURA at Nightingale Super Specialty Hospital. View contact numbers, location directions, and download QR codes for printables.'
  );
  const [submitted, setSubmitted] = useState(false);
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const time = formData.get('time');
    const message = formData.get('message');
    const whatsappMessage = [
      'Almacura inquiry',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Preferred time: ${time}`,
      `Message: ${message}`
    ].join('\n');

    window.open(`https://wa.me/919966030085?text=${encodeURIComponent(whatsappMessage)}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
    form.reset();
  };

  return (
    <main className="w-full pt-32 pb-24 min-h-screen bg-brand-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-4 block">
            Get In Touch
          </span>
          <h1 className="font-cormorant text-5xl md:text-7xl font-bold text-brand-navy mb-6">
            Contact <span className="italic text-brand-teal">ALMACURA</span>
          </h1>
          <p className="font-dm text-lg text-brand-text">
            Start your health restoration journey with our expert clinical team. Reach out to schedule your consultation or inquire about our programs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & CTAs */}
          <motion.div {...fadeInUp} className="space-y-12">
            <div className="bg-brand-ice rounded-[2.5rem] p-10 border border-brand-teal/10 shadow-sm">
              <h3 className="font-cormorant text-3xl font-bold text-brand-navy mb-8">Clinic Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Address</h4>
                    <p className="font-dm text-brand-text leading-relaxed">
                      ALMACURA, Nightingale Hospital,<br />
                      X Road, Nagarjuna Sagar Rd, near Santosh Nagar,<br />
                      Sayeedabad Road, Saroornagar, Vinay Nagar,<br />
                      Saidabad, Hyderabad, Telangana 500059
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Phone</h4>
                    <p className="font-dm text-brand-text leading-relaxed">
                      <a href="tel:+919966030085" className="hover:text-brand-teal transition-colors">+91 9966030085</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Email</h4>
                    <p className="font-dm text-brand-text leading-relaxed">
                      <a href="mailto:info@almacura.in" className="hover:text-brand-teal transition-colors">info@almacura.in</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-ice rounded-full flex items-center justify-center text-brand-teal shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-dm text-sm font-bold text-brand-navy uppercase tracking-wider mb-2">Hours</h4>
                    <p className="font-dm text-brand-text leading-relaxed uppercase">
                      Monday to Saturday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919966030085" target="_blank" rel="noreferrer" className="w-full">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-5 bg-[#25D366] text-white rounded-2xl font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-lg shadow-[#25D366]/20 hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Now
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
            <div className="bg-brand-navy p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10">
                <h3 className="font-cormorant text-3xl font-bold text-white mb-2">Send an Inquiry</h3>
                <p className="font-dm text-white/70 mb-8">Our care coordinator will get back to you shortly.</p>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors"
                      placeholder="+91"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Preferred Time for Call</label>
                    <select name="time" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors appearance-none">
                      <option value="" className="text-brand-navy">Select a time</option>
                      <option value="morning" className="text-brand-navy">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon" className="text-brand-navy">Afternoon (12 PM - 4 PM)</option>
                      <option value="evening" className="text-brand-navy">Evening (4 PM - 7 PM)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block font-dm text-xs font-bold text-white/80 uppercase tracking-wider mb-2">Primary Concern / Message</label>
                    <textarea 
                      rows={4}
                      name="message"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-teal transition-colors resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {submitted && (
                    <p className="font-dm text-brand-gold text-sm leading-relaxed">
                      Your inquiry is ready in WhatsApp. Our care coordinator will review the details after you send it.
                    </p>
                  )}
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 bg-brand-gold text-brand-navy rounded-xl font-dm font-bold text-xs tracking-[0.2em] uppercase shadow-lg hover:bg-white transition-all mt-4"
                  >
                    Submit Inquiry
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Printables & QR Codes Section */}
        <motion.div 
          {...fadeInUp}
          className="mt-20 bg-brand-ice rounded-[2.5rem] p-10 border border-brand-teal/10 shadow-sm"
        >
          <div className="max-w-3xl">
            <span className="font-dm text-[11px] font-bold tracking-[0.3em] text-brand-teal uppercase mb-2 block">
              Clinic Assets
            </span>
            <h3 className="font-cormorant text-4xl font-bold text-brand-navy mb-4">Printable QR Codes</h3>
            <p className="font-dm text-brand-text mb-8">
              Download high-resolution QR codes to include in printables, cards, brochures, or templates. Scanning these QR codes directs patients to our official website or Google Maps navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Website QR Card */}
            <div className="bg-brand-white p-8 rounded-3xl border border-brand-teal/10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-36 h-36 bg-brand-ice p-3 rounded-2xl shadow-md border border-brand-teal/10 flex items-center justify-center shrink-0">
                <img src="/qr-website.png" alt="ALMACURA Website QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-dm text-lg font-bold text-brand-navy mb-2">Website QR Code</h4>
                <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                  Links to <strong>https://almacura.in/</strong>. Use this for general marketing materials, clinical signs, and business cards.
                </p>
                <a 
                  href="/qr-website.png" 
                  download="Almacura-Website-QR.png"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-teal text-white rounded-xl font-dm text-xs font-bold uppercase tracking-wider hover:bg-brand-navy transition-all shadow-md"
                >
                  Download PNG
                </a>
              </div>
            </div>

            {/* Location QR Card */}
            <div className="bg-brand-white p-8 rounded-3xl border border-brand-teal/10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-36 h-36 bg-brand-ice p-3 rounded-2xl shadow-md border border-brand-teal/10 flex items-center justify-center shrink-0">
                <img src="/qr-location.png" alt="ALMACURA Location QR Code" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="font-dm text-lg font-bold text-brand-navy mb-2">Location & Maps QR</h4>
                <p className="text-sm text-brand-muted mb-4 leading-relaxed">
                  Links directly to ALMACURA on Google Maps at Nightingale Hospital, Saidabad, Hyderabad. Use this to help patients navigate to the clinic.
                </p>
                <a 
                  href="/qr-location.png" 
                  download="Almacura-Location-QR.png"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-teal text-white rounded-xl font-dm text-xs font-bold uppercase tracking-wider hover:bg-brand-navy transition-all shadow-md"
                >
                  Download PNG
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="mt-20 rounded-[2.5rem] overflow-hidden border border-brand-teal/10 shadow-2xl h-[450px] relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.260813791461!2d78.50951959999999!3d17.3511785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99fc1fd6c481%3A0x56791f2478456a8b!2sALMACURA!5e0!3m2!1sen!2sin!4v1780321447911!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </motion.div>
      </div>
    </main>
  );
}


