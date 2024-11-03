const recipes = [
 {
  id: '1',
  name: 'Nasi Goreng',
  description: 'Nasi goreng adalah masakan nasi yang digoreng dalam minyak kelapa dan/atau mentega, biasanya ditambahi bawang putih, bawang merah, garam, merica, kecap manis, dan bumbu-bumbu lainnya.',
  jenis: ['breakfast', 'dinner'],
  bahan: ['Nasi', 'Bawang putih', 'Bawang merah', 'Garam', 'Merica', 'Kecap manis'],
  ukuranbahan: ['1 piring', '3 siung', '2 siung', '1/2 sdt', '1/2 sdt', '1 sdm'],
  alat: ['Wajan', 'Kompor', 'Sendok'],
  time: '30 menit',
  porsi: '1 porsi',
  steps: ['Panaskan minyak', 'Tumis bawang putih dan bawang merah hingga harum', 'Masukkan nasi dan aduk rata', 'Tambahkan garam, merica, dan kecap manis', 'Aduk hingga matang'],
 },
 {
  id: '2',
  name: 'Spaghetti Carbonara',
  description: 'Spaghetti Carbonara adalah hidangan pasta yang dibuat dengan mencampur spaghetti, telur, keju parmesan, guanciale, dan lada hitam.',
  jenis: ['lunch', 'dinner'],
  bahan: ['Spaghetti', 'Telur', 'Keju parmesan', 'Guanciale', 'Lada hitam'],
  ukuranbahan: ['100 gram', '2 butir', '50 gram', '75 gram', 'Secukupnya'],
  alat: ['Panci', 'Wajan', 'Mangkuk', 'Garpu'],
  time: '20 menit',
  porsi: '2 porsi',
  steps: ['Rebus spaghetti hingga al dente', 'Kocok telur dan campur dengan keju parmesan', 'Tumis guanciale hingga renyah', 'Campurkan spaghetti ke dalam wajan dengan guanciale', 'Tambahkan campuran telur dan keju, aduk rata', 'Taburkan lada hitam sebelum disajikan'],
},
 // Tambahkan resep-resep lainnya di sini
];

export default recipes;