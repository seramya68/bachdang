// =====================
// GAME BẠCH ĐẰNG 938 - FINAL DIRECTOR'S CUT
// - Video Fit Contain (Giữ tỉ lệ chuẩn)
// - Credits ghi danh cuối game
// - Nhạc chiến thắng delay 8s
// =====================

// 0. TẢI FONT
const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Merriweather:wght@400;700&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

// =====================
// 🔥 DANH SÁCH GHI CÔNG (HIỆN CUỐI GAME) 🔥
// =====================
const creditsText = [
  "MỘT DỰ ÁN CỦA TỔ 2 - AV3 (2024 - 2027)",
  "MÔ PHỎNG LỊCH SỬ TRẬN BẠCH ĐẰNG",
  "--------------------------------",
  "Vận hành bởi: Nguyễn Mai Gia Hòa",
  "Ý tưởng được đưa ra từ: Phạm Hồng Lê Na - Phạm Diệp Oanh"
];

// =====================
// 1) TIỆN ÍCH
// =====================
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function shuffledCopy(arr) {
  return shuffleInPlace(arr.slice());
}

// =====================
// 2) DỮ LIỆU CÂU HỎI
// =====================
const questionBank = [
  { type: "ABCD", q: "Năm Đinh Dậu (937), biến cố kinh hoàng nào đã chấn động Giao Châu?", a: "Kiều Công Tiễn giết Dương Đình Nghệ", options: ["Kiều Công Tiễn giết Dương Đình Nghệ", "Ngô Quyền lên ngôi Vua", "Quân Nam Hán sang xâm lược", "Dương Đình Nghệ đánh đuổi giặc"] },
  { type: "ABCD", q: "Kẻ nghịch thần nào đã 'cõng rắn cắn gà nhà', cầu cứu quân Nam Hán?", a: "Kiều Công Tiễn", options: ["Kiều Công Tiễn", "Lữ Gia", "Triệu Đà", "Lê Chiêu Thống"] },
  { type: "ABCD", q: "Chủ tướng giặc cầm đầu 2 vạn quân sang xâm phạm bờ cõi nước ta là ai?", a: "Lưu Hoằng Tháo", options: ["Lưu Hoằng Tháo", "Lưu Cung", "Thoát Hoan", "Mã Viện"] },
  { type: "ABCD", q: "Ngô Quyền đã chọn nơi hiểm yếu nào để định đoạt giang sơn?", a: "Cửa biển Bạch Đằng", options: ["Cửa biển Bạch Đằng", "Sông Như Nguyệt", "Bến Bình Than", "Ải Chi Lăng"] },
  { type: "ABCD", q: "Thiên thời, địa lợi nào của sông Bạch Đằng đã được tận dụng?", a: "Thủy triều lên xuống mạnh", options: ["Thủy triều lên xuống mạnh", "Lòng sông nhỏ hẹp", "Nước chảy xiết quanh năm", "Nhiều đá ngầm"] },
  { type: "ABCD", q: "Thứ vũ khí bí mật nào đã trở thành nỗi kinh hoàng của thuyền giặc?", a: "Cọc gỗ đầu bịt sắt", options: ["Cọc gỗ đầu bịt sắt", "Lưới sắt khổng lồ", "Chông tre tẩm độc", "Mìn tự tạo"] },
  { type: "ABCD", q: "Khi nước triều ĐANG DÂNG, Ngô Quyền dụng kế gì để dụ địch?", a: "Dùng thuyền nhẹ khiêu chiến giả thua", options: ["Dùng thuyền nhẹ khiêu chiến giả thua", "Dốc toàn lực tấn công", "Đóng cửa cố thủ", "Bắn tên lửa từ xa"] },
  { type: "ABCD", q: "Mưu sâu kế hiểm của việc 'giả thua' là gì?", a: "Nhử địch vào sâu trận địa cọc", options: ["Nhử địch vào sâu trận địa cọc", "Để bảo toàn lực lượng", "Chờ quân cứu viện", "Để địch chủ quan khinh địch"] },
  { type: "ABCD", q: "Thời khắc định mệnh để quân ta tổng phản công là khi nào?", a: "Khi thủy triều bắt đầu RÚT", options: ["Khi thủy triều bắt đầu RÚT", "Khi thủy triều lên cao nhất", "Khi trời vừa tối", "Khi địch vừa tới cửa sông"] },
  { type: "ABCD", q: "Khi nước rút, số phận hạm đội địch ra sao?", a: "Va vào cọc, vỡ tan và chìm", options: ["Va vào cọc, vỡ tan và chìm", "Bị nước cuốn trôi ra biển", "Bị mắc cạn trên bờ", "Bị quân ta vây bắt sống"] },
  { type: "ABCD", q: "Kết cục bi thảm của chủ tướng giặc Lưu Hoằng Tháo?", a: "Bỏ mạng tại trận", options: ["Bỏ mạng tại trận", "Bị bắt sống", "Chạy thoát về nước", "Đầu hàng quân ta"] },
  { type: "ABCD", q: "Chiến thắng Bạch Đằng 938 mang ý nghĩa vĩ đại gì?", a: "Chấm dứt 1000 năm Bắc thuộc", options: ["Chấm dứt 1000 năm Bắc thuộc", "Mở ra thời kỳ Bắc thuộc", "Thống nhất 12 sứ quân", "Đánh tan quân Mông Nguyên"] },
  { type: "TF", q: "Quân Nam Hán xâm lược nước ta bằng đường bộ?", a: "Sai", options: ["Đúng", "Sai"] }, 
  { type: "TF", q: "Ngô Quyền kéo quân ra Bắc để trừng trị nghịch thần Kiều Công Tiễn?", a: "Đúng", options: ["Đúng", "Sai"] },
  { type: "TF", q: "Chiến thắng này khẳng định quyền độc lập tự chủ muôn đời của dân tộc?", a: "Đúng", options: ["Đúng", "Sai"] }
];

