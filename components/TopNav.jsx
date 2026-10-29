


"use client";



import { usePathname } from "next/navigation";
import Icon from './Icon';

const TopNav = () => {
    const pathname = usePathname();

    const pageTitle = pathname === "/"
        ? "Home"
        : pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split("/")[1].slice(1);

    return (
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0">
            <div>
                <h1 className="text-xl font-semibold text-gray-800">
                    {pageTitle}
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <div className=" rounded-full bg-sky-100 flex items-center justify-center text-sky-900 font-bold">
                    <img src="/Images/ayinde.jpg" alt="ayinde" className="rounded-full w-12 h-12 cursor-pointer"/>
                </div>
                <p className="font-medium text-2 cursor-pointer">Abiodun Olaotan<Icon name="AngleDown"/></p>
            </div>
        </header>
    );
};

export default TopNav;