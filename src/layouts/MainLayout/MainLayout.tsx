import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

interface MainContentProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainContentProps) => {
  return (
    <>
      <Header className="bg-[#186fff]"/>
      {children}
      <Footer className=""/>
    </>
  );
};

export default MainLayout;
