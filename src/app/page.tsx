import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { navItems } from '@/data/data'
import { FloatingNav } from "@/components/ui/floating-navbar";
import RecentProject from "@/components/RecentProjects";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {


  return (
    //relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5
    <main className="relative bg-black-100 flex flex-col overflow-hidden justify-center items-center mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProject />
        <Client />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}












