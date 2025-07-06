"use client";
import React from 'react';
import { motion } from "framer-motion";

const ContactUsButton = () => {
  return (
    <motion.div
      className="flex justify-center w-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
    >
      <button className="bg-[#FFFFFF0D] text-[#FFFFFF] px-[16px] py-[16px] rounded-full mb-[16px] lg:mb-[0px]">
        Contact us
      </button>
    </motion.div>
  );
};

export default ContactUsButton;