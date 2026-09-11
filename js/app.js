// ===== SIMPAN DATA UNTUK PPT =====
savePPTData(currentModul);
document.getElementById('btnPPT').disabled = false;function savePPTData(m){
  const pptData = {
    mapel: m.mapel,
    kelas: m.kelas,
    semester: m.semester,
    tahun: new Date().getFullYear() + '/' + (new Date().getFullYear()+1),
    guru: m.guru,
    kepala: document.getElementById('namaKepsek').value || 'Muhammad Arif Pither, S.Ag., M.M',
    bab: m.topik,
    kataKunci: m.topik.split(' ').slice(0,3).join(' ') || m.topik,
    pancaCinta: m.cinta || [],
    tp: m.tp,
    cp: m.cp,
    materi: buildMateriPPT(m),
    updated: new Date().toISOString()
  };
  localStorage.setItem('maPPTData', JSON.stringify(pptData));
}

function buildMateriPPT(m){
  // ===== CONTOH DATA LENGKAP: AL-QUR'AN HADITS BAB 1 =====
  const richData = {
    "BAB 1: Membudayakan Pola Hidup Sederhana dan Menyantuni Dhuafa": [
      {judul:"Materi 1 · Sikap Bersahaja (QS al-Furqan: 67)",
       poin:["Pola hidup sederhana: tidak berlebihan dan tidak pelit","Keseimbangan dalam berkonsumsi sebagai wujud cinta kepada Allah","Hadis Abdullah bin Amr tentang seni keseimbangan hidup","Dampak positif hidup sederhana bagi kesehatan mental dan sosial"],
       detail:{
         ayat:'"Dan orang-orang yang apabila membelanjakan (harta), mereka tidak berlebihan, dan tidak (pula) kikir, dan adalah (pembelanjaan itu) di tengah-tengah antara yang demikian." (QS al-Furqan: 67)',
         makna:'Ayat ini menggambarkan sifat <b>ibadurrahman</b> (hamba-hamba Allah Yang Maha Pengasih) yang bersikap <b>moderat</b> dalam membelanjakan harta. Kata <i>"lam yusrifu"</i> berarti tidak berlebih-lebihan, dan <i>"lam yaqturu"</i> berarti tidak kikir. Islam mengajarkan keseimbangan (<i>tawazun</i>).',
         implementasi:["Membeli sesuai kebutuhan, bukan keinginan semata","Tidak memaksakan gaya hidup di luar kemampuan","Tetap bersedekah meski dalam keterbatasan",'Menghindari sifat <i>israf</i> dan <i>tabdzir</i>'],
         catatan:'<i>"Makanlah, minumlah, bersedekahlah, dan berpakaianlah tanpa berlebihan dan tanpa kesombongan."</i> (HR Ahmad & Nasa\'i)'
       }},
      {judul:"Materi 2 · Refleksi Kisah Qarun (QS al-Qashash: 79-82)",
       poin:["Analisis bahaya kesombongan dan sifat tamak","Pelajaran dari kisah Qarun: harta tanpa syukur membawa kehancuran","Sikap rendah hati dalam menerima setiap karunia materi","Korelasi antara harta dan tanggung jawab sosial"],
       detail:{
         ayat:'"Maka keluarlah Qarun kepada kaumnya dalam kemegahannya... Maka Kami benamkan dia bersama rumahnya ke dalam bumi." (QS al-Qashash: 79-81)',
         makna:'<b>Qarun</b> adalah sepupu Nabi Musa yang sangat kaya raya. Kekayaannya menjadikannya sombong, merasa itu hasil jerih payahnya sendiri, menolak bersyukur dan berbagi, hingga Allah menenggelamkannya.',
         implementasi:["Harta adalah <b>amanah</b>, bukan milik mutlak manusia","Kesombongan atas nikmat adalah <b>kufur nikmat</b>","Kekayaan tanpa syukur = kehancuran","Setiap harta ada <b>hak orang lain</b> (zakat, sedekah, infak)"],
         catatan:'Fenomena <i>flexing</i> di media sosial adalah bentuk modern sifat Qarun. Kita diajarkan <b>rendah hati</b> dan menggunakan harta di jalan Allah.'
       }},
      {judul:"Materi 3 · Hakikat Kebajikan (QS al-Baqarah: 177)",
       poin:["Kebajikan mencakup aspek sosial dan spiritual secara seimbang","Kepedulian terhadap yatim, miskin, dan kaum dhuafa","Empati sebagai implementasi cinta kepada sesama","Perencanaan pemberian bantuan secara kolaboratif"],
       detail:{
         ayat:'"Kebajikan itu bukanlah kamu menghadapkan wajahmu ke timur dan ke barat, tetapi kebajikan itu ialah beriman kepada Allah, hari akhir, malaikat, kitab-kitab, dan nabi-nabi; memberikan harta yang dicintainya kepada kerabat, anak yatim, orang miskin..." (QS al-Baqarah: 177)',
         makna:'Kebajikan sejati adalah <b>keseimbangan</b> antara <i>hablum minallah</i> (iman, shalat, zakat) dan <i>hablum minannas</i> (sedekah kepada kerabat, yatim, miskin, musafir).',
         implementasi:["Iman kepada Allah dan hari akhir","Memberikan harta kepada kerabat","Menyantuni anak yatim dan orang miskin","Menepati janji dan sabar"],
         catatan:'Ibadah ritual tanpa kepedulian sosial adalah ibadah yang <b>tidak sempurna</b>.'
       }},
      {judul:"Materi 4 · Melawan Pendusta Agama (QS al-Ma'un)",
       poin:["Menjauhi perilaku pendusta agama dengan konsisten peduli pada yatim","Aksi nyata menyantuni dhuafa di lingkungan madrasah","Kerja kolaboratif dalam program santunan","Evaluasi dampak sosial dari aksi kepedulian"],
       detail:{
         ayat:'"Tahukah kamu (orang) yang mendustakan agama? Itulah orang yang menghardik anak yatim, dan tidak menganjurkan memberi makan orang miskin." (QS al-Ma\'un: 1-3)',
         makna:'Pendusta agama: menghardik yatim, tidak menganjurkan memberi makan miskin, lalai shalat, riya\' dan enggan menolong.',
         implementasi:["Menyisihkan uang jajan untuk sedekah rutin","Mengunjungi dan membantu panti asuhan",'Membuat program "Jumat Berkah" di madrasah',"Menggalang dana untuk korban bencana","Menjadi relawan sosial"],
         catatan:'<i>"Ya Allah, jadikanlah kami hamba-Mu yang peduli, yang ikhlas dalam beribadah. Aamiin."</i>'
       }}
    ]
  };
  if(richData[m.topik]) return richData[m.topik];

  // ===== GENERIK: buat dari TP modul =====
  const tp = m.tp || [];
  const per = Math.max(1, Math.ceil(tp.length/4));
  const out = [];
  for(let i=0;i<tp.length;i+=per){
    const gr = tp.slice(i,i+per);
    out.push({judul:'Materi '+(out.length+1), poin:gr});
  }
  return out;
}

function openPPT(){
  window.location.href = 'ppt-materi.html';
}
