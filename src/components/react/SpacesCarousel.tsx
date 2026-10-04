import React, { useCallback, useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface SpaceItem {
  id: string;
  imageUrl: string;
  badge: string;
  // Optional legacy fields for reference
  category?: string;
  indexTag?: string;
  title?: string;
  capacity?: string;
  sqft?: string;
  description?: string;
}

const spacesData: SpaceItem[] = [
  /* Full item reference:
  {
    id: 'grand-banquet',
    category: 'BANQUET HALL',
    indexTag: '01 / INDOOR BANQUET',
    title: 'The Grand Imperial Ballroom',
    capacity: 'Up to 800 Guests',
    sqft: '15,000 sq ft',
    description: 'Grand crystal chandeliers, soaring ceilings, and royal decor tailored for lavish wedding receptions, sangeet nights, and large gatherings.',
    imageUrl: '/assets/venue-image%20(1).webp',
    badge: 'GRAND BANQUET',
  },
  */
  {
    id: 'resort-logo',
    imageUrl: '/assets/venue-image%20(1).webp',
    badge: 'Resort Logo',
  },
  {
    id: 'grand-entrance',
    imageUrl: '/assets/venue-image%20(2).webp',
    badge: 'Grand Entrance',
  },
  {
    id: 'botanical-lawn',
    imageUrl: '/assets/venue-image%20(3).webp',
    badge: 'Open-Air Lawn',
  },
  {
    id: 'banquet-hall-1',
    imageUrl: '/assets/venue-image%20(4).webp',
    badge: 'Banquet Hall',
  },
  {
    id: 'banquet-hall-2',
    imageUrl: '/assets/venue-image%20(5).webp',
    badge: 'Banquet Hall',
  },
  {
    id: 'banquet-hall-3',
    imageUrl: '/assets/venue-image%20(6).webp',
    badge: 'Banquet Hall',
  },
];

export default function SpacesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: false,
    skipSnaps: false,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    onInit();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onInit);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  // Safe GSAP animation that clears props to prevent hidden cards
  useGSAP(
    () => {
      if (containerRef.current) {
        gsap.fromTo(
          '.space-card-item',
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            clearProps: 'opacity,transform',
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section id="spaces" className="py-20 lg:py-28 bg-[#FBFBF9] text-[#1A1A1E]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#B89326] uppercase">
            Venues &amp; Event Spaces
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1E] tracking-tight">
            Discover Our Spaces
          </h2>
          <p className="text-sm sm:text-base text-[#5C5E6B] font-normal leading-relaxed">
            From sprawling green outdoor lawns to regal banquet halls and luxury guest suites, find the ideal setting for your wedding, reception, or corporate retreat.
          </p>
        </div>

        {/* Sub-header Controls Bar */}
        <div className="flex items-center justify-between border-b border-neutral-200 pb-4 mb-8">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#B89326] uppercase">
            <span className="text-[#D4AF37]">✦</span>
            <span>Banquets, Lawns &amp; Suites ({spacesData.length})</span>
          </div>

          {/* Prev / Next Circle Triggers */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${prevBtnDisabled
                  ? 'border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40'
                  : 'border-neutral-300 text-neutral-700 hover:border-[#D4AF37] hover:text-[#B89326] hover:bg-neutral-100 shadow-sm active:scale-95'
                }`}
              aria-label="Previous space"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 ${nextBtnDisabled
                  ? 'border-neutral-200 text-neutral-300 cursor-not-allowed opacity-40'
                  : 'border-neutral-300 text-neutral-700 hover:border-[#D4AF37] hover:text-[#B89326] hover:bg-neutral-100 shadow-sm active:scale-95'
                }`}
              aria-label="Next space"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden w-full cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
          <div className="flex touch-pan-y [backface-visibility:hidden] -ml-6 pb-6">
            {spacesData.map((space) => (
              <div
                key={space.id}
                className="space-card-item pl-6 flex-[0_0_88%] sm:flex-[0_0_52%] md:flex-[0_0_42%] lg:flex-[0_0_33.333%] xl:flex-[0_0_30%] min-w-0 flex-shrink-0"
              >
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/90 shadow-md hover:shadow-2xl hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-300 group">
                  <img
                    src={space.imageUrl}
                    alt={space.badge}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Category Pill Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0A0A0C]/85 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-bold tracking-widest text-[#E8C86A] uppercase shadow-md">
                      {space.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        {scrollSnaps.length > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                    ? 'w-8 bg-[#B89326]'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