// 3. KỊCH BẢN
const roleplayMessages = [
  "Bẩm Chúa công! Cá đã cắn câu! Tiên phong địch... đã sa vào tử địa! Kế sách 'nhử hổ ly sơn'... bước đầu đã ứng nghiệm!", 
  "Mật báo! Hoằng Tháo ngạo mạn thúc quân đuổi theo... Chúng ngỡ ta khiếp sợ... nên càng lấn tới... lọt sâu vào trùng vây!",
  "Thiên thời đã đến! Thủy triều đang RÚT rất nhanh!! Những mũi cọc sắt đầu tiên... đã chạm vào đáy thuyền giặc!",
  "Tuyệt diệu thay! Thuyền giặc va phải cọc ngầm! Tiếng gỗ vỡ... tiếng la hét... vang dậy cả một khúc sông!",
  "Địch quân đại loạn! Tiến thoái lưỡng nan... Đội hình thuyền chiến của chúng... đang vỡ vụn từng mảng!",
  "THỜI CƠ ĐÃ ĐIỂM!! Xin Chúa công phất cờ!! Quân ta từ các nhánh sông... đang đồng loạt đổ ra đánh úp!",
  "Nhìn kìa Chúa công! Máu nhuộm đỏ dòng Bạch Đằng... Tàu giặc đang dẫm đạp lên nhau... mà tháo chạy trong tuyệt vọng!",
  "Hạm đội Nam Hán... đã vỡ trận hoàn toàn! Thêm một chiến thuyền nữa làm mồi cho hà bá... Khí thế quân ta... đang ngút trời!",
  "Vòng vây đã khép!! Hoằng Tháo đã cùng đường! Hắn đang tuyệt vọng... giữa muôn trùng vây của quân dân Đại Việt!",
  "CẤP BÁO!!! TIN MỪNG VANG DỘI!!! Chủ tướng Hoằng Tháo... đã đền tội tại trận!! Quân giặc... như rắn mất đầu!!"
];

const loseMessages = {
  warn1: "Bẩm Chúa công... nguy to rồi! Một chiến thuyền giặc... vừa lách qua bãi cọc!\nXin Người... hãy mau định liệu lại kế sách!",
  warn2: "NGUY CẤP!! NGUY CẤP!! Địch quân đang bắn trả dữ dội!!\nPhòng tuyến sắp vỡ... Xin Chúa công hãy bảo trọng!!",
  gameover: "Ô HÔ... Cơ nghiệp ngàn năm... đành phó mặc dòng nước...\nGiặc đã vượt qua bãi cọc... tiến vào đất liền mất rồi..."
};

