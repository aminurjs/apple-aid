import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify, ChevronDown } from "lucide-react";
import Image from "next/image";
import { menuItems } from "./Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <AlignJustify className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0" side="left">
        <SheetHeader>
          <SheetTitle className="flex justify-center items-center flex-col p-8 bg-gray-100">
            <Image src="/assets/logo.png" alt="logo" height={80} width={100} />
            <button className="mt-5 px-10 py-2 bg-red-2 text-white rounded-md text-sm active:scale-95 max-sm:hidden">
              Login
            </button>
          </SheetTitle>
          <SheetDescription>
            <ol>
              {menuItems.map((item) => (
                <li key={item.id}>
                  {!item?.submenu ? (
                    <Link
                      className="block w-full text-center py-3 bg-red-50 border-b border-gray-200 text-primary text-sm hover:text-red-2 font-semibold"
                      href={item.path}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="relative">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full text-center py-3 bg-red-50 border-b border-gray-200  flex justify-center items-center relative text-sm hover:text-red-2 font-semibold"
                      >
                        {item.name}{" "}
                        <ChevronDown
                          className={cn(" w-4 transition-all", {
                            "-rotate-180": isOpen,
                          })}
                        />
                      </button>
                      <ul
                        className={cn(
                          " transition-all border-gray-100 border rounded  bg-white",
                          isOpen ? "block h-full" : "hidden h-0"
                        )}
                      >
                        {item.submenu.map((subItem) => (
                          <li key={subItem.id}>
                            <Link
                              className="block w-full text-center py-2 bg-red-50 border-b border-gray-200 text-primary text-sm hover:text-red-2 font-semibold"
                              href={subItem.path}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="flex justify-center items-center mt-10">
          <Link href="/" className="block w-full">
            <Button
              className={cn(
                " w-full",
                buttonVariants({ variant: "secondary" })
              )}
            >
              Follow Social
            </Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
