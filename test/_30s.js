const crypto = typeof require !== "undefined" && require('crypto');
const fs = typeof require !== "undefined" && require('fs');






  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();



  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};


  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;

  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);

  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);


  fns.forEach(
    fn => (
      (f = obj[fn]),
      (obj[fn] = function() {
        return f.apply(obj);
      })
    )
  );

  context[fn].apply(context, [...boundArgs, ...args]);

  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j;
  return Math.round(res);
};

  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);


const call = (key, ...args) => context => context[key](...args);

  first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));



  let curr = 0;
  const next = () => fns[curr++](next);
  next();
};

  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );




const collectInto = fn => (...args) => fn(args);

  black: `\x1b[30m${args.join(' ')}`,
  red: `\x1b[31m${args.join(' ')}`,
  green: `\x1b[32m${args.join(' ')}`,
  yellow: `\x1b[33m${args.join(' ')}`,
  blue: `\x1b[34m${args.join(' ')}`,
  magenta: `\x1b[35m${args.join(' ')}`,
  cyan: `\x1b[36m${args.join(' ')}`,
  white: `\x1b[37m${args.join(' ')}`,
  bgBlack: `\x1b[40m${args.join(' ')}\x1b[0m`,
  bgRed: `\x1b[41m${args.join(' ')}\x1b[0m`,
  bgGreen: `\x1b[42m${args.join(' ')}\x1b[0m`,
  bgYellow: `\x1b[43m${args.join(' ')}\x1b[0m`,
  bgBlue: `\x1b[44m${args.join(' ')}\x1b[0m`,
  bgMagenta: `\x1b[45m${args.join(' ')}\x1b[0m`,
  bgCyan: `\x1b[46m${args.join(' ')}\x1b[0m`,
  bgWhite: `\x1b[47m${args.join(' ')}\x1b[0m`
});





  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
};

  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};


  const el = document.createElement('div');
  el.innerHTML = str;
  return el.firstElementChild;
};

  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
  }
});

  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};


  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};

  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));

  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};


  Object.keys(obj).forEach(
    prop =>
      !(obj[prop] instanceof Object) || Object.isFrozen(obj[prop]) ? null : deepFreeze(obj[prop])
  ) || Object.freeze(obj);





  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};


  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
      if (acc !== undefined) return acc;
      if (typeof val === 'object') return dig(val, target);
    }, undefined);





  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};

  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};


  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

  const [a, b] = ratings;
  const expectedScore = (self, opponent) => 1 / (1 + 10 ** ((opponent - self) / 400));
  const newRating = (rating, i) =>
    (selfRating || rating) + kFactor * (i - expectedScore(i ? a : b, i ? b : a));
  if (ratings.length === 2) return [newRating(a, 1), newRating(b, 0)];

  for (let i = 0, len = ratings.length; i < len; i++) {
    let j = i;
    while (j < len - 1) {
      j++;
      [ratings[i], ratings[j]] = elo([ratings[i], ratings[j]], kFactor);
    }
  }
  return ratings;
};

  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};

  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );



  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

  n < 0
    ? (() => {
      throw new TypeError('Negative numbers are not allowed!');
    })()
    : n <= 1
      ? 1
      : n * factorial(n - 1);

  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );


  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));



  arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0];

  Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));

  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
const flip = fn => (first, ...rest) => fn(...rest, first);

  arr
    .slice(0)
    .reverse()
    .forEach(callback);

  if (ms < 0) ms = -ms;
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  };
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ');
};


  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));

  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();


  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');

  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};

  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );

  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );


  (dateFinal - dateInitial) / (1000 * 3600 * 24);

  const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
  return includeDuplicates ? images : [...new Set(images)];
};

  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';

  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});


  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );

  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});



  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));

  crypto.subtle.digest('SHA-256', new TextEncoder('utf-8').encode(val)).then(h => {
    let hexes = [],
      view = new DataView(h);
    for (let i = 0; i < view.byteLength; i += 4)
      hexes.push(('00000000' + view.getUint32(i).toString(16)).slice(-8));
    return hexes.join('');
  });

const hashNode = val =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          crypto
            .createHash('sha256')
            .update(val)
            .digest('hex')
        ),
      0
    )
  );


  let alpha = false,
    h = hex.slice(hex.startsWith('#') ? 1 : 0);
  if (h.length === 3) h = [...h].map(x => x + x).join('');
  else if (h.length === 8) alpha = true;
  h = parseInt(h, 16);
  return (
    'rgb' +
    (alpha ? 'a' : '') +
    '(' +
    (h >>> (alpha ? 24 : 16)) +
    ', ' +
    ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
    ', ' +
    ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
    (alpha ? `, ${h & 0x000000ff}` : '') +
    ')'
  );
};


  const request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send();
};

  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};

  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

  const before = performance.now();
  for (let i = 0; i < iterations; i++) fn();
  return (1000 * iterations) / (performance.now() - before);
};




  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start);

  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );


  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));

  if (end && start > end) [end, start] = [start, end];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};



  const s = new Set(b);
  return a.filter(x => s.has(x));
};

  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};


  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});




  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};







  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';











  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};


  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';

  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object';


  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction;
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};







  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};

  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';

  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );

  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');

