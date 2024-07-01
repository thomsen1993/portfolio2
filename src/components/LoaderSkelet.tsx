import Wrapper from "./Wrapper";

const LoaderSkelet = () => {
  return (
    <Wrapper>
      <div className="cursor-wait">
        <div className="h-3 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
        <div className="h-3 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
        <div className="h-3 w-full bg-slate-400 rounded-md animate-pulse my-2"></div>
        <div className="h-3 w-[80%] bg-slate-400 rounded-md animate-pulse my-2"></div>
      </div>
    </Wrapper>
  );
};

export default LoaderSkelet;
