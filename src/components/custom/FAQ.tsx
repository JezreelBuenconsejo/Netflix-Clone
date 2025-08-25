import { ChevronRight, Plus } from "lucide-react";
import { FloatingInput } from "../ui/floating-input";
import { Button } from "../ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import Link from "next/link";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies and documentaries on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₱169 to ₱549 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
      question: "Is Netflix good for kids?",
      answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
    }
  ];

  return (
    <>
      {/* FAQ Section */}
      <section className="py-16 bg-black max-w-[1129px] mx-auto px-4">
        <h2 className="text-2xl font-medium text-white mb-4">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#2d2d2d]  transition-colors border-none"
            >
              <AccordionTrigger className="w-full hover:bg-[#2d2d2d]/70 p-6 text-left flex border-b cursor-pointer border-b-black justify-between rounded-none items-center text-white text-lg hover:no-underline [&>svg]:hidden group">
                <span className="text-2xl">{faq.question}</span>
                <span className="transition-transform duration-200 group-data-[state=open]:rotate-45"><Plus className="w-9 h-9"/></span>
              </AccordionTrigger>
              <AccordionContent className="p-6 text-white text-2xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

          {/* Email CTA at bottom of FAQ */}
          <div className="mt-12 text-center">
            <p className="text-white mb-6">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <FloatingInput
                  type="email"
                  label="Email address"
                  className="flex-1"
                />
                <Button 
                  asChild 
                  className="bg-[#e50914] hover:bg-[#f40612] text-white font-semibold has-[>svg]:px-8 py-3 text-2xl rounded h-[62px]"
                >
                  <Link href="https://www.netflix.com/signup">
                    Get Started <ChevronRight className="scale-[175%] stroke-1" />
                  </Link>
                </Button>
            </div>
          </div>
      </section>
    </>
  );
};
