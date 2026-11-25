import React from 'react';

type DividerProps = {
  position?: 'top' | 'bottom';
  fill?: string;
  className?: string;
  height?: number | string;
  flipX?: boolean;
};

/**
 * Common wrapper for shape dividers ensuring zero horizontal overflow,
 * smooth vector rendering, and precise edge-to-edge alignment.
 */
function DividerWrapper({
  position = 'bottom',
  children,
  className = '',
  height = 56,
}: {
  position?: 'top' | 'bottom';
  children: React.ReactNode;
  className?: string;
  height?: number | string;
}) {
  const isTop = position === 'top';
  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none z-10 ${
        isTop ? 'relative top-0' : 'relative bottom-0'
      } ${className}`}
      style={{ height: typeof height === 'number' ? `${height}px` : height }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

// 1. WAVES (Smooth organic sine wave)
export function WavesDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 64,
  flipX = false,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''} ${flipX ? '-scale-x-100' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,60 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 2. WAVES PATTERN (Layered undulating waves)
export function WavesPatternDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 70,
  flipX = false,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''} ${flipX ? '-scale-x-100' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,90 400,-20 700,50 C950,110 1100,20 1200,60 L1200,120 L0,120 Z"
          fill={fill}
          opacity="0.35"
        />
        <path
          d="M0,30 C200,100 450,10 650,75 C850,140 1050,40 1200,85 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 3. WAVES BRUSH (Organic wave crest with devotional highlight)
export function WavesBrushDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 68,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q200,115 450,55 T900,65 Q1080,110 1200,50 L1200,120 L0,120 Z"
          fill={fill}
          opacity="0.4"
        />
        <path
          d="M0,60 Q250,125 520,70 T1000,85 Q1120,115 1200,80 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 4. MOUNTAINS (Himalayan / Kailash sacred ridges)
export function MountainsDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 76,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 L200,20 L400,90 L620,10 L840,80 L1020,30 L1200,90 L1200,120 L0,120 Z"
          fill={fill}
          opacity="0.3"
        />
        <path
          d="M0,110 L150,50 L350,100 L550,35 L750,95 L950,45 L1120,85 L1200,60 L1200,120 L0,120 Z"
          fill={fill}
          opacity="0.6"
        />
        <path
          d="M0,120 L100,75 L280,110 L480,55 L700,105 L900,65 L1080,95 L1200,80 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 5. CLOUDS (Celestial Swarg cloud border)
export function CloudsDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 68,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C50,70 120,60 170,85 C230,40 330,45 380,80 C440,25 560,30 620,75 C680,20 800,25 860,70 C920,35 1010,40 1060,75 C1110,50 1170,65 1200,95 L1200,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 6. CURVE (Convex / Concave temple arch dome)
export function CurveDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 56,
  invert = false,
}: DividerProps & { invert?: boolean }) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {invert ? (
          <path d="M0,0 Q600,160 1200,0 L1200,120 L0,120 Z" fill={fill} />
        ) : (
          <path d="M0,120 Q600,0 1200,120 L1200,120 L0,120 Z" fill={fill} />
        )}
      </svg>
    </DividerWrapper>
  );
}

// 7. CURVE ASYMMETRICAL (Sweeping organic arc)
export function CurveAsymmetricDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 60,
  flipX = false,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''} ${flipX ? '-scale-x-100' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,120 Q350,0 1200,100 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}

// 8. BOOK (Sacred granth / twin temple sanctum dome)
export function BookDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 64,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 Q300,10 600,110 Q900,10 1200,120 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 9. TILT (Modern dynamic slanted angle)
export function TiltDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 54,
  flipX = false,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''} ${flipX ? '-scale-x-100' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L1200,110 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}

// 10. TILT OPACITY (Multi-layer slanted planes)
export function TiltOpacityDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 64,
  flipX = false,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''} ${flipX ? '-scale-x-100' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,30 L1200,90 L1200,120 L0,120 Z" fill={fill} opacity="0.3" />
        <path d="M0,60 L1200,105 L1200,120 L0,120 Z" fill={fill} opacity="0.6" />
        <path d="M0,90 L1200,120 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}

// 11. TRIANGLE (Center inverted sacred yantra triangle)
export function TriangleDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 48,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L600,120 L1200,0 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}

// 12. TRIANGLE ASYMMETRICAL (Off-center angled triangle)
export function TriangleAsymmetricDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 54,
  flipX = false,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''} ${flipX ? '-scale-x-100' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L850,120 L1200,0 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}

// 13. PYRAMIDS (Faceted geometric slopes)
export function PyramidsDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 56,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L250,110 L500,20 L800,115 L1200,10 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 14. DROPS (Sacred Amrit droplets / kalash abhishek dripping border)
export function DropsDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 58,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L0,40 Q50,40 60,75 Q70,110 85,110 Q100,110 110,75 Q120,40 180,40 Q210,40 220,95 Q230,120 245,120 Q260,120 270,95 Q280,40 340,40 Q370,40 380,80 Q390,105 405,105 Q420,105 430,80 Q440,40 500,40 Q530,40 540,90 Q550,115 565,115 Q580,115 590,90 Q600,40 660,40 Q690,40 700,100 Q710,120 725,120 Q740,120 750,100 Q760,40 820,40 Q850,40 860,85 Q870,110 885,110 Q900,110 910,85 Q920,40 980,40 Q1010,40 1020,95 Q1030,120 1045,120 Q1060,120 1070,95 Q1080,40 1140,40 Q1170,40 1200,40 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 15. ARROW (Center indicator pointer)
export function ArrowDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 42,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L570,0 L600,115 L630,0 L1200,0 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}

// 16. SPLIT (Center slit divider)
export function SplitDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 36,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L596,0 L600,120 L604,0 L1200,0 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}

// 17. ZIGZAG (Pointed rhythmic teeth)
export function ZigzagDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 44,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 L50,90 L100,0 L150,90 L200,0 L250,90 L300,0 L350,90 L400,0 L450,90 L500,0 L550,90 L600,0 L650,90 L700,0 L750,90 L800,0 L850,90 L900,0 L950,90 L1000,0 L1050,90 L1100,0 L1150,90 L1200,0 L1200,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </DividerWrapper>
  );
}

// 18. FAN OPACITY (Radiating perspective rays)
export function FanOpacityDivider({
  position = 'bottom',
  fill = '#ffffff',
  className = '',
  height = 62,
}: DividerProps) {
  const isTop = position === 'top';
  return (
    <DividerWrapper position={position} className={className} height={height}>
      <svg
        className={`w-full h-full block ${isTop ? 'rotate-180' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0 L600,120 L0,120 Z" fill={fill} opacity="0.25" />
        <path d="M1200,0 L600,120 L1200,120 Z" fill={fill} opacity="0.25" />
        <path d="M200,0 L600,120 L0,120 Z" fill={fill} opacity="0.4" />
        <path d="M1000,0 L600,120 L1200,120 Z" fill={fill} opacity="0.4" />
        <path d="M400,0 L600,120 L800,0 L1200,120 L0,120 Z" fill={fill} />
      </svg>
    </DividerWrapper>
  );
}
