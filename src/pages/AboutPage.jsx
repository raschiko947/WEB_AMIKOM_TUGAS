const AboutPage = () => {
  const team = [
    { name: "Budi Santoso", role: "Head Barista", emoji: "👨‍🍳" },
    { name: "Siti Rahayu", role: "Coffee Roaster", emoji: "👩‍🔬" },
    { name: "Andi Wijaya", role: "Quality Control", emoji: "👨‍💼" },
    { name: "Dewi Lestari", role: "Customer Experience", emoji: "👩‍💻" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Hero About */}
      <section className="text-center mb-14">
        <h2 className="text-4xl font-bold text-amber-900 font-serif mb-4">Tentang Kami</h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Kopi Nusantara didirikan tahun 2018 dengan satu misi sederhana: membawa cita rasa 
          kopi terbaik Indonesia ke tangan setiap orang.
        </p>
      </section>

      {/* Story */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h3 className="text-2xl font-bold text-amber-900 font-serif mb-4">Kisah Kami</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Berawal dari kecintaan mendalam terhadap kopi lokal, kami memulai perjalanan ini 
            dengan berkeliling ke berbagai daerah penghasil kopi di Indonesia. Dari lereng Gunung 
            Kerinci di Jambi, dataran tinggi Toraja di Sulawesi, hingga hutan Flores di Nusa Tenggara.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kami percaya bahwa secangkir kopi yang baik bukan hanya soal rasa, tapi juga soal 
            cerita di baliknya. Setiap biji kopi yang kami gunakan punya nama petani, ketinggian 
            kebun, dan proses pengolahan yang kami kenal langsung.
          </p>
          <div className="flex gap-6 mt-6">
            {[
              { value: "7+", label: "Tahun Pengalaman" },
              { value: "25+", label: "Mitra Petani" },
              { value: "8", label: "Daerah Asal Kopi" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-amber-700">{s.value}</p>
                <p className="text-xs text-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-amber-50 rounded-2xl p-8 flex items-center justify-center border border-amber-200">
          <div className="text-center">
            <div className="text-8xl mb-4">☕</div>
            <p className="text-amber-800 font-serif text-xl italic font-semibold">
              "Setiap tegukan adalah cerita"
            </p>
            <p className="text-amber-600 text-sm mt-2">— Kopi Nusantara</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h3 className="text-2xl font-bold text-center text-amber-900 font-serif mb-8">Tim Kami</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-2xl p-6 text-center card-hover border border-amber-100 shadow-sm">
              <div className="text-5xl mb-3">{member.emoji}</div>
              <h4 className="font-bold text-gray-800 text-sm">{member.name}</h4>
              <p className="text-amber-600 text-xs mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
