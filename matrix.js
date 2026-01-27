export function mat4Identity() {
    return new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
}

export function mat4Multiply(a, b) {
    const out = new Float32Array(16);
    for (let c = 0; c < 4; c++) {
        for (let r = 0; r < 4; r++) {
            out[c*4 + r] =
                a[0*4 + r] * b[c*4 + 0] +
                a[1*4 + r] * b[c*4 + 1] +
                a[2*4 + r] * b[c*4 + 2] +
                a[3*4 + r] * b[c*4 + 3];
        }
    }
    return out;
}

export function mat4Translate(tx, ty, tz) {
    const m = mat4Identity();
    m[12] = tx;
    m[13] = ty;
    m[14] = tz;
    return m;
}

export function mat4Scale(sx, sy, sz) {
    const m = mat4Identity();
    m[0]  = sx;
    m[5]  = sy;
    m[10] = sz;
    return m;
}

export function mat4RotateX(rad) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    return new Float32Array([
        1, 0,  0, 0,
        0, c,  s, 0,
        0, -s, c, 0,
        0, 0,  0, 1
    ]);
}

export function mat4RotateY(rad) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    return new Float32Array([
         c, 0, -s, 0,
         0, 1,  0, 0,
         s, 0,  c, 0,
         0, 0,  0, 1
    ]);
}

export function mat4RotateZ(rad) {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    return new Float32Array([
        c,  s, 0, 0,
       -s,  c, 0, 0,
        0,  0, 1, 0,
        0,  0, 0, 1
    ]);
}

export function buildModelMatrix({
    tx = 0, ty = 0, tz = 0,
    rx = 0, ry = 0, rz = 0,
    sx = 1, sy = 1, sz = 1
}) {
    let m = mat4Identity();
    m = mat4Multiply(m, mat4Scale(sx, sy, sz));
    m = mat4Multiply(m, mat4RotateX(rx));
    m = mat4Multiply(m, mat4RotateZ(rz));
    m = mat4Multiply(m, mat4RotateY(ry));
    m = mat4Multiply(m, mat4Translate(tx, ty, tz));
    return m;
}
