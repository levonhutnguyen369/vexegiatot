import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";

interface Navbar5Props {
  className?: string;
}

const Header = ({ className }: Navbar5Props) => {
  return (
    <section className={cn("py-1", className)}>
      <div className="container px-0">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            className="relative w-1/6 h-16 rounded-lg overflow-hidden block"
          >
            <img
              src="/logo.svg"
              className="w-full h-full object-contain"
              alt="Logo"
            />
          </Link>



          <div className="flex items-center justify-between">
            <NavigationMenu className="hidden lg:block">
              <NavigationMenuList>
                <NavigationMenuLink
                  href="#"
                  className={navigationMenuTriggerStyle()}
                >
                  Đơn hàng của tôi
                </NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    Mở bán vé trên Vexetot
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#"
                    className={navigationMenuTriggerStyle()}
                  >
                    Trở thành đối tác
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="hidden items-center gap-4 lg:flex">
              <Button variant="outline" asChild className="text-base">
                <Link to="/signin">Đăng nhập</Link>
              </Button>

              <Button asChild className="bg-white text-black text-base" variant="outline">
                <Link to="/signup">Hỗ trợ</Link>
              </Button>
            </div>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Shadcnblocks.com
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion type="single" collapsible className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">

                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <a href="#" className="font-medium">
                    Templates
                  </a>
                  <a href="#" className="font-medium">
                    Blog
                  </a>
                  <a href="#" className="font-medium">
                    Pricing
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">
                    <Link to="/signin" >Sign in</Link>
                  </Button>
                  <Button>Start for free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Header };
