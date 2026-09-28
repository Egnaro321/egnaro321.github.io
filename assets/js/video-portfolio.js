/* Works with local file:// preview and ordinary static hosting. */
(function () {
  'use strict';
  var site = window.STRATA_SITE;
  if (!site || !site.profile || !Array.isArray(site.works)) return;
  var get = function (id) { return document.getElementById(id); };
  var create = function (tag, text, className) {
    var node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  };
  var setOptionalText = function (node, text) { node.textContent = text || ''; node.hidden = !text; };
  var profile = site.profile;
  document.title = (profile.name || '个人') + ' · 研究与视频作品';
  get('profile-name').textContent = profile.name || '';
  get('copyright-name').textContent = profile.name || '';
  get('profile-affiliation').textContent = profile.affiliation || '';
  get('profile-tagline').textContent = profile.tagline || '';
  get('intro-title').textContent = profile.introTitle || '研究与视频作品';
  setOptionalText(get('profile-intro'), profile.intro);
  get('works-title').textContent = site.worksTitle || '视频作品';
  setOptionalText(get('works-intro'), site.worksIntro);
  if (profile.avatar) {
    get('profile-avatar').src = profile.avatar;
    get('profile-avatar').alt = (profile.name || '') + '的头像';
    get('avatar-wrap').hidden = false;
    get('profile-monogram').hidden = true;
    get('profile-avatar').addEventListener('error', function () {
      get('avatar-wrap').hidden = true;
      get('profile-monogram').hidden = false;
    });
  }
  if (profile.email) { get('profile-email').textContent = profile.email; get('profile-email').href = 'mailto:' + profile.email; get('profile-email').hidden = false; }
  else { get('profile-email').hidden = true; get('profile-email').removeAttribute('href'); }
  (profile.research || []).forEach(function (text) { get('research-list').appendChild(create('li', text)); });
  get('research-block').hidden = !(profile.research && profile.research.length);
  (profile.platforms || []).forEach(function (text) { get('platform-list').appendChild(create('li', text)); });
  get('platform-block').hidden = !(profile.platforms && profile.platforms.length);

  var dialog = get('video-dialog'), video = get('portfolio-video');
  var closeButton = get('video-close'), fullscreenButton = get('video-fullscreen');
  var direct = get('video-direct'), status = get('video-status');
  var lastTrigger = null, playbackSession = 0, startedOutside = false;
  function message(text) { setOptionalText(status, text); }
  function openVideo(work, trigger) {
    if (typeof dialog.showModal !== 'function') { if (work.video) window.open(work.video, '_blank', 'noopener'); return; }
    lastTrigger = trigger;
    var session = ++playbackSession;
    get('video-title').textContent = work.shortName || work.title || '实验视频';
    setOptionalText(get('video-paper'), work.paper);
    setOptionalText(get('video-meta'), work.meta);
    setOptionalText(get('video-description'), work.description);
    message('');
    if (work.cover) video.poster = work.cover;
    else video.removeAttribute('poster');
    direct.hidden = !work.video;
    fullscreenButton.disabled = !work.video;
    video.hidden = !work.video;
    get('video-empty').hidden = !!work.video;
    get('video-actions').hidden = !work.video;
    if (work.video) direct.href = work.video;
    else direct.removeAttribute('href');
    dialog.showModal();
    document.body.classList.add('video-open');
    closeButton.focus({ preventScroll: true });
    if (!work.video) return;
    video.src = work.video;
    video.load();
    var playing = video.play();
    if (playing && typeof playing.catch === 'function') {
      playing.catch(function (error) {
        if (!dialog.open || session !== playbackSession) return;
        if (error.name === 'NotAllowedError') message('请点击视频画面中的播放按钮开始播放。');
      });
    }
  }
  function closeVideo() { if (dialog.open) dialog.close(); }
  closeButton.addEventListener('click', closeVideo);
  // Native dialog handles Escape, focus trapping, and the inert background.
  dialog.addEventListener('close', function () {
    ++playbackSession;
    video.pause();
    video.removeAttribute('src');
    video.load(); // Release media and cancel downloads, also after Escape.
    document.body.classList.remove('video-open');
    message('');
    if (lastTrigger && lastTrigger.isConnected) lastTrigger.focus({ preventScroll: true });
  });
  function outsideDialog(event) {
    var rect = dialog.getBoundingClientRect();
    return event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
  }
  dialog.addEventListener('pointerdown', function (event) { startedOutside = event.target === dialog && outsideDialog(event); });
  dialog.addEventListener('click', function (event) {
    if (startedOutside && event.target === dialog && outsideDialog(event)) closeVideo();
    startedOutside = false;
  });
  video.addEventListener('error', function () {
    if (!dialog.open || !video.getAttribute('src')) return;
    if (video.error && video.error.code === 3) message('视频解码失败。请尝试导出为 H.264 编码的 MP4，或直接打开视频。');
    else message('视频无法加载。请检查文件是否存在、路径和大小写是否正确；推荐使用 H.264 编码的 MP4。');
  });
  video.addEventListener('playing', function () { message(''); });
  fullscreenButton.addEventListener('click', function () {
    try {
      if (video.requestFullscreen) {
        var request = video.requestFullscreen();
        if (request && request.catch) request.catch(function () { message('请使用播放器自带的全屏按钮。'); });
      } else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
      else message('请使用播放器自带的全屏按钮，或直接打开视频。');
    } catch (error) { message('请使用播放器自带的全屏按钮。'); }
  });
  site.works.forEach(function (work, index) {
    var article = create('article', null, 'col-6 col-12-xsmall work-item');
    article.setAttribute('aria-label', work.shortName || work.paper || work.title || '研究作品');
    var button = create('button', null, 'video-thumb');
    button.type = 'button';
    button.classList.toggle('has-video', !!work.video);
    button.setAttribute('aria-label', (work.video ? '播放：' : '查看作品（视频待上线）：') + (work.shortName || work.title || '实验视频'));
    button.setAttribute('aria-haspopup', 'dialog');
    button.setAttribute('aria-controls', 'video-dialog');
    var placeholder = create('span', null, 'cover-placeholder');
    placeholder.append(create('span', String(index + 1).padStart(2, '0'), 'cover-number'), create('span', work.shortName || '研究作品', 'cover-name'));
    placeholder.setAttribute('aria-hidden', 'true');
    var image = create('img'); image.alt = ''; image.loading = 'lazy';
    if (work.cover) image.src = work.cover; else image.hidden = true;
    image.addEventListener('error', function () { image.hidden = true; });
    var playBadge = create('span', null, 'play-badge'); playBadge.setAttribute('aria-hidden', 'true');
    playBadge.hidden = !work.video;
    var state = create('span', work.video ? '播放' : '视频待上线', 'video-state');
    state.setAttribute('aria-hidden', 'true');
    button.append(placeholder, image, playBadge, state);
    button.addEventListener('click', function () { openVideo(work, button); });
    var heading = create('h3', null, 'work-tags');
    (work.title || '实验视频').split('·').map(function (tag) { return tag.trim(); }).filter(Boolean).forEach(function (tag) {
      heading.appendChild(create('span', tag, 'work-tag'));
    });
    article.append(button, heading);
    [['paper', 'paper-name'], ['meta', 'work-meta'], ['description', 'work-description']].forEach(function (field) { if (work[field[0]]) article.appendChild(create('p', work[field[0]], field[1])); });
    get('work-grid').appendChild(article);
  });
  if (Array.isArray(site.publications) && site.publications.length) {
    get('three').hidden = false; get('publication-nav').hidden = false;
    site.publications.forEach(function (paper) {
      var item = create('li'); item.appendChild(create('strong', paper.title || ''));
      var meta = [paper.venue, paper.status].filter(Boolean).join(' · ');
      if (meta) item.appendChild(create('p', meta));
      get('publication-list').appendChild(item);
    });
  }
  get('config-error').hidden = true;
})();
