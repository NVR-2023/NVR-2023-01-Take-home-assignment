const HeroSection = () => {
  return (
    <section className="flex items-center border-[3px] rounded text-[#03646d] font-bold text-5xl border-[#03646d] h-24 w-[32rem]">
      <span className="w-3/5 flex h-full border-r-[3px] border-[#03646d] justify-center items-center">
        Engine AI
      </span>
      <span className="w-2/5 h-full flex flex-col">
        <p className="text-sm h-2/5 w-full flex ps-2 items-center font-[800] tracking-wider">
          Take-home assignment
        </p>
        <p className="text-[1.2rem] space-x-2 h-3/5 border-t-[3px] border-[#03646d] flex items-center ps-2 font-extrabold">
          <span>By Nuno Rodrigues</span>
          
        </p>
      </span>
    </section>
  );
};

export default HeroSection;
