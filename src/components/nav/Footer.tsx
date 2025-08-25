import { Globe, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { LanguageIcon } from "../icons/LanguageIcon";

export const Footer = () => {
  const footerLinks = {
    column1: [
      "FAQ",
      "Investor Relations",
      "Ways to Watch",
      "Corporate Information",
      "Only on Netflix",
    ],
    column2: ["Help Center", "Jobs", "Terms of Use", "Contact Us"],
    column3: ["Account", "Redeem Gift Cards", "Privacy", "Speed Test"],
    column4: [
      "Media Center",
      "Buy Gift Cards",
      "Cookie Preferences",
      "Legal Notices",
    ],
  };

  return (
    <footer className="bg-black py-16 px-4">
      <div className="max-w-[1129px] mx-auto">
        {/* Contact Section */}
        <div className="mb-8">
          <p className="text-gray-400 text-base underline cursor-pointer">
            Questions? Contact us.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-4 mb-8">
          <div className="space-y-3">
            {footerLinks.column1.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            {footerLinks.column2.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            {footerLinks.column3.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="space-y-3">
            {footerLinks.column4.map((link, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-400 text-sm underline hover:text-gray-300 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <Select defaultValue="english">
            <SelectTrigger className="w-auto rounded-[4px] bg-transparent border border-[#808080]/70 px-3 pt-1 pb-0.5 h-auto text-white hover:border-white transition-colors">
              <div className="flex items-center gap-1.5 py-0 text-base">
                <LanguageIcon />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Español</SelectItem>
              <SelectItem value="french">Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Country and reCAPTCHA */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm">Netflix Philippines</p>

          <p className="text-gray-400 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Learn more.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
