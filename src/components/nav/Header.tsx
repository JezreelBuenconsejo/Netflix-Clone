import { NetflixLogo } from "../icons/NetflixLogo";
import { Button } from "@/components/ui/button";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { LanguageIcon } from "../icons/LanguageIcon";

export const Header = () => {
  return (
    <header className="h-[5.5rem] max-w-[120rem] mx-auto bg-transparent flex items-center absolute top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4 flex-wrap">
          {/* Netflix Logo */}
          <div className="sm:ml-3">
            <NetflixLogo />
          </div>
          
          {/* Right side - Language Dropdown and Sign In */}
          <div className="flex items-center gap-3 mr-3.5">
            {/* Language Dropdown */}
            <div className="relative">
              <LanguageIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none z-10" />
              <select 
                defaultValue="english"
                className="appearance-none rounded-[4px] bg-transparent border border-[#808080]/70 pl-10 pr-8 py-1.5 h-auto text-white hover:border-white transition-colors text-base cursor-pointer focus:outline-none focus:border-white"
              >
                <option value="english" className="bg-black text-white">English</option>
                <option value="spanish" className="bg-black text-white">Español</option>
                <option value="french" className="bg-black text-white">Français</option>
              </select>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                <ChevronDown className="w-4 h-4 fill-white stroke-white"/>
              </div>
            </div>
            
            {/* Sign In Button */}
            <Button 
              className="bg-[#e50914] hover:bg-[#f40612] text-white font-medium px-4 py-1 rounded"
              size="sm"
            >
              <Link href="https://www.netflix.com/login" className="text-white text-sm font-semibold">
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};