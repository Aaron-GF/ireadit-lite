import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <form className="flex items-center bg-2/30 rounded-3xl p-2 md:w-full max-w-xs mx-auto cursor-pointer">
      <Search className="size-4.5" />
      <input type="search" placeholder="Search" className="border-none outline-none w-auto md:w-full hidden md:inline-block ml-2" />
      <button type="submit"></button>
    </form>
  );
}