const introText = [
  "Mùa đông... năm 938... Gió bấc thổi mạnh.\nKiều Công Tiễn phản nghịch... Vua Nam Hán... mượn gió bẻ măng.",
  "CẤP BÁO!! CẤP BÁO!!!\nHoằng Tháo đã dẫn hai vạn quân... áp sát cửa biển!!\nGiang sơn ngàn cân treo sợi tóc... Xin Chúa công hãy ra lệnh!!"
];

// 4. BIẾN TOÀN CỤC
let lives = 3; let shipsDestroyed = 0; let gameEnded = false;
let bgmIntro, bgmBattle, sfxWaves;
const W = 1280; const H = 720;
const config = { type: Phaser.AUTO, width: W, height: H, backgroundColor: "#000", scene: { preload, create } };
new Phaser.Game(config);

function preload() {
  this.load.image("bg", "assets/background.png");
  this.load.image("ship", "assets/ship.png");
  this.load.image("stake", "assets/stake.png");
  this.load.image("ship_broken", "assets/shipbreak.png"); 
  this.load.image("arrow", "assets/arrow.png"); 
  
  this.load.audio("intro_part1", "assets/intro_part1.mp3");
  this.load.audio("intro_part2", "assets/intro_part2.mp3");
  for (let i = 1; i <= 10; i++) this.load.audio("win_" + i, "assets/win_" + i + ".mp3");
  this.load.audio("warn_1", "assets/warn_1.mp3");
  this.load.audio("warn_2", "assets/warn_2.mp3");
  this.load.audio("gameover", "assets/gameover.mp3");
  
  this.load.audio("victory_final", "assets/victory_final.mp3"); 
  this.load.audio("sfx_waves", "assets/sfx_waves.mp3");
  this.load.audio("bgm_intro", "assets/bgm_intro.mp3");
  this.load.audio("bgm_battle", "assets/bgm_battle.mp3");
  this.load.audio("bgm_victory_music", "assets/bgm_victory_music.mp3");
  this.load.audio("bgm_defeat_music", "assets/bgm_defeat_music.mp3");
  this.load.audio("sfx_arrow_hit", "assets/sfx_arrow_hit.mp3");
  this.load.audio("sfx_win_fanfare", "assets/sfx_win_fanfare.mp3");
  
  this.load.video('victory_vid', 'assets/ngoquyen_victory.mp4'); 
}

// 6. CREATE
function create() {
  const bg = this.add.image(W / 2, H / 2, "bg").setDisplaySize(W, H).setTint(0x444444);
  
  let startBtn = this.add.text(W/2, H/2 - 60, "BẤM ĐỂ KHAI HỎA!", { 
    fontFamily: '"Playfair Display", serif', fontSize: "40px", color: "#ffd700", fontStyle: "bold", 
    backgroundColor: "#550000", padding: {x: 20, y: 10}
  }).setOrigin(0.5).setInteractive({ useHandCursor: true });

  startBtn.on('pointerdown', () => {
    startBtn.destroy();
    if(this.cache.audio.exists('sfx_waves')) sfxWaves = this.sound.add("sfx_waves", { loop: true, volume: 0.5 });
    if(this.cache.audio.exists('bgm_intro')) bgmIntro = this.sound.add("bgm_intro", { loop: false, volume: 0.7 });
    if(this.cache.audio.exists('bgm_battle')) bgmBattle = this.sound.add("bgm_battle", { loop: true, volume: 0.4 });
    
    if(sfxWaves) sfxWaves.play();
    if(bgmIntro) bgmIntro.play();
    runIntro(this, bg);
  });

  this.lifeText = this.add.text(16, 16, "Mạng: ❤️ ❤️ ❤️", { 
    fontFamily: '"Playfair Display", serif', fontSize: "24px", color: "#fff" 
  }).setDepth(1000).setVisible(false);

  resetQuestionDeck(this);
}

