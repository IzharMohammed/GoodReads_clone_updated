//React imports
import React from "react";
//Daisy ui imports
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
<div>
<div className="relative mt-auto" >
    <div className="flex  absolute  bottom--10 justify-between p-8 h-[10vh] w-full   ">
      <section className="text-xl text-white"> Copyright 2024 | All rights reserved  </section>
      <section className=" flex gap-6 text-white  absolute right-4 ">
        
        {<BsTwitterX />}
        {<FaLinkedin />}
      </section>
    </div>
    </div>
</div>
  );
}

export default Footer;
