import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="456"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#FFDA6E"
        />
        <CompanionCard
          id="789"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the brain"
          subject="science"
          duration={45}
          color="#BDE7FF"
        />
        
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