function resetQuestionDeck(scene) {
  scene.questionIndices = Phaser.Utils.Array.NumberArray(0, questionBank.length - 1);
  Phaser.Utils.Array.Shuffle(scene.questionIndices);
}

function runIntro(scene, bg) {
  const overlay = scene.add.rectangle(W/2, H/2, W, H, 0x000000, 1).setDepth(3000);
  const line1 = scene.add.text(W/2, H/2 - 60, introText[0], { 
    fontFamily: '"Merriweather", serif', fontSize: "26px", align: "center", color: "#ddd", fontStyle: "italic" 
  }).setOrigin(0.5).setAlpha(0).setDepth(3001);

  let snd1;
  if (scene.cache.audio.exists('intro_part1')) {
      snd1 = scene.sound.add("intro_part1");
      snd1.play();
  }

  scene.tweens.add({ targets: line1, alpha: 1, duration: 1500 });

  const nextStep = () => {
      scene.tweens.add({ targets: line1, alpha: 0, duration: 500 });
      const line2 = scene.add.text(W/2, H/2, introText[1], { 
        fontFamily: '"Playfair Display", serif', fontSize: "32px", align: "center", color: "#ff4444", fontStyle: "bold" 
      }).setOrigin(0.5).setAlpha(0).setDepth(3001);
      
      let snd2;
      if (scene.cache.audio.exists('intro_part2')) {
          snd2 = scene.sound.add("intro_part2");
          snd2.play();
      }
      scene.cameras.main.shake(500, 0.005);
      scene.tweens.add({ targets: line2, alpha: 1, duration: 1000 });

      const showButton = () => {
          let btn = scene.add.rectangle(W/2, H - 100, 450, 80, 0xcc0000).setInteractive({ useHandCursor: true }).setDepth(3002);
          let btnT = scene.add.text(W/2, H - 100, "KHAI HỎA TRẬN ĐỊA!", { fontSize: "30px", color: "#ffff00", fontStyle: "bold" }).setOrigin(0.5).setDepth(3003);
          
          btn.on('pointerdown', () => {
            if(sfxWaves) sfxWaves.stop(); 
            if(bgmIntro) bgmIntro.stop();
            if(bgmBattle) bgmBattle.play();
            overlay.destroy(); line2.destroy(); btn.destroy(); btnT.destroy();
            bg.setTint(0xffffff); scene.lifeText.setVisible(true); spawnShips.call(scene, 10);
          });
      };

      if (snd2) snd2.on('complete', showButton);
      else scene.time.delayedCall(4000, showButton);
  };

  if (snd1) snd1.on('complete', nextStep);
  else scene.time.delayedCall(4000, nextStep);
}

function spawnShips(totalShips) {
  const centerX = W / 2; const centerY = H * 0.48; const gapX = 95; const gapY = 28;
  for (let i = 0; i < totalShips; i++) {
    const offset = i - Math.floor(totalShips / 2);
    const x = centerX + offset * gapX; const y = centerY + Math.abs(offset) * gapY;
    const ship = this.add.image(x, y, "ship").setScale(0.17).setDepth(40).setInteractive({ useHandCursor: true });
    ship.originalX = x; 
    ship.on("pointerdown", () => { if (!gameEnded) askQuestion(this, ship); });
  }
}

function askQuestion(scene, ship) {
  ship.disableInteractive();
  if (!scene.questionIndices || scene.questionIndices.length === 0) resetQuestionDeck(scene);
  const qData = questionBank[scene.questionIndices.pop()];

  const overlay = scene.add.rectangle(W/2, H/2, W, H, 0x000000, 0.8).setDepth(1500);
  const box = scene.add.rectangle(W/2, H/2, 900, 450, 0x111111).setStrokeStyle(2, 0xffd700).setDepth(1501);
  const questionTxt = scene.add.text(W/2, H/2 - 120, qData.q, { fontFamily: '"Merriweather", serif', fontSize: "24px", align: "center", wordWrap: { width: 800 } }).setOrigin(0.5).setDepth(1502);
  
  const displayOptions = shuffledCopy(qData.options);
  let btns = [];
  displayOptions.forEach((opt, i) => {
    let bx = W/2 + (i % 2 === 0 ? -220 : 220); let by = H/2 + (Math.floor(i / 2) * 90);
    let b = scene.add.rectangle(bx, by, 400, 70, 0x333333).setInteractive({ useHandCursor: true }).setDepth(1503);
    let t = scene.add.text(bx, by, opt, { fontSize: "18px", wordWrap: { width: 380 }, align: "center" }).setOrigin(0.5).setDepth(1504);
    btns.push(b, t);
    b.on('pointerdown', () => {
      overlay.destroy(); box.destroy(); questionTxt.destroy(); btns.forEach(el => el.destroy());
      if (opt === qData.a) destroyShip(scene, ship);
      else failAttack(scene, ship);
    });
  });
}

