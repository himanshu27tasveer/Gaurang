import Image from "next/image";

const Description = () => {
  return (
    <div
      id="description"
      style={{ backgroundColor: "rgb(34, 34, 34)" }}
      className="p-24 flex justify-center items-center flex-row-reverse"
    >
      <Image
        className="fade-img"
        src="/assets/profile.png"
        width={280}
        height={280}
        alt="profile"
      />
      <div>
        <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
          I am a dynamic Associate Engineer specializing in Data Analysis and
          Science at Collins Aerospace, where I merge my passion for technology
          with a relentless drive for excellence. With a unique blend of
          organizational finesse, assertiveness, and unwavering resilience, I
          navigate through data landscapes to uncover insights that drive
          innovation.
        </p>
        <p className="text-gray-500 dark:text-gray-400">
          At the heart of my professional journey lies an insatiable curiosity
          and a commitment to advancing technology. Whether it&apos;s
          deciphering complex datasets or architecting innovative solutions, I
          thrive on the challenges that propel progress. Join me as I harness
          the power of data to shape the future and push the boundaries of
          what&apos;s possible. Let&apos;s embark on a journey of discovery
          together, where each insight sparks new opportunities and fuels the
          ever-evolving landscape of technology.
        </p>
      </div>
    </div>
  );
};

export default Description;
