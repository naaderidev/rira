import { FC } from "react";

const Company: FC = () => {
  return (
    <div className="flex items-center">
      <figure className="flex-center flex-col gap-2 w-36 bg-slate-200 py-5 px-3 rounded-md">
        <img src="/rira-logo.png" alt="logo-image" className="h-10 w-16" />
        <figcaption>
          <h5 className="font-VazirRegular text-xs w-24">
            همراهی برای رشد کسب و کار شما
          </h5>
          <h6 className="font-VazirRegular text-base font-bold text-blue py-1">
            rirais.com
          </h6>
        </figcaption>
      </figure>
      <span className="block w-full h-1 bg-gradient-to-r from-green to-blue my-6"></span>
    </div>
  );
};

export default Company;
