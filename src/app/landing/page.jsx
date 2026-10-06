import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { HeroAds } from "./sections/HeroAds";
import { Benefits } from "./sections/Benefits";
import { Testimonials } from "./sections/Testimonials";
import { InquiryForm as LandingInquiryForm } from "./sections/InquiryForm";

export const metadata = {
    title: "Import Fresh Vegetables from India – Lead Form",
    description:
        "Request quotation for fresh vegetables, fruits, spices, rice, and wheat exported from India to international markets.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function LandingPage() {
    return (
        <div className="bg-white">
            <HeroAds />
            <Benefits />
            <div id="inquiry" className="py-20 bg-white">
                <Container>
                    <LandingInquiryForm />
                </Container>
            </div>
            <Testimonials />
            
            <div className="bg-brand-navy text-white py-16">
                <Container>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Ready to Start Importing?
                        </h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-6">
                            <a
                                href="https://wa.me/917778886559"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-green-500 rounded-lg font-semibold text-white hover:bg-green-600 transition-colors"
                            >
                                WhatsApp Us
                            </a>
                            <Link href="/products">
                                <Button variant="secondary" className="px-8 py-3">
                                    View Products
                                </Button>
                            </Link>
                        </div>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            We are ready to assist you with quotations, product catalogues, and export compliance for your business.
                        </p>
                    </div>
                </Container>
            </div>
        </div>
    );
}

