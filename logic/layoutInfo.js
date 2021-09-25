var alphabet = "abcdefghijklmnopqrstuvwxyz";

levelDictionaries = {
	azerty: {
		'lvl1': 'qsdfjklm',
		'lvl2': 'gh',
		'lvl3': 'azer',
		'lvl4': 'tycv',
		'lvl5': 'uiop',
		'lvl6': 'wxbn',
		'lvl7': alphabet,
	},
	dvorak: {
		'lvl1': 'aoeuhtns',
		'lvl2': 'id',
		'lvl3': 'pyfg',
		'lvl4': 'kxbm',
		'lvl5': 'crlw',
		'lvl6': 'qjvz',
		'lvl7': alphabet,
	},
	colemak: {
		'lvl1': 'arstneio',
		'lvl2': 'dh',
		'lvl3': 'pgjl',
		'lvl4': 'cvbk',
		'lvl5': 'wfuy',
		'lvl6': 'qzxm',
		'lvl7': alphabet,
	},
	colemakdh: {
		'lvl1': 'arstneio',
		'lvl2': 'dh',
		'lvl3': 'wfyu',
		'lvl4': 'plgm',
		'lvl5': 'bcvk',
		'lvl6': 'qxjz',
		'lvl7': alphabet,
	},
	lefthandeddvorak: {
		'lvl1': 'dtheac',
		'lvl2': 'yurso',
		'lvl3': 'gvwni',
		'lvl4': 'mljc',
		'lvl5': 'qbkx',
		'lvl6': 'pfz',
		'lvl7': alphabet,
	},
	niro: {
		'lvl1': 'asetniro',
		'lvl2': 'gh',
		'lvl3': 'dpjf',
		'lvl4': 'cvbk',
		'lvl5': 'wuyl',
		'lvl6': 'qzxm',
		'lvl7': alphabet,
	},
	soul: {
		'lvl1': 'asrtneio',
		'lvl2': 'dmch',
		'lvl3': 'wluy',
		'lvl4': 'gf',
		'lvl5': 'pkvb',
		'lvl6': 'qzxj',
		'lvl7': alphabet,
	},
	qwerty: {
		'lvl1': 'asdfer',
		'lvl2': 'jkliuo',
		'lvl3': 'ghty',
		'lvl4': 'qwzx',
		'lvl5': 'nmp',
		'lvl6': 'cvb',
		'lvl7': alphabet,
	},
	tarmak: {
		'lvl1': 'arstneio',
		'lvl2': 'dh',
		'lvl3': 'gjvb',
		'lvl4': 'qwfp',
		'lvl5': 'luyz',
		'lvl6': 'cxkm',
		'lvl7': alphabet,
	},
	workman: {
		'lvl1': 'ashtneoi',
		'lvl2': 'gy',
		'lvl3': 'bjfu',
		'lvl4': 'mcvk',
		'lvl5': 'plzx',
		'lvl6': 'qdrw',
		'lvl7': alphabet,
	},
	custom: {
		'lvl1': '',
		'lvl2': '',
		'lvl3': '',
		'lvl4': '',
		'lvl5': '',
		'lvl6': '',
		'lvl7': alphabet,
	},
}



