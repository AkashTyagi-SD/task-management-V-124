import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </>
  );
}
