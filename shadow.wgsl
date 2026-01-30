struct Uniforms {
    model : mat4x4<f32>,
    lightViewProj : mat4x4<f32>,
};
@binding(0) @group(0) var<uniform> uniforms : Uniforms;

struct VertexOutput {
    @builtin(position) Position : vec4<f32>,
};

@vertex
fn vs_main(@location(0) position: vec3<f32>) -> VertexOutput {
    var out: VertexOutput;
    let worldPos = uniforms.model * vec4<f32>(position, 1.0);
    out.Position = uniforms.lightViewProj * worldPos;
    return out;
}

@fragment
fn fs_main() {
  // empty – depth only
}