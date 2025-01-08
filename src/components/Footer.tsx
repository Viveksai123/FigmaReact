import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-8 font-sans">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        {/* Left Section */}
        <div className="max-w-md">
          <img
            src="https://s3-alpha-sig.figma.com/img/d7fb/35d1/0a5d5473989ba4ec575b8af8fe1f746c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-vbAPQ05LmD8Nda2f2mGNfZTgj7C6YBEioDb~0ls1JxMZ5voB4rtvKkqDu8mDFa9VKS4X~28N4hO14wVLH-Aaips877QZP2jTVclw~oKbP2-R0Qz-NXaQES6jgHdYYG6XJTT31iOazUoRUpPb3Y9U-8~DwuxkzPZnq5SG3zOgqASsaIeiHiO7uId7sMl7jnpznKoyNk~F-lEI73oUHez4df0sd86oEDWzKWRAGY~oxiwQv2J5iJ3PZpHP3RN-~i7P29JdHP6US2hi4N-MOlhHADGHdxVYkiuJ~y4k1eyZUHYlLo-~TAMM1nHamq4uA7BPtgQPLwN19MZEeOlGHqOw__"
            alt="Company Logo"
            className="w-24 h-24"
          />
          <p className="text-sm leading-relaxed mt-4">
            Your dream space deserves the best execution, and that's where United BuildPro Pvt Ltd excels. Our construction services encompass everything from foundational work to structural builds, tailored to residential, commercial, and industrial needs. We pride ourselves on using high-quality materials and advanced techniques to ensure durability and efficiency in every project we undertake.
          </p>
          <div className="flex mt-4 space-x-4 animate__animated animate__slideInLeft">
            <i className="fab fa-instagram text-xl cursor-pointer"></i>
            <i className="fab fa-linkedin text-xl cursor-pointer"></i>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text font-semibold font-playfair animate__animated animate__slideInRight">Quick Links</h3>
          <ul className="space-y-0.5 mt-2">
            <li>Home</li>
            <li>Living</li>
            <li>Storage</li>
            <li>Dining</li>
            <li>Bedroom</li>
            <li>Mattress</li>
            <li>Study</li>
            <li>Office</li>
            <li>Outdoor</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text font-semibold font-playfair">Categories</h3>
          <ul className="space-y-0.5 mt-2 animate__animated animate__slideInLeft">
            <li>Residential</li>
            <li>Institutional</li>
            <li>Commercial</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/20 my-8"></div>

      {/* Bottom Section */}
      <div className="text-center">
        <p className="text-sm">2024 © All rights reserved – Cozy Comfort</p>
        <div className="flex justify-center mt-1 mb-[-30px] space-x-4">
          <img
            src="https://s3-alpha-sig.figma.com/img/3ab9/eeb0/e196ede389387ab9e06d10d71ce9b10e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNTwUY4uSrRu2N7zb5JVUSxrebvHcRD16NWb6iCg~nP9UvpRlYMSof~ZUorH0ehgJFPOFR9wmDxuzdDoq-ez5fgNVVg4XdLzitmu5T~HKn1SS20Ox~ST5gis5Kp60DTVNn8OO8VgeNhOR3X0xIrGn8LXHEwdp~OFMluGXPRJMWsEeoU5PBpG93z45rOKcIaB4Lhk5CJA7Dw6BpLnPJL~VXfAzanIznxxRYq3EP1wi3JXo1i4oeKlBufOjH5IgKmaTu2PpmamU-KzrR91OaddMfoylzO8dibDAWYwRGh7p38g~QQx5H4w~EYAF5lKEmoP76bsyG7w0xMBCmtBRnmHcQ__"
            alt="Payment Options"
            className="w-[30vw]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
