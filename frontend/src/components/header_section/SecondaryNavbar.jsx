
import { Link, useLocation } from 'react-router-dom';



// const commonMenus = ["shop", "offers", "health & advice", "contact"];
const commonMenus = [
  // { name: "shop", link: "/shop" },
  { name: "Home", link: "/" },
  { name: "About Us", link: "/health&advice" },
  { name: "Project", link: "/contact" },
  { name: "contact", link: "/contact" },
];
// const medicine = [
//   // {
//   //   name: "all medicines",
//   //   icon: "icons/home_page/hero_section/Medicine/all_medicines.svg",
//   //   link: "",
//   // },
//   {
//     name: "OTC Medicines",
   
//     link: "/medicine/otc medicines",
//   },
//   {
//     name: "Prescription Medicines",
   
//     link: "/medicine/prescription medicines",
//   },
//   {
//     name: "Common Conditions",
   
//     link: "/medicine/common condition",
//   },
//   // { name: "Common Conditions",, link: "/" },
//   {
//     name: "Herbals",
   
//     link: "/medicine/herbal",
//   },
//   {
//     name: "Homeopathy",
   
//     link: "#",
//   },
// ];

// const non_medicineMenus = [
//   {
//     name: "personal care",
   
//     link: "/non-medicine/personal care",
//   },
//   {
//     name: "Women's care",
 
//     link: "/non-medicine/women’s care",
//   },
//   {
//     name: "Men's care",
   
//     link: "/non-medicine/men's care",
//   },
//   {
//     name: "Dental care",
  
//     link: "/non-medicine/dental care",
//   },
//   {
//     name: "Tissue and Wipes ",
 
//     link: "/non-medicine/tissue and wipes",
//   },
//   {
//     name: "Injury ManageMent",
    
//     link: "/non-medicine/injury management",
//   },
//   {
//     name: "Medical Devices & Accessories",
    
//     link: "/non-medicine/medical devices & accessories",
//   },
//   {
//     name: "family planing",
    
//     link: "/non-medicine/family planning",
//   },
//   {
//     name: "Baby Care",
    
//     link: "/non-medicine/baby care",
//   },
//   {
//     name: "Adult Care",
    
//     link: "/non-medicine/adult care",
//   },

//   {
//     name: "Nutrition & Supplement",
    
//     link: "/non-medicine/nutrition & supplement",
//   },
// ];



const SecondaryNavbar = ( ) => {
//   const pathname = usePathname();
const location = useLocation();

  return (
    <>
      <nav className="container relative mx-auto font-medium max-h[50px]">
        {/* desktop or other version  start  */}
        <ul className="hidden justify-between items-center mx-auto uppercase md:flex">
          {/* medicine  */}
          {/* <li className="group/medicine relative flex-grow hover:bg-[#5A51DD]">
            <Link
              href="#"
              className="block text-center border-transparent py-[13px]"
            >
              medicine
            </Link>
            <div className="absolute pt-1">
              <ul
                className={`scroll_medicine left-0 top-full z-20 hidden w-[240px] space-y-2 overflow-y-auto rounded bg-[#463FA7]  p-5 text-[13px] capitalize leading-[26px] group-hover/medicine:block`}
                style={{
                  maxHeight: "calc(90vh - 150px)",
                }}
              >
                {medicine?.map((dropdownItem, index) => (
                  <li
                    key={index}
                    // style={{ borderBottomWidth: "205px;" }}
                    className="mb-4 border-b-[1px] border-[#5A51DD] transition-all hover:border-[#FFB800]  active:border-transparent"
                  >
                    <Link href={dropdownItem.link}>
                      <div className="flex items-center group mb-[6px]">
                        <span className="pr-4">
                          {dropdownItem.icon && (
                            <img
                              alt="Picture of the author"
                              width={20}
                              height={20}
                              src={dropdownItem.icon}
                            />
                          )}
                        </span>
                        <span className="transition-all group-active:scale-90">
                          {dropdownItem.name}{" "}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li> */}
          {/* non medicine  */}
          {/* <li className="group/non_medicine relative flex-grow text-center hover:bg-[#5A51DD]">
            <Link
              href="#"
              className="block text-center border-transparent py-[13px]"
            >
              none medicine
            </Link>
            <div className="absolute pt-1">
              <ul
                className={`non-medicine left-0 top-full z-20 hidden w-[300px] space-y-2 overflow-y-auto rounded bg-[#463FA7]  p-5 text-[13px] capitalize leading-[26px] group-hover/non_medicine:block`}
                style={{
                  maxHeight: "calc(90vh - 150px)",
                }}
              >
                {non_medicineMenus?.map((dropdownItem, index) => (
                  <li
                    key={index}
                    // style={{ borderBottomWidth: "205px;" }}
                    className="mb-4 border-b-[1px] border-[#5A51DD] transition-all hover:border-[#FFB800] active:border-transparent"
                  >
                    <Link href={dropdownItem.link} className="group">
                      <div className="flex items-center mb-[6px]">
                        <span className="pr-4">
                          {dropdownItem.icon && (
                            <img
                              alt="Picture of the author"
                              width={20}
                              height={20}
                              src={dropdownItem.icon}
                            />
                          )}
                        </span>
                        <span className="transition-all group-active:scale-90">
                          {" "}
                          {dropdownItem.name}{" "}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li> */}
          {/* commonMenu items start */}
          {commonMenus.map((commonMen, index) => (
            <li key={index} className="flex-grow cursor-pointer">
              <Link
                href={commonMen.link}
                className="group block py-[13px] text-center transition-all hover:z-0 hover:bg-[#0f264a]  active:bg-transparent"
              >
                <div className="transition-all group-active:scale-90">
                  {commonMen.name}
                </div>
              </Link>
            </li>
          ))}
          {/* commonMenu items end */}
        </ul>
        {/* desktop or other version  end  */}

        {/* ---------------------------phone version ------------------------------- */}
        <div
          className={`absolute left-0 top-0 w-full ${
            open ? "left-0 bg-[#5A51DD66]" : "left-[-100%] bg-transparent"
          } transition-[left] duration-500 md:hidden `}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
            //   handleChange();
            }
          }}
        >
          <ul
            className={`bottom-0 z-20 h-screen w-[calc(100%-15%)] overflow-y-auto  bg-[#5A51DD] py-6 pb-[130px] pl-4 pr-6 uppercase`}
          >
            {/* <NavList
              medicineMenus={medicine}
              non_medicineMenus={non_medicineMenus}
            /> */}

            {commonMenus.map((item, index) => (
              <Link href={item.link} key={index}>
                <li
                  className="mb-4 border-b-[1px] border-[#463FA7] hover:border-[#FFB800]"
                  key={index}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      {location.pathname === "/" && (
        <span className="container hidden md:inline">
          <hr
            className="mx-auto text-center mb-[-7px]"
            style={{ border: "2px solid #d10d50" }}
          />
        </span>
      )}
    </>
  );
};

export default SecondaryNavbar;
