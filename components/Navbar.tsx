"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Link as ScrollLink } from "react-scroll/modules";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  const menuItems = [
    { to: "aboutus", label: "О нас" },
    { to: "pricing", label: "Стоимость" },
    { to: "form", label: "Оставить заявку" },
    { to: "testimonials", label: "Отзывы" },

    { to: "contacts", label: "Контакты" },
  ];

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {menuItems.map((item) => (
          <ScrollLink
            key={item.to}
            to={item.to}
            smooth={true}
            duration={500}
            offset={-100}
            className={cn(
              "flex items-center justify-center hover:cursor-pointer text-sm md:text-md font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white py-2 rounded-full hover:border-blue-500 hover:text-blue-500 transition duration-300 ease-in-out",
              { "text-blue-500 border-blue-500": active === item.to }
            )}
            onSetActive={() => setActive(item.to)}
          >
            <MenuItem
              item={item.label}
              active={active}
              setActive={setActive}
              to={item.to}
            >
              {item.label}
            </MenuItem>
          </ScrollLink>
        ))}
      </Menu>
    </div>
  );
}
