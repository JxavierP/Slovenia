import { A } from "@solidjs/router";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="h-full text-gray-700 overflow-auto">
      <div class="w-full h-10/12">
        <div class="bg-[url('/images/Ljubljana.jpg')] relative h-full bg-cover bg-bottom">
          <div class="absolute inset-0 bg-black/40"></div>
          <div class="relative z-10 text-white mx-auto max-w-[90%] w-full h-full justify-between flex items-center">
            <div class="flex flex-col gap-5 justify-between h-full md:h-auto">
              <p class="uppercase font-bebas text-2xl font-semibold">Welcome To
                <span class="text-green-200 "> Slovenia Travels</span>
              </p>
              <h1 class="text-7xl font-bold font-bebas">Excursions to <span class="text-green-200">Slovenia</span></h1>
              <p>Slovenia's greatest treasures are waiting for you. How will you feel Slovenia?</p>
            </div>
            <p class="hidden md:flex">Additional text that will be readable over the image.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
