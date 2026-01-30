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

export function lookAt(eye, target, up) {
    const z = normalize(subtract(eye, target)); // forward
    const x = normalize(cross(up, z));          // right
    const y = normalize(cross(z, x));                      // up corrected

    /*
    return new Float32Array([
        x[0], x[1], x[2], -dot(x, eye),  // col 0
        y[0], y[1], y[2], -dot(y, eye),  // col 1
       -z[0],-z[1],-z[2],  dot(z, eye),  // col 2 (forward is -Z in view)
        0,    0,    0,     1
    ]);
    */

    return new Float32Array([
        x[0], y[0], -z[0], 0,
        x[1], y[1], -z[1], 0,
        x[2], y[2], -z[2], 0,
        -dot(x, eye),  -dot(y, eye),  dot(z, eye),     1
    ]);

}

export function ortho(left, right, bottom, top, near, far) {
    const rl = 1 / (right - left);
    const tb = 1 / (top - bottom);
    const fn = 1 / (far - near);

    return new Float32Array([
        2*rl, 0,    0,          0,     // col 0
        0,    2*tb, 0,          0,     // col 1
        0,    0,   fn ,       0,     // col 2
       -(right+left)*rl, -(top+bottom)*tb, near / (near - far), 1  // col 3
    ]);
}


// Subtract two vectors: a - b
function subtract(a, b) {
    return [a[0]-b[0], a[1]-b[1], a[2]-b[2]];
}

// Dot product
function dot(a, b) {
    return a[0]*b[0] + a[1]*b[1] + a[2]*b[2];
}

// Cross product
function cross(a, b) {
    return [
        a[1]*b[2] - a[2]*b[1],
        a[2]*b[0] - a[0]*b[2],
        a[0]*b[1] - a[1]*b[0]
    ];
}

// Normalize a vector
export function normalize(v) {
    const len = Math.sqrt(v[0]*v[0] + v[1]*v[1] + v[2]*v[2]);
    if (len === 0) return [0,0,0];
    return [v[0]/len, v[1]/len, v[2]/len];
}
