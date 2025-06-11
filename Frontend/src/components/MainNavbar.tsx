import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { useNavigate } from 'react-router-dom';
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import l from "../components/l.jpg"; // logo

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, SearchIcon } from "@/components/icons";

interface MainNavbarProps {
  user: any; // You can replace 'any' with a proper User type/interface
  setUser: (user: any) => void;
}

export const MainNavbar = ({ user, setUser }: MainNavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('http://localhost:3000/logout', {
        method: 'GET',
        credentials: 'include',
      });
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Secure Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Left - Brand & Nav Links */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <img src={l} alt="VaultX Logo" style={{ width: "24px", height: "24px" }} />
            <p className="font-bold text-inherit">VaultX</p>
          </Link>
        </NavbarBrand>
        <NavbarItem>
    <span className="text-sm font-medium text-default-600">Hi, {user.name}</span>
  </NavbarItem>
        <div className="hidden lg:flex gap-6 justify-start ml-10">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "flex items-center gap-2",
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.icon && <item.icon className="w-5 h-5" />}
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* Right - Search, Theme, Account */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <ThemeSwitch />

        <NavbarItem className="hidden md:flex">
          <Button
            className="text-sm font-normal text-default-600 bg-default-100"
            onClick={handleLogout}
            startContent={
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            }
            variant="flat"
          >
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Icons */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
  {searchInput}
  <div className="mx-4 mt-2 flex flex-col gap-2">
    {siteConfig.navItems.map((item, index) => (
      <NavbarMenuItem key={`${item.href}-${index}`}>
        <Link
          color={
            index === 2
              ? "primary"
              : index === siteConfig.navItems.length - 1
              ? "danger"
              : "foreground"
          }
          href={item.href}
          size="lg"
        >
          {item.label}
        </Link>
      </NavbarMenuItem>
    ))}

    {/* 👇 Mobile Logout Option */}
    <NavbarMenuItem>
      <Button
        onClick={handleLogout}
        variant="flat"
        className="w-full justify-start text-danger"
        startContent={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        }
      >
        Logout
      </Button>
    </NavbarMenuItem>
  </div>
</NavbarMenu>

    </HeroUINavbar>
  );
};
