import LoginComponent from "@/components/login";

export default async function Home() {
  return (
    <main className="">
      <div className="bg-gray-100 min-h-screen">
        <LoginComponent />
      </div>
    </main>
  );
}
