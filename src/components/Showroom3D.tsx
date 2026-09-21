import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Sparkles, 
  RotateCw, 
  Sun, 
  Eye, 
  ShieldCheck, 
  Layers, 
  ZoomIn, 
  Maximize2, 
  Download, 
  CheckCircle2, 
  Compass, 
  Sliders,
  Award,
  Lock
} from 'lucide-react';
import { MetalType, JewelryItem } from '../types';
import { JEWELRY_COLLECTION } from '../data/jewelryData';

interface Showroom3DProps {
  initialItem?: JewelryItem;
  onOpenCertificateModal: (item: JewelryItem) => void;
  onBookConcierge: (interest: string) => void;
}

export const Showroom3D: React.FC<Showroom3DProps> = ({ 
  initialItem, 
  onOpenCertificateModal, 
  onBookConcierge 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedPiece, setSelectedPiece] = useState<string>(initialItem ? initialItem.id : JEWELRY_COLLECTION[0].id);
  const [selectedMetal, setSelectedMetal] = useState<MetalType>('rose_gold');
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [lightIntensity, setLightIntensity] = useState<number>(1.5);
  const [isExplodedView, setIsExplodedView] = useState<boolean>(false);
  const [viewAngle, setViewAngle] = useState<'perspective' | 'top' | 'side' | 'macro'>('perspective');
  const [activeTab, setActiveTab] = useState<'inspector' | 'lighting' | 'materials'>('inspector');

  const currentItem = JEWELRY_COLLECTION.find(item => item.id === selectedPiece) || JEWELRY_COLLECTION[0];

  // Three.js instances ref
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const keyLightRef = useRef<THREE.SpotLight | null>(null);
  const fillLightRef = useRef<THREE.PointLight | null>(null);
  const rimLightRef = useRef<THREE.DirectionalLight | null>(null);

  // Metal color mappings
  const metalColors: Record<MetalType, { color: number; roughness: number; metalness: number; name: string }> = {
    rose_gold: { color: 0xdfa2a8, roughness: 0.18, metalness: 0.95, name: 'Ouro Rosê 18k (750)' },
    white_gold: { color: 0xe2e8f0, roughness: 0.12, metalness: 0.98, name: 'Ouro Branco 18k / Platina' },
    yellow_gold: { color: 0xd4af37, roughness: 0.16, metalness: 0.95, name: 'Ouro Nobre Amarelo 18k' },
    platinum: { color: 0xf1f5f9, roughness: 0.08, metalness: 1.0, name: 'Platina Pura 950' },
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth;
    const height = container.clientHeight || 550;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060608);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 2.5, 6.5);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Subtle Luxury Pedestal
    const pedestalGeo = new THREE.CylinderGeometry(2.8, 3.2, 0.4, 64);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x111115,
      roughness: 0.4,
      metalness: 0.8,
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -1.6;
    pedestal.receiveShadow = true;
    scene.add(pedestal);

    // Pedestal Rose Gold Trim Ring
    const trimGeo = new THREE.TorusGeometry(2.85, 0.03, 16, 100);
    const trimMat = new THREE.MeshStandardMaterial({
      color: 0xb76e79,
      roughness: 0.2,
      metalness: 0.9,
    });
    const trim = new THREE.Mesh(trimGeo, trimMat);
    trim.rotation.x = Math.PI / 2;
    trim.position.y = -1.4;
    scene.add(trim);

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.SpotLight(0xfffaed, 3.5 * lightIntensity);
    keyLight.position.set(5, 8, 5);
    keyLight.angle = Math.PI / 4;
    keyLight.penumbra = 0.5;
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);
    keyLightRef.current = keyLight;

    const fillLight = new THREE.PointLight(0xb76e79, 2.0 * lightIntensity, 20);
    fillLight.position.set(-5, 3, -3);
    scene.add(fillLight);
    fillLightRef.current = fillLight;

    const rimLight = new THREE.DirectionalLight(0x22c55e, 1.8 * lightIntensity);
    rimLight.position.set(0, 6, -5);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // Sparkle Particles in 3D air
    const particleCount = 75;
    const particlesGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = Math.random() * 5 - 1;
      particlePositions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xdfa2a8,
      size: 0.04,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const sparkles = new THREE.Points(particlesGeo, particleMat);
    scene.add(sparkles);

    // Mouse drag interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !modelGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      modelGroupRef.current.rotation.y += deltaX * 0.008;
      modelGroupRef.current.rotation.x += deltaY * 0.008;
      modelGroupRef.current.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, modelGroupRef.current.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (!cameraRef.current) return;
      cameraRef.current.position.z += e.deltaY * 0.004;
      cameraRef.current.position.z = Math.max(3.0, Math.min(10.0, cameraRef.current.position.z));
    };

    // Touch support for mobile
    let touchStartPos = { x: 0, y: 0 };
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || !modelGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - touchStartPos.x;
      const deltaY = e.touches[0].clientY - touchStartPos.y;

      modelGroupRef.current.rotation.y += deltaX * 0.01;
      modelGroupRef.current.rotation.x += deltaY * 0.01;
      modelGroupRef.current.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, modelGroupRef.current.rotation.x));

      touchStartPos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('wheel', onWheel, { passive: false });
    container.addEventListener('touchstart', onTouchStart);
    container.addEventListener('touchmove', onTouchMove);
    container.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container || !rendererRef.current || !cameraRef.current) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 550;
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (modelGroupRef.current && isAutoRotating && !isDragging) {
        modelGroupRef.current.rotation.y += 0.007;
      }

      // Sparkle pulse
      if (sparkles) {
        sparkles.rotation.y = elapsedTime * 0.05;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update 3D Geometry & Materials when selection or metal changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    // Remove previous model group
    if (modelGroupRef.current) {
      scene.remove(modelGroupRef.current);
      modelGroupRef.current.traverse((child) => {
        if ((child as THREE.Mesh).geometry) {
          (child as THREE.Mesh).geometry.dispose();
        }
      });
    }

    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;

    const metalConfig = metalColors[selectedMetal];

    // Metal Material
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: metalConfig.color,
      roughness: metalConfig.roughness,
      metalness: metalConfig.metalness,
      envMapIntensity: 1.5,
    });

    // Emerald Material (Physical with transmission & realistic green refraction)
    const emeraldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0f8a44,
      emissive: 0x022e14,
      emissiveIntensity: 0.25,
      roughness: 0.06,
      metalness: 0.1,
      transmission: 0.88,
      ior: 1.58,
      thickness: 1.6,
      specularIntensity: 1.0,
      specularColor: 0xffffff,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      attenuationColor: new THREE.Color(0x0a5c2c),
      attenuationDistance: 0.8,
    });

    // Diamond Material
    const diamondMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      emissive: 0x111122,
      emissiveIntensity: 0.1,
      roughness: 0.02,
      metalness: 0.05,
      transmission: 0.95,
      ior: 2.42,
      thickness: 1.2,
      specularIntensity: 1.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.02,
    });

    // Build model based on item type
    const modelType = currentItem.model3dType;

    if (modelType === 'ring') {
      // 1. Ring Shank / Band
      const bandGeo = new THREE.TorusGeometry(1.2, 0.18, 32, 100);
      const band = new THREE.Mesh(bandGeo, metalMaterial);
      band.rotation.x = Math.PI / 2;
      band.castShadow = true;
      modelGroup.add(band);

      // 2. Crown / Setting basket
      const basketGeo = new THREE.CylinderGeometry(0.85, 0.45, 0.6, 8);
      const basket = new THREE.Mesh(basketGeo, metalMaterial);
      basket.position.y = isExplodedView ? 1.7 : 1.3;
      basket.castShadow = true;
      modelGroup.add(basket);

      // 3. Main Octagonal Emerald
      const gemGeo = new THREE.CylinderGeometry(0.82, 0.6, 0.65, 8);
      const mainEmerald = new THREE.Mesh(gemGeo, emeraldMaterial);
      mainEmerald.position.y = isExplodedView ? 2.5 : 1.55;
      mainEmerald.castShadow = true;
      modelGroup.add(mainEmerald);

      // 4. Four Gold Prongs
      const prongPositions = [
        [0.6, 0, 0.6],
        [-0.6, 0, 0.6],
        [0.6, 0, -0.6],
        [-0.6, 0, -0.6],
      ];
      prongPositions.forEach(([x, _, z]) => {
        const prongGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.7, 16);
        const prong = new THREE.Mesh(prongGeo, metalMaterial);
        prong.position.set(x, isExplodedView ? 2.4 : 1.55, z);
        modelGroup.add(prong);
      });

      // 5. Side Diamonds
      const sideDiaGeo = new THREE.OctahedronGeometry(0.18, 2);
      [-0.95, 0.95].forEach((xPos) => {
        const sideDia = new THREE.Mesh(sideDiaGeo, diamondMaterial);
        sideDia.position.set(xPos, isExplodedView ? 1.4 : 1.15, 0);
        sideDia.scale.set(1.2, 0.8, 1);
        modelGroup.add(sideDia);
      });
    } else if (modelType === 'teardrop') {
      // Magnificent Pear / Teardrop cut Emerald
      const pearGeo = new THREE.ConeGeometry(1.2, 2.2, 12);
      const pearGem = new THREE.Mesh(pearGeo, emeraldMaterial);
      pearGem.rotation.x = Math.PI;
      pearGem.position.y = isExplodedView ? 1.8 : 0.8;
      modelGroup.add(pearGem);

      // Halo of diamonds around perimeter
      const haloCount = 16;
      for (let i = 0; i < haloCount; i++) {
        const angle = (i / haloCount) * Math.PI * 2;
        const radius = 1.35;
        const diaGeo = new THREE.OctahedronGeometry(0.12, 1);
        const dia = new THREE.Mesh(diaGeo, diamondMaterial);
        dia.position.set(Math.cos(angle) * radius, (isExplodedView ? 1.2 : 0.2) + Math.sin(angle) * 0.2, Math.sin(angle) * radius);
        modelGroup.add(dia);
      }

      // Bail / loop on top in chosen metal
      const bailGeo = new THREE.TorusGeometry(0.35, 0.07, 16, 32);
      const bail = new THREE.Mesh(bailGeo, metalMaterial);
      bail.position.y = isExplodedView ? 3.2 : 2.0;
      modelGroup.add(bail);
    } else if (modelType === 'gold_bar') {
      // 100g Investment Gold Ingot
      const barGeo = new THREE.BoxGeometry(2.6, 0.5, 1.4);
      const goldBarMat = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        roughness: 0.15,
        metalness: 0.95,
      });
      const bar = new THREE.Mesh(barGeo, goldBarMat);
      bar.position.y = 0;
      bar.castShadow = true;
      modelGroup.add(bar);

      // Calibrated Emeralds aligned on top of bar or tray
      for (let i = -2; i <= 2; i++) {
        const calibGemGeo = new THREE.CylinderGeometry(0.22, 0.15, 0.25, 8);
        const calibGem = new THREE.Mesh(calibGemGeo, emeraldMaterial);
        calibGem.position.set(i * 0.5, isExplodedView ? 1.2 : 0.4, 0);
        modelGroup.add(calibGem);
      }
    } else {
      // Rough or Fancy Cut Museum Gemstone
      const roughGeo = new THREE.DodecahedronGeometry(1.4, 1);
      const roughGem = new THREE.Mesh(roughGeo, emeraldMaterial);
      roughGem.position.y = 0.5;
      modelGroup.add(roughGem);
    }

    modelGroup.position.y = -0.2;
    scene.add(modelGroup);
  }, [selectedPiece, selectedMetal, isExplodedView]);

  // Update light intensity
  useEffect(() => {
    if (keyLightRef.current) keyLightRef.current.intensity = 3.5 * lightIntensity;
    if (fillLightRef.current) fillLightRef.current.intensity = 2.0 * lightIntensity;
    if (rimLightRef.current) rimLightRef.current.intensity = 1.8 * lightIntensity;
  }, [lightIntensity]);

  // Set preset camera angles
  const handleSetViewAngle = (angle: 'perspective' | 'top' | 'side' | 'macro') => {
    setViewAngle(angle);
    if (!cameraRef.current || !modelGroupRef.current) return;

    if (angle === 'perspective') {
      cameraRef.current.position.set(0, 2.5, 6.5);
      modelGroupRef.current.rotation.set(0, 0, 0);
    } else if (angle === 'top') {
      cameraRef.current.position.set(0, 6.5, 0.1);
      modelGroupRef.current.rotation.set(0, 0, 0);
    } else if (angle === 'side') {
      cameraRef.current.position.set(6.5, 0.8, 0);
      modelGroupRef.current.rotation.set(0, 0, 0);
    } else if (angle === 'macro') {
      cameraRef.current.position.set(0, 1.2, 3.2);
    }
  };

  return (
    <div className="w-full bg-[#08080a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      {/* Showroom Header */}
      <div className="p-6 border-b border-white/10 bg-gradient-to-r from-black via-[#0d0d12] to-black flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#14A44D]/20 text-[#14A44D] border border-[#14A44D]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14A44D] animate-ping" />
              Showroom 3D Criptografado & Interativo
            </span>
            <span className="text-xs text-[#B76E79] border border-[#B76E79]/30 px-2 py-0.5 rounded-full">
              Balneário Camboriú HQ
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-serif-luxury text-white tracking-wide">
            {currentItem.name}
          </h2>
          <p className="text-sm text-zinc-400 font-sans-luxury">
            {currentItem.collection} • {currentItem.serialNumber} • {currentItem.emeraldOrigin}
          </p>
        </div>

        {/* Piece Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
          {JEWELRY_COLLECTION.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedPiece(item.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all whitespace-nowrap border ${
                selectedPiece === item.id
                  ? 'bg-[#B76E79]/20 border-[#B76E79] text-white shadow-sm'
                  : 'bg-zinc-900/60 border-white/5 text-zinc-400 hover:text-white hover:border-white/20'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px]">
        {/* Left 3D Canvas Viewport (8 Cols) */}
        <div className="lg:col-span-8 relative bg-gradient-to-b from-[#060608] to-[#0a0a10] flex flex-col justify-between overflow-hidden">
          {/* Canvas Mount Container */}
          <div 
            ref={mountRef} 
            className="w-full h-[460px] lg:h-[540px] cursor-grab active:cursor-grabbing"
          />

          {/* Quick HUD Overlay Controls (Top Bar in Viewport) */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 pointer-events-auto bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-xs text-zinc-300">
              <Compass className="w-3.5 h-3.5 text-[#B76E79]" />
              <span>Arraste com o mouse para girar 360° | Scroll para zoom</span>
            </div>

            <div className="flex items-center gap-2 pointer-events-auto">
              <button
                onClick={() => setIsAutoRotating(!isAutoRotating)}
                className={`p-2 rounded-xl border backdrop-blur-md transition-all text-xs flex items-center gap-1.5 ${
                  isAutoRotating
                    ? 'bg-[#B76E79]/30 border-[#B76E79] text-white'
                    : 'bg-black/60 border-white/10 text-zinc-400 hover:text-white'
                }`}
                title="Giro Automático"
              >
                <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
                <span className="hidden sm:inline">Auto Giro</span>
              </button>

              <button
                onClick={() => setIsExplodedView(!isExplodedView)}
                className={`p-2 rounded-xl border backdrop-blur-md transition-all text-xs flex items-center gap-1.5 ${
                  isExplodedView
                    ? 'bg-[#14A44D]/30 border-[#14A44D] text-white'
                    : 'bg-black/60 border-white/10 text-zinc-400 hover:text-white'
                }`}
                title="Vista Explodida de Cravação"
              >
                <Layers className="w-3.5 h-3.5 text-[#14A44D]" />
                <span className="hidden sm:inline">Cravação & Camadas</span>
              </button>
            </div>
          </div>

          {/* View Angle Presets HUD (Bottom Bar in Viewport) */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
            {/* Metal Switcher */}
            <div className="flex items-center gap-1.5 pointer-events-auto bg-black/80 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
              <span className="text-[11px] text-zinc-400 px-2 font-medium">Liga:</span>
              <button
                onClick={() => setSelectedMetal('rose_gold')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedMetal === 'rose_gold'
                    ? 'bg-[#dfa2a8]/30 text-white border border-[#dfa2a8]/60 shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#dfa2a8]" />
                Ouro Rosê
              </button>
              <button
                onClick={() => setSelectedMetal('white_gold')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedMetal === 'white_gold'
                    ? 'bg-slate-200/30 text-white border border-slate-200/60 shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                Ouro Branco
              </button>
              <button
                onClick={() => setSelectedMetal('yellow_gold')}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                  selectedMetal === 'yellow_gold'
                    ? 'bg-amber-400/30 text-white border border-amber-400/60 shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                Ouro Amarelo
              </button>
            </div>

            {/* Camera Angles */}
            <div className="flex items-center gap-1 pointer-events-auto bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/10">
              <button
                onClick={() => handleSetViewAngle('perspective')}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
                  viewAngle === 'perspective' ? 'bg-[#B76E79]/30 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                3D Perspectiva
              </button>
              <button
                onClick={() => handleSetViewAngle('top')}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
                  viewAngle === 'top' ? 'bg-[#B76E79]/30 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Planta Topo
              </button>
              <button
                onClick={() => handleSetViewAngle('macro')}
                className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
                  viewAngle === 'macro' ? 'bg-[#14A44D]/30 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                Macro Ótica
              </button>
            </div>
          </div>
        </div>

        {/* Right Gemological & Investment Inspector Panel (4 Cols) */}
        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0d0d12] p-6 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Panel Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-3">
              <button
                onClick={() => setActiveTab('inspector')}
                className={`text-xs font-semibold uppercase tracking-wider pb-1 transition-all ${
                  activeTab === 'inspector'
                    ? 'text-[#B76E79] border-b-2 border-[#B76E79]'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Laudo Gemológico 4Cs
              </button>
              <button
                onClick={() => setActiveTab('lighting')}
                className={`text-xs font-semibold uppercase tracking-wider pb-1 transition-all ${
                  activeTab === 'lighting'
                    ? 'text-[#B76E79] border-b-2 border-[#B76E79]'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Física & Iluminação
              </button>
            </div>

            {activeTab === 'inspector' && (
              <div className="space-y-4">
                {/* Price & Valuation */}
                <div className="bg-black/50 border border-white/5 p-4 rounded-xl">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="text-xs text-zinc-400 uppercase tracking-wider">Valor Patrimonial</span>
                    <span className="text-xs font-medium text-[#14A44D]">Investimento Físico</span>
                  </div>
                  <div className="text-2xl font-serif-luxury text-white">
                    {currentItem.priceBrl.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">
                    Avaliação em ouro 24k e cotação de esmeralda colombiana grau A+.
                  </p>
                </div>

                {/* 4Cs Technical Specs */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-zinc-400 block mb-1">Gema Central</span>
                    <span className="font-semibold text-white text-sm">{currentItem.emeraldCarats} ct</span>
                    <span className="text-[10px] text-[#14A44D] block mt-0.5">{currentItem.emeraldColorGrade}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-zinc-400 block mb-1">Lapidação</span>
                    <span className="font-semibold text-white text-sm">{currentItem.emeraldCut}</span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">{currentItem.clarity}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-zinc-400 block mb-1">Diamantes Laterais</span>
                    <span className="font-semibold text-white text-sm">{currentItem.diamondCarats || 0} ct</span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">{currentItem.diamondGrade || 'Pavé D-F'}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-zinc-400 block mb-1">Certificação</span>
                    <span className="font-semibold text-white text-sm">{currentItem.certificateCode}</span>
                    <span className="text-[10px] text-[#B76E79] block mt-0.5">{currentItem.certifyingBody.split('-')[0]}</span>
                  </div>
                </div>

                {/* Provenance & Security Stamp */}
                <div className="p-3 rounded-xl bg-[#14A44D]/10 border border-[#14A44D]/20 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#14A44D] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Chancela de Procedência Valkiria Serra</h4>
                    <p className="text-[11px] text-zinc-300 mt-0.5 leading-relaxed">
                      Origem: {currentItem.emeraldOrigin}. Gema inspecionada sob espectroscopia Raman e microscópio óptico binocular.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lighting' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-300 flex items-center gap-1.5">
                      <Sun className="w-4 h-4 text-amber-400" /> Intensidade de Luz de Estúdio
                    </span>
                    <span className="text-[#B76E79] font-mono">{lightIntensity.toFixed(1)}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="3.0"
                    step="0.1"
                    value={lightIntensity}
                    onChange={(e) => setLightIntensity(parseFloat(e.target.value))}
                    className="w-full accent-[#B76E79] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>Luz Suave Penumbra</span>
                    <span>Luz Natural</span>
                    <span>Refletores de Joalheria</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs">
                  <h4 className="font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#14A44D]" /> Parâmetros de Refração
                  </h4>
                  <p className="text-zinc-400 text-[11px]">
                    • Índice de Refração (IOR): <strong>1.577 - 1.583</strong> (Esmeralda Natural)
                  </p>
                  <p className="text-zinc-400 text-[11px]">
                    • Birrefringência: <strong>0.006</strong> (Uniaxial Negativo)
                  </p>
                  <p className="text-zinc-400 text-[11px]">
                    • Densidade Específica: <strong>2.72 g/cm³</strong>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-3 border-t border-white/10">
            <button
              onClick={() => onOpenCertificateModal(currentItem)}
              className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-white/10 flex items-center justify-center gap-2 transition-all"
            >
              <Award className="w-4 h-4 text-[#B76E79]" />
              Ver Certificado Digital GIA / IGI
            </button>

            <button
              onClick={() => onBookConcierge(`Reserva VIP / Showroom: ${currentItem.name}`)}
              className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#B76E79] to-[#9e5560] hover:from-[#c58690] hover:to-[#B76E79] text-white shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Lock className="w-4 h-4" />
              Solicitar Aquisição Confidencial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
