"use client";
import React, { useRef } from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { motion, useInView, useTransform } from "framer-motion";

export function GridPhotos() {
  const ref = useRef(null);

  // Check if the element is in view, and set `once: true` to trigger the animation only once
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.6, opacity: 0.6 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.6 }} // Adjust transition duration as needed
    >
      <div id="carousel">
        <LayoutGrid cards={cards} />
      </div>
    </motion.div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Уютный уголок для отдыха</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        В нашем приюте каждая кошка находит свой уголок для сна и отдыха. Мягкие
        подушки и теплые пледы создают атмосферу уюта, где пушистики могут
        расслабиться и набраться сил.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Игровое время!</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Время веселья! Наши котики любят играть с яркими игрушками и лазить по
        игровым комплексам. Каждый день — это новые приключения и забавные
        моменты!
      </p>
    </div>
  );
};

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Забота и внимание</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Каждой кошке нужна любовь и внимание. Наши волонтеры проводят время с
        питомцами, ухаживают за ними и дарят ласку, чтобы они чувствовали себя
        как дома.
      </p>
    </div>
  );
};

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Друзья навсегда</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Текст
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/images/GalleryImage1.jpeg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/images/GalleryImage2.jpeg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/images/GalleryImage3.jpeg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/images/GalleryImage4.jpeg",
  },
];