function destroyShip(scene, ship) {
  scene.cameras.main.shake(200, 0.005);
  if(scene.cache.audio.exists('sfx_win_fanfare')) scene.sound.play("sfx_win_fanfare"); 

  const stake = scene.add.image(ship.x, ship.y + 120, "stake").setScale(0.05).setDepth(35);
  scene.tweens.add({ targets: stake, y: ship.y + 60, duration: 400, ease: "Elastic.out" });

  scene.tweens.add({
      targets: ship, x: '+=5', y: '+=5', duration: 50, yoyo: true, repeat: 10,
      onComplete: () => {
          ship.setTexture("ship_broken");
          scene.tweens.add({ 
              targets: [ship, stake], alpha: 0, y: "+=150", duration: 1500, delay: 300, 
              onComplete: () => {
                ship.destroy(); stake.destroy();
                shipsDestroyed++;
                if(scene.cache.audio.exists("win_" + shipsDestroyed)) scene.sound.play("win_" + shipsDestroyed);
                showPopup(scene, `🗣️ TƯỚNG SĨ BẨM BÁO:\n"${roleplayMessages[shipsDestroyed - 1]}"`, shipsDestroyed === 10);
              }
          });
      }
  });
}

function failAttack(scene, ship) {
  scene.tweens.add({
    targets: ship, x: ship.x + 100, angle: -15, duration: 300, ease: 'Back.out',
    onComplete: () => {
       if(scene.cache.audio.exists('sfx_arrow_hit')) scene.sound.play("sfx_arrow_hit");
       const arrow = scene.add.image(ship.x, ship.y, "arrow").setScale(0.1).setDepth(2000);
       
       scene.tweens.add({ 
         targets: arrow, scale: 6, duration: 500, ease: 'Cubic.in', 
         onComplete: () => { 
             arrow.destroy(); 
             scene.cameras.main.flash(600, 200, 0, 0); 
             scene.cameras.main.shake(600, 0.03); 
             lives--;
             scene.lifeText.setText("Mạng: " + "❤️ ".repeat(lives) + "💔 ".repeat(3 - lives));

             if (lives === 2) {
                 if(scene.cache.audio.exists('warn_1')) scene.sound.play("warn_1");
                 showPopup(scene, `⚠️ CẢNH BÁO!\n"${loseMessages.warn1}"`);
                 returnShip(scene, ship);
             } else if (lives === 1) {
                 if(scene.cache.audio.exists('warn_2')) scene.sound.play("warn_2");
                 showPopup(scene, `⚠️ NGUY CẤP!\n"${loseMessages.warn2}"`);
                 returnShip(scene, ship);
             } else {
                 gameEnded = true; 
                 if(bgmBattle) bgmBattle.stop(); 
                 if(scene.cache.audio.exists('bgm_defeat_music')) scene.sound.play("bgm_defeat_music"); 
                 if(scene.cache.audio.exists('gameover')) scene.sound.play("gameover");
                 showPopup(scene, `☠️ ĐẠI BẠI!\n"${loseMessages.gameover}"`);
             }
         } 
       });
    }
  });
}

function returnShip(scene, ship) {
    scene.tweens.add({
        targets: ship, x: ship.originalX, angle: 0, duration: 500, delay: 500,
        onComplete: () => { if (!gameEnded) ship.setInteractive(); }
    });
}

