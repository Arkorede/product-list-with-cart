const NotificationAtom = () => {
  return (
    <div className="fixed flex items-center justify-center z-30 bottom-0 left-[1.5625rem] right-[1.5625rem] sm:left-[1.875rem] sm:right-[1.875rem] md:left-[3.125rem] md:right-[3.125rem]lg:left-[3.125rem] lg:right-[3.125rem] xl:left-[6.6875rem] xl:right-[6.6875rem] h-10 top-3 bg-red rounded-lg py-2 text-nowrap lg:hidden">
      <p className="text-white text-[0.6875rem] min-[375px]:text-[0.875rem]">
        Items are displayed at the bottom of the screen.
      </p>
    </div>
  );
};

export default NotificationAtom;