const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));


  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};

  [val, ...vals].reduce((a, x) => (x.length > a.length ? x : a));

  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});

  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};

  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k];
    return acc;
  }, {});

  (a => (
    (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
  ))();

  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');

  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj);
    return acc;
  }, {});


  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

  Object.keys(source).every(
    key =>
      obj.hasOwnProperty(key) && fn
        ? fn(obj[key], source[key], key, obj, source)
        : obj[key] == source[key]
  );




  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

  const cache = new Map();
  const cached = function(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};

  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );




  const times = fns.map(fn => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};


  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));







  const observer = new MutationObserver(mutations => mutations.forEach(m => callback(m)));
  observer.observe(
    element,
    Object.assign(
      {
        childList: true,
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true
      },
      options
    )
  );
  return observer;
};



  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

  const delegatorFn = e => e.target.matches(opts.target) && fn.call(e.target, e);
  el.addEventListener(evt, opts.target ? delegatorFn : fn, opts.options || false);
  if (opts.target) return delegatorFn;
};

  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};

  let type = 'mouse',
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener('touchstart', () => {
    if (type === 'touch') return;
    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
  });
};

  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );



  str.padStart((str.length + length) / 2, char).padEnd(length, char);

  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};

  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});



  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );

  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;

  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
      ),
    []
  );
};

  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});



  const _pluralize = (num, word, plural = word + 's') =>
    [1, -1].includes(Number(num)) ? word : plural;
  if (typeof val === 'object') return (num, word) => _pluralize(num, word, val[word]);
  return _pluralize(val, word, plural);
};


  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
  const i = prefixes.findIndex(
    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};

  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};

  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};

  new Promise((resolve, reject) =>
    func(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter((v, i) => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};

  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};

  let removed = [],
    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};

  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};


  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);



