import { ChevronRight, ChevronsLeftRight } from "lucide-react";
import { Button } from "../ui/button";
import { FloatingInput } from "../ui/floating-input";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="relative my-14 pt-10 sm:pt-0 sm:mb-0">
    {/* Hero Background with Gradient Overlay */}
    <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `
        linear-gradient(to bottom, 
          rgba(0, 0, 0, 0.7) 0%, 
          rgba(0, 0, 0, 0.3) 10%, 
          transparent 20%
        ),
        linear-gradient(7deg, 
          rgba(0, 0, 0, 0.8500) 10.00%, 
          rgba(0, 0, 0, 0.8465) 17.25%, 
          rgba(0, 0, 0, 0.8361) 24.50%, 
          rgba(0, 0, 0, 0.8187) 31.75%, 
          rgba(0, 0, 0, 0.7944) 39.00%, 
          rgba(0, 0, 0, 0.7632) 46.25%, 
          rgba(0, 0, 0, 0.7250) 53.50%, 
          rgba(0, 0, 0, 0.6868) 60.75%, 
          rgba(0, 0, 0, 0.6556) 68.00%, 
          rgba(0, 0, 0, 0.6312) 75.25%, 
          rgba(0, 0, 0, 0.6139) 82.50%, 
          rgba(0, 0, 0, 0.6035) 89.75%, 
          rgba(0, 0, 0, 0.6000) 97.00%
        ),
        url('/hero-background.jpg')
      `
    }}
    />
    
    {/* Hero Content */}
    <div className="relative z-10 flex items-center justify-center min-h-screen px-4 md:px-8 lg:px-16">
    <div className="max-w-4xl mx-auto text-center">
      {/* Main Heading */}
      <h1 className="text-[56px] font-black text-center max-w-[588px] leading-[70px] ">
      Unlimited movies, TV shows, and more
    </h1>
      
      {/* Subheading */}
      <p className="text-lg md:text-xl font-medium my-4 pb-4 max-w-2xl mx-auto">
      Starts at ₱169. Cancel anytime.
      </p>
      
      {/* Email CTA */}
      <p className="text-base mb-3">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      
              {/* Email Input and Get Started Button */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <FloatingInput
            type="email"
            label="Email address"
            className="flex-1"
          />
           <Button className="bg-[#e50914] hover:bg-[#f40612] has-[>svg]:px-8 py-3 text-2xl rounded h-[62px]">
            <Link href="https://www.netflix.com/signup" className="h-full text-white font-semibold flex items-center justify-center gap-3">
              Get Started <ChevronRight className="scale-[175%] stroke-1" />
            </Link>
           </Button>
        </div>
    </div>
    </div></div>
  );
};