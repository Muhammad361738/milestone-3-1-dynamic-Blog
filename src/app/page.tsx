import React from "react";
import Navbar from "@/components/Navbar";
import AuthorCard from "@/components/AuthorCard";
import Mega from "@/components/Mega";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <>
   <Navbar/>
   <Feature/>
   <Mega/>
   <AuthorCard/>
   <Footer/>
   </>
  );
}
