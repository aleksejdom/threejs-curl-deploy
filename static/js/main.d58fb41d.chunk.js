(this["webpackJsonpthreejs-curl-deploy"]=this["webpackJsonpthreejs-curl-deploy"]||[]).push([[0],{45:function(e,n,t){},66:function(e,n,t){"use strict";t.r(n);var r=t(8),o=t(15),c=(t(45),t(7)),i=t(68),a=t(69),s=t(42),v=t(5),u=t(12),l=t(0),x=t(67),y=t(1),f=t(3),p=t(4);function m(e,n,t,r){return e.set(2*Math.random()-1,2*Math.random()-1,2*Math.random()-1),e.length()>1?m(e,n,t,r):e.normalize().multiplyScalar(n).toArray(t,r)}function g(e,n){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new r.Vector3,o=new Float32Array(3*e),c=0;c<3*e;c+=3)m(t,n,o,c);return o}var d=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(y.a)(this,t),n.call(this,{vertexShader:"varying vec2 vUv;\n      void main() {\n        vUv = uv;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }",fragmentShader:'uniform sampler2D positions;\n      uniform float uTime;\n      uniform float uCurlFreq;\n      varying vec2 vUv;\n      //\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_3416771560(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_3416771560(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_3416771560(vec4 x) {\n     return mod289_3416771560(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_3416771560(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise_3416771560(vec3 v)\n  {\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D_3416771560 = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g_3416771560 = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g_3416771560;\n  vec3 i1 = min( g_3416771560.xyz, l.zxy );\n  vec3 i2 = max( g_3416771560.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D_3416771560.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289_3416771560(i);\n  vec4 p = permute_3416771560( permute_3416771560( permute_3416771560(\n             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D_3416771560.wyz - D_3416771560.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1_3416771560 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0_3416771560 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1_3416771560.xy,h.z);\n  vec3 p3 = vec3(a1_3416771560.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt_3416771560(vec4(dot(p0_3416771560,p0_3416771560), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0_3416771560 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0_3416771560,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n  }\n\nvec3 snoiseVec3_638525861( vec3 x ){\n\n  float s  = snoise_3416771560(vec3( x ));\n  float s1 = snoise_3416771560(vec3( x.y - 19.1 , x.z + 33.4 , x.x + 47.2 ));\n  float s2 = snoise_3416771560(vec3( x.z + 74.2 , x.x - 124.5 , x.y + 99.4 ));\n  vec3 c = vec3( s , s1 , s2 );\n  return c;\n\n}\n\nvec3 curl( vec3 p ){\n  \n  const float e = .1;\n  vec3 dx = vec3( e   , 0.0 , 0.0 );\n  vec3 dy = vec3( 0.0 , e   , 0.0 );\n  vec3 dz = vec3( 0.0 , 0.0 , e   );\n\n  vec3 p_x0 = snoiseVec3_638525861( p - dx );\n  vec3 p_x1 = snoiseVec3_638525861( p + dx );\n  vec3 p_y0 = snoiseVec3_638525861( p - dy );\n  vec3 p_y1 = snoiseVec3_638525861( p + dy );\n  vec3 p_z0 = snoiseVec3_638525861( p - dz );\n  vec3 p_z1 = snoiseVec3_638525861( p + dz );\n\n  float x = p_y1.z - p_y0.z - p_z1.y + p_z0.y;\n  float y = p_z1.x - p_z0.x - p_x1.z + p_x0.z;\n  float z = p_x1.y - p_x0.y - p_y1.x + p_y0.x;\n\n  const float divisor = 1.0 / ( 2.0 * e );\n  return normalize( vec3( x , y , z ) * divisor );\n\n}\n\n      //\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289_1535212072(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289_1535212072(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute_1535212072(vec4 x)\n{\n  return mod289_1535212072(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt_1535212072(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade_1535212072(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat noise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289_1535212072(Pi0);\n  Pi1 = mod289_1535212072(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute_1535212072(permute_1535212072(ix) + iy);\n  vec4 ixy0 = permute_1535212072(ixy + iz0);\n  vec4 ixy1 = permute_1535212072(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt_1535212072(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt_1535212072(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade_1535212072(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n      void main() {\n        float t = uTime * 0.015;\n        vec3 pos = texture2D(positions, vUv).rgb; // basic simulation: displays the particles in place.\n        vec3 curlPos = texture2D(positions, vUv).rgb;\n        pos = curl(pos * uCurlFreq + t);\n        curlPos = curl(curlPos * uCurlFreq + t);\n        curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;\n        curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;\n        curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;\n        curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;\n        gl_FragColor = vec4(mix(pos, curlPos, noise(pos + t)), 1.0);\n      }',uniforms:{positions:{value:new r.DataTexture(g(262144,128),512,512,r.RGBFormat,r.FloatType)},uTime:{value:0},uCurlFreq:{value:.25}}})}return t}(r.ShaderMaterial);Object(o.c)({SimulationMaterial:d});var z=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(y.a)(this,t),n.call(this,{vertexShader:"uniform sampler2D positions;\n      uniform float uTime;\n      uniform float uFocus;\n      uniform float uFov;\n      uniform float uBlur;\n      varying float vDistance;\n      void main() { \n        vec3 pos = texture2D(positions, position.xy).xyz;\n        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n        gl_Position = projectionMatrix * mvPosition;\n        vDistance = abs(uFocus - -mvPosition.z);\n        gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur;\n      }",fragmentShader:"uniform float uOpacity;\n      varying float vDistance;\n      void main() {\n        vec2 cxy = 2.0 * gl_PointCoord - 1.0;\n        if (dot(cxy, cxy) > 1.0) discard;\n        gl_FragColor = vec4(vec3(1.0), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));\n      }",uniforms:{positions:{value:null},uTime:{value:0},uFocus:{value:5.1},uFov:{value:50},uBlur:{value:30}},transparent:!0,blending:r.NormalBlending,depthWrite:!1})}return t}(r.ShaderMaterial);Object(o.c)({DofPointsMaterial:z});var _=t(18),b=["speed","fov","aperture","focus","curl","size"];function h(e){var n=e.speed,t=e.fov,i=e.aperture,a=e.focus,s=e.curl,y=e.size,f=void 0===y?512:y,p=Object(u.a)(e,b),m=Object(l.useRef)(),g=Object(l.useRef)(),d=Object(l.useState)((function(){return new r.Scene})),z=Object(v.a)(d,1)[0],h=Object(l.useState)((function(){return new r.OrthographicCamera(-1,1,1,-1,1/Math.pow(2,53),1)})),j=Object(v.a)(h,1)[0],P=Object(l.useState)((function(){return new Float32Array([-1,-1,0,1,-1,0,1,1,0,-1,-1,0,1,1,0,-1,1,0])})),O=Object(v.a)(P,1)[0],w=Object(l.useState)((function(){return new Float32Array([0,1,1,1,1,0,0,1,1,0,0,0])})),F=Object(v.a)(w,1)[0],S=Object(x.a)(f,f,{minFilter:r.NearestFilter,magFilter:r.NearestFilter,format:r.RGBFormat,type:r.FloatType}),C=Object(l.useMemo)((function(){for(var e=f*f,n=new Float32Array(3*e),t=0;t<e;t++){var r=3*t;n[r+0]=t%f/f,n[r+1]=t/f/f}return n}),[f]);return Object(o.e)((function(e){e.gl.setRenderTarget(S),e.gl.clear(),e.gl.render(z,j),e.gl.setRenderTarget(null),g.current.uniforms.positions.value=S.texture,g.current.uniforms.uTime.value=e.clock.elapsedTime,g.current.uniforms.uFocus.value=r.MathUtils.lerp(g.current.uniforms.uFocus.value,a,.1),g.current.uniforms.uFov.value=r.MathUtils.lerp(g.current.uniforms.uFov.value,t,.1),g.current.uniforms.uBlur.value=r.MathUtils.lerp(g.current.uniforms.uBlur.value,9*(5.6-i),.1),m.current.uniforms.uTime.value=e.clock.elapsedTime*n,m.current.uniforms.uCurlFreq.value=r.MathUtils.lerp(m.current.uniforms.uCurlFreq.value,s,.1)})),Object(_.jsxs)(_.Fragment,{children:[Object(o.a)(Object(_.jsxs)("mesh",{children:[Object(_.jsx)("simulationMaterial",{ref:m}),Object(_.jsxs)("bufferGeometry",{children:[Object(_.jsx)("bufferAttribute",{attachObject:["attributes","position"],count:O.length/3,array:O,itemSize:3}),Object(_.jsx)("bufferAttribute",{attachObject:["attributes","uv"],count:F.length/2,array:F,itemSize:2})]})]}),z),Object(_.jsxs)("points",Object(c.a)(Object(c.a)({},p),{},{children:[Object(_.jsx)("dofPointsMaterial",{ref:g}),Object(_.jsx)("bufferGeometry",{children:Object(_.jsx)("bufferAttribute",{attachObject:["attributes","position"],count:C.length/3,array:C,itemSize:3})})]}))]})}function j(){var e=Object(s.a)({focus:{value:5.1,min:3,max:7,step:.01},speed:{value:.1,min:.1,max:100,step:.1},aperture:{value:1.8,min:1,max:5.6,step:.1},fov:{value:60,min:0,max:200},curl:{value:.25,min:.01,max:.5,step:.01}});return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(i.a,{makeDefault:!0,autoRotate:!0,autoRotateSpeed:.5,zoomSpeed:.1}),Object(_.jsx)(a.a,{yawFrequency:1,maxYaw:.05,pitchFrequency:1,maxPitch:.05,rollFrequency:.5,maxRoll:.5,intensity:.2}),Object(_.jsx)(h,Object(c.a)({},e))]})}window.addEventListener("resize",(function(){return Object(o.d)(Object(_.jsx)(j,{}),document.querySelector("canvas"),{events:o.b,linear:!0,camera:{fov:25,position:[0,0,6]},gl:new r.WebGL1Renderer({canvas:document.querySelector("canvas"),antialias:!0,alpha:!0})})})),window.dispatchEvent(new Event("resize"))}},[[66,1,2]]]);
//# sourceMappingURL=main.d58fb41d.chunk.js.map