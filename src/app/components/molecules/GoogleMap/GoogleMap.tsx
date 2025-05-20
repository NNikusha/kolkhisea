"use client";
import React from "react";

const GoogleMap = () => {
  return (
    <div className="w-full mt-[40px] mb-12">
      <div className="border border-[24px] rounded-[32px] overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD1Ac6YQLrQGZzszYdEKVSgHyUiMWJVJB4&q=Lubliana+Street,Tbilisi,Georgia"
          width="100%"
          height="453"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[288px] md:h-[453px]"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;

