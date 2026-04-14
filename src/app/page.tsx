"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import { MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="medium"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "Home", id: "hero" },
        { name: "Menu", id: "products" },
        { name: "Reviews", id: "testimonials" },
        { name: "Visit Us", id: "contact" },
      ]}
      brandName="RBIELS"
      button={{ text: "Book Now", href: "#contact" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "sparkles-gradient" }}
      title="RBIELS: Where Comfort Meets Elegance"
      description="Experience a curated blend of Filipino and Western comfort food in the heart of Quezon City. Rated 4.8/5 by our community."
      tag="Congressional Ave, QC"
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/top-view-dining-tables-without-food_23-2150157778.jpg", imageAlt: "cozy restaurant interior warm lighting" },
        { imageSrc: "http://img.b2bpic.net/free-photo/young-waiter-showing-menu-touchpad-his-customers-cafe_637285-7832.jpg", imageAlt: "friendly restaurant staff serving" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="100+ Happy Reviews"
      tagIcon={MapPin}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Your New Favorite Neighborhood Spot"
      description="At RBIELS, we believe dining should be an experience. We pride ourselves on generous servings, friendly service, and an aesthetic atmosphere perfect for dates or family gatherings. Whether it's our signature Baby Back Ribs or our refreshing Blue Lemonade, every dish is crafted to leave you coming back for more."
      imageSrc="http://img.b2bpic.net/free-photo/person-cafe-enjoying-book_23-2150064701.jpg"
      imageAlt="RBIELS cozy seating area"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        { id: "1", brand: "Classic", name: "Baby Back Ribs", price: "₱395", rating: 5, reviewCount: "84", imageSrc: "http://img.b2bpic.net/free-photo/grilled-meat-rustic-wood-table-cooked-perfectly-generated-by-ai_188544-39136.jpg" },
        { id: "2", brand: "Signature", name: "Fried Chicken", price: "₱250", rating: 5, reviewCount: "62", imageSrc: "http://img.b2bpic.net/free-photo/grilled-chicken-breasts-with-vegetables_23-2148189816.jpg" },
        { id: "3", brand: "Classic", name: "Pasta Bolognese", price: "₱280", rating: 4, reviewCount: "45", imageSrc: "http://img.b2bpic.net/free-photo/healthy-ingredients-kitchen-table-spaghetti-olive-oil-t_1220-820.jpg" }
      ]}
      title="Chef's Favorites"
      description="Discover our most requested dishes that define the RBIELS experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSixteen
      textboxLayout="split"
      useInvertedBackground={false}
      animationType="slide-up"
      testimonials={[
        {
          id: "1",          name: "Sarah J.",          role: "Food Blogger",          company: "Local Eats",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-person-eating-watermelon_23-2151553597.jpg"},
        {
          id: "2",          name: "Mark D.",          role: "Regular Guest",          company: "QC Resident",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-woman-holding-glass_23-2148965394.jpg"},
        {
          id: "3",          name: "Elena R.",          role: "Foodie",          company: "Student",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/girl-having-orange-juice-restaurant_23-2148172695.jpg"}
      ]}
      kpiItems={[
        { value: "4.8", label: "Avg Rating" },
        { value: "100+", label: "Reviews" },
        { value: "Daily", label: "Freshly Served" }
      ]}
      title="Loved by the Community"
      description="Hear what our wonderful guests have to say about their dining experience at RBIELS."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Ready to Visit Us?"
      description="Located on Congressional Ave, we are open until 10 PM. Drop us a message for reservations or inquiries!"
      inputs={[
        { name: "name", type: "text", placeholder: "Your Name", required: true },
        { name: "email", type: "email", placeholder: "Your Email", required: true }
      ]}
      textarea={{
        name: "message",        placeholder: "Any special occasion or request?",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/making-order-cafe_1098-13290.jpg"
      imageAlt="RBIELS entrance"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="RBIELS"
      copyrightText="© 2025 RBIELS Restaurant. All Rights Reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}