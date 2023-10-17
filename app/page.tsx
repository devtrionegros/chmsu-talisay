import Image from "next/image";
export default async function Home() {
  return (
    <>
      <div className="bg-white">
        <div className="relative h-screen bg-light-orange bg-[url('/bg-icons.png')] bg-contain">
          <nav className="bg-transparent fixed top-0 w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <h1>Logo</h1>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex space-x-8 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="font-sm">Home</div>
                  <div className="font-sm">Home</div>
                  <div className="font-sm">Home</div>
                  <div className="font-sm">Home</div>
                  <div className="font-sm">Home</div>
                  <div className="font-sm">Home</div>
                  <button className="font-mono h-[50px] w-[100px] rounded-full bg-[#4D2C5E] text-white font-bold transition hover:scale-105 hover:bg-gray-500 hover:text-black">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </nav>
          <div className="grid grid-cols-2 gap-4 items-center h-screen ">
            <div className=" flex flex-col justify-center mx-auto ">
              <div className=" flex advent text-[60px]">
                The <span className="text-orange capriola">Smart</span>
              </div>
              <div className=" advent text-[60px]">
                Choice For <span className="text-orange capriola">Future</span>
              </div>
            </div>
            <div className=" flex items-center  mx-auto h-[500px] w-[500px] ">
              <Image
                src="/study.png"
                height={500}
                width={500}
                alt="study"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-20">
          <div className="h-[277px] w-[80%] bg-black">hello</div>
        </div>
        <div className="relative h-screen">
          <h1>website baby</h1>
        </div>
      </div>
    </>
  );
}
