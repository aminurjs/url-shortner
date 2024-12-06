import Image from "next/image";
import React from "react";

const SignIn = () => {
  return (
    <div className="grid grid-cols-5 min-h-screen">
      <div className="col-span-5 md:col-span-3">111</div>
      <div className="col-span-2 bg-blue-50 hidden md:flex items-center justify-center gap-3 ">
        <div className="w-4/5">
          <Image
            src="/assets/auth/connections_platform_product.png"
            alt="product"
            height={800}
            width={800}
          />
          <p className="font-semibold text-center">
            Power your links, QR Codes, and landing pages with {"Shorten's"} Connections Platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;