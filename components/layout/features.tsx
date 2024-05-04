import Image from "next/image";

interface FeatureProps {
  children?: React.ReactNode,
  title: string,
  description?: string,
  minimalistic?: boolean,
  src: string,
};

export const Feature = ({
  children,
  title,
  description,
  minimalistic,
  src
}: FeatureProps) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center">
      {minimalistic && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#435334] shadow-lg md:h-14 md:w-14 md:rounded-xl">
          <Image
            alt="Icon"
            src={src}
            loading="lazy"
            width="36"
            height="36"
          />
        </div>
      ) || (
        <div className="mb-5 flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
          <Image
            alt="Icon"
            src={src}
            loading="lazy"
            width="48"
            height="48"
          />
        </div>
      )}
      <h3 className="mb-2 text-center text-lg font-semibold md:text-lg">{title}</h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
};