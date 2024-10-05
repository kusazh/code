const chars = [
  "💩🤮", "💩😵‍💫", "💩🤢", "💩🪳", "💩🌿", "💩💦", "💩💨", "💩🧀", "💩🇨🇳", "🤮💩", "🤮😵‍💫", "🤮🤢", "🤮🪳", "🤮🌿", "🤮💦", "🤮💨", "🤮🧀", "🤮🇨🇳", "😵‍💫💩", "😵‍💫🤮", "😵‍💫🤢", "😵‍💫🪳", "😵‍💫🌿", "😵‍💫💦", "😵‍💫💨", "😵‍💫🧀", "😵‍💫🇨🇳", "🤢💩", "🤢🤮", "🤢😵‍💫", "🤢🪳", "🤢🌿", "🤢💦", "🤢💨", "🤢🧀", "🤢🇨🇳", "🪳💩", "🪳🤮", "🪳😵‍💫", "🪳🤢", "🪳🌿", "🪳💦", "🪳💨", "🪳🧀", "🪳🇨🇳", "🌿💩", "🌿🤮", "🌿😵‍💫", "🌿🤢", "🌿🪳", "🌿💦", "🌿💨", "🌿🧀", "🌿🇨🇳", "💦💩", "💦🤮", "💦😵‍💫", "💦🤢", "💦🪳", "💦🌿", "💦💨", "💦🧀", "💦🇨🇳", "💨💩", "💨🤮", "💨😵‍💫", "💨🤢", "💨🪳", "💨🌿", "💨💦", "💨🧀", "💨🇨🇳", "🧀💩", "🧀🤮", "🧀😵‍💫"
];

function encode(string) {
    const b64 = btoa(unescape(encodeURIComponent(string)));
    return [...b64].map(char => chars[char.charCodeAt(0) - 48]).join('');
}

function decode(string) {
    let b64 = '';
    while (string) {
        for (let i = 0; i < chars.length; i++) {
            if (string.startsWith(chars[i])) {
                b64 += String.fromCharCode(i + 48);
                string = string.slice(chars[i].length);
            }
        }
    }
    return decodeURIComponent(escape(atob(b64)));
}
