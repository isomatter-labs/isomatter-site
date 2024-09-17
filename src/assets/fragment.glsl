varying vec2 v_uv;
  uniform vec2 u_mouse;
  uniform vec2 u_resolution;
  uniform vec3 u_color;
  uniform float u_time;
void main() {
    vec2 v = u_mouse / u_resolution;
    vec2 uv = gl_FragCoord.xy / u_resolution;
    gl_FragColor = vec4(1.0, 0.0, sin(u_time * 5.0) + 0.5, 1.0).rgba;
}