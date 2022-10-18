import type { NextPage } from "next";

interface Props {
  children: string;
  color: string;
}

const Heading2: NextPage<Props> = ({ children, color }: Props) => {
  return (
    <>
      <h1
        className={`${
          color || "text-gray-700 text-center"
        } uppercase tracking-[3px] `}
      >
        {children}
      </h1>
    </>
  );
};

export default Heading2;
