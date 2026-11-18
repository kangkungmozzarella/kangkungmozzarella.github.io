/*
  Antique landing page: the opening, the notch on the stage, language switch, panel tabs and
  downloads. The eyes are drawn the same way as in the app (src/lib/eyes).
*/
(() => {
  "use strict";

  // Release files. The Windows installer is also uploaded under a fixed name by
  // scripts/release.mjs, so this link always points to the latest published release.
  // While a value is empty, its button shows "Coming soon" and is not clickable.
  const DOWNLOADS = {
    mac: "https://github.com/kangkungmozzarella/antique-releases/releases/latest/download/Antique-macOS.dmg",
    windows: "https://github.com/kangkungmozzarella/antique-releases/releases/latest/download/Antique-Windows-setup.exe",
  };

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touchOnly = matchMedia("(hover: none)").matches;

  /* ---------------- Text ---------------- */

  const TEXT = {
    en: {
      title: "Antique: eyes for the top of your screen",
      skip: "Skip to content",
      "intro.hello": "Hello.",
      "nav.try": "Try it",
      "nav.download": "Download",
      "hero.kicker": "For macOS and Windows",
      "hero.title": "A pair of eyes for the top of your screen.",
      "hero.lede":
        "Antique is a little notch at the top of your screen: wrapped around the camera notch on a Mac, hanging from the top edge on Windows. It follows your pointer, moves to your music, and shows a message, a focus timer or the next prayer time when it matters.",
      "hero.downloadMac": "Download for macOS",
      "hero.downloadWin": "Download for Windows",
      "hero.options": "Download options",
      "hero.otherWin": "Get the Windows version",
      "hero.otherMac": "Get the Mac version",
      "meta.version": "Version",
      "meta.soon": "Downloads open soon.",
      "try.title": "Try Antique",
      "try.group": "Show a moment",
      "try.more":
        "It also speaks up when a drive is plugged in, the battery runs low, or rain is on the way. And when you play a game in full screen, it steps aside.",
      "island.label": "Antique's notch. Click to open the panel.",
      "chip.rest": "Resting",
      "chip.music": "Music",
      "chip.message": "Message",
      "chip.charge": "Charging",
      "chip.headphones": "Headphones",
      "chip.volume": "Volume",
      "chip.focus": "Focus",
      "chip.prayer": "Prayer",
      "chip.sleepy": "Sleepy",
      "chip.open": "Open",
      "cap.rest": "When nothing is happening, it just watches. Move your pointer around.",
      "cap.music": "A song is playing: the cover on one side, the beat on the other, and the pupils pulse along.",
      "cap.message": "A message arrives. The eyes step aside for a moment so you can read who it's from and what it says.",
      "cap.charge": "Charger in, and it smiles. Pull the plug and it jumps.",
      "cap.headphones": "Headphones connect, and it lets you know which ones.",
      "cap.volume": "Change the volume or the screen brightness, and the notch shows how far, with a bar that follows your keys.",
      "cap.focus": "During a focus session the eyes narrow and an hourglass keeps the time.",
      "cap.prayer": "Before each prayer, a short countdown in the notch.",
      "cap.sleepy": "Leave it alone for a while and it dozes off. Come back and it wakes up.",
      "cap.open": "Click the notch and it opens into a panel: the time, music, focus and the next prayer.",
      "wing.sender": "Mum",
      "wing.message": "Have you eaten yet?",
      "wing.charge": "Charging",
      "wing.headphones": "Connected",
      "wing.prayer": "Maghrib · 10 min",
      "panel.title": "Click it and it opens up.",
      "panel.body":
        "The notch grows into a small panel with your day in one place. Switch pages along the top, or open the settings window for everything else.",
      "panel.home": "Home",
      "panel.focus": "Focus",
      "panel.prayer": "Prayer times",
      "panel.homeAlt": "Home page of the panel: the time and date, plus music, focus and the next prayer time.",
      "panel.focusAlt": "Focus page of the panel: an hourglass, the time left, and start, pause and skip buttons.",
      "panel.prayerAlt": "Prayer page of the panel: today's six prayer times for Jakarta, with Isha next.",
      "panel.tools": "Tools",
      "panel.toolsAlt": "Tools page of the panel: a to-do list with three tasks, and the other tools listed on the left.",
      "panel.toolsText":
        "A to-do list, quick notes, a calculator, clipboard history, a timer and a unit and currency converter, right under the notch.",
      "panel.homeText": "The time, what's playing, your focus timer and the next prayer, at a glance.",
      "panel.focusText":
        "A Pomodoro timer drawn as an hourglass. The sand runs while you work, and the glass flips over for your break.",
      "panel.prayerText": "Prayer times for your city, a reminder before each one, and an adzan sound you choose.",
      "panel.more": "There are pages for music with synced lyrics, the weather, and notifications too.",
      "panel.note": "Screenshots from the app in Indonesian. It speaks English too.",
      "platforms.title": "At home on both.",
      "platforms.mac": "On a Mac",
      "platforms.mac1": "It wraps around the notch, so it looks like part of the screen.",
      "platforms.mac2": "Prefer it floating? Switch the shape to a small island in settings.",
      "platforms.mac3": "The music equalizer needs macOS 14.2 or later.",
      "platforms.win": "On Windows",
      "platforms.win1": "It hangs from the top edge like a notch. Prefer it floating? Switch the shape to a small island in settings.",
      "platforms.win2":
        "Music comes from any player in the Windows media controls, like Spotify or YouTube in a browser.",
      "platforms.win3": "Find it in the tray, next to the clock. Windows 10 and 11.",
      "platforms.both":
        "On both, the settings live in a normal app window: eyes, music, focus, prayer times and alerts.",
      "film.title": "The launch film",
      "film.error": 'The film didn\'t load. <a href="assets/antique-launch.mp4">Open the video file</a> instead.',
      "film.caption": "28 seconds, no sound.",
      "eyes.title": "Make it yours.",
      "eyes.body":
        "Four eye styles, a notch or a floating island, and a size that fits your screen. All free. Pick one to try it on the screen above.",
      "eyes.lentera": "Warm amber",
      "eyes.lumen": "Cool blue light",
      "eyes.bara": "Glowing ember",
      "eyes.neko": "Cat's eye",
      "custom.screen": "Screen",
      "custom.eyes": "Eyes",
      "custom.shape": "Shape",
      "custom.notch": "Notch",
      "custom.floating": "Floating",
      "custom.size": "Size",
      "custom.smaller": "Smaller",
      "custom.bigger": "Bigger",
      "download.title": "Download Antique",
      "download.macFile": "Disk image (.dmg), macOS 12 or later, Apple Silicon and Intel",
      "download.winFile": "Installer (.exe), Windows 10 and 11",
      "download.macNote": "First launch: if macOS blocks it, open System Settings, Privacy & Security, and choose Open Anyway.",
      "download.winNote": "First launch: if Windows shows SmartScreen, choose More info, then Run anyway.",
      "download.mac": "Download for macOS",
      "download.win": "Download for Windows",
      "download.soon": "Coming soon",
      "foot.font": "Headings set in Fraunces,",
      "foot.license": "SIL Open Font License",
      "foot.top": "Back to top",
      "foot.privacy": "Privacy",
    },
    id: {
      title: "Antique: sepasang mata di atas layarmu",
      skip: "Langsung ke isi",
      "intro.hello": "Halo.",
      "nav.try": "Coba",
      "nav.download": "Unduh",
      "hero.kicker": "Untuk macOS dan Windows",
      "hero.title": "Sepasang mata untuk bagian atas layarmu.",
      "hero.lede":
        "Antique adalah notch kecil di atas layarmu: melingkari notch kamera di Mac, menggantung dari tepi atas layar di Windows. Matanya mengikuti kursor, ikut bergoyang dengan musik, dan menampilkan pesan, timer fokus, atau waktu sholat berikutnya saat dibutuhkan.",
      "hero.downloadMac": "Unduh untuk macOS",
      "hero.downloadWin": "Unduh untuk Windows",
      "hero.options": "Pilihan unduhan",
      "hero.otherWin": "Versi Windows",
      "hero.otherMac": "Versi Mac",
      "meta.version": "Versi",
      "meta.soon": "Unduhan segera dibuka.",
      "try.title": "Coba Antique",
      "try.group": "Tampilkan satu momen",
      "try.more":
        "Dia juga memberi tahu saat flashdisk dicolok, baterai hampir habis, atau sebentar lagi hujan. Saat kamu main game layar penuh, dia menyingkir.",
      "island.label": "Notch Antique. Klik untuk membuka panel.",
      "chip.rest": "Diam",
      "chip.music": "Musik",
      "chip.message": "Pesan",
      "chip.charge": "Mengisi daya",
      "chip.headphones": "Headphone",
      "chip.volume": "Volume",
      "chip.focus": "Fokus",
      "chip.prayer": "Sholat",
      "chip.sleepy": "Ngantuk",
      "chip.open": "Buka",
      "cap.rest": "Saat tidak ada apa-apa, dia cuma memperhatikan. Coba gerakkan kursormu.",
      "cap.music": "Lagu diputar: sampul di satu sisi, ketukan di sisi lain, dan pupilnya ikut berdenyut.",
      "cap.message": "Pesan masuk. Matanya menyingkir sebentar supaya kamu bisa membaca pengirim dan isinya.",
      "cap.charge": "Charger dicolok, dia tersenyum. Dicabut, dia kaget.",
      "cap.headphones": "Headphone tersambung, dan dia memberi tahu yang mana.",
      "cap.volume": "Atur volume atau kecerahan layar, dan notch menampilkan seberapa jauh, dengan bar yang mengikuti tombolmu.",
      "cap.focus": "Selama sesi fokus matanya menyipit, dan jam pasir menjaga waktunya.",
      "cap.prayer": "Sebelum tiap waktu sholat, ada hitung mundur singkat di notch.",
      "cap.sleepy": "Ditinggal lama, dia tertidur. Begitu kamu kembali, dia bangun.",
      "cap.open": "Klik notch-nya dan dia terbuka jadi panel: jam, musik, fokus, dan sholat berikutnya.",
      "wing.sender": "Ibu",
      "wing.message": "Sudah makan belum, nak?",
      "wing.charge": "Mengisi daya",
      "wing.headphones": "Tersambung",
      "wing.prayer": "Maghrib · 10 mnt",
      "panel.title": "Klik, dan dia terbuka.",
      "panel.body":
        "Notch melebar jadi panel kecil berisi harimu. Ganti halaman lewat deretan ikon di atas, atau buka jendela pengaturan untuk sisanya.",
      "panel.home": "Beranda",
      "panel.focus": "Fokus",
      "panel.prayer": "Waktu sholat",
      "panel.homeAlt": "Halaman Beranda di panel: jam dan tanggal, musik, fokus, dan waktu sholat berikutnya.",
      "panel.focusAlt": "Halaman Fokus di panel: jam pasir, sisa waktu, serta tombol mulai, jeda, dan lewati.",
      "panel.prayerAlt": "Halaman Sholat di panel: enam waktu sholat hari ini untuk Jakarta, Isya berikutnya.",
      "panel.tools": "Alat",
      "panel.toolsAlt": "Halaman Alat di panel: daftar tugas berisi tiga tugas, dan alat lainnya di kiri.",
      "panel.toolsText":
        "Daftar tugas, catatan cepat, kalkulator, riwayat clipboard, timer, serta konversi satuan dan mata uang, tepat di bawah notch.",
      "panel.homeText": "Jam, lagu yang diputar, timer fokus, dan sholat berikutnya, sekali lihat.",
      "panel.focusText":
        "Timer Pomodoro berbentuk jam pasir. Pasirnya mengalir selama kamu bekerja, lalu kacanya berbalik untuk istirahat.",
      "panel.prayerText": "Waktu sholat untuk kotamu, pengingat sebelum tiap waktu, dan suara adzan pilihanmu.",
      "panel.more": "Ada juga halaman musik dengan lirik sinkron, cuaca, dan pemberitahuan.",
      "panel.note": "Tangkapan layar dari aplikasinya. Tersedia dalam bahasa Indonesia dan English.",
      "platforms.title": "Betah di keduanya.",
      "platforms.mac": "Di Mac",
      "platforms.mac1": "Dia melingkari notch, jadi terlihat seperti bagian dari layar.",
      "platforms.mac2": "Lebih suka mengambang? Ganti bentuknya jadi pulau kecil di pengaturan.",
      "platforms.mac3": "Equalizer musik butuh macOS 14.2 atau lebih baru.",
      "platforms.win": "Di Windows",
      "platforms.win1": "Dia menggantung dari tepi atas layar seperti notch. Lebih suka mengambang? Ganti bentuknya jadi pulau kecil di pengaturan.",
      "platforms.win2":
        "Musik diambil dari pemutar mana pun di kontrol media Windows, misalnya Spotify atau YouTube di browser.",
      "platforms.win3": "Cari di tray, dekat jam. Windows 10 dan 11.",
      "platforms.both":
        "Di keduanya, pengaturan ada di jendela aplikasi biasa: mata, musik, fokus, waktu sholat, dan pemberitahuan.",
      "film.title": "Film peluncuran",
      "film.error": 'Video gagal dimuat. <a href="assets/antique-launch.mp4">Buka file videonya</a> saja.',
      "film.caption": "28 detik, tanpa suara.",
      "eyes.title": "Atur sesukamu.",
      "eyes.body":
        "Empat gaya mata, bentuk notch atau pulau mengambang, dan ukuran yang pas untuk layarmu. Semuanya gratis. Pilih salah satu untuk mencobanya di layar di atas.",
      "eyes.lentera": "Amber hangat",
      "eyes.lumen": "Cahaya biru",
      "eyes.bara": "Bara merah",
      "eyes.neko": "Mata kucing",
      "custom.screen": "Layar",
      "custom.eyes": "Mata",
      "custom.shape": "Bentuk",
      "custom.notch": "Notch",
      "custom.floating": "Mengambang",
      "custom.size": "Ukuran",
      "custom.smaller": "Lebih kecil",
      "custom.bigger": "Lebih besar",
      "download.title": "Unduh Antique",
      "download.macFile": "Disk image (.dmg), macOS 12 atau lebih baru, Apple Silicon dan Intel",
      "download.winFile": "Installer (.exe), Windows 10 dan 11",
      "download.macNote": "Saat pertama dibuka: bila macOS menolak, buka System Settings, Privacy & Security, lalu pilih Open Anyway.",
      "download.winNote": "Saat pertama dibuka: bila muncul SmartScreen, pilih More info, lalu Run anyway.",
      "download.mac": "Unduh untuk macOS",
      "download.win": "Unduh untuk Windows",
      "download.soon": "Segera hadir",
      "foot.font": "Judul memakai Fraunces,",
      "foot.license": "SIL Open Font License",
      "foot.top": "Kembali ke atas",
      "foot.privacy": "Privasi",
    },
  };

  /** Strings that carry a link. They are written here, never taken from user input. */
  const HTML_KEYS = new Set(["film.error"]);

  let lang = "en";
  const t = (key) => TEXT[lang][key] ?? TEXT.en[key] ?? key;

  function storageGet(store, key) {
    try {
      return store.getItem(key);
    } catch {
      return null;
    }
  }

  function storageSet(store, key, value) {
    try {
      store.setItem(key, value);
    } catch {
      /* Private mode or blocked storage: it just won't be remembered. */
    }
  }

  function pickInitialLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "id") return fromUrl;
    const saved = storageGet(localStorage, "antique.lang");
    if (saved === "en" || saved === "id") return saved;
    return (navigator.language || "").toLowerCase().startsWith("id") ? "id" : "en";
  }

  /* ---------------- Platform & downloads ---------------- */

  function detectPlatform() {
    const source = `${navigator.userAgentData?.platform ?? ""} ${navigator.platform ?? ""} ${navigator.userAgent}`;
    if (/iPhone|iPad|Android/i.test(source)) return "phone";
    if (/Win/i.test(source)) return "windows";
    if (/Mac/i.test(source)) return "mac";
    return "other";
  }

  const platform = detectPlatform();
  const ready = (key) => DOWNLOADS[key].trim() !== "";

  function renderDownloads() {
    const primaryKey = platform === "windows" ? "windows" : "mac";
    const otherKey = primaryKey === "mac" ? "windows" : "mac";

    const hero = document.getElementById("hero-download");
    const other = document.getElementById("hero-other");
    if (platform !== "phone" && ready(primaryKey)) {
      hero.href = DOWNLOADS[primaryKey];
      hero.textContent = t(primaryKey === "mac" ? "hero.downloadMac" : "hero.downloadWin");
    } else {
      hero.href = "#download";
      hero.textContent = t("hero.options");
    }
    other.href = "#download";
    other.textContent = t(otherKey === "mac" ? "hero.otherMac" : "hero.otherWin");
    other.hidden = platform === "phone" || !ready(primaryKey);

    document.querySelectorAll("[data-download]").forEach((button) => {
      const key = button.dataset.download;
      if (ready(key)) {
        button.href = DOWNLOADS[key];
        button.removeAttribute("aria-disabled");
        button.textContent = t(key === "mac" ? "download.mac" : "download.win");
      } else {
        button.removeAttribute("href");
        button.setAttribute("aria-disabled", "true");
        button.textContent = t("download.soon");
      }
    });

    // The visitor's own platform goes first.
    const list = document.querySelector(".downloads");
    const mine = list.querySelector(`[data-platform="${primaryKey}"]`);
    if (mine && list.firstElementChild !== mine) list.prepend(mine);

    const anyReady = ready("mac") || ready("windows");
    document.querySelectorAll(".meta").forEach((meta) => {
      meta.querySelector(".soon")?.remove();
      if (!anyReady) {
        const soon = document.createElement("span");
        soon.className = "soon";
        soon.textContent = ` · ${t("meta.soon")}`;
        meta.append(soon);
      }
    });
  }

  /* ---------------- Eyes (same geometry as src/lib/eyes) ---------------- */

  const SHAPE = { width: 62, height: 48, radius: 24 };
  const TRAVEL = { x: 13, y: 9 };
  const IRIS_TRAVEL = { x: 9, y: 6 };
  const IRIS_RADIUS = 19;
  const DEPTH = 0.1;
  const SMILE_RADIUS_RATIO = 0.62;

  const EXPRESSIONS = {
    idle: { topCover: 0, topTilt: 0, bottomCover: 0, scale: 1, pupil: 1 },
    focus: { topCover: 0.3, topTilt: 10, bottomCover: 0.12, scale: 1, pupil: 0.78 },
    alert: { topCover: 0, topTilt: 0, bottomCover: 0, scale: 1.2, pupil: 0.62 },
    sleepy: { topCover: 0.58, topTilt: -4, bottomCover: 0, scale: 0.94, pupil: 1.2 },
    happy: { topCover: 0, topTilt: 0, bottomCover: 0.42, scale: 1.08, pupil: 1.15 },
  };

  const GLOW = { lentera: "#ff9b3d", bara: "#ff3b3b", lumen: "#5cc4ff", neko: "#c8f06a" };
  const BLADE = "M50 22 C57 23 61 28 60 34 C57 31 53 30.5 49 31.5 C46 29 46.5 24 50 22 Z";
  let uidCounter = 0;

  /** Iris art per style, on a circle of radius 50. The element with class "pupil" scales with mood. */
  function irisArt(iris, uid) {
    switch (iris) {
      case "bara":
        return `
          <defs><radialGradient id="g${uid}"><stop offset="0%" stop-color="#ff8a66"/><stop offset="55%" stop-color="#e3161c"/><stop offset="100%" stop-color="#5e0410"/></radialGradient></defs>
          <circle r="50" fill="url(#g${uid})"/>
          <circle r="48" fill="none" stroke="#2a0306" stroke-width="3"/>
          <circle r="25" fill="none" stroke="#2a0306" stroke-width="2.4" opacity="0.65"/>
          <g class="spin">${[0, 90, 180, 270]
            .map((a) => `<path d="${BLADE}" fill="#170103" transform="rotate(${a}) scale(1.35) translate(-50 -50)"/>`)
            .join("")}</g>
          <circle class="pupil" r="10" data-r="10" fill="#100001"/>
          <circle cx="12" cy="-16" r="5" fill="#fff" opacity="0.65"/>`;
      case "lumen":
        return `
          <defs><radialGradient id="g${uid}"><stop offset="0%" stop-color="#e9fbff"/><stop offset="50%" stop-color="#4fb8f0"/><stop offset="100%" stop-color="#0b3f78"/></radialGradient></defs>
          <circle r="50" fill="url(#g${uid})"/>
          <g class="spin">${[0, 45, 90, 135, 180, 225, 270, 315]
            .map((a) => `<circle cy="-34" r="3.2" fill="#e9fbff" opacity="0.85" transform="rotate(${a})"/>`)
            .join("")}</g>
          <circle class="pupil" r="19" data-r="19" fill="#06182e"/>
          <circle cx="13" cy="-15" r="7.5" fill="#fff" opacity="0.9"/>`;
      case "neko":
        return `
          <defs><radialGradient id="g${uid}" cy="42%" r="62%"><stop offset="0%" stop-color="#f6ffc2"/><stop offset="45%" stop-color="#bfe24a"/><stop offset="100%" stop-color="#4f7410"/></radialGradient></defs>
          <circle r="50" fill="url(#g${uid})"/>
          <circle r="48" fill="none" stroke="#2e4708" stroke-width="3" opacity="0.7"/>
          <ellipse class="pupil" rx="7" ry="42" data-rx="7" fill="#0d1003"/>
          <ellipse cx="16" cy="-18" rx="7" ry="5" fill="#fff" opacity="0.85"/>`;
      default:
        return `
          <defs><radialGradient id="g${uid}"><stop offset="0%" stop-color="#ffd98a"/><stop offset="55%" stop-color="#e8701a"/><stop offset="100%" stop-color="#7a2604"/></radialGradient></defs>
          <circle r="50" fill="url(#g${uid})"/>
          <circle r="48" fill="none" stroke="#5a1a02" stroke-width="3" opacity="0.6"/>
          <circle class="pupil" r="21" data-r="21" fill="#241003"/>
          <circle cx="15" cy="-17" r="8.5" fill="#fff" opacity="0.88"/>
          <circle cx="-13" cy="15" r="3.6" fill="#fff" opacity="0.5"/>`;
    }
  }

  function createEye(host, side, iris = "lentera") {
    const uid = `e${++uidCounter}`;
    const glow = GLOW[iris];
    const wrap = document.createElement("span");
    wrap.className = "eye";
    wrap.innerHTML = `
      <svg viewBox="-50 -50 100 100" style="filter: drop-shadow(0 0 1.5px ${glow}) drop-shadow(0 0 5px ${glow}99)">
        <defs>
          <mask id="m${uid}" maskUnits="userSpaceOnUse" x="-90" y="-90" width="180" height="180">
            <rect class="shape" fill="white"/>
            <rect class="lid" x="-120" width="240" height="160" fill="black"/>
            <circle class="smile" cx="0" fill="black"/>
          </mask>
          <radialGradient id="s${uid}" cy="58%" r="70%">
            <stop offset="0%" stop-color="#fff6e4"/><stop offset="80%" stop-color="#fbe8c8"/><stop offset="100%" stop-color="#e9cfa3"/>
          </radialGradient>
        </defs>
        <g class="move">
          <g mask="url(#m${uid})">
            <rect x="-80" y="-80" width="160" height="160" fill="url(#s${uid})"/>
            <g class="iris">${irisArt(iris, uid)}</g>
          </g>
        </g>
      </svg>`;
    host.append(wrap);
    const q = (selector) => wrap.querySelector(selector);
    return {
      side,
      shape: q(".shape"),
      lid: q(".lid"),
      smile: q(".smile"),
      move: q(".move"),
      iris: q(".iris"),
      pupil: q(".pupil"),
      spin: q(".spin"),
    };
  }

  /** Draws one eye. Same math as the app's eye components. */
  function drawEye(eye, { look, openness, expression, pulse = 0, spin = 0 }) {
    const mirror = eye.side === "left" ? 1 : -1;
    const depth = 1 + look.x * DEPTH * (eye.side === "right" ? 1 : -1);
    const scale = expression.scale * depth;
    const width = SHAPE.width * scale * (1 + (1 - openness) * 0.18);
    const height = Math.max(SHAPE.height * scale * openness, 2.5);
    const radius = Math.min(SHAPE.radius * scale, width / 2, height / 2);
    const top = -height / 2;
    const lidY = top + expression.topCover * height;
    const smileRadius = SHAPE.width * scale * SMILE_RADIUS_RATIO;
    const smileY = height / 2 + smileRadius - expression.bottomCover * height;
    const irisScale = (IRIS_RADIUS / 50) * (1 + 0.2 * Math.min(1, Math.max(0, pulse)) ** 1.6);

    set(eye.shape, { x: -width / 2, y: top, width, height, rx: radius });
    set(eye.lid, { y: lidY - 160, transform: `rotate(${expression.topTilt * mirror} 0 ${lidY})` });
    set(eye.smile, { cy: smileY, r: smileRadius });
    set(eye.move, { transform: `translate(${look.x * TRAVEL.x} ${look.y * TRAVEL.y})` });
    set(eye.iris, {
      transform: `translate(${look.x * IRIS_TRAVEL.x} ${look.y * IRIS_TRAVEL.y}) scale(${irisScale})`,
    });
    if (eye.pupil.dataset.r) set(eye.pupil, { r: Number(eye.pupil.dataset.r) * expression.pupil });
    else set(eye.pupil, { rx: Number(eye.pupil.dataset.rx) * expression.pupil });
    if (eye.spin) set(eye.spin, { transform: `rotate(${spin})` });
  }

  function set(el, attrs) {
    for (const [name, value] of Object.entries(attrs)) {
      el.setAttribute(name, typeof value === "number" ? value.toFixed(2) : value);
    }
  }

  const mix = (a, b, k) => {
    const out = {};
    for (const key of Object.keys(a)) out[key] = a[key] + (b[key] - a[key]) * k;
    return out;
  };

  /** Blink curve: open → shut → open over 190 ms. */
  const blinkAt = (since) => (since < 0 || since >= 190 ? 1 : since < 70 ? 1 - since / 70 : (since - 70) / 120);

  /* ---------------- The stage ---------------- */

  const device = document.getElementById("device");
  const screen = document.getElementById("screen");
  const island = document.getElementById("island");
  const wingLeft = document.getElementById("wing-left");
  const wingRight = document.getElementById("wing-right");
  const eyesHost = document.getElementById("eyes");
  const caption = document.getElementById("try-caption");
  const chips = [...document.querySelectorAll(".chips button")];
  const pair = [createEye(eyesHost, "left"), createEye(eyesHost, "right")];

  // The centre slot: the camera on a Mac, the eyes on Windows.
  const centre = document.createElement("span");
  centre.className = "centre";
  const lens = document.createElement("span");
  lens.className = "lens";
  wingLeft.after(centre);

  /** Screen size the notch is drawn at; --u scales it to the real screen. */
  let designWidth = 1000;
  function fitStage() {
    const width = screen.clientWidth;
    designWidth = width < 600 ? 460 : 1000;
    device.style.setProperty("--u", (width / designWidth).toFixed(4));
  }
  new ResizeObserver(fitStage).observe(screen);
  fitStage();

  const ICON = {
    art: '<span class="art"></span>',
    message:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff6e4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 0 1-11.8 7L4 20l1.1-4.6A8 8 0 1 1 21 12z"/></svg>',
    charge:
      '<svg width="20" height="14" viewBox="0 0 28 16" fill="none" stroke="#fff6e4" stroke-width="1.8" stroke-linejoin="round"><rect x="1" y="2" width="22" height="12" rx="3"/><path d="M25 6v4" stroke-linecap="round"/><path d="M13 4.5 9.5 8.5H13l-1.5 3.5 4-4.5H12l1-3.5z" fill="#fff6e4" stroke="none"/></svg>',
    headphones:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff6e4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>',
    hourglass:
      '<svg width="10" height="16" viewBox="0 0 40 64"><path d="M9 6H31C31 18 22.5 24 21.2 32C22.5 40 31 46 31 58H9C9 46 17.5 40 18.8 32C17.5 24 9 18 9 6Z" fill="rgb(255 246 228 / .08)" stroke="rgb(255 246 228 / .5)" stroke-width="2"/><path d="M12 14H28C27 20 22 24 20 30C18 24 13 20 12 14Z" fill="#ff9b3d"/><path d="M11 56C12 50 16 47 20 46C24 47 28 50 29 56Z" fill="#ff9b3d"/><rect x="2" y="1" width="36" height="5" rx="1.6" fill="#bfa88c"/><rect x="2" y="58" width="36" height="5" rx="1.6" fill="#bfa88c"/></svg>',
    volume:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff6e4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M19 5a10 10 0 0 1 0 14"/></svg>',
    mosque:
      '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ff9b3d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.5 1.6 4 3.3 4 5.5H8C8 6.3 9.5 4.6 12 3z"/><path d="M5 21V11h14v10"/><path d="M3 21h18"/><path d="M10 21v-4a2 2 0 0 1 4 0v4"/></svg>',
  };

  const BARS = '<span class="bars"><i></i><i></i><i></i><i></i></span>';
  /** Volume HUD: percent and a bar that climbs like a held volume key. */
  const HUD_PERCENT = 64;
  const HUD_BAR_W = 46;
  const HUD = `<span class="label">${HUD_PERCENT}%</span><span class="hudbar"><i style="width: ${HUD_PERCENT}%"></i></span>`;

  /** What each state shows: an icon, a text (or a live element), and the mood of the eyes. */
  const STATES = {
    rest: { mood: "idle" },
    music: { mood: "idle", icon: ICON.art, extra: BARS },
    // A message moves the eyes aside, like the app: the sender and the text take their place.
    message: { mood: "alert", icon: ICON.message, text: "wing.message", sender: "wing.sender", quiet: true },
    charge: { mood: "happy", icon: ICON.charge, text: "wing.charge" },
    headphones: { mood: "alert", icon: ICON.headphones, text: "wing.headphones" },
    volume: { mood: "idle", icon: ICON.volume, extra: HUD },
    focus: { mood: "focus", icon: ICON.hourglass, extra: '<span class="label clock">25:00</span>' },
    prayer: { mood: "happy", icon: ICON.mosque, text: "wing.prayer" },
    sleepy: { mood: "sleepy" },
    open: { mood: "happy" },
  };

  let os = "mac";
  let current = "rest";
  let stateStart = performance.now();

  /** Width of a piece of wing content, measured with the island's own font. */
  const measureCanvas = document.createElement("canvas").getContext("2d");
  function textWidth(text) {
    const style = getComputedStyle(island);
    measureCanvas.font = `600 11.5px ${style.fontFamily}`;
    return measureCanvas.measureText(text).width;
  }

  const ICON_W = 18;
  const GAP = 6;
  const PAD = 14;

  function renderIsland() {
    const spec = STATES[current];
    const text = spec.text ? t(spec.text) : "";
    const sender = spec.sender ? t(spec.sender) : "";
    const textHtml = spec.sender
      ? `<span class="label"><b>${sender}</b> <span class="dim">${text}</span></span>`
      : spec.text
        ? `<span class="label">${text}</span>`
        : (spec.extra ?? "");
    const textW = spec.text
      ? textWidth(sender ? `${sender} ${text}` : text)
      : spec.extra === BARS
        ? 18
        : spec.extra === HUD
          ? textWidth(`${HUD_PERCENT}%`) + GAP + HUD_BAR_W
          : spec.extra
            ? textWidth("25:00")
            : 0;
    const showActivity = current !== "rest" && current !== "sleepy" && current !== "open";

    wingLeft.replaceChildren();
    wingRight.replaceChildren();
    centre.replaceChildren();

    island.style.removeProperty("--c");
    if (os === "mac") {
      // Mac: eyes in the left wing, the camera in the middle, the activity on the right.
      // A message puts the app icon where the eyes were.
      if (spec.quiet) wingLeft.innerHTML = spec.icon;
      else wingLeft.append(eyesHost);
      centre.append(lens);
      if (showActivity) wingRight.innerHTML = spec.quiet ? textHtml : spec.icon + textHtml;
      island.style.setProperty("--wl", "62px");
      const iconW = spec.quiet ? 0 : ICON_W + GAP;
      // The camera stays centred, so the right wing can't run past the screen edge.
      const maxWing = designWidth / 2 - 124 / 2 - 8;
      const wing = Math.min(maxWing, Math.ceil(PAD * 2 + iconW + textW));
      island.style.setProperty("--wr", showActivity ? `${wing}px` : "62px");
    } else {
      // Windows: eyes in the middle, icon on the left, text on the right. A message puts its
      // text in the middle instead of the eyes.
      if (spec.quiet) {
        centre.innerHTML = textHtml;
        island.style.setProperty("--c", `${Math.ceil(textW + 8)}px`);
      } else {
        centre.append(eyesHost);
      }
      if (showActivity) {
        wingLeft.innerHTML = spec.icon;
        if (!spec.quiet) wingRight.innerHTML = textHtml;
      }
      island.style.setProperty("--wl", showActivity ? `${PAD + ICON_W + 6}px` : "20px");
      island.style.setProperty("--wr", showActivity && !spec.quiet ? `${Math.ceil(PAD + 6 + textW)}px` : `${PAD}px`);
    }
    // Size (Windows): the whole notch grows or shrinks, like the size setting in the app.
    holder.style.setProperty("--size", os === "windows" && current !== "open" ? String(SIZES[size]) : "1");
    // The open panel has fixed sizes in CSS; inline wing widths must not override them.
    if (current === "open") {
      island.style.removeProperty("--wl");
      island.style.removeProperty("--wr");
    }
  }

  function setState(next) {
    if (!STATES[next]) return;
    current = next;
    stateStart = performance.now();
    island.dataset.state = next;
    island.setAttribute("aria-expanded", String(next === "open"));
    chips.forEach((chip) => chip.setAttribute("aria-pressed", String(chip.dataset.state === next)));
    caption.textContent = t(`cap.${next}`);
    renderIsland();
  }

  /* Customisation: eye style, shape and size, like the app's appearance settings. */
  const holder = island.parentElement;
  const THEMES = [
    ["lentera", "Lentera"],
    ["lumen", "Lumen"],
    ["bara", "Bara"],
    ["neko", "Neko"],
  ];
  const SIZES = [0.85, 1, 1.15, 1.3];
  let size = 1;
  const themePick = document.getElementById("theme-pick");

  for (const [key, name] of THEMES) {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.theme = key;
    button.setAttribute("aria-pressed", String(key === "lentera"));
    button.innerHTML = `<i class="swatch swatch-${key}" aria-hidden="true"></i>${name}`;
    button.addEventListener("click", () => setTheme(key));
    themePick.append(button);
  }

  function setTheme(next) {
    eyesHost.replaceChildren();
    pair[0] = createEye(eyesHost, "left", next);
    pair[1] = createEye(eyesHost, "right", next);
    document.querySelectorAll("[data-theme]").forEach((el) => {
      if (el.tagName === "BUTTON") el.setAttribute("aria-pressed", String(el.dataset.theme === next));
    });
  }

  function setShape(next) {
    device.dataset.shape = next;
    document.querySelectorAll("button[data-shape]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.shape === next));
    });
  }

  document.querySelectorAll("button[data-shape]").forEach((button) => {
    button.addEventListener("click", () => setShape(button.dataset.shape));
  });
  document.querySelectorAll("button[data-size]").forEach((button) => {
    button.addEventListener("click", () => {
      size = Math.min(SIZES.length - 1, Math.max(0, size + Number(button.dataset.size)));
      document.querySelector('button[data-size="-1"]').disabled = size === 0;
      document.querySelector('button[data-size="1"]').disabled = size === SIZES.length - 1;
      renderIsland();
    });
  });

  function setOs(next) {
    os = next;
    device.dataset.os = next;
    document.getElementById("custom").dataset.os = next;
    document.querySelectorAll("[data-os]").forEach((button) => {
      if (button.tagName === "BUTTON") button.setAttribute("aria-pressed", String(button.dataset.os === next));
    });
    renderIsland();
  }

  chips.forEach((chip) => chip.addEventListener("click", () => setState(chip.dataset.state)));
  document.querySelectorAll("button[data-os]").forEach((button) => {
    button.addEventListener("click", () => setOs(button.dataset.os));
  });
  island.addEventListener("click", () => setState(current === "open" ? "rest" : "open"));
  addEventListener("keydown", (event) => {
    if (event.key === "Escape" && current === "open") {
      setState("rest");
      island.focus();
    }
  });

  /* Clock on the fake menu bar / taskbar. */
  function tick() {
    const time = new Date().toLocaleTimeString(lang === "id" ? "id-ID" : "en-US", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("mb-clock").textContent = time;
    document.getElementById("tb-clock").textContent = time;
  }
  setInterval(tick, 15000);

  /* ---------------- Where the eyes look ---------------- */

  const look = {
    now: { x: 0, y: 0.2 },
    target: { x: 0, y: 0.2 },
    expression: { ...EXPRESSIONS.idle },
    nextBlink: performance.now() + 2500,
    lastInput: performance.now(),
    wanderAt: 0,
    alertUntil: 0,
  };
  const SLEEP_AFTER = 25000;

  function onPointer(x, y) {
    const box = eyesHost.getBoundingClientRect();
    look.target = {
      x: Math.max(-1, Math.min(1, (x - (box.left + box.width / 2)) / (innerWidth * 0.45))),
      y: Math.max(-1, Math.min(1, (y - (box.top + box.height / 2)) / (innerHeight * 0.55))),
    };
    const now = performance.now();
    if (current === "sleepy") {
      // Coming back wakes it up, with a small startle.
      setState("rest");
      look.alertUntil = now + 700;
    } else if (now - look.lastInput > SLEEP_AFTER) {
      look.alertUntil = now + 700;
    }
    look.lastInput = now;
  }

  let pointerReady = false;
  addEventListener(
    "pointermove",
    (event) => {
      // The first move after choosing "Sleepy" should not wake it straight away.
      if (current === "sleepy" && performance.now() - stateStart < 1500) return;
      if (pointerReady) onPointer(event.clientX, event.clientY);
    },
    { passive: true },
  );
  addEventListener("keydown", () => (look.lastInput = performance.now()));

  /* ---------------- Eye styles ---------------- */

  // Each style is a button: it puts that style on the stage and scrolls back up to it.
  const irisRow = document.getElementById("iris-row");
  const showcase = THEMES.map(([iris, name]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "iris";
    button.dataset.theme = iris;
    button.setAttribute("aria-pressed", String(iris === "lentera"));
    const eyeHost = document.createElement("span");
    eyeHost.className = "iris-eye";
    const label = document.createElement("span");
    label.className = "iris-name";
    label.textContent = name;
    const note = document.createElement("small");
    note.dataset.theme = iris;
    note.textContent = t(`eyes.${iris}`);
    label.append(note);
    button.append(eyeHost, label);
    button.addEventListener("click", () => {
      setTheme(iris);
      document.getElementById("try").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
    irisRow.append(button);
    return createEye(eyeHost, "left", iris);
  });

  /* ---------------- Opening ---------------- */

  const intro = document.getElementById("intro");
  const introShade = document.getElementById("intro-shade");
  const introEyesHost = document.getElementById("intro-eyes");
  const introHello = document.getElementById("intro-hello");
  const introPair = [createEye(introEyesHost, "left"), createEye(introEyesHost, "right")];
  let introStart = 0;
  let introRunning = false;
  let introFlying = false;
  const introAnimations = [];

  /** The opening plays once per visit; ?intro=1 replays it. */
  function shouldPlayIntro() {
    if (reduceMotion) return false;
    if (new URLSearchParams(location.search).get("intro") === "1") return true;
    return storageGet(sessionStorage, "antique.intro") !== "seen";
  }

  function startIntro() {
    introRunning = true;
    introStart = performance.now();
    intro.classList.add("on");
    document.body.classList.add("intro-running");
    eyesHost.style.opacity = "0";
    introEyesHost.animate([{ opacity: 0, transform: "scale(0.92)" }, { opacity: 1, transform: "scale(1)" }], {
      duration: 500,
      easing: "ease-out",
    });
    introHello.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 350, fill: "backwards" });
    setTimeout(flyIntro, 2300);
    for (const type of ["pointerdown", "keydown", "wheel", "touchstart"]) {
      addEventListener(type, endIntro, { once: true, passive: true });
    }
  }

  /** The eyes back away into the screen and land in the notch while the page opens around them. */
  function flyIntro() {
    if (!introRunning) return;
    introFlying = true;
    const from = introEyesHost.getBoundingClientRect();
    const to = eyesHost.getBoundingClientRect();
    const visible = to.top > 0 && to.bottom < innerHeight;
    const fx = from.left + from.width / 2;
    const fy = from.top + from.height / 2;
    const tx = visible ? to.left + to.width / 2 : fx;
    const ty = visible ? to.top + to.height / 2 : fy;
    const scale = visible ? to.width / from.width : 0.1;
    const duration = 1150;

    introAnimations.push(
      introEyesHost.animate(
        [
          { transform: "translate(0, 0) scale(1)" },
          { transform: `translate(${tx - fx}px, ${ty - fy}px) scale(${scale})`, opacity: visible ? 1 : 0 },
        ],
        { duration, easing: "cubic-bezier(.55, 0, .2, 1)", fill: "forwards" },
      ),
      introHello.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: "forwards" }),
    );
    introShade.style.setProperty("--x", `${tx}px`);
    introShade.style.setProperty("--y", `${ty}px`);
    introAnimations.push(
      introShade.animate(
        [
          { "--hole": "0px", opacity: 1 },
          { "--hole": `${Math.hypot(innerWidth, innerHeight)}px`, opacity: 1, offset: 0.85 },
          { "--hole": `${Math.hypot(innerWidth, innerHeight)}px`, opacity: 0 },
        ],
        // The eyes land first; only then does the screen open around them.
        { duration: 950, delay: duration - 80, easing: "cubic-bezier(.5, 0, .3, 1)", fill: "forwards" },
      ),
    );
    setTimeout(endIntro, duration + 950);
  }

  function endIntro() {
    if (!introRunning) return;
    introRunning = false;
    introAnimations.forEach((animation) => animation.cancel());
    intro.classList.remove("on");
    document.body.classList.remove("intro-running");
    eyesHost.style.opacity = "";
    eyesHost.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 200 });
    storageSet(sessionStorage, "antique.intro", "seen");
    pointerReady = true;
    look.lastInput = performance.now();
  }

  /** Where the big eyes look during the opening: around the room, then at you. */
  function introLook(elapsed) {
    if (introFlying) return { x: 0, y: -0.2 };
    if (elapsed < 900) return { x: 0, y: 0 };
    if (elapsed < 1300) return { x: -0.75, y: 0.1 };
    if (elapsed < 1750) return { x: 0.75, y: 0.1 };
    return { x: 0, y: 0 };
  }

  /* ---------------- Animation loop ---------------- */

  let last = performance.now();
  let spin = 0;
  const introLookNow = { x: 0, y: 0 };

  function frame(now) {
    const dt = Math.min(64, now - last) / 16.67;
    last = now;
    const follow = 1 - Math.pow(1 - 0.16, dt);

    // Blinks every few seconds (not while asleep).
    if (now - look.nextBlink >= 190) look.nextBlink = now + 2400 + Math.random() * 3600;
    const openness = blinkAt(now - look.nextBlink);

    if (introRunning) {
      const target = introLook(now - introStart);
      introLookNow.x += (target.x - introLookNow.x) * follow;
      introLookNow.y += (target.y - introLookNow.y) * follow;
      const elapsed = now - introStart;
      const introOpen = Math.min(blinkAt(elapsed - 650), blinkAt(elapsed - 1950));
      for (const eye of introPair) {
        drawEye(eye, { look: introLookNow, openness: introOpen, expression: EXPRESSIONS.idle });
      }
    }

    // Stage eyes: the pointer, or a slow wander on touch screens.
    if (touchOnly && now > look.wanderAt) {
      look.target = { x: Math.random() * 1.6 - 0.8, y: Math.random() * 0.8 - 0.1 };
      look.wanderAt = now + 1800 + Math.random() * 2600;
    }
    const fixed = current === "sleepy" || current === "focus" ? { x: 0, y: 0.45 } : null;
    const target = fixed ?? look.target;
    look.now.x += (target.x - look.now.x) * follow;
    look.now.y += (target.y - look.now.y) * follow;

    let mood = STATES[current].mood;
    if (current === "rest") {
      if (now < look.alertUntil) mood = "alert";
      else if (!touchOnly && now - look.lastInput > SLEEP_AFTER) mood = "sleepy";
    }
    look.expression = mix(look.expression, EXPRESSIONS[mood], 1 - Math.pow(1 - 0.14, dt));

    // Music: a steady 112 bpm beat for the pupils and the equalizer bars.
    let pulse = 0;
    if (current === "music" && !reduceMotion) {
      const beat = ((now - stateStart) / (60000 / 112)) % 1;
      pulse = Math.max(0, 1 - beat * 3.2);
      wingRight.querySelectorAll(".bars i").forEach((bar, i) => {
        const level = 0.25 + 0.75 * Math.abs(Math.sin(now / (150 + i * 47) + i)) * (0.55 + pulse * 0.45);
        bar.style.setProperty("--level", level.toFixed(2));
      });
    }

    if (current === "focus") {
      const left = Math.max(0, 25 * 60 - Math.floor((now - stateStart) / 1000));
      const clock = wingRight.querySelector(".clock");
      if (clock) clock.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`;
    }

    const sleepyOpen = current === "sleepy" || mood === "sleepy" ? 1 : openness;
    for (const eye of pair) {
      drawEye(eye, { look: look.now, openness: sleepyOpen, expression: look.expression, pulse });
    }

    spin = reduceMotion ? 0 : spin + 0.35 * dt;
    const soft = { x: look.now.x * 0.6, y: look.now.y * 0.6 };
    for (const eye of showcase) {
      drawEye(eye, { look: soft, openness, expression: EXPRESSIONS.idle, spin });
    }

    raf = requestAnimationFrame(frame);
  }

  let raf = requestAnimationFrame(frame);
  document.addEventListener("visibilitychange", () => {
    cancelAnimationFrame(raf);
    if (!document.hidden) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  });

  /* ---------------- Panel tabs ---------------- */

  const tabs = [...document.querySelectorAll('[role="tab"]')];

  function selectTab(tab, focus) {
    for (const other of tabs) {
      const selected = other === tab;
      other.setAttribute("aria-selected", String(selected));
      other.tabIndex = selected ? 0 : -1;
      document.getElementById(other.getAttribute("aria-controls")).hidden = !selected;
    }
    if (focus) tab.focus();
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab, false));
    tab.addEventListener("keydown", (event) => {
      const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (event.key === "Home") selectTab(tabs[0], true);
      else if (event.key === "End") selectTab(tabs[tabs.length - 1], true);
      else if (step) selectTab(tabs[(index + step + tabs.length) % tabs.length], true);
      else return;
      event.preventDefault();
    });
  });

  /* ---------------- Film ---------------- */

  document
    .querySelector("#film source")
    .addEventListener("error", () => (document.getElementById("film-error").hidden = false));

  /* ---------------- Language ---------------- */

  function applyLang(next) {
    lang = next;
    document.documentElement.lang = lang;
    document.title = t("title");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      if (HTML_KEYS.has(key)) el.innerHTML = t(key);
      else el.textContent = t(key);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => (el.alt = t(el.dataset.i18nAlt)));
    document.querySelectorAll("[data-i18n-label]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nLabel)));
    document.querySelectorAll(".iris small").forEach((el) => (el.textContent = t(`eyes.${el.dataset.theme}`)));
    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    caption.textContent = t(`cap.${current}`);
    renderIsland();
    renderDownloads();
    tick();
  }

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      storageSet(localStorage, "antique.lang", button.dataset.lang);
      applyLang(button.dataset.lang);
    });
  });

  applyLang(pickInitialLang());
  setOs(platform === "windows" ? "windows" : "mac");
  setState("rest");

  if (shouldPlayIntro()) {
    // Wait for the fonts so the notch is in its final place before the eyes fly to it.
    document.fonts.ready.then(startIntro);
  } else {
    pointerReady = true;
  }
})();
