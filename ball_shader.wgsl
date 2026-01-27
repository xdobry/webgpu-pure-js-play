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
    @location(2) color    : vec3<f32>,
};

struct VertexOutput {
    @builtin(position) Position : vec4<f32>,
    @location(0) vNormal : vec3<f32>,
    @location(1) vColor  : vec3<f32>,
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


    // Pass color through
    out.vColor = input.color;

    return out;
}

@fragment
fn fs_main(@location(0) vNormal : vec3<f32>,
    @location(1) vColor  : vec3<f32>) -> @location(0) vec4<f32> {

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