var layoutMaps = {
	azerty: {
		'Minus': ")",
		'Equal': "=",
		'KeyQ': "a",
		'KeyW': 'z',
		'KeyE': 'e',
		'KeyR': 'r',
		'KeyT': 't',
		'KeyY': 'y',
		'KeyU': 'u',
		'KeyI': 'i',
		'KeyO': 'o',
		'KeyP': 'p',
		'BracketLeft': '^',
		'BracketRight': '$',
		'Backslash': '\\',
		'KeyA': 'q',
		'KeyS': 's',
		'KeyD': 'd',
		'KeyF': 'f',
		'KeyG': 'g',
		'KeyH': 'h',
		'KeyJ': 'j',
		'KeyK': 'k',
		'KeyL': 'l',
		'Semicolon': 'm',
		'Quote': "ù",
		'KeyZ': '<',
		'KeyX': 'w',
		'KeyC': 'x',
		'KeyV': 'c',
		'KeyB': 'v',
		'KeyN': 'b',
		'KeyM': 'n',
		'Comma': '.',
		'Period': ';',
		'Slash': '!',
		'shiftLayer': 'default',
	},
	dvorak: {
		'Minus': "[",
		'Equal': "]",
		'KeyQ': "'",
		'KeyW': ',',
		'KeyE': '.',
		'KeyR': 'p',
		'KeyT': 'y',
		'KeyY': 'f',
		'KeyU': 'g',
		'KeyI': 'c',
		'KeyO': 'r',
		'KeyP': 'l',
		'BracketLeft': '/',
		'BracketRight': '=',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 'o',
		'KeyD': 'e',
		'KeyF': 'u',
		'KeyG': 'i',
		'KeyH': 'd',
		'KeyJ': 'h',
		'KeyK': 't',
		'KeyL': 'n',
		'Semicolon': 's',
		'Quote': '-',
		'KeyZ': ';',
		'KeyX': 'q',
		'KeyC': 'j',
		'KeyV': 'k',
		'KeyB': 'x',
		'KeyN': 'b',
		'KeyM': 'm',
		'Comma': 'w',
		'Period': 'v',
		'Slash': 'z',
		'Backquote': '`',
		'Digit1': '1',
		'Digit2': '2',
		'Digit3': '3',
		'shiftLayer': {
			'KeyQ': "\"",
			'KeyW': '<',
			'KeyE': '>',
			'KeyR': 'P',
			'KeyT': 'Y',
			'KeyY': 'F',
			'KeyU': 'G',
			'KeyI': 'C',
			'KeyO': 'R',
			'KeyP': 'L',
			'BracketLeft': '?',
			'KeyA': 'A',
			'KeyS': 'O',
			'KeyD': 'E',
			'KeyF': 'U',
			'KeyG': 'I',
			'KeyH': 'D',
			'KeyJ': 'H',
			'KeyK': 'T',
			'KeyL': 'N',
			'Semicolon': 'S',
			'KeyZ': ':',
			'KeyX': 'Q',
			'KeyC': 'J',
			'KeyV': 'K',
			'KeyB': 'X',
			'KeyN': 'B',
			'KeyM': 'M',
			'Comma': 'W',
			'Period': 'V',
			'Slash': 'Z',
			'Digit1': '!'
		}
	},
	colemak: {
		'Minus': "-",
		'Equal': "=",
		'KeyQ': "q",
		'KeyW': 'w',
		'KeyE': 'f',
		'KeyR': 'p',
		'KeyT': 'g',
		'KeyY': 'j',
		'KeyU': 'l',
		'KeyI': 'u',
		'KeyO': 'y',
		'KeyP': ';',
		'BracketLeft': '[',
		'BracketRight': ']',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 'r',
		'KeyD': 's',
		'KeyF': 't',
		'KeyG': 'd',
		'KeyH': 'h',
		'KeyJ': 'n',
		'KeyK': 'e',
		'KeyL': 'i',
		'Semicolon': 'o',
		'Quote': "'",
		'KeyZ': 'z',
		'KeyX': 'x',
		'KeyC': 'c',
		'KeyV': 'v',
		'KeyB': 'b',
		'KeyN': 'k',
		'KeyM': 'm',
		'Comma': ',',
		'Period': '.',
		'Slash': '/',
		'shiftLayer': 'default',
	},
	colemakdh: {
		'Minus': "-",
		'Equal': "=",
		'KeyQ': "q",
		'KeyW': 'w',
		'KeyE': 'f',
		'KeyR': 'p',
		'KeyT': 'b',
		'KeyY': 'j',
		'KeyU': 'l',
		'KeyI': 'u',
		'KeyO': 'y',
		'KeyP': ';',
		'BracketLeft': '[',
		'BracketRight': ']',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 'r',
		'KeyD': 's',
		'KeyF': 't',
		'KeyG': 'g',
		'KeyH': 'm',
		'KeyJ': 'n',
		'KeyK': 'e',
		'KeyL': 'i',
		'Semicolon': 'o',
		'Quote': "'",
		'KeyZ': 'x',
		'KeyX': 'c',
		'KeyC': 'd',
		'KeyV': 'v',
		'KeyB': 'z',
		'KeyN': 'k',
		'KeyM': 'h',
		'Comma': ',',
		'Period': '.',
		'Slash': '/',
		'shiftLayer': 'default',
	},
	lefthandeddvorak: {
		'Digit1': "[",
		'Digit2': "]",
		'Digit3': "/",
		'Digit4': "p",
		'Digit5': "f",
		'Digit6': "m",
		'Digit7': "l",
		'Digit8': "j",
		'Digit9': "4",
		'Digit0': "3",
		'Minus': "2",
		'Equal': "1",
		'KeyQ': ";",
		'KeyW': 'q',
		'KeyE': 'b',
		'KeyR': 'y',
		'KeyT': 'u',
		'KeyY': 'r',
		'KeyU': 's',
		'KeyI': 'o',
		'KeyO': '.',
		'KeyP': '6',
		'BracketLeft': '5',
		'BracketRight': '=',
		'Backslash': '\\',
		'KeyA': '-',
		'KeyS': 'k',
		'KeyD': 'c',
		'KeyF': 'd',
		'KeyG': 't',
		'KeyH': 'h',
		'KeyJ': 'e',
		'KeyK': 'a',
		'KeyL': 'z',
		'Semicolon': '8',
		'Quote': "7",
		'KeyZ': "'",
		'KeyX': 'x',
		'KeyC': 'g',
		'KeyV': 'v',
		'KeyB': 'w',
		'KeyN': 'n',
		'KeyM': 'i',
		'Comma': ',',
		'Period': '0',
		'Slash': '9',
		'shiftLayer': 'default',
	},
	niro: {
		'Minus': "-",
		'Equal': "=",
		'KeyQ': "q",
		'KeyW': 'w',
		'KeyE': 'u',
		'KeyR': 'd',
		'KeyT': 'p',
		'KeyY': 'j',
		'KeyU': 'f',
		'KeyI': 'y',
		'KeyO': 'l',
		'KeyP': ';',
		'BracketLeft': '[',
		'BracketRight': ']',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 's',
		'KeyD': 'e',
		'KeyF': 't',
		'KeyG': 'g',
		'KeyH': 'h',
		'KeyJ': 'n',
		'KeyK': 'i',
		'KeyL': 'r',
		'Semicolon': 'o',
		'Quote': "'",
		'KeyZ': 'z',
		'KeyX': 'x',
		'KeyC': 'c',
		'KeyV': 'v',
		'KeyB': 'b',
		'KeyN': 'k',
		'KeyM': 'm',
		'Comma': ',',
		'Period': '.',
		'Slash': '/',
		'shiftLayer': 'default',
	},
	soul: {
		'Minus': "-",
		'Equal': "=",
		'KeyQ': "q",
		'KeyW': 'w',
		'KeyE': 'l',
		'KeyR': 'd',
		'KeyT': 'p',
		'KeyY': 'k',
		'KeyU': 'm',
		'KeyI': 'u',
		'KeyO': 'y',
		'KeyP': ';',
		'BracketLeft': '[',
		'BracketRight': ']',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 's',
		'KeyD': 'r',
		'KeyF': 't',
		'KeyG': 'g',
		'KeyH': 'f',
		'KeyJ': 'n',
		'KeyK': 'e',
		'KeyL': 'i',
		'Semicolon': 'o',
		'Quote': "'",
		'KeyZ': 'z',
		'KeyX': 'x',
		'KeyC': 'c',
		'KeyV': 'v',
		'KeyB': 'j',
		'KeyN': 'b',
		'KeyM': 'h',
		'Comma': ',',
		'Period': '.',
		'Slash': '/',
		'shiftLayer': 'default',
	},
	tarmak: {
		'Minus': "1",
		'Equal': "=",
		'KeyQ': "q",
		'KeyW': 'w',
		'KeyE': 'f',
		'KeyR': 'p',
		'KeyT': 'g',
		'KeyY': 'j',
		'KeyU': 'l',
		'KeyI': 'u',
		'KeyO': 'y',
		'KeyP': ';',
		'BracketLeft': '[',
		'BracketRight': ']',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 'r',
		'KeyD': 's',
		'KeyF': 't',
		'KeyG': 'd',
		'KeyH': 'h',
		'KeyJ': 'n',
		'KeyK': 'e',
		'KeyL': 'i',
		'Semicolon': 'o',
		'Quote': "'",
		'KeyZ': 'z',
		'KeyX': 'x',
		'KeyC': 'c',
		'KeyV': 'v',
		'KeyB': 'b',
		'KeyN': 'k',
		'KeyM': 'm',
		'Comma': ',',
		'Period': '.',
		'Slash': '/',
		'shiftLayer': 'default',
	},
	qwerty: {
		'Minus': "-",
		'Equal': "=",
		'KeyQ': "q",
		'KeyW': 'w',
		'KeyE': 'e',
		'KeyR': 'r',
		'KeyT': 't',
		'KeyY': 'y',
		'KeyU': 'u',
		'KeyI': 'i',
		'KeyO': 'o',
		'KeyP': 'p',
		'BracketLeft': '[',
		'BracketRight': ']',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 's',
		'KeyD': 'd',
		'KeyF': 'f',
		'KeyG': 'g',
		'KeyH': 'h',
		'KeyJ': 'j',
		'KeyK': 'k',
		'KeyL': 'l',
		'Semicolon': ';',
		'Quote': "'",
		'KeyZ': 'z',
		'KeyX': 'x',
		'KeyC': 'c',
		'KeyV': 'v',
		'KeyB': 'b',
		'KeyN': 'n',
		'KeyM': 'm',
		'Comma': ',',
		'Period': '.',
		'Slash': '/',
		'shiftLayer': 'default',
	},
	workman: {
		'Minus': "-",
		'Equal': "=",
		'KeyQ': "q",
		'KeyW': 'd',
		'KeyE': 'r',
		'KeyR': 'w',
		'KeyT': 'b',
		'KeyY': 'j',
		'KeyU': 'f',
		'KeyI': 'u',
		'KeyO': 'p',
		'KeyP': ';',
		'BracketLeft': '[',
		'BracketRight': ']',
		'Backslash': '\\',
		'KeyA': 'a',
		'KeyS': 's',
		'KeyD': 'h',
		'KeyF': 't',
		'KeyG': 'g',
		'KeyH': 'y',
		'KeyJ': 'n',
		'KeyK': 'e',
		'KeyL': 'o',
		'Semicolon': 'i',
		'Quote': "'",
		'KeyZ': 'z',
		'KeyX': 'x',
		'KeyC': 'm',
		'KeyV': 'c',
		'KeyB': 'v',
		'KeyN': 'k',
		'KeyM': 'l',
		'Comma': ',',
		'Period': '.',
		'Slash': '/',
		'shiftLayer': 'default',
	},
	custom: {
		'Minus': " ",
		'Equal': " ",
		'KeyQ': " ",
		'KeyW': ' ',
		'KeyE': ' ',
		'KeyR': ' ',
		'KeyT': ' ',
		'KeyY': ' ',
		'KeyU': ' ',
		'KeyI': ' ',
		'KeyO': ' ',
		'KeyP': ' ',
		'BracketLeft': ' ',
		'BracketRight': ' ',
		'Backslash': ' ',
		'KeyA': ' ',
		'KeyS': ' ',
		'KeyD': ' ',
		'KeyF': ' ',
		'KeyG': ' ',
		'KeyH': ' ',
		'KeyJ': ' ',
		'KeyK': ' ',
		'KeyL': ' ',
		'Semicolon': ' ',
		'Quote': " ",
		'KeyZ': ' ',
		'KeyX': ' ',
		'KeyC': ' ',
		'KeyV': ' ',
		'KeyB': ' ',
		'KeyN': ' ',
		'KeyM': ' ',
		'Comma': ' ',
		'Period': ' ',
		'Slash': ' ',
		'shiftLayer': 'default',
	},
}
