/* Video Compressor landing — language dropdown + scroll reveal. No dependencies.
   Mirrors web-audioconverter/js/main.js; add more dictionaries to DICTS/LANGS to extend. */
(function () {
  'use strict';

  /* ---------- i18n ---------- */
  /* English defaults live in the HTML; they are captured on load so the
     dictionaries only need the translated strings. */
  var VI = {
  "nav.features": "Tính năng",
  "nav.how": "Cách dùng",
  "nav.formats": "Định dạng",
  "nav.faq": "Hỏi đáp",
  "nav.get": "Tải ứng dụng",
  "nav.download": "Tải về",
  "footer.tag": "Xưởng âm thanh trong túi bạn. Được tạo bởi FightTech.",
  "footer.privacy": "Quyền riêng tư",
  "footer.terms": "Điều khoản",
  "footer.support": "Hỗ trợ",
  "footer.copy": "© 2026 FightTech. Bảo lưu mọi quyền.",
  "hero.kicker": "XƯỞNG ÂM THANH TRONG TÚI BẠN",
  "hero.a": "Giữ lại âm thanh.",
  "hero.b": "Tạo dấu ấn riêng.",
  "hero.sub": "Biến video thành bản nhạc yêu thích. Tách MP3, cắt đoạn hay, ghép nhạc và tạo nhạc chuông — ngay trên điện thoại Android.",
  "cta": "Tải trên Google Play",
  "see": "Khám phá ứng dụng ↗",
  "hero.note": "Android 8.0+ · Xử lý media trên thiết bị",
  "formats": "Tệp của bạn. Định dạng bạn chọn.",
  "features.k": "ÍT THAO TÁC HƠN",
  "features.h": "Thêm không gian cho âm thanh.",
  "f01": "Tìm. Ghim. Sử dụng.",
  "fd01": "Tìm công cụ theo tên và ghim mục yêu thích. Bộ công cụ riêng luôn sẵn sàng khi bạn mở lại ứng dụng.",
  "f02": "Cắt trên sóng âm",
  "fd02": "Chọn đoạn bạn muốn bằng thanh cắt và nghe thử trước khi lưu.",
  "f03": "Một tệp hay cả danh sách",
  "fd03": "Đổi định dạng, chỉnh chất lượng và xử lý nhiều tệp. Các lựa chọn hàng loạt và hàng đợi nâng cao tuỳ gói sử dụng.",
  "f04": "Sẵn sàng phát và chia sẻ",
  "fd04": "Lưu âm thanh, nghe lại, chia sẻ hoặc đặt làm nhạc chuông ngay từ màn hình kết quả.",
  "shots.k": "KHÁM PHÁ GIAO DIỆN",
  "shots.h": "Công cụ nhỏ. Thật nhiều cách tạo.",
  "shot1": "Xưởng âm thanh",
  "shot2": "Video sang âm thanh",
  "shot3": "Cắt video",
  "shot4": "Cắt âm thanh",
  "shot5": "Định dạng âm thanh",
  "shot6": "Ghép nhạc",
  "shot7": "Tăng âm lượng",
  "shot8": "Lưu và chia sẻ",
  "how.h": "Từ video sang âm thanh qua ba bước.",
  "howt1": "Chọn video",
  "howd1": "Mở Video sang âm thanh và chọn một tệp trên điện thoại.",
  "howt2": "Chỉnh theo ý bạn",
  "howd2": "Chọn định dạng, chất lượng hoặc cắt một đoạn.",
  "howt3": "Lưu âm thanh",
  "howd3": "Xuất vào thư viện nhạc, rồi phát hoặc chia sẻ.",
  "faq.h": "Một vài điều cần biết.",
  "q0": "Video có rời khỏi điện thoại không?",
  "a0": "Chuyển đổi media chạy trên thiết bị. Quảng cáo, phân tích và mua hàng có thể dùng internet; xem chính sách riêng tư để biết chi tiết.",
  "q1": "Có thể lưu định dạng nào?",
  "a1": "Bộ công cụ âm thanh hỗ trợ MP3, AAC (M4A), OPUS, WAV và M4R. Một số định dạng và tuỳ chọn nâng cao cần Premium.",
  "q2": "Tất cả đều miễn phí không?",
  "a2": "Bạn có thể chuyển đổi cơ bản mà không cần đăng ký. Một số công cụ nâng cao, tuỳ chọn chất lượng và số lượng tệp lớn hơn cần lượt hoặc Premium.",
  "q3": "Tải ứng dụng ở đâu?",
  "a3": "Tải Video To Audio & Mp3 Cutter miễn phí trên Google Play, dùng cho Android 8.0 trở lên.",
  "q4": "Nên chọn bitrate MP3 bao nhiêu?",
  "a4": "192 kbps là mức mặc định hợp lý. Dùng 320 kbps (tốn lượt hoặc Premium) cho nhạc muốn giữ lâu, 96 kbps mono cho podcast và bài giảng, 64 kbps mono để gửi nhanh. Bitrate cao hơn không làm âm thanh của video hay hơn bản gốc.",
  "q5": "Có làm nhạc chuông từ video được không?",
  "a5": "Được. Tách âm thanh, cắt đoạn muốn lấy trên sóng âm rồi bấm Nhạc chuông ở màn kết quả. Lần đầu đặt nhạc chuông, Android có thể hỏi quyền thay đổi cài đặt hệ thống.",
  "tools.h": "Còn trong Xưởng âm thanh:",
  "tools.list": "cắt nhạc, cắt nhiều đoạn, chia nhỏ file, ghép nhạc, trộn nhạc, tăng âm lượng, đổi tốc độ, đổi giọng, karaoke (tách lời) và chuyển đổi định dạng âm thanh. Một số công cụ cần lượt hoặc Premium.",
  "blog.k": "HƯỚNG DẪN",
  "blog.h": "Dùng âm thanh hiệu quả hơn.",
  "blog1.k": "Từng bước",
  "blog1.t": "Cách chuyển video sang MP3 trên Android, không cần tải lên mạng",
  "blog1.d": "Cắt đoạn, chọn MP3, AAC, OPUS, WAV hoặc M4R, chọn bitrate, rồi phát, chia sẻ hay đặt nhạc chuông.",
  "blog2.k": "Chất lượng",
  "blog2.t": "Nên chọn bitrate MP3 bao nhiêu? 320, 192, 96 hay 64 kbps",
  "blog2.d": "Dung lượng theo phút, mono hay stereo, và cấu hình một chạm cho nhạc, podcast, nhạc chuông và chia sẻ.",
  "blog.all": "Tất cả hướng dẫn ↗",
  "download.title": "Tải Video To Audio & Mp3 Cutter",
  "download.intro": "Xưởng âm thanh trong túi bạn đã sẵn sàng trên Android.",
  "dl1": "Tải Video To Audio & Mp3 Cutter từ Google Play để tách âm thanh, chuyển video sang MP3, cắt, ghép và chỉnh sửa âm thanh.",
  "download.cta": "Tải trên Google Play",
  "support.title": "Bạn cần hỗ trợ gì?",
  "support.intro": "Hỗ trợ Video To Audio & Mp3 Cutter",
  "sup1": "Nếu gặp lỗi chuyển đổi, hãy gửi định dạng nguồn, phiên bản Android và thông báo lỗi. Không gửi các tệp media riêng tư qua email.",
  "privacy.title": "Chính sách riêng tư",
  "privacy.intro": "Media được giữ trên thiết bị khi chuyển đổi.",
  "pr1": "Video To Audio & Mp3 Cutter xử lý tệp âm thanh và video đã chọn trên thiết bị. Quyền media cho phép chọn và quản lý tệp. Quyền danh bạ và cài đặt hệ thống chỉ được yêu cầu cho tính năng nhạc chuông cần quyền đó.",
  "pr2": "Khi được cấu hình để phát hành, dịch vụ quảng cáo (Google AdMob và Unity), Firebase Analytics/Crashlytics và Google Play Billing có thể xử lý mã thiết bị, sự kiện sử dụng, chẩn đoán và thông tin mua hàng theo chính sách riêng. Nội dung media không được tải lên để chuyển đổi.",
  "privacy.feedback": "Khi dùng Cài đặt → Gửi phản hồi, chủ đề, nội dung và email liên hệ không bắt buộc được gửi qua HTTPS đến FightTech tại fighttech.vn, cùng thông tin thiết bị và ứng dụng để chẩn đoán lỗi. Ảnh chụp màn hình chỉ được gửi nếu bạn đính kèm. Bạn có thể để trống email và dùng ứng dụng mà không gửi phản hồi. Email chỉ dùng để trả lời yêu cầu hỗ trợ, không dùng cho quảng cáo. Phản hồi được lưu để xử lý yêu cầu, không chỉ xử lý tạm thời trong bộ nhớ. Để yêu cầu xoá phản hồi, gửi email đến fighttech.vn@gmail.com. Tệp media không được tải lên để chuyển đổi.",
  "pr3": "Mục yêu thích và tuỳ chọn được lưu trên thiết bị. Bạn có thể xoá dữ liệu ứng dụng trong cài đặt Android. Media đã xuất vẫn ở thư viện cho tới khi bạn xoá. Liên hệ FightTech nếu có câu hỏi về quyền riêng tư.",
  "terms.title": "Điều khoản sử dụng",
  "terms.intro": "Chỉ sử dụng media bạn có quyền chỉnh sửa.",
  "te1": "Bạn chịu trách nhiệm về media mình xử lý và chia sẻ. Không dùng ứng dụng để xâm phạm bản quyền hoặc quyền của người khác. Hãy sao lưu tệp gốc quan trọng.",
  "te2": "Các tính năng nâng cao có thể cần lượt hoặc Premium. Google Play hiển thị giá và điều khoản gia hạn trước khi mua. Quản lý gói đăng ký và yêu cầu hoàn tiền qua Google Play.",
  "te3": "Ứng dụng được cung cấp theo tình trạng sẵn có. Khả năng tương thích định dạng và thời gian xử lý phụ thuộc vào thiết bị và tệp nguồn. Điều khoản không loại bỏ quyền người tiêu dùng không thể từ bỏ theo luật áp dụng."
};

  var LANGS = [
    { code: 'en', label: 'English' },
    { code: 'vi', label: 'Tiếng Việt' }
  ];
  var DICTS = { vi: VI };
  var STORAGE_KEY = 'videomp4tomp3-lang';

  var EN = {}; // captured from the HTML defaults on load
  var nodes = document.querySelectorAll('[data-i18n]');
  nodes.forEach(function (el) {
    EN[el.getAttribute('data-i18n')] = el.textContent;
  });

  var dropdown = document.querySelector('.lang-dropdown');
  var ddBtn = dropdown ? dropdown.querySelector('.lang-btn') : null;
  var ddLabel = dropdown ? dropdown.querySelector('.lang-btn-label') : null;
  var ddMenu = dropdown ? dropdown.querySelector('.lang-menu') : null;
  var ddItems = ddMenu ? Array.prototype.slice.call(ddMenu.querySelectorAll('[data-lang]')) : [];

  function labelFor(lang) {
    for (var i = 0; i < LANGS.length; i++) {
      if (LANGS[i].code === lang) return LANGS[i].label;
    }
    return 'English';
  }

  function updateDropdown(lang) {
    if (!dropdown) return;
    if (ddLabel) ddLabel.textContent = labelFor(lang);
    ddItems.forEach(function (item) {
      var on = item.getAttribute('data-lang') === lang;
      item.classList.toggle('active', on);
      item.setAttribute('aria-checked', on ? 'true' : 'false');
    });
  }

  var current = 'en';
  try {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved && (saved === 'en' || DICTS[saved])) current = saved;
  } catch (e) { /* file:// or private mode — ignore */ }

  function setLang(lang) {
    var dict = DICTS[lang] || {};
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = dict[key] != null ? dict[key] : EN[key];
      if (val != null) el.textContent = val;
    });
    document.documentElement.lang = lang;
    // Bài blog tồn tại thành hai trang tĩnh riêng — đổi link nav theo ngôn ngữ.
    var attr = 'data-href-' + (lang === 'vi' ? 'vi' : 'en');
    Array.prototype.forEach.call(document.querySelectorAll('[data-href-vi][data-href-en]'), function (a) {
      var href = a.getAttribute(attr);
      if (href) a.setAttribute('href', href);
    });
    syncLightboxLang(lang);
    updateDropdown(lang);
    current = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
  }

  /* ---------- Dropdown behaviour ---------- */
  if (dropdown && ddBtn && ddMenu) {
    var openMenu = function (focusFirst) {
      ddMenu.hidden = false;
      ddBtn.setAttribute('aria-expanded', 'true');
      if (focusFirst) {
        var active = ddMenu.querySelector('.active') || ddItems[0];
        if (active) active.focus();
      }
    };
    var closeMenu = function (refocus) {
      if (ddMenu.hidden) return;
      ddMenu.hidden = true;
      ddBtn.setAttribute('aria-expanded', 'false');
      if (refocus) ddBtn.focus();
    };

    ddBtn.addEventListener('click', function () {
      if (ddMenu.hidden) openMenu(false); else closeMenu(false);
    });
    ddBtn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        openMenu(true);
      }
    });

    ddItems.forEach(function (item, idx) {
      item.addEventListener('click', function () {
        var lang = item.getAttribute('data-lang');
        if (lang !== current) setLang(lang);
        closeMenu(true);
      });
      item.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowDown') next = ddItems[(idx + 1) % ddItems.length];
        else if (e.key === 'ArrowUp') next = ddItems[(idx - 1 + ddItems.length) % ddItems.length];
        else if (e.key === 'Home') next = ddItems[0];
        else if (e.key === 'End') next = ddItems[ddItems.length - 1];
        else if (e.key === 'Tab') { closeMenu(false); return; }
        else return;
        e.preventDefault();
        if (next) next.focus();
      });
    });

    document.addEventListener('click', function (e) {
      if (!ddMenu.hidden && !dropdown.contains(e.target)) closeMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !ddMenu.hidden) closeMenu(true);
    });
  }

  if (current !== 'en') setLang(current); else updateDropdown('en');

  /* ---------- Scroll reveal ---------- */
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');

  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.1 });
    revealEls.forEach(function (el) { io.observe(el); });
  }
  /* ---------- Screenshot lightbox ---------- */
  var LB_TEXT = {
    en: { open: 'View full screen', close: 'Close', prev: 'Previous screenshot', next: 'Next screenshot' },
    vi: { open: 'Xem toàn màn hình', close: 'Đóng', prev: 'Ảnh trước', next: 'Ảnh tiếp theo' }
  };
  var lbLang = current;
  var lbDialog = null;
  var lbImg = null;
  var lbCapText = null;
  var lbCount = null;
  var lbClose = null;
  var lbPrev = null;
  var lbNext = null;
  var lbTriggers = [];
  var lbShots = [];
  var lbIndex = 0;
  var lbLastFocus = null;

  function lbWords() { return LB_TEXT[lbLang] || LB_TEXT.en; }

  /* Called from setLang so the controls follow the page language. */
  function syncLightboxLang(lang) {
    lbLang = LB_TEXT[lang] ? lang : 'en';
    var w = lbWords();
    /* setLang can run before this block initialises, so stay defensive. */
    if (lbTriggers) lbTriggers.forEach(function (btn) { btn.setAttribute('aria-label', w.open); });
    if (lbClose) lbClose.setAttribute('aria-label', w.close);
    if (lbPrev) lbPrev.setAttribute('aria-label', w.prev);
    if (lbNext) lbNext.setAttribute('aria-label', w.next);
  }

  function lbBuild() {
    var d = document.createElement('dialog');
    d.className = 'lightbox';
    if (!d.showModal) d.classList.add('is-fallback');
    d.innerHTML =
      '<div class="lightbox-inner">' +
        '<img class="lightbox-img" alt="">' +
        '<p class="lightbox-cap"><span class="lightbox-cap-text"></span><span class="lightbox-count"></span></p>' +
      '</div>' +
      '<button type="button" class="lightbox-close">&times;</button>' +
      '<button type="button" class="lightbox-nav lightbox-prev">&#8249;</button>' +
      '<button type="button" class="lightbox-nav lightbox-next">&#8250;</button>';
    document.body.appendChild(d);

    lbDialog = d;
    lbImg = d.querySelector('.lightbox-img');
    lbCapText = d.querySelector('.lightbox-cap-text');
    lbCount = d.querySelector('.lightbox-count');
    lbClose = d.querySelector('.lightbox-close');
    lbPrev = d.querySelector('.lightbox-prev');
    lbNext = d.querySelector('.lightbox-next');

    lbClose.addEventListener('click', lbHide);
    lbPrev.addEventListener('click', function () { lbGo(-1); });
    lbNext.addEventListener('click', function () { lbGo(1); });

    /* Click on the backdrop area (anything but the image) closes. */
    d.addEventListener('click', function (e) {
      if (e.target === lbImg || (e.target.closest && e.target.closest('button'))) return;
      lbHide();
    });
    d.addEventListener('cancel', function (e) { e.preventDefault(); lbHide(); });
    d.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); lbGo(1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); lbGo(-1); }
      else if (e.key === 'Escape') { e.preventDefault(); lbHide(); }
    });

    var touchX = null;
    var touchY = null;
    d.addEventListener('touchstart', function (e) {
      touchX = e.changedTouches[0].clientX;
      touchY = e.changedTouches[0].clientY;
    }, { passive: true });
    d.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      var dy = e.changedTouches[0].clientY - touchY;
      touchX = null;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) lbGo(dx < 0 ? 1 : -1);
    }, { passive: true });
  }

  function lbRender() {
    var shot = lbShots[lbIndex];
    lbImg.src = shot.img.currentSrc || shot.img.src;
    lbImg.alt = shot.img.alt || '';
    lbCapText.textContent = shot.caption ? shot.caption.textContent : '';
    lbCount.textContent = (lbIndex + 1) + ' / ' + lbShots.length;
    var many = lbShots.length > 1;
    lbPrev.hidden = !many;
    lbNext.hidden = !many;
    /* Warm the neighbours so swiping feels instant. */
    [lbIndex - 1, lbIndex + 1].forEach(function (i) {
      var n = lbShots[(i + lbShots.length) % lbShots.length];
      if (n) { var pre = new Image(); pre.src = n.img.src; }
    });
  }

  function lbGo(step) {
    lbIndex = (lbIndex + step + lbShots.length) % lbShots.length;
    lbRender();
  }

  function lbShow(i) {
    lbIndex = i;
    lbLastFocus = document.activeElement;
    lbRender();
    document.body.style.overflow = 'hidden';
    if (lbDialog.showModal) lbDialog.showModal();
    else lbDialog.setAttribute('open', '');
    lbClose.focus();
  }

  function lbHide() {
    if (lbDialog.close) lbDialog.close(); else lbDialog.removeAttribute('open');
    document.body.style.overflow = '';
    lbImg.removeAttribute('src');
    if (lbLastFocus && lbLastFocus.focus) lbLastFocus.focus();
  }

  var shotFigures = Array.prototype.slice.call(document.querySelectorAll('.shots figure'));
  if (shotFigures.length) {
    shotFigures.forEach(function (fig) {
      var img = fig.querySelector('img');
      if (!img) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'shot-trigger';
      fig.insertBefore(btn, img);
      btn.appendChild(img);
      var i = lbShots.length;
      lbShots.push({ img: img, caption: fig.querySelector('figcaption') });
      lbTriggers.push(btn);
      btn.addEventListener('click', function () {
        if (!lbDialog) lbBuild();
        syncLightboxLang(lbLang);
        lbShow(i);
      });
    });
    syncLightboxLang(current);
  }

})();
