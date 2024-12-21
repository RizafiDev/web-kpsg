import raicab from "../assets/images/events/raicab.jpg";

function Story() {
  return (
    <main className="container mx-auto flex flex-col items-center  lg:px-32 py-8 px-7">
      <header>
        <h1 className="text-3xl font-semibold text-custom_purple text-center">
          Kilas Cerita
        </h1>
      </header>
      <div className="card-section flex items-center justify-center mt-6 lg:mt-8">
        <ul className="flex flex-col gap-6 md:flex-row md:flex-wrap items-center justify-center">
          <li className="card-1 w-full max-w-sm flex flex-col">
            <img
              src={raicab}
              alt="Raimuna Cabang VII"
              className="w-full h-40 sm:h-48 rounded-t-xl object-cover"
            />
            <article className="bg-custom_purple p-4 sm:p-6 text-custom_white text-base sm:text-lg font-semibold leading-6 rounded-b-xl">
              Partisipasi SMKN 6 Surakarta dalam kegiatan Raimuna Cabang VII
              Kota Surakarta
            </article>
          </li>
          <li className="card-1 w-full max-w-sm flex flex-col">
            <img
              src={raicab}
              alt="Raimuna Cabang VII"
              className="w-full h-40 sm:h-48 rounded-t-xl object-cover"
            />
            <article className="bg-custom_purple p-4 sm:p-6 text-custom_white text-base sm:text-lg font-semibold leading-6 rounded-b-xl">
              Partisipasi SMKN 6 Surakarta dalam kegiatan Raimuna Cabang VII
              Kota Surakarta
            </article>
          </li>
          <li className="card-1 w-full max-w-sm flex flex-col">
            <img
              src={raicab}
              alt="Raimuna Cabang VII"
              className="w-full h-40 sm:h-48 rounded-t-xl object-cover"
            />
            <article className="bg-custom_purple p-4 sm:p-6 text-custom_white text-base sm:text-lg font-semibold leading-6 rounded-b-xl">
              Partisipasi SMKN 6 Surakarta dalam kegiatan Raimuna Cabang VII
              Kota Surakarta
            </article>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Story;
