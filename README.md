# 💘 custom-encrypt-js-file

> Karena cinta (dan source code) kadang lebih indah jika tak langsung terbaca.

Script ini mengenkripsi file JavaScript dengan algoritma XOR sederhana dan menyisipkan puisi unik bertema "Illyasviel Von Einzbern" di dalam output-nya. Output akhir tetap dapat dijalankan sebagai file Node.js biasa karena loader otomatis akan mendekripsi dan mengeksekusinya secara runtime.

## ✨ Fitur

- 🔐 XOR encryption ringan untuk source code JS
- 📝 Puisi acak sebagai lapisan "romantis" sekaligus obfuscation
- 🪄 Loader runtime otomatis menggunakan `vm.runInNewContext`
- 📦 Output siap dijalankan langsung via `node`

## 🚀 Cara Pakai

1. Siapkan file JS yang ingin kamu enkripsi, misalnya `server.js`
2. Jalankan:

```bash
node illyasviel_encrypt.js server.js
````

3. File hasil enkripsi bernama `illyasviel.js`, tinggal dijalankan:

```bash
node illyasviel.js
```

## 📂 Contoh Output

```js
/*
  💘 Illyasviel Encrypted Runtime
  Puisi untuk cinta abadi yang tersimpan dalam kode
*/

const puisiIllyasviel = [
  "Illyasviel berjalan di folder hati",
  "Senyummu seperti loop tak berujung di pagi buta",
  ...
];

// Di bawah ini adalah sihir runtime, jangan disentuh oleh debugger fana
...
```

## ⚠️ Catatan

* Ini bukan enkripsi yang aman untuk distribusi production — lebih ke arah **fun & obfuscation**.
* Puisi disisipkan hanya sebagai estetika — tidak digunakan untuk dekripsi.

## 💡 Kenapa?

Karena kadang, kita ingin melindungi kode kita... tapi dengan gaya.

---

**for: illyasviel von einzbern**
**by: fari noveri**

