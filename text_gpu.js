function getFontAtlasMap() {
    const atlas = [
    {
        "id": 32,
        "x": 0,
        "y": 0,
        "w": 0,
        "h": 0,
        "xoff": 0,
        "yoff": 0,
        "xadv": 18
    },
    {
        "id": 33,
        "x": 51,
        "y": 213,
        "w": 14,
        "h": 50,
        "xoff": 17,
        "yoff": 17,
        "xadv": 42
    },
    {
        "id": 34,
        "x": 15,
        "y": 357,
        "w": 32,
        "h": 23,
        "xoff": -1,
        "yoff": 17,
        "xadv": 42
    },
    {
        "id": 35,
        "x": 273,
        "y": 51,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 36,
        "x": 270,
        "y": 102,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 37,
        "x": 270,
        "y": 288,
        "w": 41,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 51
    },
    {
        "id": 38,
        "x": 270,
        "y": 153,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 39,
        "x": 66,
        "y": 357,
        "w": 14,
        "h": 23,
        "xoff": -1,
        "yoff": 17,
        "xadv": 24
    },
    {
        "id": 40,
        "x": 353,
        "y": 51,
        "w": 23,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 33
    },
    {
        "id": 41,
        "x": 321,
        "y": 102,
        "w": 23,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 33
    },
    {
        "id": 42,
        "x": 270,
        "y": 339,
        "w": 32,
        "h": 32,
        "xoff": -1,
        "yoff": 17,
        "xadv": 42
    },
    {
        "id": 43,
        "x": 219,
        "y": 306,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 44,
        "x": 0,
        "y": 357,
        "w": 14,
        "h": 23,
        "xoff": -1,
        "yoff": 53,
        "xadv": 24
    },
    {
        "id": 45,
        "x": 165,
        "y": 357,
        "w": 50,
        "h": 14,
        "xoff": -1,
        "yoff": 35,
        "xadv": 60
    },
    {
        "id": 46,
        "x": 51,
        "y": 366,
        "w": 14,
        "h": 14,
        "xoff": -1,
        "yoff": 53,
        "xadv": 24
    },
    {
        "id": 47,
        "x": 321,
        "y": 153,
        "w": 23,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 33
    },
    {
        "id": 48,
        "x": 0,
        "y": 102,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 49,
        "x": 353,
        "y": 0,
        "w": 23,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 33
    },
    {
        "id": 50,
        "x": 0,
        "y": 153,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 51,
        "x": 0,
        "y": 204,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 52,
        "x": 0,
        "y": 255,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 53,
        "x": 0,
        "y": 306,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 54,
        "x": 69,
        "y": 0,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 55,
        "x": 69,
        "y": 51,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 56,
        "x": 66,
        "y": 102,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 57,
        "x": 66,
        "y": 153,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 58,
        "x": 51,
        "y": 264,
        "w": 14,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 24
    },
    {
        "id": 59,
        "x": 51,
        "y": 102,
        "w": 14,
        "h": 59,
        "xoff": -1,
        "yoff": 17,
        "xadv": 24
    },
    {
        "id": 61,
        "x": 270,
        "y": 204,
        "w": 50,
        "h": 32,
        "xoff": -1,
        "yoff": 26,
        "xadv": 60
    },
    {
        "id": 63,
        "x": 219,
        "y": 255,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 64,
        "x": 273,
        "y": 0,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 65,
        "x": 66,
        "y": 204,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 66,
        "x": 66,
        "y": 255,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 67,
        "x": 66,
        "y": 306,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 68,
        "x": 120,
        "y": 0,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 69,
        "x": 120,
        "y": 51,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 70,
        "x": 117,
        "y": 102,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 71,
        "x": 117,
        "y": 153,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 72,
        "x": 117,
        "y": 204,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 73,
        "x": 51,
        "y": 162,
        "w": 14,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 24
    },
    {
        "id": 74,
        "x": 270,
        "y": 237,
        "w": 41,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 51
    },
    {
        "id": 75,
        "x": 117,
        "y": 255,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 76,
        "x": 117,
        "y": 306,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 77,
        "x": 0,
        "y": 0,
        "w": 68,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 78
    },
    {
        "id": 78,
        "x": 171,
        "y": 0,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 79,
        "x": 171,
        "y": 51,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 80,
        "x": 168,
        "y": 102,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 81,
        "x": 168,
        "y": 153,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 82,
        "x": 168,
        "y": 204,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 83,
        "x": 168,
        "y": 255,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 84,
        "x": 168,
        "y": 306,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 85,
        "x": 222,
        "y": 0,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 86,
        "x": 222,
        "y": 51,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 87,
        "x": 0,
        "y": 51,
        "w": 68,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 78
    },
    {
        "id": 88,
        "x": 219,
        "y": 102,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 89,
        "x": 219,
        "y": 153,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 90,
        "x": 219,
        "y": 204,
        "w": 50,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 60
    },
    {
        "id": 91,
        "x": 321,
        "y": 204,
        "w": 23,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 33
    },
    {
        "id": 93,
        "x": 321,
        "y": 255,
        "w": 23,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 33
    },
    {
        "id": 94,
        "x": 81,
        "y": 357,
        "w": 32,
        "h": 23,
        "xoff": -1,
        "yoff": 17,
        "xadv": 42
    },
    {
        "id": 95,
        "x": 114,
        "y": 357,
        "w": 50,
        "h": 14,
        "xoff": -1,
        "yoff": 53,
        "xadv": 60
    },
    {
        "id": 123,
        "x": 324,
        "y": 0,
        "w": 28,
        "h": 50,
        "xoff": 3,
        "yoff": 17,
        "xadv": 42
    },
    {
        "id": 124,
        "x": 51,
        "y": 315,
        "w": 14,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 24
    },
    {
        "id": 125,
        "x": 324,
        "y": 51,
        "w": 28,
        "h": 50,
        "xoff": -1,
        "yoff": 17,
        "xadv": 42
    }
];
    const map = new Map();
    for (const charInfo of atlas) {
        map.set(parseInt(charInfo.id), charInfo);
    }
    return map;
}

const fontMap = getFontAtlasMap();

export class TextState {
    constructor(atlasWidth, atlasHeight) {
        this.atlasWidth = atlasWidth;
        this.atlasHeight = atlasHeight;
        this.chars = [];
    }
    cls() {
        this.chars.length = 0;
    }
    set_text(text,x,y,scale=1.0,anchor='left') {
        let cursor_x = x;
        let cursor_y = y;
        const start_c = this.chars.length;
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i);
            const charInfo = fontMap.get(charCode);
            if (charInfo) {
                this.chars.push({
                    x: cursor_x + charInfo.xoff * scale,
                    y: cursor_y + charInfo.yoff * scale,
                    w: charInfo.w * scale,
                    h: charInfo.h * scale,
                    u: charInfo.x / this.atlasWidth,
                    v: charInfo.y / this.atlasHeight,
                    uw: charInfo.w / this.atlasWidth,
                    vh: charInfo.h / this.atlasHeight,
                });
                cursor_x += charInfo.xadv * scale;
            }
        }
        if (anchor === 'center') {
            const totalWidth = cursor_x - x;
            for (let i = start_c; i < this.chars.length; i++) {
                this.chars[i].x -= totalWidth / 2;
            }
        }
    }
}