const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');


  let running = true,
    raf;
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };
  const start = () => {
    running = true;
    run();
  };
  const run = () => {
    raf = requestAnimationFrame(() => {
      callback();
      if (running) run();
    });
  };
  if (autoStart) start();
  return { start, stop };
};

  asLink ? (window.location.href = url) : window.location.replace(url);

  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );

  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);

  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));


  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
      arr.splice(arr.indexOf(val), 1);
      return acc.concat(val);
    }, [])
    : [];


  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );




  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})());`]), {
      type: 'application/javascript; charset=utf-8'
    })
  );
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate();
    };
    worker.onerror = err => {
      rej(err), worker.terminate();
    };
  });
};



  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};




  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));


  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};


  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
      ? val.size || val.length || Object.keys(val).length
      : typeof val === 'string'
        ? new Blob([val]).size
        : 0;


  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });


  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};

  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));
  return index === -1 ? arr.length : index;
};

  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.reverse().findIndex(el => (isDescending ? n <= el : n >= el));
  return index === -1 ? 0 : arr.length - index;
};

  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};

const spreadOver = fn => argsArr => fn(...argsArr);

  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);

  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};

  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
      []
    );
};



  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);

  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);

  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};

  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};

  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];




  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);

  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};

  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};

  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};

  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

  let s =
    str &&
    str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);



  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );

  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

  let t = new Date();
  t.setDate(t.getDate() + 1);
  const ret = `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(
    t.getDate()
  ).padStart(2, '0')}`;
  return !long ? ret : `${ret}T00:00:00`;
};

  const int = parseInt(num),
    digits = [int % 10, int % 100],
    ordinals = ['st', 'nd', 'rd', 'th'],
    oPattern = [1, 2, 3, 4],
    tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
  return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
    ? int + ordinals[digits[0] - 1]
    : int + ordinals[3];
};

  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));

  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');


  el.dispatchEvent(new CustomEvent(eventType, { detail }));

  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;



  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};

  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );

  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});

  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};


  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
};

  Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));


  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

  arr.reduceRight((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);

  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])
];


  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );

  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));

  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');

  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
  );

const UUIDGeneratorNode = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ (crypto.randomBytes(1)[0] & (15 >> (c / 4)))).toString(16)
  );






  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;

  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};

  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});

  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;
  return Array.from(
    { length: Math.max(...array.map(a => a.length)) },
    (_, i) => (fn ? fn(...array.map(a => a[i])) : array.map(a => a[i]))
  );
};

  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] > val) return binarySearch(arr, val, start, mid - 1);
  if (arr[mid] < val) return binarySearch(arr, val, mid + 1, end);
  return mid;
};


  Object.keys(obj).forEach(key => {
    if (key === childIndicator) {
      cleanObj(obj[key], keysToKeep, childIndicator);
    } else if (!keysToKeep.includes(key)) {
      delete obj[key];
    }
  });
  return obj;
};



  const isPrime = num => {
    const boundary = Math.floor(Math.sqrt(num));
    for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
    return num >= 2;
  };
  const isNeg = num < 0;
  num = isNeg ? -num : num;
  let array = Array.from({ length: num - 1 })
    .map((val, i) => (num % (i + 2) === 0 ? i + 2 : false))
    .filter(val => val);
  if (isNeg)
    array = array.reduce((acc, val) => {
      acc.push(val);
      acc.push(-val);
      return acc;
    }, []);
  return primes ? array.filter(isPrime) : array;
};


  Math.ceil(Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2));

  let n = Math.ceil(Math.log(num * Math.sqrt(5) + 1 / 2) / Math.log((Math.sqrt(5) + 1) / 2));
  return Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
};

    const p = (side_a + side_b + side_c) / 2
    return Math.sqrt(p * (p-side_a) * (p-side_b) * (p-side_c))
  };

  if (divisor === 1 || divisor === -1) return Infinity;
  if (divisor === 0) return 0;
  let i = 0;
  while (Number.isInteger(num / divisor)) {
    i++;
    num = num / divisor;
  }
  return i;
};

  const request = new XMLHttpRequest();
  request.open('DELETE', url, true);
  request.onload = () => callback(request);
  request.onerror = () => err(request);
  request.send();
};

  const request = new XMLHttpRequest();
  request.open("PUT", url, true);
  request.setRequestHeader('Content-type','application/json; charset=utf-8');
  request.onload = () => callback(request);
  request.onerror = () => err(request);
  request.send(data);
};

  (arr => arr.reduce((a, d) => a + parseInt(d) ** arr.length, 0) == digits)(
    (digits + '').split('')
  );

  [...str].reduce(
      (matchIndex, char) =>
          char.toLowerCase() === (pattern[matchIndex] || '').toLowerCase()
              ? matchIndex + 1
              : matchIndex,
      0
  ) === pattern.length;

  const dt = new Date(parseInt(arr.toString().substr(6)));
  return `${dt.getDate()}/${dt.getMonth() + 1}/${dt.getFullYear()}`;
};


  if (string1.length === 0) return string2.length;
  if (string2.length === 0) return string1.length;
  let matrix = Array(string2.length + 1)
    .fill(0)
    .map((x, i) => [i]);
  matrix[0] = Array(string1.length + 1)
    .fill(0)
    .map((x, i) => i);
  for (let i = 1; i <= string2.length; i++) {
    for (let j = 1; j <= string1.length; j++) {
      if (string2[i - 1] === string1[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[string2.length][string1.length];
};



  isNaN(n)
    ? []
    : [
        ...quickSort(nums.filter(v => (desc ? v > n : v <= n)), desc),
        n,
        ...quickSort(nums.filter(v => (!desc ? v > n : v <= n)), desc)
      ];


  const OPERATORS = {
    '*': (a, b) => a * b,
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '**': (a, b) => a ** b
  };
  const [stack, solve] = [
    [],
    rpn
      .replace(/\^/g, '**')
      .split(/\s+/g)
      .filter(el => !/\s+/.test(el) && el !== '')
  ];
  solve.forEach(symbol => {
    if (!isNaN(parseFloat(symbol)) && isFinite(symbol)) {
      stack.push(symbol);
    } else if (Object.keys(OPERATORS).includes(symbol)) {
      const [a, b] = [stack.pop(), stack.pop()];
      stack.push(OPERATORS[symbol](parseFloat(b), parseFloat(a)));
    } else {
      throw `${symbol} is not a recognized symbol`;
    }
  });
  if (stack.length === 1) return stack.pop();
  else throw `${rpn} is not a proper RPN. Please check it and try again`;
};

  const msg = new SpeechSynthesisUtterance(message);
  msg.voice = window.speechSynthesis.getVoices()[0];
  window.speechSynthesis.speak(msg);
};



module.exports = {all,allEqual,any,approximatelyEqual,arrayToCSV,arrayToHtmlList,ary,atob,attempt,average,averageBy,bifurcate,bifurcateBy,bind,bindAll,bindKey,binomialCoefficient,bottomVisible,btoa,byteSize,call,capitalize,capitalizeEveryWord,castArray,chainAsync,chunk,clampNumber,cloneRegExp,coalesce,coalesceFactory,collectInto,colorize,compact,compose,composeRight,converge,copyToClipboard,countBy,counter,countOccurrences,createElement,createEventHub,CSVToArray,CSVToJSON,currentURL,curry,dayOfYear,debounce,decapitalize,deepClone,deepFlatten,deepFreeze,defaults,defer,degreesToRads,delay,detectDeviceType,difference,differenceBy,differenceWith,dig,digitize,distance,drop,dropRight,dropRightWhile,dropWhile,elementContains,elementIsVisibleInViewport,elo,equals,escapeHTML,escapeRegExp,everyNth,extendHex,factorial,fibonacci,filterNonUnique,filterNonUniqueBy,findKey,findLast,findLastIndex,findLastKey,flatten,flattenObject,flip,forEachRight,formatDuration,forOwn,forOwnRight,fromCamelCase,functionName,functions,gcd,geometricProgression,get,getColonTimeFromDate,getDaysDiffBetweenDates,getImages,getMeridiemSuffixOfInteger,getScrollPosition,getStyle,getType,getURLParameters,groupBy,hammingDistance,hasClass,hasFlags,hashBrowser,hashNode,head,hexToRGB,hide,httpGet,httpPost,httpsRedirect,hz,indentString,indexOfAll,initial,initialize2DArray,initializeArrayWithRange,initializeArrayWithRangeRight,initializeArrayWithValues,initializeNDArray,inRange,insertAfter,insertBefore,intersection,intersectionBy,intersectionWith,invertKeyValues,is,isAbsoluteURL,isAfterDate,isAnagram,isArrayLike,isBeforeDate,isBoolean,isBrowser,isBrowserTabFocused,isDivisible,isDuplexStream,isEmpty,isEven,isFunction,isLowerCase,isNil,isNull,isNumber,isObject,isObjectLike,isPlainObject,isPrime,isPrimitive,isPromiseLike,isReadableStream,isSameDate,isSorted,isStream,isString,isSymbol,isTravisCI,isUndefined,isUpperCase,isValidJSON,isWritableStream,join,JSONtoCSV,JSONToFile,last,lcm,longestItem,lowercaseKeys,luhnCheck,mapKeys,mapObject,mapString,mapValues,mask,matches,matchesWith,maxBy,maxDate,maxN,median,memoize,merge,minBy,minDate,minN,mostPerformant,negate,nest,nodeListToArray,none,nthArg,nthElement,objectFromPairs,objectToPairs,observeMutations,off,offset,omit,omitBy,on,once,onUserInputChange,orderBy,over,overArgs,pad,palindrome,parseCookie,partial,partialRight,partition,percentile,permutations,pick,pickBy,pipeAsyncFunctions,pipeFunctions,pluralize,powerset,prefix,prettyBytes,primes,promisify,pull,pullAtIndex,pullAtValue,pullBy,radsToDegrees,randomHexColorCode,randomIntArrayInRange,randomIntegerInRange,randomNumberInRange,readFileLines,rearg,recordAnimationFrames,redirect,reducedFilter,reduceSuccessive,reduceWhich,reject,remove,removeNonASCII,renameKeys,reverseString,RGBToHex,round,runAsync,runPromisesInSeries,sample,sampleSize,scrollToTop,sdbm,serializeCookie,setStyle,shallowClone,shank,show,shuffle,similarity,size,sleep,smoothScroll,sortCharactersInString,sortedIndex,sortedIndexBy,sortedLastIndex,sortedLastIndexBy,splitLines,spreadOver,stableSort,standardDeviation,stringPermutations,stripHTMLTags,sum,sumBy,sumPower,symmetricDifference,symmetricDifferenceBy,symmetricDifferenceWith,tail,take,takeRight,takeRightWhile,takeWhile,throttle,times,timeTaken,toCamelCase,toCurrency,toDecimalMark,toggleClass,toHash,toKebabCase,tomorrow,toOrdinalSuffix,toSafeInteger,toSnakeCase,transform,triggerEvent,truncateString,truthCheckCollection,unary,uncurry,unescapeHTML,unflattenObject,unfold,union,unionBy,unionWith,uniqueElements,uniqueElementsBy,uniqueElementsByRight,uniqueSymmetricDifference,untildify,unzip,unzipWith,URLJoin,UUIDGeneratorBrowser,UUIDGeneratorNode,validateNumber,when,without,words,xProd,yesNo,zip,zipObject,zipWith,binarySearch,celsiusToFahrenheit,cleanObj,collatz,countVowels,factors,fahrenheitToCelsius,fibonacciCountUntilNum,fibonacciUntilNum,heronArea,howManyTimes,httpDelete,httpPut,isArmstrongNumber,isSimilar,JSONToDate,kmphToMph,levenshteinDistance,mphToKmph,pipeLog,quickSort,removeVowels,solveRPN,speechSynthesis,squareSum}