import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "836ac90a-cb00-45d8-916d-ef3c70ba7a47", 
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('idle');
      alert('Error sending message. Please check your connection.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:ptilak5210@gmail.com',
      label: 'ptilak5210@gmail.com',
    },
    {
      name: 'Phone',
      icon: Phone,
      href: 'tel:+917490961147',
      label: '+91 7490961147',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/tilak-patel',
      label: 'linkedin.com/in/tilak-patel',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/ptilak5210',
      label: 'github.com/ptilak5210',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-transparent transition-colors duration-300">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-[var(--primary)] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              // contact_handler.py
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 font-medium">
              Let's connect and discuss opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 hover:border-[var(--primary)]/50 hover:bg-slate-50 dark:hover:bg-slate-800/60 shadow-sm dark:shadow-none transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-[var(--primary)]/10 group-hover:text-[var(--primary)] rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 group-hover:border-[var(--primary)]/30 transition-all duration-300">
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-0.5">
                      {link.name}
                    </p>
                    <p className="text-slate-900 dark:text-slate-100 font-bold text-base group-hover:text-[var(--primary)] transition-colors">
                      {link.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-[#0d0d1a] border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-lg dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-100 dark:bg-[#161625] border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all font-medium"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-100 dark:bg-[#161625] border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all font-medium"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-100 dark:bg-[#161625] border border-slate-200 dark:border-slate-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 transition-all resize-none font-medium"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white rounded-full font-bold text-base uppercase tracking-widest hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent! ✓'
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
