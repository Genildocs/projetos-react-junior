import { BsJustify } from "react-icons/bs";
export default function Header() {
  return (
    <header className="flex items-center justify-between mx-6 md:mx-12 lg:mx-32 my-5">
      <h1 className="text-2xl font-semibold font-montserrat">Logo</h1>
      <BsJustify className="h-6 w-6" />
    </header>
  );
}
