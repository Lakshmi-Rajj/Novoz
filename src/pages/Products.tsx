import React, { useLayoutEffect, useRef, useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import { Renderer, Triangle, Program, Mesh } from 'ogl';
import {
  BriefcaseBusiness,
  CheckCircle2,
  MessageSquareText,
  ReceiptText,
  Sparkles,
  Users,
  Zap,
  BarChart3,
  Layers,
  TrendingUp,
} from 'lucide-react';

// ─── Prism ────────────────────────────────────────────────────────────────────

type PrismProps = {
  height?: number;
  baseWidth?: number;
  animationType?: 'rotate' | 'hover' | '3drotate';
  glow?: number;
  offset?: { x?: number; y?: number };
  noise?: number;
  transparent?: boolean;
  scale?: number;
  hueShift?: number;
  colorFrequency?: number;
  hoverStrength?: number;
  inertia?: number;
  bloom?: number;
  suspendWhenOffscreen?: boolean;
  timeScale?: number;
};

const Prism: React.FC<PrismProps> = ({
  height = 3.5,
  baseWidth = 5.5,
  animationType = 'rotate',
  glow = 1,
  offset = { x: 0, y: 0 },
  noise = 0.5,
  transparent = true,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  hoverStrength = 2,
  inertia = 0.05,
  bloom = 1,
  suspendWhenOffscreen = false,
  timeScale = 0.5,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const H = Math.max(0.001, height);
    const BW = Math.max(0.001, baseWidth);
    const BASE_HALF = BW * 0.5;
    const GLOW = Math.max(0.0, glow);
    const NOISE = Math.max(0.0, noise);
    const offX = offset?.x ?? 0;
    const offY = offset?.y ?? 0;
    const SAT = transparent ? 1.5 : 1;
    const SCALE = Math.max(0.001, scale);
    const HUE = hueShift || 0;
    const CFREQ = Math.max(0.0, colorFrequency || 1);
    const BLOOM = Math.max(0.0, bloom || 1);
    const RSX = 1, RSY = 1, RSZ = 1;
    const TS = Math.max(0, timeScale || 1);
    const HOVSTR = Math.max(0, hoverStrength || 1);
    const INERT = Math.max(0, Math.min(1, inertia || 0.12));

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const renderer = new Renderer({ dpr, alpha: transparent, antialias: false });
    const gl = renderer.gl;
    gl.disable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);
    gl.disable(gl.BLEND);

    Object.assign(gl.canvas.style, {
      position: 'absolute', inset: '0', width: '100%', height: '100%', display: 'block',
    } as Partial<CSSStyleDeclaration>);
    container.appendChild(gl.canvas);

    const vertex = `attribute vec2 position; void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

    const fragment = `
      precision highp float;
      uniform vec2  iResolution;
      uniform float iTime;
      uniform float uHeight;
      uniform float uBaseHalf;
      uniform mat3  uRot;
      uniform int   uUseBaseWobble;
      uniform float uGlow;
      uniform vec2  uOffsetPx;
      uniform float uNoise;
      uniform float uSaturation;
      uniform float uScale;
      uniform float uHueShift;
      uniform float uColorFreq;
      uniform float uBloom;
      uniform float uCenterShift;
      uniform float uInvBaseHalf;
      uniform float uInvHeight;
      uniform float uMinAxis;
      uniform float uPxScale;
      uniform float uTimeScale;

      vec4 tanh4(vec4 x){ vec4 e2x=exp(2.0*x); return (e2x-1.0)/(e2x+1.0); }
      float rand(vec2 co){ return fract(sin(dot(co,vec2(12.9898,78.233)))*43758.5453123); }

      float sdOctaAnisoInv(vec3 p){
        vec3 q=vec3(abs(p.x)*uInvBaseHalf,abs(p.y)*uInvHeight,abs(p.z)*uInvBaseHalf);
        float m=q.x+q.y+q.z-1.0;
        return m*uMinAxis*0.5773502691896258;
      }
      float sdPyramidUpInv(vec3 p){ return max(sdOctaAnisoInv(p),-p.y); }

      mat3 hueRotation(float a){
        float c=cos(a),s=sin(a);
        mat3 W=mat3(0.299,0.587,0.114,0.299,0.587,0.114,0.299,0.587,0.114);
        mat3 U=mat3(0.701,-0.587,-0.114,-0.299,0.413,-0.114,-0.300,-0.588,0.886);
        mat3 V=mat3(0.168,-0.331,0.500,0.328,0.035,-0.500,-0.497,0.296,0.201);
        return W+U*c+V*s;
      }

      void main(){
        vec2 f=(gl_FragCoord.xy-0.5*iResolution.xy-uOffsetPx)*uPxScale;
        float z=5.0, d=0.0;
        vec3 p; vec4 o=vec4(0.0);
        float cf=uColorFreq;
        mat2 wob=mat2(1.0);
        if(uUseBaseWobble==1){
          float t=iTime*uTimeScale;
          float c0=cos(t+0.0),c1=cos(t+33.0),c2=cos(t+11.0);
          wob=mat2(c0,c1,c2,c0);
        }
        for(int i=0;i<50;i++){
          p=vec3(f,z);
          p.xz=p.xz*wob;
          p=uRot*p;
          vec3 q=p; q.y+=uCenterShift;
          d=0.1+0.2*abs(sdPyramidUpInv(q));
          z-=d;
          o+=(sin((p.y+z)*cf+vec4(0.0,1.0,2.0,3.0))+1.0)/d;
        }
        o=tanh4(o*o*(uGlow*uBloom)/1e5);
        vec3 col=o.rgb;
        float n=rand(gl_FragCoord.xy+vec2(iTime));
        col+=(n-0.5)*uNoise;
        col=clamp(col,0.0,1.0);
        float L=dot(col,vec3(0.2126,0.7152,0.0722));
        col=clamp(mix(vec3(L),col,uSaturation),0.0,1.0);
        if(abs(uHueShift)>0.0001){ col=clamp(hueRotation(uHueShift)*col,0.0,1.0); }
        gl_FragColor=vec4(col,o.a);
      }
    `;

    const geometry = new Triangle(gl);
    const iResBuf = new Float32Array(2);
    const offsetPxBuf = new Float32Array(2);

    const program = new Program(gl, {
      vertex, fragment,
      uniforms: {
        iResolution: { value: iResBuf },
        iTime: { value: 0 },
        uHeight: { value: H },
        uBaseHalf: { value: BASE_HALF },
        uUseBaseWobble: { value: 1 },
        uRot: { value: new Float32Array([1,0,0,0,1,0,0,0,1]) },
        uGlow: { value: GLOW },
        uOffsetPx: { value: offsetPxBuf },
        uNoise: { value: NOISE },
        uSaturation: { value: SAT },
        uScale: { value: SCALE },
        uHueShift: { value: HUE },
        uColorFreq: { value: CFREQ },
        uBloom: { value: BLOOM },
        uCenterShift: { value: H * 0.25 },
        uInvBaseHalf: { value: 1 / BASE_HALF },
        uInvHeight: { value: 1 / H },
        uMinAxis: { value: Math.min(BASE_HALF, H) },
        uPxScale: { value: 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE) },
        uTimeScale: { value: TS },
      },
    });
    const mesh = new Mesh(gl, { geometry, program });

    const rotBuf = new Float32Array(9);
    const setMat3FromEuler = (yawY: number, pitchX: number, rollZ: number, out: Float32Array) => {
      const cy=Math.cos(yawY),sy=Math.sin(yawY);
      const cx=Math.cos(pitchX),sx=Math.sin(pitchX);
      const cz=Math.cos(rollZ),sz=Math.sin(rollZ);
      out[0]=cy*cz+sy*sx*sz; out[1]=cx*sz; out[2]=-sy*cz+cy*sx*sz;
      out[3]=-cy*sz+sy*sx*cz; out[4]=cx*cz; out[5]=sy*sz+cy*sx*cz;
      out[6]=sy*cx; out[7]=-sx; out[8]=cy*cx;
      return out;
    };

    const resize = () => {
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      renderer.setSize(w, h);
      iResBuf[0] = gl.drawingBufferWidth;
      iResBuf[1] = gl.drawingBufferHeight;
      offsetPxBuf[0] = offX * dpr;
      offsetPxBuf[1] = offY * dpr;
      program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const NOISE_IS_ZERO = NOISE < 1e-6;
    let raf = 0;
    const t0 = performance.now();

    const startRAF = () => { if (raf) return; raf = requestAnimationFrame(render); };
    const stopRAF = () => { if (!raf) return; cancelAnimationFrame(raf); raf = 0; };

    const rnd = () => Math.random();
    const wX=(0.3+rnd()*0.6)*RSX, wY=(0.2+rnd()*0.7)*RSY, wZ=(0.1+rnd()*0.5)*RSZ;
    const phX=rnd()*Math.PI*2, phZ=rnd()*Math.PI*2;
    let yaw=0, pitch=0, roll=0, targetYaw=0, targetPitch=0;
    const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
    const pointer = { x: 0, y: 0, inside: true };

    const onMove = (e: PointerEvent) => {
      const nx=(e.clientX-window.innerWidth*0.5)/(window.innerWidth*0.5);
      const ny=(e.clientY-window.innerHeight*0.5)/(window.innerHeight*0.5);
      pointer.x=Math.max(-1,Math.min(1,nx));
      pointer.y=Math.max(-1,Math.min(1,ny));
      pointer.inside=true;
    };

    let onPointerMove: ((e: PointerEvent) => void) | null = null;
    if (animationType === 'hover') {
      onPointerMove = (e: PointerEvent) => { onMove(e); startRAF(); };
      window.addEventListener('pointermove', onPointerMove, { passive: true });
      window.addEventListener('mouseleave', () => { pointer.inside = false; });
      program.uniforms.uUseBaseWobble.value = 0;
    } else if (animationType === '3drotate') {
      program.uniforms.uUseBaseWobble.value = 0;
    } else {
      program.uniforms.uUseBaseWobble.value = 1;
    }

    const render = (t: number) => {
      const time = (t - t0) * 0.001;
      program.uniforms.iTime.value = time;
      let continueRAF = true;

      if (animationType === 'hover') {
        targetYaw=(-pointer.x)*0.6*HOVSTR; targetPitch=(pointer.y)*0.6*HOVSTR;
        yaw=lerp(yaw,targetYaw,INERT); pitch=lerp(pitch,targetPitch,INERT); roll=lerp(roll,0,0.1);
        program.uniforms.uRot.value=setMat3FromEuler(yaw,pitch,roll,rotBuf);
        if(NOISE_IS_ZERO){
          const settled=Math.abs(yaw-targetYaw)<1e-4&&Math.abs(pitch-targetPitch)<1e-4&&Math.abs(roll)<1e-4;
          if(settled) continueRAF=false;
        }
      } else if (animationType === '3drotate') {
        const tS=time*TS;
        yaw=tS*wY; pitch=Math.sin(tS*wX+phX)*0.6; roll=Math.sin(tS*wZ+phZ)*0.5;
        program.uniforms.uRot.value=setMat3FromEuler(yaw,pitch,roll,rotBuf);
        if(TS<1e-6) continueRAF=false;
      } else {
        rotBuf[0]=1;rotBuf[1]=0;rotBuf[2]=0;rotBuf[3]=0;rotBuf[4]=1;
        rotBuf[5]=0;rotBuf[6]=0;rotBuf[7]=0;rotBuf[8]=1;
        program.uniforms.uRot.value=rotBuf;
        if(TS<1e-6) continueRAF=false;
      }

      renderer.render({ scene: mesh });
      if (continueRAF) raf = requestAnimationFrame(render); else raf = 0;
    };

    if (suspendWhenOffscreen) {
      const io = new IntersectionObserver(entries => {
        if (entries.some(e => e.isIntersecting)) {
          startRAF();
        } else {
          stopRAF();
        }
      });
      io.observe(container);
      startRAF();
    } else {
      startRAF();
    }

    return () => {
      stopRAF(); ro.disconnect();
      if (animationType === 'hover' && onPointerMove)
        window.removeEventListener('pointermove', onPointerMove as EventListener);
      if (gl.canvas.parentElement === container) container.removeChild(gl.canvas);
    };
  }, [height, baseWidth, animationType, glow, noise, offset?.x, offset?.y, scale, transparent,
      hueShift, colorFrequency, timeScale, hoverStrength, inertia, bloom, suspendWhenOffscreen]);

  return <div className="w-full h-full relative" ref={containerRef} />;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const products = [
  {
    name: 'WAVOZ',
    tagline: 'AI-Powered WhatsApp Business Platform',
    description: 'WAVOZ helps organisations automate customer communication, lead management, support operations, and internal workflows through a single WhatsApp-based solution.',
    highlights: ['Automated lead capture', 'Smart support routing', 'Broadcast messaging', 'Team inbox management', 'Real-time analytics'],
    icon: MessageSquareText,
    accent: 'from-blue-50 to-indigo-50',
    iconBg: 'bg-blue-600',
    strip: 'from-blue-500 to-indigo-500',
  },
  {
    name: 'HRMVOZ',
    tagline: 'AI-Powered Human Resource Management System',
    description: 'HRMVOZ simplifies attendance, leave, payroll, recruitment, and performance management for growing organisations that need enterprise-grade HR capabilities without complexity.',
    highlights: ['Attendance & leave tracking', 'Payroll processing', 'Recruitment workflows', 'Performance insights', 'Employee experience tools'],
    icon: Users,
    accent: 'from-violet-50 to-purple-50',
    iconBg: 'bg-violet-600',
    strip: 'from-violet-500 to-purple-500',
  },
  {
    name: 'INVOZ',
    tagline: 'AI-Driven Billing & Invoicing Software',
    description: 'INVOZ replaces manual billing with AI-driven automation, GST-ready invoicing, payment monitoring, reporting, and inventory-aware financial workflows.',
    highlights: ['GST billing', 'Invoice automation', 'Payment tracking', 'Financial reporting', 'Inventory integration'],
    icon: ReceiptText,
    accent: 'from-emerald-50 to-teal-50',
    iconBg: 'bg-emerald-600',
    strip: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'WORKFORZ',
    tagline: 'Workforce Management for Labour Outsourcing Companies',
    description: 'WORKFORZ is built for manpower and labour outsourcing teams managing distributed workforces across client sites with compliance, attendance, deployment, and billing in one place.',
    highlights: ['Attendance tracking', 'Workforce deployment', 'Payroll integration', 'Compliance management', 'Client billing'],
    icon: BriefcaseBusiness,
    accent: 'from-orange-50 to-amber-50',
    iconBg: 'bg-orange-500',
    strip: 'from-orange-400 to-amber-400',
  },
];

const platformValues = [
  { icon: Zap, title: 'Automation', description: 'Reduce manual work with intelligent workflows designed for real business tasks.', iconBg: 'bg-blue-50', iconColor: 'text-blue-600' },
  { icon: Sparkles, title: 'AI Intelligence', description: 'Surface insights and recommendations directly inside daily operations.', iconBg: 'bg-violet-50', iconColor: 'text-violet-600' },
  { icon: BarChart3, title: 'Visibility', description: 'Track performance, process health, and outcomes across every department.', iconBg: 'bg-emerald-50', iconColor: 'text-emerald-600' },
  { icon: TrendingUp, title: 'Scale', description: 'Support growing organisations with tools that are dependable and flexible.', iconBg: 'bg-orange-50', iconColor: 'text-orange-500' },
];

// ─── ScrollStack (window mode) ────────────────────────────────────────────────

interface ScrollStackProps {
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
}

function ScrollStack({
  children,
  itemDistance = 120,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
}: ScrollStackProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, { translateY: number; scale: number }>());
  const isUpdatingRef = useRef(false);
  const cardTopsRef = useRef<number[]>([]);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string, containerHeight: number) => {
    if (value.includes('%')) return (parseFloat(value) / 100) * containerHeight;
    return parseFloat(value);
  }, []);

  const measureStaticTops = useCallback(() => {
    if (!cardsRef.current.length) return;

    // Temporarily clear transforms to measure static layout positions
    const savedTransforms = cardsRef.current.map(card => card ? card.style.transform : '');
    cardsRef.current.forEach(card => {
      if (card) card.style.transform = 'none';
    });

    // Measure document-relative top coordinates
    const tops = cardsRef.current.map(card => {
      if (!card) return 0;
      return card.getBoundingClientRect().top + window.scrollY;
    });

    // Restore saved transforms
    cardsRef.current.forEach((card, i) => {
      if (card) card.style.transform = savedTransforms[i];
    });

    cardTopsRef.current = tops;
  }, []);

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;
    if (window.innerWidth < 1024) return; // Completely disable JS calculations on mobile
    isUpdatingRef.current = true;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElement = document.querySelector('.scroll-stack-end') as HTMLElement | null;
    const endElementTop = endElement ? endElement.getBoundingClientRect().top + window.scrollY : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      // Use cached static top if available to avoid layout feedback/shaking
      const cardTop = cardTopsRef.current[i] !== undefined 
        ? cardTopsRef.current[i] 
        : (card.getBoundingClientRect().top + window.scrollY);
        
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight / 2;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newT = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
      };
      const last = lastTransformsRef.current.get(i);
      const changed = !last || Math.abs(last.translateY - newT.translateY) > 0.1 || Math.abs(last.scale - newT.scale) > 0.001;
      if (changed) {
        card.style.transform = `translate3d(0, ${newT.translateY}px, 0) scale(${newT.scale})`;
        lastTransformsRef.current.set(i, newT);
      }
    });

    isUpdatingRef.current = false;
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, calculateProgress, parsePercentage]);

  useLayoutEffect(() => {
    const cards = Array.from(document.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    cardsRef.current = cards;

    const handleLayout = () => {
      const isMobile = window.innerWidth < 1024;
      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          card.style.marginBottom = isMobile ? '24px' : `${itemDistance}px`;
        } else {
          card.style.marginBottom = '0px';
        }
        if (isMobile) {
          card.style.willChange = 'auto';
          card.style.transform = '';
          card.style.transformOrigin = '';
          card.style.backfaceVisibility = '';
        } else {
          card.style.willChange = 'transform';
          card.style.transformOrigin = 'top center';
          card.style.backfaceVisibility = 'hidden';
          card.style.transform = 'translate3d(0, 0, 0)';
        }
      });
      if (isMobile) {
        lastTransformsRef.current.clear();
      }
    };

    handleLayout();
    measureStaticTops();
    updateCardTransforms();

    let ticking = false;
    const onScroll = () => {
      if (window.innerWidth < 1024) return; // Completely ignore scroll calculations on mobile/tablet viewport
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateCardTransforms();
        ticking = false;
      });
    };

    // Use ResizeObserver on wrapper to re-measure positions on layout changes
    const resizeObserver = new ResizeObserver(() => {
      handleLayout();
      measureStaticTops();
      updateCardTransforms();
    });
    
    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    const lastTransforms = lastTransformsRef.current;
    return () => {
      window.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
      cardsRef.current = [];
      lastTransforms.clear();
      isUpdatingRef.current = false;
    };
  }, [itemDistance, updateCardTransforms, measureStaticTops]);


  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
}

// ─── Products Page ─────────────────────────────────────────────────────────────

export default function Products() {
  return (
    <div className="bg-white font-charlieText">

      {/* ── Hero with Prism background ── */}
{/* ── Hero with Prism background ── */}
<section className="relative overflow-hidden bg-[#EEF2FF] py-28 border-b border-slate-100">

  {/* Prism canvas — full section fill, light palette to match Careers hero */}
  <div className="absolute inset-0 z-0 opacity-60">
    <Prism
      animationType="rotate"
      height={3.5}
      baseWidth={5.5}
      glow={1.2}
      bloom={1.1}
      noise={0.04}
      transparent={true}
      scale={3.2}
      colorFrequency={1.1}
      hueShift={0}
      timeScale={0.4}
      hoverStrength={1.4}
      inertia={0.06}
      suspendWhenOffscreen
    />
  </div>

  {/* Gradient overlay — light at bottom so section bleeds into white */}
  <div
    className="pointer-events-none absolute inset-0 z-10"
    style={{
      background: 'linear-gradient(to bottom, rgba(238,242,255,0.25) 0%, rgba(238,242,255,0.55) 60%, rgba(255,255,255,0.95) 100%)',
    }}
  />

  {/* Content */}
  <div className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest bg-white border border-slate-100 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 shadow-sm">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse inline-block" />
      Products
    </span>
    <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold tracking-tight text-slate-900 font-charlieDisplay leading-[1.1] mb-5">
      A product ecosystem built for{' '}
      <span
        style={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #059669 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        modern business
      </span>
    </h1>
    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
      Novoz Infinity develops specialised software products that combine automation, AI, and
      business intelligence to help businesses improve efficiency, streamline processes, and
      scale with confidence.
    </p>

    {/* Stat row */}
    <div className="mt-10 inline-grid grid-cols-3 divide-x divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden backdrop-blur-sm bg-white shadow-sm">
      {[
        { value: '4', label: 'Products' },
        { value: '500+', label: 'Organisations' },
        { value: '99.9%', label: 'Uptime SLA' },
      ].map((stat) => (
        <div key={stat.label} className="px-8 py-4 text-center">
          <p className="text-2xl font-bold text-slate-900 font-charlieDisplay">{stat.value}</p>
          <p className="text-xs text-slate-500 mt-0.5 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── Why Novoz ── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Why Novoz Infinity</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-charlieDisplay">
              Intelligent, integrated, and scalable
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 relative overflow-hidden rounded-3xl border border-blue-100 bg-blue-50 p-10">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center mb-6">
                <Layers className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-charlieDisplay mb-3">
                One ecosystem. Every operation.
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-lg">
                Each product is designed to solve a real operational challenge — from customer engagement and workforce management to billing and HR operations. The result is a connected ecosystem where automation, visibility, and decision support work together seamlessly.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['WhatsApp Automation', 'HR Management', 'Billing & Invoicing', 'Workforce Ops'].map((tag) => (
                  <span key={tag} className="text-xs font-semibold text-blue-700 bg-white border border-blue-200 px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: Zap, label: 'AI-assisted automation', sub: 'Faster, smarter execution across every workflow.' },
                { icon: BarChart3, label: 'Business intelligence', sub: 'Real-time dashboards for operational visibility.' },
                { icon: TrendingUp, label: 'Built to scale', sub: 'Enterprise-grade tools for growing teams.' },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{label}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Suite ── */}
      <section className="py-24 bg-[#F8F9FB] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Product Suite</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-charlieDisplay mb-3">
              Explore the Novoz Infinity product ecosystem
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Each product combines reliability, speed, and actionable intelligence to support the way modern businesses operate.
            </p>
          </div>

          <ScrollStack
            itemDistance={120}
            itemScale={0.03}
            itemStackDistance={30}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.85}
          >
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div
                  key={product.name}
                  className="scroll-stack-card relative w-full rounded-3xl border border-slate-200 bg-white p-8 lg:p-10 shadow-sm box-border origin-top"
                  style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
                >
                  <div className={`absolute inset-x-0 top-0 h-[3px] rounded-t-3xl bg-gradient-to-r ${product.strip}`} />
                  <span className="absolute top-6 right-8 text-xs font-bold tracking-widest text-slate-200 font-charlieDisplay">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-8 items-start pt-3">
                    <div>
                      <div className={`w-11 h-11 rounded-2xl ${product.iconBg} flex items-center justify-center mb-5 shadow-sm`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                        Product {index + 1}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 font-charlieDisplay mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600 leading-snug">{product.tagline}</p>
                    </div>

                    <div>
                      <p className="text-sm text-slate-500 leading-relaxed mb-5">{product.description}</p>
                      <div className={`rounded-2xl bg-gradient-to-br ${product.accent} border border-slate-100 p-5`}>
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Key capabilities</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {product.highlights.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollStack>
        </div>
      </section>

      {/* ── Platform Value ── */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">Platform Value</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-charlieDisplay mb-4">
              A unified solution set for business growth
            </h2>
            <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From customer communication and HR operations to billing and workforce management, Novoz Infinity gives teams one reliable ecosystem to automate complex work and make faster, more informed decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {platformValues.map(({ icon: Icon, title, description, iconBg, iconColor }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-6 hover:border-slate-200 hover:bg-white hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-4 h-4 ${iconColor}`} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>


        </div>
      </section>

    </div>
  );
}