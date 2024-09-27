"use client";
import React, { Suspense, useEffect } from "react";
import Loader from "./Components/Loader";
import { usePathname } from "next/navigation";
import FooterNew from "./Components/FooterNew";
import Header from "./Components/Header";

const WebApp = async ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div style={{ width: "100%", overflowX: "hidden" }}>
      {pathname === "/login" ? "" : <Header />}
      <Suspense fallback={<Loader />}>{children}</Suspense>
      {pathname === "/login" ? "" : <FooterNew />}
    </div>
  );
};

export default WebApp;
