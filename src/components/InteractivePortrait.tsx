import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function InteractivePortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const gu = {
      time: { value: 0 },
      dTime: { value: 0 },
      aspect: { value: width / height },
    };

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      0.1,
      1000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    class Blob {
      renderer: THREE.WebGLRenderer;
      rtA: THREE.WebGLRenderTarget;
      rtB: THREE.WebGLRenderTarget;
      currentRT: THREE.WebGLRenderTarget;
      nextRT: THREE.WebGLRenderTarget;
      fbTexture: { value: THREE.Texture };
      uniforms: {
        pointer: { value: THREE.Vector2 };
        pointerDown: { value: number };
        pointerRadius: { value: number };
        pointerDuration: { value: number };
      };
      rtScene: THREE.Mesh;
      rtCamera: THREE.OrthographicCamera;

      constructor(renderer: THREE.WebGLRenderer) {
        this.renderer = renderer;

        this.rtA = new THREE.WebGLRenderTarget(width, height, {
          type: THREE.HalfFloatType,
        });
        this.rtB = new THREE.WebGLRenderTarget(width, height, {
          type: THREE.HalfFloatType,
        });

        this.currentRT = this.rtA;
        this.nextRT = this.rtB;
        this.fbTexture = { value: this.currentRT.texture };

        this.uniforms = {
          pointer: { value: new THREE.Vector2().setScalar(10) },
          pointerDown: { value: 1 },
          pointerRadius: { value: 0.12 },
          pointerDuration: { value: 0.8 },
        };

        const handleMouseMove = (event: MouseEvent) => {
          const rect = container.getBoundingClientRect();
          this.uniforms.pointer.value.x =
            ((event.clientX - rect.left) / width) * 2 - 1;
          this.uniforms.pointer.value.y =
            -((event.clientY - rect.top) / height) * 2 + 1;
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", () =>
          this.uniforms.pointer.value.setScalar(10)
        );

        const rtMaterial = new THREE.MeshBasicMaterial();
        rtMaterial.defines = { USE_UV: "" };

        rtMaterial.onBeforeCompile = (shader) => {
          shader.uniforms.dTime = gu.dTime;
          shader.uniforms.aspect = gu.aspect;
          shader.uniforms.pointer = this.uniforms.pointer;
          shader.uniforms.pointerDown = this.uniforms.pointerDown;
          shader.uniforms.pointerRadius = this.uniforms.pointerRadius;
          shader.uniforms.pointerDuration = this.uniforms.pointerDuration;
          shader.uniforms.fbTexture = this.fbTexture;
          shader.uniforms.time = gu.time;

          shader.fragmentShader = `
            uniform float dTime, aspect, pointerDown, pointerRadius, pointerDuration, time;
            uniform vec2 pointer;
            uniform sampler2D fbTexture;
            float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
            float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.-2.*f);float a=hash(i);float b=hash(i+vec2(1.,0.));float c=hash(i+vec2(0.,1.));float d=hash(i+vec2(1.,1.));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
            ${shader.fragmentShader}
          `.replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
            float rVal = texture2D(fbTexture, vUv).r;
            rVal -= clamp(dTime / pointerDuration, 0., 0.05);
            rVal = min(rVal, 0.15);

          vec2 uv = (vUv - 0.5) * 2. * vec2(aspect, 1.);
          vec2 uvOpposite = -(vUv - 0.5) * 2. * vec2(aspect, 1.);
     

vec2 autoMove = vec2(
    sin(time * 2.0) * 0.4,
    cos(time * 1.8) * 0.6
);

vec2 mouse = pointer * vec2(aspect, 1.);

float distMouse = length(uv - mouse);
float distAuto = length(uv - autoMove);

float dist = min(distMouse, distAuto);

float wave = sin(dist * 90.0 - time * 18.0) * 0.5 + 0.5;
float waveStrength = (1.0 - smoothstep(0.0, pointerRadius * 1.5, dist)) * wave;

float f = 1. - smoothstep(pointerRadius*0.4, pointerRadius*1.8, dist);
f += waveStrength * 0.6;

rVal = clamp(rVal + f, 0., 1.);

diffuseColor.rgb = vec3(rVal);
            `
          );
        };

        this.rtScene = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2),
          rtMaterial
        );
        this.rtCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      }

      render() {
        this.fbTexture.value = this.currentRT.texture;

        this.renderer.setRenderTarget(this.nextRT);
        this.renderer.render(this.rtScene, this.rtCamera);
        this.renderer.setRenderTarget(null);

        const temp = this.currentRT;
        this.currentRT = this.nextRT;
        this.nextRT = temp;
      }
    }

    const blob = new Blob(renderer);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
  
    

const BASE_IMAGE = isMobile ? "/images/1mobile.png" : "/images/1.png";
const HELMET_IMAGE = isMobile ? "/images/2mobile.png" : "/images/2.png";


    const textureLoader = new THREE.TextureLoader();
const baseTexture = textureLoader.load(BASE_IMAGE, (texture) => {

      const img = texture.image;

const imgAspect = img.width / img.height;
const containerAspect = width / height;

let planeWidth;
let planeHeight;

if (containerAspect > imgAspect) {
  planeWidth = width;
  planeHeight = width / imgAspect;
} else {
  planeHeight = height;
  planeWidth = height * imgAspect;
}
        baseImage.geometry.dispose();
        baseImage.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        helmetImage.geometry.dispose();
        helmetImage.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
      }
    );

   const helmetTexture = textureLoader.load(HELMET_IMAGE);


    baseTexture.colorSpace = THREE.SRGBColorSpace;
    helmetTexture.colorSpace = THREE.SRGBColorSpace;

    const baseImageMaterial = new THREE.MeshBasicMaterial({
      map: baseTexture,
      transparent: true,
      alphaTest: 0.0,
    });

    

baseImageMaterial.onBeforeCompile = (shader) => {

  shader.uniforms.time = gu.time;
  

  shader.fragmentShader = `
  uniform float time;
  ${shader.fragmentShader}
  `.replace(
   
    `
    vec2 uv = vUv;

    float scan = sin((uv.y * 12.0) + time * 3.0);
    scan = smoothstep(0.4, 1.0, scan);

    vec3 scanColor = vec3(0.1,0.7,1.0) * scan * 0.6;

    gl_FragColor.rgb += scanColor;

    #include <dithering_fragment>
    `
  );

};
    const baseImage = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      baseImageMaterial
    );
    scene.add(baseImage);

    const bgPlaneMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff,
      transparent: true,
    });
    bgPlaneMaterial.defines = { USE_UV: "" };

    bgPlaneMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.texBlob = { value: blob.currentRT.texture };
      shader.uniforms.time = gu.time;

      let vertexShader = shader.vertexShader;
      vertexShader = vertexShader.replace(
        "void main() {",
        "varying vec4 vPosProj;\nvoid main() {"
      );
      vertexShader = vertexShader.replace(
        "#include <project_vertex>",
        "#include <project_vertex>\nvPosProj = gl_Position;"
      );
      shader.vertexShader = vertexShader;

      shader.fragmentShader = `
        uniform sampler2D texBlob;
        uniform float time;
        varying vec4 vPosProj;

        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);f=f*f*(3.-2.*f);float a=hash(i);float b=hash(i+vec2(1.,0.));float c=hash(i+vec2(0.,1.));float d=hash(i+vec2(1.,1.));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}

        float fbm(vec2 p) {
            float value = 0.0;
            float amplitude = 0.5;
            for (int i = 0; i < 4; i++) {
                value += amplitude * noise(p);
                p *= 2.1;
                amplitude *= 0.3;
            }
            return value;
        }

        ${shader.fragmentShader}
      `.replace(
        `#include <clipping_planes_fragment>`,
        `
        vec2 blobUV=((vPosProj.xy/vPosProj.w)+1.)*0.5;
        vec4 blobData=texture(texBlob,blobUV);
        if(blobData.r<0.02)discard;
        // controla cor do fundo

        vec3 colorBg = vec3(0.50, 0.50, 0.50);      // branco levemente cinza
        vec3 colorSoftShape = vec3(0.70, 0.70, 0.70); // formas suaves cinza claro
        vec3 colorLine = vec3(0.82, 0.84, 0.86);     // branco gelo

        vec2 uv = vUv * 3.5;

        vec2 distortionField = vUv * 2.0;
        float distortion = fbm(distortionField + time * 0.2);

        float distortionStrength = 0.7;
        vec2 warpedUv = uv + (distortion - 0.5) * distortionStrength;

        float n = fbm(warpedUv);

        float softShapeMix = smoothstep(0.1, 0.9, sin(n * 3.0));
        vec3 baseColor = mix(colorBg, colorSoftShape, softShapeMix);
        float linePattern = fract(n * 15.0);
        float lineMix = 1.0 - smoothstep(0.49, 0.51, linePattern);
        vec3 finalColor = mix(baseColor, colorLine, lineMix);

        diffuseColor.rgb = finalColor;
        #include <clipping_planes_fragment>
        `
      );
    };

    const bgPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      bgPlaneMaterial
    );
    scene.add(bgPlane);

    const helmetImageMaterial = new THREE.MeshBasicMaterial({
      map: helmetTexture,
      transparent: true,
      alphaTest: 0.0,
    });

    helmetImageMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.texBlob = { value: blob.currentRT.texture };
      let vertexShader = shader.vertexShader;

      vertexShader = vertexShader.replace(
        "void main() {",
        "varying vec4 vPosProj;\nvoid main() {"
      );
      vertexShader = vertexShader.replace(
        "#include <project_vertex>",
        "#include <project_vertex>\nvPosProj = gl_Position;"
      );
      shader.vertexShader = vertexShader;
      shader.fragmentShader = `
        uniform sampler2D texBlob; varying vec4 vPosProj;
        ${shader.fragmentShader}
      `.replace(
        `#include <clipping_planes_fragment>`,
        `
        vec2 blobUV=((vPosProj.xy/vPosProj.w)+1.)*0.5;
        vec4 blobData=texture(texBlob,blobUV);
        if(blobData.r<0.02)discard;
        #include <clipping_planes_fragment>
        `
      );
    };

    const helmetImage = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      helmetImageMaterial
    );
    scene.add(helmetImage);

    baseImage.position.z = 0.0;
    bgPlane.position.z = 0.05;
    helmetImage.position.z = 0.1;

    const clock = new THREE.Clock();
    let t = 0;

    const animate = () => {
      const dt = clock.getDelta();
      t += dt;
      gu.time.value = t;
      gu.dTime.value = dt;
      blob.render();
      renderer.render(scene, camera);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.left = newWidth / -2;
      camera.right = newWidth / 2;
      camera.top = newHeight / 2;
      camera.bottom = newHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      gu.aspect.value = newWidth / newHeight;
      if (baseTexture.image) {
        const img = baseTexture.image;
        const imgAspect = img.width / img.height;
        const containerAspect = newWidth / newHeight;
        let planeWidth, planeHeight;
        if (imgAspect > containerAspect) {
          planeWidth = newWidth;
          planeHeight = newWidth / imgAspect;
        } else {
          planeHeight = newHeight;
          planeWidth = newHeight * imgAspect;
        }
        baseImage.geometry.dispose();
        baseImage.geometry = new THREE.PlaneGeometry(planeWidth, planeHeight);
        helmetImage.geometry.dispose();
        helmetImage.geometry = new THREE.PlaneGeometry(
          planeWidth,
          planeHeight
        );

        bgPlane.geometry.dispose();
        bgPlane.geometry = new THREE.PlaneGeometry(newWidth, newHeight);
      }

      const nowMobile = window.matchMedia("(max-width: 768px)").matches;

const nextBase = nowMobile ? "/images/1mobile.png" : "/images/1.png";
const nextHelmet = nowMobile ? "/images/2mobile.png" : "/images/2.png";

if (baseTexture.image?.src && !baseTexture.image.src.includes(nextBase)) {
  baseTexture.dispose();
  helmetTexture.dispose();

  baseImageMaterial.map = textureLoader.load(nextBase);
  helmetImageMaterial.map = textureLoader.load(nextHelmet);

  baseImageMaterial.needsUpdate = true;
  helmetImageMaterial.needsUpdate = true;
}

    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
      if (rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
      baseTexture.dispose();
      helmetTexture.dispose();
      blob.rtA.dispose();
      blob.rtB.dispose();
    };
  }, []);

  return (
    
<div
  ref={containerRef}
  className="absolute inset-0 w-full h-full overflow-hidden bg-transparent"
  style={{
    touchAction: "pan-y",
    pointerEvents: "auto",
  }}
/>



  );
}
