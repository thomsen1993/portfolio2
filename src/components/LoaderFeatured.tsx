import Wrapper from "./Wrapper";

const LoaderFeatured = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-3 gap-4 cursor-wait">
        <div className="h-40 w-full bg-slate-400 wiggleBorder animate-pulse my-2"></div>
        <div className="h-40 w-full bg-slate-400 wiggleBorder animate-pulse my-2"></div>
        <div className="h-40 w-full bg-slate-400 wiggleBorder animate-pulse my-2"></div>
      </div>
    </Wrapper>
  );
};

export default LoaderFeatured;
