import Searchbar from "@/components/Searchbar";

export default function Header() {
  return (
    <div className="flex fixed items-center gap-2 p-4 border-b border-main w-full">
      <img
        src="/header-logo.png"
        alt="app logo post it"
        className="size-8 md:size-10"
      />
      <h1 className="font-outfit tracking-wider md:tracking-wide text-2xl md:text-3xl font-bold hidden sm:block">
        I<span className="text-main">Read</span>It{" "}
        <span className="text-main">lite</span>
      </h1>
      <Searchbar />
    </div>
  );
}
