function Feature() {
  return (
    <>
      <div className="container px-32 w-full flex items-center justify-center lg:relative lg:h-48">
        <ul className="flex items-center lg:flex-row flex-col w-fit lg:gap-32 bg-custom_white justify-center py-4 lg:pb-14 px-20 lg:absolute lg:-mt-36 shadow-md rounded-lg mt-8">
          <li className="flex flex-col text-center">
            <i className="ri-earth-line ri-6x text-custom_purple "></i>
            <h1 className="text-custom_black text-4xl font-medium -mt-5">
              1.2K+
            </h1>
            <h2 className="text-custom_purple font-normal font-xl mt-2">
              Aktif & Alumni
            </h2>
          </li>
          <li className="flex flex-col text-center">
            <i className="ri-trophy-line ri-6x text-yellow-500 "></i>
            <h1 className="text-custom_black text-4xl font-medium -mt-5">
              100+
            </h1>
            <h2 className="text-custom_purple font-normal font-xl mt-2">
              Trofi Kejuaraan
            </h2>
          </li>
          <li className="flex flex-col text-center">
            <i className="ri-hourglass-fill ri-6x text-cyan-500 "></i>
            <h1 className="text-custom_black text-4xl font-medium -mt-5">
              2012
            </h1>
            <h2 className="text-custom_purple font-normal font-xl mt-2">
              Berdiri Sejak
            </h2>
          </li>
          <li className="flex flex-col text-center">
            <i className="ri-hand-heart-line ri-6x text-green-500 "></i>
            <h1 className="text-custom_black text-4xl font-medium -mt-5">
              300+
            </h1>
            <h2 className="text-custom_purple font-normal font-xl mt-2">
              Aksi & Project
            </h2>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Feature;
