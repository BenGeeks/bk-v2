import Image from "next/image";

interface Props {
  title: string;
  imgUrl?: string; // Make optional
  children: React.ReactNode;
}

const PageContainer = ({ title, imgUrl, children }: Props) => {
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Content container */}
      <div className="mx-auto max-w-7xl px-4 py-6 bg-white">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        {imgUrl && (
          <div className="mb-6">
            <Image src={imgUrl} alt={title} width={1200} height={300} className="w-full h-[300px] object-cover rounded-md shadow" priority />
          </div>
        )}

        <div>{children}</div>
      </div>
    </div>
  );
};

export default PageContainer;
