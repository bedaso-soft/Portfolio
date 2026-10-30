"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import ScrollTitle from "./ScrollTitle";
import { Mail, GitBranch, MapPin, Send, CheckCircle2, AlertCircle, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const { t, isEthiopic } = useLanguage();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage(t.contact.form.errorMessage);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message || "Something went wrong while sending your message.");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-[#08090f] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Drop-and-Settle Title */}
        <ScrollTitle
          label={t.contact.label}
          titlePart1={t.contact.titlePart1}
          titleHighlight={t.contact.titleHighlight}
          titlePart2={t.contact.titlePart2}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Communication Channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
                {t.contact.description}
              </p>

              {/* Contact Channels Cards */}
              <div className="space-y-4 mb-10">
                {/* Email Channel */}
                <a
                  href={`mailto:${t.contact.email}`}
                  className="group p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] hover:border-blue-500/50 flex items-center justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block">
                        {t.contact.emailLabel}
                      </span>
                      <span className="text-sm sm:text-base font-mono text-white group-hover:text-blue-300 transition-colors">
                        {t.contact.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* GitHub Channel */}
                <a
                  href="https://github.com/bedaso-soft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] hover:border-blue-500/50 flex items-center justify-between transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-[#141624] text-zinc-400 border border-white/[0.08] group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <GitBranch className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block">
                        {t.contact.githubLabel}
                      </span>
                      <span className="text-sm sm:text-base font-mono text-white group-hover:text-blue-300 transition-colors">
                        {t.contact.github}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location Channel */}
                <div className="p-5 rounded-xl bg-[#0d0f17] border border-white/[0.08] flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-[#141624] text-zinc-400 border border-white/[0.08]">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block">
                      {t.contact.locationLabel}
                    </span>
                    <span className="text-sm sm:text-base font-sans text-white">
                      {t.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-End Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0c0d14] border border-white/[0.08] rounded-2xl p-7 sm:p-9 shadow-2xl relative"
          >
            {status === "success" ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4
                  className={`text-2xl font-normal text-white mb-2 ${
                    isEthiopic ? "font-ethiopic-text" : "font-editorial"
                  }`}
                >
                  {t.contact.form.successTitle}
                </h4>
                <p className="text-sm text-slate-300 max-w-md font-light leading-relaxed mb-6">
                  {t.contact.form.successMessage}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full bg-[#151724] border border-white/[0.1] text-xs font-mono text-zinc-300 hover:text-white hover:border-blue-500/40 transition-all"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/40 flex items-center gap-3 text-red-200 text-xs font-sans">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-[#12141f] border border-white/[0.08] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white placeholder-zinc-500 font-sans transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-lg bg-[#12141f] border border-white/[0.08] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white placeholder-zinc-500 font-sans transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t.contact.form.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#12141f] border border-white/[0.08] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white placeholder-zinc-500 font-sans transition-all"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-lg bg-[#12141f] border border-white/[0.08] focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 text-sm text-white placeholder-zinc-500 font-sans transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white text-xs font-mono uppercase tracking-widest font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>
                    {status === "sending"
                      ? t.contact.form.sendingButton
                      : t.contact.form.submitButton}
                  </span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
