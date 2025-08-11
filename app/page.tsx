import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanions,
  getRecentSession,
} from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import SessionsList from "@/components/SessionsList";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const data = await getRecentSession(10);

  return (
    <main>
      <h1 className="text-2xl">Popular Companions</h1>
      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>

      <section className="home-section">
        <SessionsList
          title="Recently completed sessions"
          sessionData={data}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
