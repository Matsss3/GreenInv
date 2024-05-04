interface FeatureProps {
  children?: React.ReactNode,
  title: string,
  description?: string,
  minimalistic?: boolean
};

export const Feature = ({
  children,
  title,
  description,
  minimalistic
}: FeatureProps) => {
  return (
    <div className="flex flex-col items-center">
      {minimalistic && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#435334] shadow-lg md:h-14 md:w-14 md:rounded-xl">
          {children}
        </div>
      ) || (
        <div className="mb-5 flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
          {children}
        </div>
      )}
      <h3 className="mb-2 text-center text-lg font-semibold md:text-lg">{title}</h3>
      <p className="text-center text-gray-500">{description}</p>
    </div>
  );
};