import { useLocation } from "@solidjs/router";

export default function Nav() {
  return (
    <nav class="bg-green-200 text-emerald-900">
      <div class="mx-auto max-w-[94%] w-full justify-between flex h-20 items-center">
        <span>menu</span>
        <span class="font-cookie text-4xl">Slovenia Travels</span>
        <ul class="flex gap-5">
          <li class="font-bebas uppercase text-3xl font-semibold">
            destinations
          </li>
          <li class="font-bebas uppercase text-3xl font-semibold">
            departures
          </li>
          <li class="font-bebas uppercase text-3xl font-semibold">
            our process
          </li>
        </ul>
      </div>
    </nav>
  );
}

// export default function Nav() {
//   const location = useLocation();
//   const active = (path: string) =>
//     path == location.pathname ? "border-sky-600" : "border-transparent hover:border-sky-600";
//   return (
//     <nav class="bg-sky-800">
//       <ul class="container flex items-center p-3 text-gray-200">
//         <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
//           <a href="/">Home</a>
//         </li>
//         <li class={`border-b-2 ${active("/about")} mx-1.5 sm:mx-6`}>
//           <a href="/about">About</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }
