
import Navbar from "./Navbar";
import SecondaryNavbar from "./SecondaryNavbar";

export default function Header() {
  const custom_h = {
    border: "none",
    height: "1px",
    backgroundColor: "#0f264a"
  };
  return (
    <>
      <header
        className={`fixed top-0 z-50 flex w-full flex-col bg-[#0a192f] text-white drop-shadow-2xl md:pt-0`}
      >
        <Navbar/>
        <hr style={custom_h} className="hidden md:block" />
        <SecondaryNavbar />
      </header>
    </>
  
  )
}
