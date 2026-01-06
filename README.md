# Modern Dashboard - Zamonaviy Boshqaruv Paneli

Professional React Dashboard with Dark/Light Mode - Qorong'u/Yorug' rejimli professional React boshqaruv paneli

## Loyiha Haqida

Bu loyiha zamonaviy veb-texnologiyalar yordamida yaratilgan to'liq funksional boshqaruv paneli (dashboard) ilovasi hisoblanadi. Ilova foydalanuvchilarga ma'lumotlarni vizualizatsiya qilish, foydalanuvchilarni boshqarish va tizim sozlamalarini o'zgartirish imkoniyatlarini beradi.

## Asosiy Xususiyatlar

### 📊 Dashboard (Bosh Sahifa)
- To'rt xil statistik ko'rsatkich kartasi
  - Jami foydalanuvchilar soni
  - Daromad statistikasi
  - Buyurtmalar soni
  - O'sish ko'rsatkichi
- Oylik daromad uchun chiziqli grafik
- Foydalanuvchilar o'sishi uchun ustunli grafik
- Responsive dizayn

### 👥 Foydalanuvchilar Sahifasi
- Foydalanuvchilar jadvali:
  - Avatar/profil rasmi
  - Ism va familiya
  - Email manzil
  - Rol (Administrator, Menejer, Foydalanuvchi)
  - Holat (Faol/Nofaol)
  - Amallar (Ko'rish, Tahrirlash, O'chirish)
- Qidiruv funksiyasi
- Saralanuvchi ustunlar
- Sahifalash (pagination)
- Responsive jadval dizayni

### ⚙️ Sozlamalar Sahifasi
- Profil sozlamalari
- Ko'rinish sozlamalari (Tema)
- Bildirishnoma sozlamalari
- Hisob sozlamalari
- Forma validatsiyasi
- Saqlash va qaytarish mexanizmi

### 🎨 Qorong'u/Yorug' Rejim
- Tema almashtirish tugmasi
- localStorage'da saqlash
- Silliq o'tish animatsiyalari
- Barcha komponentlar ikkala rejimni qo'llab-quvvatlaydi

### 📱 Responsive Dizayn
- Mobil qurilmalar uchun moslashtirilgan
- Planshet va desktop uchun optimallashtirilgan
- Yig'iladigan sidebar menyu
- Touch-friendly interfeys

## Texnologiyalar

- **React 19** - Interfeys yaratish uchun
- **Vite** - Tez rivojlantirish muhiti
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Sahifalar orasida navigatsiya
- **Recharts** - Ma'lumotlarni vizualizatsiya qilish
- **Lucide React** - Zamonaviy ikonkalar to'plami

## O'rnatish

### Talablar
- Node.js 18+ versiyasi
- npm yoki yarn

### Loyihani ishga tushirish

1. Repository'ni klonlash:
```bash
git clone https://github.com/Askarov-S/dashboard.git
cd dashboard
```

2. Bog'liqliklarni o'rnatish:
```bash
npm install
```

3. Rivojlantirish serverini ishga tushirish:
```bash
npm run dev
```

4. Brauzeringizda quyidagi manzilni oching:
```
http://localhost:5173
```

## Mavjud Skriptlar

- `npm run dev` - Rivojlantirish serverini ishga tushiradi
- `npm run build` - Production uchun loyihani build qiladi
- `npm run preview` - Build qilingan loyihani ko'rish uchun
- `npm run lint` - Kodni tekshirish uchun

## Loyiha Tuzilmasi

```
src/
├── components/          # Qayta ishlatiladigan komponentlar
│   ├── dashboard/      # Dashboard sahifasi komponentlari
│   ├── layout/         # Layout komponentlari (Sidebar, Header)
│   ├── users/          # Foydalanuvchilar sahifasi komponentlari
│   └── settings/       # Sozlamalar sahifasi komponentlari
├── contexts/           # React Context'lar (Theme)
├── pages/              # Sahifa komponentlari
├── data/               # Mock ma'lumotlar
├── hooks/              # Custom React hook'lar
├── utils/              # Yordamchi funksiyalar
├── App.jsx             # Asosiy ilova komponenti
└── main.jsx            # Kirish nuqtasi
```

## Foydalanish

### Navigatsiya
- Chap tomondagi sidebar orqali sahifalar o'rtasida o'ting
- Mobil qurilmalarda sidebar menyusini ochish/yopish uchun menyu tugmasidan foydalaning

### Tema O'zgartirish
- Yuqori o'ng burchakdagi oy/quyosh ikonkasiga bosing
- Tema avtomatik ravishda localStorage'da saqlanadi

### Foydalanuvchilarni Qidirish
- Foydalanuvchilar sahifasida qidiruv maydoniga ism, email yoki rolni kiriting
- Jadval avtomatik ravishda filtrlangan natijalarni ko'rsatadi

### Sozlamalarni Saqlash
- Sozlamalar sahifasida kerakli o'zgarishlarni kiriting
- "Saqlash" tugmasini bosing
- Tasdiqlash xabari paydo bo'ladi

## Xususiyatlar

✅ To'liq responsive dizayn
✅ Qorong'u va yorug' rejim
✅ Interaktiv grafiklar va diagrammalar
✅ Qidiruv va filtrlash
✅ Sahifalash
✅ Saralash funksiyasi
✅ LocalStorage integratsiyasi
✅ Silliq animatsiyalar
✅ Zamonaviy UI/UX
✅ O'zbek tilida interfeys

## Muallif

Sardor Askarov

## Litsenziya

MIT

## Qo'shimcha Ma'lumot

Agar sizda savollar yoki takliflar bo'lsa, iltimos issue oching yoki pull request yuboring.
