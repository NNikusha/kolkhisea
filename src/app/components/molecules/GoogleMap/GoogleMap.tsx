"use client";
import React from "react";
import { motion } from "framer-motion";

const GoogleMap = () => {
  return (
    <div className="w-full mt-[40px] mb-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
        className="border border-[24px] rounded-[32px] overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1Ac6YQLrQGZzszYdEKVSgHyUiMWJVJB4&q=41.807766,41.772782&zoom=16&maptype=roadmap"
          width="100%"
          height="453"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[288px] md:h-[453px]"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default GoogleMap;