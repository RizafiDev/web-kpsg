import raicab from "../assets/images/events/raicab.jpg";
function People() {
  return (
    <main className="container mx-auto flex flex-col items-center  lg:px-32 py-8 px-7 w-full ">
      <header>
        <h1 className="text-3xl font-semibold text-custom_purple text-center">
          Keanggotaan Kami
        </h1>
      </header>
      <ul className="flex flex-col lg:flex-row gap-80 lg:gap-6 w-full my-6 items-center justify-center">
        <li className="relative">
          <div className="bg max-w-[350px] h-60 ">
            <img
              src={raicab}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="article max-w-72 flex flex-col items-start gap-4 p-8 bg-custom_white absolute top-48">
            <h1 className="text-xl font-medium text-cyan-600">
              Organisasi
              <br />
              Dewan Kehormatan
            </h1>
            <p className="leading-7 text-custom_purple">
              Badan pengawas kode etik kepramukaan, beranggotakan Dewan Ambalan
              yang telah menyelesaikan 1 periode jabatan
            </p>
          </div>
        </li>
        <li className="relative">
          <div className="bg max-w-[350px] h-60 ">
            <img
              src={raicab}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="article max-w-72 flex flex-col items-start gap-4 p-8 bg-custom_white absolute top-48">
            <h1 className="text-xl font-medium text-cyan-600">
              Organisasi
              <br />
              Dewan Ambalan
            </h1>
            <p className="leading-7 text-custom_purple">
              Badan kepemimpinan gugus depan (gudep) Pramuka tingkat Penegak
              yang mengelola, merencanakan, dan menjalankan berbagai kegiatan
              kepramukaan di Ambalan.
            </p>
          </div>
        </li>
        <li className="relative">
          <div className="bg max-w-[350px] h-60 ">
            <img
              src={raicab}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="article max-w-72 flex flex-col items-start gap-4 p-8 bg-custom_white absolute top-48">
            <h1 className="text-xl font-medium text-cyan-600">
              Pasukan
              <br />
              Pramuka Khusus
            </h1>
            <p className="leading-7 text-custom_purple">
              Pasukan yang dibentuk dari anggota pramuka untuk mengikuti
              kegiatan perlombaan kepramukaan, dibawah naungan Dewan Ambalan
            </p>
          </div>
        </li>
        <li className="relative">
          <div className="bg max-w-[350px] h-60 ">
            <img
              src={raicab}
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="article max-w-72 flex flex-col items-start gap-4 p-8 bg-custom_white absolute top-48">
            <h1 className="text-xl font-medium text-cyan-600">
              Anggota
              <br />
              Pramuka Amalan
            </h1>
            <p className="leading-7 text-custom_purple">
              Para pemuda dan pemudi yang tergabung dalam Pramuka Penegak, yaitu
              golongan dalam Gerakan Pramuka Indonesia untuk usia 16 hingga 20
              tahun.
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
}
export default People;
