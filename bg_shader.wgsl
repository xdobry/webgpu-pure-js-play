struct Uniforms {
    model      : mat4x4<f32>,
    view       : mat4x4<f32>,
    projection : mat4x4<f32>,
    lightDir   : vec3<f32>,
    _pad       : f32, // padding (alignment)
};

@group(0) @binding(0)
var<uniform> uniforms : Uniforms;

struct VertexInput {
    @location(0) position : vec3<f32>,
    @location(1) normal   : vec3<f32>,
    @location(2) uv  : vec2<f32>,
};

struct VertexOutput {
    @builtin(position) Position : vec4<f32>,
    @location(0) vNormal : vec3<f32>,
    @location(1) vlocal  : vec2<f32>, // local UV (0..1),
};

@vertex
fn vs_main(input : VertexInput) -> VertexOutput {
    var out : VertexOutput;

    // Model → World
    let worldPos = uniforms.model * vec4<f32>(input.position, 1.0);

    // Final clip-space position
    out.Position =
    uniforms.projection *
    uniforms.view *
    worldPos;

    // Transform normal (ignore translation)
    let normalMatrix = mat3x3<f32>(
    uniforms.model[0].xyz,
    uniforms.model[1].xyz,
    uniforms.model[2].xyz
    );

    out.vNormal = normalize(normalMatrix * input.normal);
    out.vlocal = input.uv;

    return out;
}

fn gridLine(coord: f32, scale: f32) -> f32 {
    let g = coord * scale;
    let d = abs(fract(g - 0.5) - 0.5) / fwidth(g);
    return 1.0 - clamp(d, 0.0, 1.0);
}

@fragment
fn fs_main(@location(0) vNormal : vec3<f32>,
    @location(1) vlocal  : vec2<f32>) -> @location(0) vec4<f32> {

    let grey = vec3f(0.7, 0.7, 0.7);
    let red = vec3f(0.635, 0.027, 0.643);
 
    let lineX = gridLine(vlocal.x, 10.0);
    let lineY = gridLine(vlocal.y, 10.0);

    let grid = max(lineX, lineY);
    let vColor = mix(grey, red, grid);

    let N = normalize(vNormal);
    let L = normalize(uniforms.lightDir);

    // Diffuse lighting
    let diffuse = max(dot(N, L), 0.0);

    // Small ambient term
    let ambient = 0.25;

    let lighting = ambient + diffuse * 0.75;
    let finalColor = vColor * lighting;

    return vec4<f32>(finalColor, 1.0);
}