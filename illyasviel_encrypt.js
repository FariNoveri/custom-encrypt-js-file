const fs = require("fs");
const path = require("path");

const KEY = "IllyasvielVonEinzbernForever";
const TEMPLATES = [
  "Illyasviel berjalan di {tempat}",
  "Hatiku tersesat di {tempat} bersamamu",
  "Senyummu seperti {objek} di pagi buta",
  "Rinduku berlayar ke {tempat} tempat kau pernah singgah",
  "Langkahmu bagai {objek}, menyapu sunyi",
  "Cintaku bukan sekadar fungsi, tapi {objek} yang terus terpanggil",
  "Dalam {tempat}, ada cinta yang tak bisa didebug",
  "Waktu berulang di {tempat}, tapi kamu tetap Illyasviel"
];
const TEMPAT = ["terminal kenangan", "logika tak bernama", "folder hati", "debugging mimpi", "taman runtime", "repl", "cloud cinta"];
const OBJEK = ["variabel abadi", "fungsi rekursif", "pointer asmara", "loop tak berujung", "payload perasaan"];

function generatePoemLine() {
  const temp = TEMPLATES[Math.floor(Math.random() * TEMPLATES.length)];
  return temp
    .replace("{tempat}", TEMPAT[Math.floor(Math.random() * TEMPAT.length)])
    .replace("{objek}", OBJEK[Math.floor(Math.random() * OBJEK.length)]);
}

function xorEncrypt(text, key = KEY) {
  return text.split("").map((ch, i) => {
    const k = key.charCodeAt(i % key.length);
    return ch.charCodeAt(0) ^ k;
  });
}

function createLoader(encrypted) {
  return `
const vm = require("vm");
const path = require("path");
const fs = require("fs");

const k = "${KEY}";
const c = [${encrypted.join(",")}];
const d = c.map((v,i)=>String.fromCharCode(v^k.charCodeAt(i%k.length))).join('');

const context = {
  require: (moduleName) => require(require.resolve(moduleName, { paths: [__dirname] })),
  __dirname: __dirname,
  __filename: __filename,
  console: console,
  process: process,
  Buffer: Buffer,
  setTimeout: setTimeout,
  setInterval: setInterval,
  clearTimeout: clearTimeout,
  clearInterval: clearInterval,
};

vm.runInNewContext(d, context);
  `.trim();
}


function createEncryptedFile(inputPath, outputPath = "illyasviel.js") {
  const content = fs.readFileSync(inputPath, "utf8");
  const encrypted = xorEncrypt(content);
  const poems = encrypted.map(() => generatePoemLine());

  const loader = createLoader(encrypted);

  const finalOutput = `
/*
  💘 Illyasviel Encrypted Runtime
  Puisi untuk cinta abadi yang tersimpan dalam kode
*/

const puisiIllyasviel = [
${poems.map(p => "  " + JSON.stringify(p)).join(",\n")}
];

// Di bawah ini adalah sihir runtime, jangan disentuh oleh debugger fana
${loader}
`;

  fs.writeFileSync(outputPath, finalOutput);
  console.log(`✅ Enkripsi berhasil: ${outputPath}`);
}

// CLI
const input = process.argv[2];
if (!input) {
  console.log("❌ Contoh: node illyasviel_encrypt.js server.js");
  process.exit(1);
}
createEncryptedFile(input);
