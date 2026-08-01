import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
  import { useState } from "react";
  
  
  type GalleryImage = {
    src: string;
    alt?: string;
    title?: string;
  };
  
  
  interface ProjectGalleryProps {
    images?: GalleryImage[];
  }
  
  
  
  export function ProjectGallery({
    images = [],
  }: ProjectGalleryProps) {
  
  
    const [activeImage, setActiveImage] = useState<string | null>(null);
  
  
  
    if (!images.length) {
      return null;
    }
  
  
  
    console.log(
      "Project Gallery:",
      images
    );
  
  
  
    return (
      <section className="mx-auto max-w-7xl px-6 py-16">
  
  
        {/* Header */}
  
        <div className="mb-10">
  
          <p className="
            text-xs
            font-mono
            uppercase
            tracking-widest
            text-brand
          ">
            // Gallery
          </p>
  
  
          <h2 className="
            mt-3
            font-display
            text-3xl
            font-semibold
          ">
            تصاویر پروژه
          </h2>
  
  
          <p className="
            mt-2
            text-muted-foreground
          ">
            {images.length} تصویر از مراحل اجرا، معماری و خروجی پروژه
          </p>
  
        </div>
  
  
  
  
  
        <Carousel
  
          opts={{
            align: "start",
            loop: true,
          }}
  
          className="relative w-full"
  
        >
  
  
  
          <CarouselContent className="-ml-4">
  
  
  
            {
              images.map((image,index)=>(
  
  
                <CarouselItem
  
                  key={`${image.src}-${index}`}
  
                  className="
                  pl-4
                  basis-[90%]
                  sm:basis-1/2
                  lg:basis-1/3
                  "
  
                >
  
  
  
                  <article
  
                    className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border
                    bg-surface/60
                    transition
                    hover:border-brand/50
                    "
  
                  >
  
  
  
                    <button
  
                      type="button"
  
                      onClick={()=>
                        setActiveImage(image.src)
                      }
  
                      className="
                      block
                      w-full
                      cursor-zoom-in
                      "
  
                    >
  
  
                      <img
  
                        src={image.src}
  
                        alt={
                          image.alt ??
                          `project-image-${index}`
                        }
  
  
                        loading="lazy"
  
  
                        onLoad={()=>
                          console.log(
                            "Loaded:",
                            image.src
                          )
                        }
  
  
                        onError={()=>
                          console.error(
                            "Image failed:",
                            image.src
                          )
                        }
  
  
                        className="
                        aspect-video
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                        "
  
                      />
  
  
                    </button>
  
  
  
  
  
                    {
                      image.title &&
  
                      <div className="
                        border-t
                        border-border
                        px-5
                        py-4
                      ">
  
                        <h3 className="
                          text-sm
                          font-medium
                        ">
                          {image.title}
                        </h3>
  
                      </div>
  
                    }
  
  
  
                  </article>
  
  
  
  
                </CarouselItem>
  
  
              ))
            }
  
  
  
          </CarouselContent>
  
  
  
  
  
          <CarouselPrevious
  
            className="
            left-2
            md:-left-12
            "
  
          />
  
  
  
          <CarouselNext
  
            className="
            right-2
            md:-right-12
            "
  
          />
  
  
  
        </Carousel>
  
  
  
  
  
        {/* Lightbox */}
  
        {
          activeImage &&
  
          <div
  
            onClick={()=>
              setActiveImage(null)
            }
  
            className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/80
            p-6
            "
  
          >
  
  
            <img
  
              src={activeImage}
  
              className="
              max-h-[90vh]
              max-w-7xl
              rounded-xl
              object-contain
              "
  
            />
  
  
          </div>
  
        }
  
  
  
  
      </section>
    );
  }