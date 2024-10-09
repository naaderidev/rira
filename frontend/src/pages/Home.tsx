import React from "react";

const Home: React.FC = () => {
  return (
    <div className="flex-center pt-24">
      <div className="flex-center flex-col gap-4">
        <h1 className="font-Lalezar text-xl md:text-3xl text-zinc-700">
          به پنل مدیریت ریرا خوش آمدید
        </h1>
        <h3 className="font-VazirMedium text-sm md:text-base text-zinc-700">
          با استفاده از منوی سمت راست چارت سازمانی را مشاهده فرمایید
        </h3>
      </div>
    </div>
  );
};

export default Home;
