import Head from "next/head";
import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className=" text-white ">
        <div className="container-md mx-auto max-w-2xl bg-dark-800">
          <Navbar />
          <div className="mt-4 mx-4 px-4 py-4 flex justify-center items-center rounded-xl bg-gray-600 opacity-75">
            <p className="text-sm text-white tracking-wide ">
              3rd-year Informatics Student at ITB, currently seeking an
              internship opportunity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
