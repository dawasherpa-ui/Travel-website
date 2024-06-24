"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import "react-modern-drawer/dist/index.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { MenuIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Navbar() {
  const pathname = usePathname();
  console.log(pathname);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const categories = [
    { id: 1, name: "8K Expedition" },
    { id: 1, name: "7K Expedition" },
    { id: 1, name: "6K Expedition" },
    { id: 1, name: "5K Expedition" },
  ];
  const frames = [
    { id: 1, name: "Western Trekking" },
    { id: 1, name: "Annapurna Trekking" },
    { id: 1, name: "Mustang Trekking" },
    { id: 1, name: "Great Himalayan Trail" },
    { id: 1, name: "Langtang & Helumbu" },
  ];
  const brands = [
    { id: 1, name: "Camp Tour" },
    { id: 1, name: "Adventure Hikings" },
    { id: 1, name: "Heli Tour" },
    { id: 1, name: "Round Tour" },
    { id: 1, name: "Rafting & Paragliding" },
  ];
  // const pathname=usePathname()
  // console.log(pathname)
  return (
    <div
      className={`${
        pathname !== "/contact" ? "bg-transparent" : "bg-black"
      } text-white`}
    >
      <div className=" flex items-center justify-start py-4  px-4">
        <Link href={"/"} className="w-52 h-42 flex items-center mr-3">
          <Image
            src={"/Logo/NavLogo.svg"}
            height={1000}
            width={1200}
            alt="Logo"
            className=""
          />
        </Link>

        <div className=" hidden md:block">
          <div className=" flex  items-center gap-1 font-medium">
            {navlinks.map((item, index: number) => (
              <Link
                key={index}
                href={item.href}
                className={`${
                  pathname === item.href ? " underline " : ""
                } py-2 rounded-full bg-white px-3 bg-opacity-0 hover:bg-opacity-30 trasation-opacity ease-in-out duration-300`}
              >
                {item.name}
              </Link>
            ))}

            <div className=" py-2 rounded-full bg-white px-3 bg-opacity-0 hover:bg-opacity-30 trasation-opacity ease-in-out duration-300  ">
              <div className="group relative cursor-pointer ">
                <div className="flex items-center justify-between ">
                  <a className="" href="/expedition">
                    Expeditions
                  </a>
                  <span>
                    <ChevronDown size={18} />
                  </span>
                </div>

                <div className="absolute z-50  flex w-52 flex-col bg-background rounded-xl space-y-4 py-4 text-primary shadow-xl opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto ">
                  {categories?.map((category: any) => (
                    <a
                      href="/expedition"
                      key={category.id}
                      className=" hover:text-slate-800 hover:translate-x-2 duration-300 mx-2"
                    >
                      {category.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className=" py-2 rounded-full bg-white px-3 bg-opacity-0 hover:bg-opacity-30 trasation-opacity ease-in-out duration-300  ">
              <div className="group relative cursor-pointer ">
                <div className="flex items-center justify-between ">
                  <a className="" href="/trekking">
                    Trekking
                  </a>
                  <span>
                    <ChevronDown size={18} />
                  </span>
                </div>
                <div className="absolute z-50  flex w-52 flex-col bg-background rounded-xl space-y-4 py-4 text-primary shadow-xl opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                  {frames?.map((frame: any) => (
                    <a
                      href="/trekking"
                      key={frame.id}
                      className=" hover:text-slate-800 hover:translate-x-2 duration-300 mx-2"
                    >
                      {frame.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className=" py-2 rounded-full bg-white px-3 bg-opacity-0 hover:bg-opacity-30 trasation-opacity ease-in-out duration-300 ">
              <div className="group relative cursor-pointer">
                <div className="flex items-center justify-between">
                  <a href="/others">Others</a>
                  <span>
                    <ChevronDown size={18} />
                  </span>
                </div>

                <div className="absolute z-50  flex w-52 flex-col bg-background rounded-xl space-y-4 py-4 text-primary shadow-xl opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                  {brands?.map((brand: any) => (
                    <a
                    href="/others"
                      key={brand.id}
                      className="hover:text-slate-800 hover:translate-x-2 duration-300 mx-2"
                    >
                      {brand.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-end h-full w-full">
          <Link
            href={"/"}
            className={`${
              pathname === "/" ? " underline " : ""
            } py-2 rounded-full flex bg-white px-3 bg-opacity-0 hover:bg-opacity-30 trasation-opacity ease-in-out duration-300`}
          >
            WhatsApp<Icon icon="ic:baseline-whatsapp" className="text-2xl"/>
          </Link>
        </div>
        <div className=" block md:hidden">
          <div className=" flex items-center gap-2 ">
            <MenuIcon
              onClick={toggleDrawer}
              size={26}
              className=" cursor-pointer block md:hidden "
            />

            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              className=" "
            >
              <div className="  bg-black space-y-4 p-4 border-none flex flex-col h-screen">
                {navlinks.map((item: any, idx) => {
                  return (
                    <Link
                      href={item.href}
                      key={idx}
                      className={`${
                        pathname === item.href
                          ? "text-primary-500 underline_hover_effect"
                          : ""
                      } text-white cursor-pointer  underline_hover_effect`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <NavDropLists
                  categories={categories}
                  brands={brands}
                  frames={frames}
                />
                {/* <div className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                  <Link
                    href="mailto:byteiosolution@gmail.com"
                    className="mail_button flex items-center py-2 px-4 text-center text-primary hover:text-slate-800-500 bg-white hover:bg-background  rounded-md shadow transition-all ease-in-out  "
                  >
                    <div className="svg-wrapper">
                      <IconBxMailSend />
                    </div>
                    <span className=" text-sm"> Get in touch</span>
                  </Link>
                </div> */}
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

const navlinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "About",
    href: "/about",
  },

  // {
  //   name: "Our Stores",
  //   href: "/our-stores",
  // },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

function IconBxMailSend() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className=" h-4 w-4">
      <path d="M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 001.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z" />
      <path d="M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z" />
    </svg>
  );
}

function NavDropLists({ categories, brands, frames }: any) {
  return (
    <div className=" flex flex-col md:flex-row md:items-center gap-6 ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem className=" border-b-0" value="item-1">
          <AccordionTrigger>Expedition</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-4">
            {categories?.map((category: any) => (
              <a
                href="/expedition"
                key={category.id}
                className="hover:translate-x-2 duration-300 mx-2 "
              >
                {category.name}
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b-0" value="item-2">
          <AccordionTrigger>Trekking</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-4">
            {frames?.map((frame: any) => (
              <a
                href="/trekking"
                key={frame.id}
                className="  hover:translate-x-2 duration-300 mx-2"
              >
                {frame.name}
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b-0" value="item-3">
          <AccordionTrigger>Others</AccordionTrigger>
          <AccordionContent className=" flex flex-col gap-4">
            {brands?.map((brand: any) => (
              <a
              href="/others"
                key={brand.id}
                className="  hover:translate-x-2 duration-300 mx-2 cursor-pointer"
              >
                {brand.name}
              </a>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