function showPopup(scene, msg, isWin = false) {
  const overlay = scene.add.rectangle(W/2, H/2, W, H, 0x000000, 0.7).setDepth(2000).setInteractive();
  const box = scene.add.rectangle(W/2, H/2, 800, 300, 0x111111).setStrokeStyle(2, 0xffffff).setDepth(2001);
  const txt = scene.add.text(W/2, H/2, msg, { fontSize: "22px", align: "center", wordWrap: { width: 700 } }).setOrigin(0.5).setDepth(2002);
  overlay.on('pointerdown', () => {
    overlay.destroy(); box.destroy(); txt.destroy();
    if (isWin) { 
        if(bgmBattle) bgmBattle.stop(); 
        
        // NHẠC NỀN BÉ TÍ
        if(scene.cache.audio.exists('bgm_victory_music')) scene.sound.play("bgm_victory_music", { volume: 0.3 }); 
        
        showFinalVictory(scene);
    }
  });
}

// =====================
// HÀM VIDEO CHỐT (TỪ CHATGPT)
// + TỰ ĐỘNG CHỈNH SIZE (KHÔNG MÉO)
// + CREDITS CUỐI
// + NHẠC DELAY 8S
// =====================
function showFinalVictory(scene) {
  scene.sound.stopAll();
  scene.cameras.main.setZoom(1);
  scene.cameras.main.setScroll(0, 0);

  // Nền đen
  scene.add.rectangle(W / 2, H / 2, W, H, 0x000000, 1).setDepth(3999);

  if (scene.cache.video.exists("victory_vid")) {
    const vid = scene.add.video(W / 2, H / 2, "victory_vid");
    vid.setOrigin(0.5, 0.5);
    vid.setDepth(4000);

    // Fit video
    const fitContain = () => {
      const vw = vid.getVideoWidth ? vid.getVideoWidth() : (vid.video ? vid.video.videoWidth : 0);
      const vh = vid.getVideoHeight ? vid.getVideoHeight() : (vid.video ? vid.video.videoHeight : 0);

      if (!vw || !vh) {
        scene.time.delayedCall(50, fitContain);
        return;
      }
      const scale = Math.min(W / vw, H / vh);
      vid.setScale(scale);
      vid.setPosition(W / 2, H / 2);
    };

    vid.play(false);
    fitContain();

    // 1. Hiện chữ "ĐẠI THẮNG" sau 2s
    scene.time.delayedCall(2000, () => {
      scene.add.text(W / 2, H / 2 - 100, "ĐẠI THẮNG BẠCH ĐẰNG 938!", {
          fontFamily: '"Playfair Display", serif', fontSize: "50px", color: "#ffd700",
          fontStyle: "bold", stroke: "#000", strokeThickness: 6,
        }).setOrigin(0.5).setDepth(4001);
    });

    // 2. Hiện CREDITS sau 4s
    scene.time.delayedCall(4000, () => {
       let startCreditY = H/2 + 50;
       creditsText.forEach((line, i) => {
         let fontSize = (i <= 1) ? "22px" : "18px";
         let color = (i <= 1) ? "#ffffaa" : "#ffffff";
         let style = (i === 1) ? "italic" : "bold";
         
         scene.add.text(W/2, startCreditY + (i*35), line, {
            fontFamily: '"Merriweather", serif', fontSize: fontSize, color: color,
            fontStyle: style, stroke: "#000", strokeThickness: 4, align: "center"
         }).setOrigin(0.5).setDepth(4002);
       });
    });

    // 3. PHÁT NHẠC "VICTORY_FINAL" SAU 8 GIÂY (MỚI THÊM)
    scene.time.delayedCall(8000, () => {
        if(scene.cache.audio.exists('victory_final')) {
             scene.sound.play("victory_final"); 
        }
    });

  } else {
    // Dự phòng
    scene.add.text(W / 2, H / 2, "ĐẠI THẮNG BẠCH ĐẰNG 938!", {
        fontFamily: '"Playfair Display", serif', fontSize: "60px", color: "#ffd700", fontStyle: "bold",
      }).setOrigin(0.5).setDepth(4001);
  }
}