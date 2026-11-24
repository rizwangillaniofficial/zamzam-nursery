import { useId } from 'react';

interface PlantArtProps {
  variant: string;
  potColor: string;
  backdrop: string;
  className?: string;
  framed?: boolean;
}

interface PlantPhoto {
  src: string;
  hoverSrc: string;
}

const plantPhotos: Record<string, PlantPhoto> = {
  monstera: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/13817e6d2a0d729c3048d9e03abc015f.webp' },
  snake: { src: '/13817e6d2a0d729c3048d9e03abc015f.webp', hoverSrc: '/53fdf88bde04faa3c157bb8ce902bee5.webp' },
  peacelily: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/uFCGiugwAeM3peA6Pipm87-1920-80.webp' },
  rubber: { src: '/13817e6d2a0d729c3048d9e03abc015f.webp', hoverSrc: '/53fdf88bde04faa3c157bb8ce902bee5.webp' },
  palm: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/13817e6d2a0d729c3048d9e03abc015f.webp' },
  aloe: { src: '/cacti-cactus-succulent-flower.webp', hoverSrc: '/images%20(2).webp' },
  fiddle: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/13817e6d2a0d729c3048d9e03abc015f.webp' },
  pothos: { src: '/13817e6d2a0d729c3048d9e03abc015f.webp', hoverSrc: '/53fdf88bde04faa3c157bb8ce902bee5.webp' },
  hibiscus: { src: '/cultivation-differen-flowers-greenhouse-pink-purple-red-geraniums-64854325.webp', hoverSrc: '/774a9e8f7c60d1be54a05f7af70134a9.webp' },
  adenium: { src: '/cacti-cactus-succulent-flower.webp', hoverSrc: '/images%20(2).webp' },
  jade: { src: '/images%20(2).webp', hoverSrc: '/cacti-cactus-succulent-flower.webp' },
  rose: { src: '/57a4247612af829718d0432ec9a1e4df.webp', hoverSrc: '/774a9e8f7c60d1be54a05f7af70134a9.webp' },
  indoor: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/13817e6d2a0d729c3048d9e03abc015f.webp' },
  outdoor: { src: '/20191101_101708.webp', hoverSrc: '/ec23787be829aa904cdcd971ed3a3245.webp' },
  flowering: { src: '/cultivation-differen-flowers-greenhouse-pink-purple-red-geraniums-64854325.webp', hoverSrc: '/774a9e8f7c60d1be54a05f7af70134a9.webp' },
  succulents: { src: '/cacti-cactus-succulent-flower.webp', hoverSrc: '/images%20(2).webp' },
  planters: { src: '/13817e6d2a0d729c3048d9e03abc015f.webp', hoverSrc: '/53fdf88bde04faa3c157bb8ce902bee5.webp' },
  essentials: { src: '/20191101_101708.webp', hoverSrc: '/c401387af0f7e101d3528cf616996ae8.webp' },
  living: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/13817e6d2a0d729c3048d9e03abc015f.webp' },
  bedroom: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/13817e6d2a0d729c3048d9e03abc015f.webp' },
  office: { src: '/13817e6d2a0d729c3048d9e03abc015f.webp', hoverSrc: '/53fdf88bde04faa3c157bb8ce902bee5.webp' },
  balcony: { src: '/orig.webp', hoverSrc: '/pexels-kriss-30343587.webp' },
  garden: { src: '/20191101_101708.webp', hoverSrc: '/61286284_446646582765047_2032776229848875008_n.webp' },
  shelf: { src: '/53fdf88bde04faa3c157bb8ce902bee5.webp', hoverSrc: '/13817e6d2a0d729c3048d9e03abc015f.webp' },
  hands: { src: '/13817e6d2a0d729c3048d9e03abc015f.webp', hoverSrc: '/53fdf88bde04faa3c157bb8ce902bee5.webp' },
  watering: { src: '/20191101_101708.webp', hoverSrc: '/ec23787be829aa904cdcd971ed3a3245.webp' },
};

type Path = { d: string; fill?: string; stroke?: string; width?: number };

const G = '#4A6B4E';
const G2 = '#3A5C42';
const G3 = '#6B8565';
const G4 = '#85977A';
const STEM = '#5C7D60';

function leafPaths(variant: string): Path[] {
  switch (variant) {
    case 'monstera':
      return [
        { d: 'M100 250 C60 210 30 160 45 105 C90 115 115 160 110 210 Z', fill: G2 },
        { d: 'M100 250 C140 215 172 168 160 110 C112 122 92 168 96 218 Z', fill: G },
        { d: 'M100 250 C55 235 25 195 30 150 C70 160 95 195 98 235 Z', fill: G3 },
        { d: 'M100 250 C145 240 178 205 178 158 C138 170 112 205 102 242 Z', fill: G },
        { d: 'M100 252 C92 210 90 160 100 112 C110 160 108 212 102 250 Z', fill: G4 },
        { d: 'M45 130 q18 8 32 2 M160 140 q-18 10 -34 4 M38 175 q20 6 40 -2 M162 180 q-22 8 -42 0', stroke: '#2A4638', width: 2, fill: 'none' },
      ];
    case 'snake':
      return [
        { d: 'M78 252 C70 190 72 130 86 78 C94 130 94 195 88 252 Z', fill: G2 },
        { d: 'M100 252 C100 180 104 110 116 60 C122 120 116 195 108 252 Z', fill: G },
        { d: 'M122 252 C124 200 132 140 144 96 C142 150 134 205 128 252 Z', fill: G3 },
        { d: 'M86 100 q8 20 2 44 M112 80 q10 24 4 52 M136 120 q8 18 2 38', stroke: '#C9A35C', width: 2.5, fill: 'none' },
      ];
    case 'peacelily':
      return [
        { d: 'M70 250 C58 205 62 160 84 128 C96 165 92 215 82 250 Z', fill: G2 },
        { d: 'M130 250 C142 208 138 162 118 130 C106 168 110 216 120 250 Z', fill: G },
        { d: 'M100 252 C92 200 94 140 102 92 C112 140 110 205 104 250 Z', fill: G3 },
        { d: 'M100 96 C82 84 74 62 88 48 C104 54 108 76 102 94 Z', fill: '#F6F2E7' },
        { d: 'M100 94 C118 82 128 62 116 46 C100 52 94 74 99 92 Z', fill: '#FFFFFF' },
        { d: 'M100 96 L100 52', stroke: '#D9BE87', width: 4 },
        { d: 'M100 52 q6 -8 10 -2 q-4 6 -10 2', fill: '#E5D3A8' },
      ];
    case 'rubber':
      return [
        { d: 'M100 252 C86 205 84 150 100 100 C116 150 114 207 102 252 Z', fill: G2 },
        { d: 'M100 180 C70 172 48 148 48 116 C80 122 100 146 102 176 Z', fill: G },
        { d: 'M102 150 C132 142 154 118 154 86 C122 92 102 116 100 146 Z', fill: G3 },
        { d: 'M100 120 C76 112 62 92 64 66 C88 72 100 92 101 116 Z', fill: G4 },
        { d: 'M101 232 C126 226 144 206 146 178 C120 184 104 204 102 228 Z', fill: G3 },
      ];
    case 'palm':
      return [
        { d: 'M100 252 C96 200 96 150 100 100', stroke: STEM, width: 5, fill: 'none' },
        { d: 'M100 120 C60 108 34 80 30 44 C70 54 96 84 100 118 Z', fill: G3 },
        { d: 'M100 120 C140 108 166 80 170 44 C130 54 104 84 100 118 Z', fill: G },
        { d: 'M100 90 C72 80 56 58 56 30 C84 40 98 60 100 88 Z', fill: G2 },
        { d: 'M100 90 C128 80 144 58 144 30 C116 40 102 60 100 88 Z', fill: G3 },
        { d: 'M100 160 C64 152 40 128 38 96 C74 106 96 128 100 156 Z', fill: G4 },
        { d: 'M100 160 C136 152 160 128 162 96 C126 106 104 128 100 156 Z', fill: G2 },
      ];
    case 'aloe':
      return [
        { d: 'M100 252 C90 200 90 140 100 92 C110 140 110 202 102 252 Z', fill: G },
        { d: 'M92 252 C70 210 62 156 74 108 C92 148 96 206 96 250 Z', fill: G3 },
        { d: 'M108 252 C130 210 138 156 126 108 C108 148 104 206 104 250 Z', fill: G2 },
        { d: 'M84 252 C58 224 46 182 52 142 C74 176 82 218 88 250 Z', fill: G4 },
        { d: 'M116 252 C142 224 154 182 148 142 C126 176 118 218 112 250 Z', fill: G3 },
        { d: 'M100 110 q4 30 0 60 M78 140 q6 24 4 48 M122 140 q-6 24 -4 48', stroke: '#2A4638', width: 1.6, fill: 'none' },
      ];
    case 'fiddle':
      return [
        { d: 'M100 252 C96 210 96 170 100 130', stroke: '#6D5426', width: 6, fill: 'none' },
        { d: 'M100 210 C70 206 48 186 46 156 C78 160 98 180 100 206 Z', fill: G2 },
        { d: 'M100 176 C130 172 152 152 154 122 C122 126 102 146 100 172 Z', fill: G },
        { d: 'M100 142 C74 138 58 120 58 94 C84 98 98 116 100 138 Z', fill: G3 },
        { d: 'M101 112 C126 108 142 92 144 66 C118 70 104 88 102 108 Z', fill: G2 },
        { d: 'M100 236 C126 232 144 214 146 188 C120 192 104 210 102 232 Z', fill: G3 },
      ];
    case 'pothos':
      return [
        { d: 'M70 250 C60 200 66 150 90 110 C96 155 90 210 80 250 Z', fill: G },
        { d: 'M130 250 C140 200 134 150 110 110 C104 155 110 210 120 250 Z', fill: G3 },
        { d: 'M100 252 C94 190 96 120 104 66 C112 120 110 195 104 250 Z', fill: G2 },
        { d: 'M90 150 C60 146 40 128 38 102 C66 106 86 124 90 146 Z', fill: G4 },
        { d: 'M112 130 C140 126 158 108 160 84 C134 88 116 106 112 126 Z', fill: G },
        { d: 'M80 200 C56 196 42 182 40 160 C64 164 78 180 80 198 Z', fill: G3 },
        { d: 'M122 190 C146 186 160 172 162 150 C138 154 124 170 122 188 Z', fill: G4 },
      ];
    case 'hibiscus':
      return [
        { d: 'M100 252 C94 200 94 140 100 88', stroke: STEM, width: 4, fill: 'none' },
        { d: 'M100 160 C68 152 48 130 46 100 C78 108 96 130 100 156 Z', fill: G2 },
        { d: 'M100 160 C132 152 152 130 154 100 C122 108 104 130 100 156 Z', fill: G3 },
        { d: 'M88 120 C64 118 50 104 50 84 C72 88 86 102 88 118 Z', fill: G4 },
        { d: 'M100 88 C84 68 82 46 96 30 C110 44 112 68 102 86 Z', fill: '#C25B4A' },
        { d: 'M100 88 C118 70 122 48 110 32 C96 44 92 66 99 86 Z', fill: '#D96B55' },
        { d: 'M100 90 C82 76 66 74 54 84 C66 96 86 96 98 92 Z', fill: '#E07B62' },
        { d: 'M100 90 C118 76 134 74 146 84 C134 96 114 96 102 92 Z', fill: '#C25B4A' },
        { d: 'M100 88 L100 64', stroke: '#C9A35C', width: 3 },
      ];
    case 'adenium':
      return [
        { d: 'M100 252 C88 236 82 216 84 198 C92 190 108 190 116 198 C118 216 112 236 100 252 Z', fill: '#8F6E4F' },
        { d: 'M100 196 C92 180 90 162 96 146 C104 144 110 148 112 156 C112 170 108 184 102 196 Z', fill: '#A2825E' },
        { d: 'M96 148 C80 132 74 110 82 90 C96 100 102 122 100 144 Z', fill: G },
        { d: 'M108 148 C124 132 130 110 122 90 C108 100 102 122 104 144 Z', fill: G3 },
        { d: 'M102 120 C98 96 102 72 114 56 C120 76 114 102 106 120 Z', fill: G2 },
        { d: 'M88 92 C74 78 60 74 48 80 C58 94 76 98 88 96 Z', fill: '#D96B8A' },
        { d: 'M116 92 C130 78 144 74 156 80 C146 94 128 98 116 96 Z', fill: '#E38AA4' },
        { d: 'M104 74 C104 58 110 44 122 36 C124 52 116 66 106 74 Z', fill: '#C9587A' },
      ];
    case 'jade':
      return [
        { d: 'M100 252 C96 226 96 200 100 176', stroke: '#8F6E33', width: 7, fill: 'none' },
        { d: 'M100 200 C76 196 60 180 58 158 C82 162 96 178 100 196 Z', fill: G },
        { d: 'M100 200 C124 196 140 180 142 158 C118 162 104 178 100 196 Z', fill: G2 },
        { d: 'M100 168 C80 164 68 150 66 132 C86 136 98 150 100 164 Z', fill: G3 },
        { d: 'M100 168 C120 164 132 150 134 132 C114 136 102 150 100 164 Z', fill: G },
        { d: 'M100 138 C86 134 78 124 76 110 C90 114 98 124 100 134 Z', fill: G4 },
        { d: 'M100 138 C114 134 122 124 124 110 C110 114 102 124 100 134 Z', fill: G3 },
      ];
    case 'rose':
      return [
        { d: 'M100 252 C94 200 94 140 100 88', stroke: '#6D8A5B', width: 4, fill: 'none' },
        { d: 'M100 180 C72 172 56 154 56 130 C82 136 96 154 100 176 Z', fill: '#6D8A5B' },
        { d: 'M100 180 C128 172 144 154 144 130 C118 136 104 154 100 176 Z', fill: '#7C9A68' },
        { d: 'M100 118 C86 100 86 78 100 62 C114 78 114 100 102 116 Z', fill: '#B94A5C' },
        { d: 'M100 112 C84 96 64 92 50 100 C60 116 84 120 98 114 Z', fill: '#C95A6C' },
        { d: 'M100 112 C116 96 136 92 150 100 C140 116 116 120 102 114 Z', fill: '#B94A5C' },
        { d: 'M100 116 C92 130 76 136 62 132 C70 118 86 112 98 112 Z', fill: '#D06A7C' },
        { d: 'M100 116 C108 130 124 136 138 132 C130 118 114 112 102 112 Z', fill: '#C95A6C' },
      ];
    default:
      return [{ d: 'M100 250 C80 210 80 150 100 100 C120 150 120 210 102 250 Z', fill: G }];
  }
}

const sceneArt: Record<string, { shapes: Path[]; bg: string }> = {
  indoor: {
    bg: '#EDE9DB',
    shapes: [
      { d: 'M100 240 C80 200 78 140 100 90 C122 140 120 202 104 240 Z', fill: G2 },
      { d: 'M100 240 C130 210 150 165 142 115 C110 130 96 175 96 220 Z', fill: G },
      { d: 'M100 240 C70 214 52 172 58 126 C88 142 100 182 98 224 Z', fill: G3 },
    ],
  },
  outdoor: {
    bg: '#E4E8DA',
    shapes: [
      { d: 'M70 240 C58 200 62 156 82 124 C94 158 90 204 80 240 Z', fill: G },
      { d: 'M130 240 C142 202 138 158 118 126 C106 160 110 206 120 240 Z', fill: G3 },
      { d: 'M100 242 C92 190 94 130 102 80 C112 130 110 192 104 240 Z', fill: G2 },
      { d: 'M46 244 q54 -14 108 0', stroke: G4, width: 3, fill: 'none' },
    ],
  },
  flowering: {
    bg: '#F2E6DC',
    shapes: [
      { d: 'M100 240 C92 190 94 130 100 84', stroke: '#6D8A5B', width: 3.5, fill: 'none' },
      { d: 'M100 84 C86 66 88 44 102 30 C114 46 112 68 102 82 Z', fill: '#C95A6C' },
      { d: 'M100 120 C84 104 66 100 54 108 C64 122 86 126 98 120 Z', fill: '#B94A5C' },
      { d: 'M100 120 C116 104 134 100 146 108 C136 122 114 126 102 120 Z', fill: '#D06A7C' },
      { d: 'M88 180 C74 168 60 166 50 172 C60 184 76 188 86 184 Z', fill: '#7C9A68' },
    ],
  },
  succulents: {
    bg: '#F0ECDD',
    shapes: [
      { d: 'M100 238 C92 196 92 146 100 104 C108 146 108 198 102 238 Z', fill: G },
      { d: 'M88 238 C68 202 62 156 72 116 C88 150 92 198 92 234 Z', fill: G3 },
      { d: 'M112 238 C132 202 138 156 128 116 C112 150 108 198 108 234 Z', fill: G2 },
      { d: 'M64 190 C50 168 48 140 58 118 C72 142 72 170 68 188 Z', fill: G4 },
      { d: 'M136 190 C150 168 152 140 142 118 C128 142 128 170 132 188 Z', fill: G3 },
    ],
  },
  planters: {
    bg: '#ECE7D9',
    shapes: [
      { d: 'M74 120 h52 l-8 86 a10 10 0 0 1 -10 9 h-16 a10 10 0 0 1 -10 -9 Z', fill: '#C9A35C' },
      { d: 'M70 112 h60 a4 4 0 0 1 4 4 v2 a4 4 0 0 1 -4 4 h-60 a4 4 0 0 1 -4 -4 v-2 a4 4 0 0 1 4 -4 Z', fill: '#B18A43' },
      { d: 'M100 108 C88 84 90 56 104 36 C114 58 110 90 102 106 Z', fill: G2 },
      { d: 'M100 108 C112 86 126 72 142 68 C136 90 118 104 102 110 Z', fill: G },
    ],
  },
  essentials: {
    bg: '#E7E9DC',
    shapes: [
      { d: 'M70 84 l14 -14 l52 52 a12 12 0 0 1 0 17 l-5 5 a12 12 0 0 1 -17 0 Z', fill: '#8F6E33' },
      { d: 'M64 90 l16 -16', stroke: '#C9A35C', width: 5 },
      { d: 'M138 190 a20 20 0 1 0 0.1 0 Z M138 172 v-20', stroke: G2, width: 4, fill: 'none' },
      { d: 'M60 160 q20 -8 40 0 q-20 8 -40 0 Z', fill: G3 },
    ],
  },
  watering: {
    bg: '#F0ECDC',
    shapes: [
      { d: 'M60 110 l30 -18 l8 12 l-30 18 Z', fill: '#8F9F8A' },
      { d: 'M96 104 l40 -10 a8 8 0 0 1 9 6 l2 8 a8 8 0 0 1 -7 9 l-40 8 Z', fill: '#AEBBA3' },
      { d: 'M70 150 h56 v54 a10 10 0 0 1 -10 10 h-36 a10 10 0 0 1 -10 -10 Z', fill: '#C9A35C' },
      { d: 'M84 178 C76 158 78 132 88 114 C98 132 96 160 90 178 Z', fill: G2 },
      { d: 'M150 140 q6 10 0 18 M156 136 q10 8 4 20', stroke: '#7FA0B4', width: 2.5, fill: 'none' },
    ],
  },
  shelf: {
    bg: '#EDE9DB',
    shapes: [
      { d: 'M48 150 h104', stroke: '#B18A43', width: 5 },
      { d: 'M66 148 C60 122 62 92 74 70 C84 94 80 126 74 146 Z', fill: G },
      { d: 'M104 148 C102 128 104 104 112 88 C120 106 116 132 110 146 Z', fill: G3 },
      { d: 'M132 148 C130 134 132 116 138 104 C144 118 140 136 136 146 Z', fill: G2 },
      { d: 'M70 96 q10 30 4 50 M110 108 q6 20 2 38', stroke: '#2A4638', width: 1.6, fill: 'none' },
    ],
  },
  hands: {
    bg: '#E8EBDD',
    shapes: [
      { d: 'M76 148 h48 l-7 56 a10 10 0 0 1 -10 9 h-14 a10 10 0 0 1 -10 -9 Z', fill: '#C9A35C' },
      { d: 'M100 144 C88 118 90 84 104 60 C116 86 112 122 104 142 Z', fill: G2 },
      { d: 'M100 140 C118 122 130 100 128 76 C110 90 100 114 98 138 Z', fill: G },
      { d: 'M56 196 q44 -18 88 0 q-44 14 -88 0 Z', fill: '#85977A' },
    ],
  },
};

export default function PlantArt({ variant, potColor, backdrop, className = '', framed = true }: PlantArtProps) {
  const uid = useId().replace(/[:]/g, '');
  const photo = plantPhotos[variant];
  if (photo) {
    return (
      <div className={`group/plant-photo relative overflow-hidden ${className}`} aria-hidden="true">
        <img
          src={photo.src}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-500 group-hover/image:opacity-0"
        />
        <img
          src={photo.hoverSrc}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover/image:opacity-100"
        />
      </div>
    );
  }

  const scene = sceneArt[variant];
  const isScene = Boolean(scene);
  const shapes = scene ? scene.shapes : leafPaths(variant);
  const bg = isScene ? scene.bg : backdrop;

  return (
    <svg
      viewBox="0 0 200 280"
      className={className}
      role="img"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`bg-${uid}`} cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
          <stop offset="100%" stopColor={bg} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`pot-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={potColor} />
          <stop offset="55%" stopColor={potColor} />
          <stop offset="100%" stopColor="#00000022" />
        </linearGradient>
      </defs>

      <rect width="200" height="280" fill={bg} />
      <rect width="200" height="280" fill={`url(#bg-${uid})`} />

      {framed && (
        <>
          <circle cx="100" cy="120" r="72" fill="none" stroke="#C9A35C" strokeOpacity="0.35" strokeWidth="1.5" />
          <circle cx="100" cy="120" r="84" fill="none" stroke="#C9A35C" strokeOpacity="0.18" strokeWidth="1" />
        </>
      )}

      <ellipse cx="100" cy="248" rx="52" ry="7" fill="#142E25" opacity="0.1" />

      {shapes.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill={p.fill ?? 'none'}
          stroke={p.stroke}
          strokeWidth={p.width}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {!isScene && (
        <>
          <path d="M76 212 h48 l-7 40 a9 9 0 0 1 -9 8 h-16 a9 9 0 0 1 -9 -8 Z" fill={`url(#pot-${uid})`} />
          <path d="M72 204 h56 a4 4 0 0 1 4 4 v3 a4 4 0 0 1 -4 4 h-56 a4 4 0 0 1 -4 -4 v-3 a4 4 0 0 1 4 -4 Z" fill={potColor} />
          <path d="M72 204 h56 a4 4 0 0 1 4 4 v3 a4 4 0 0 1 -4 4 h-56 a4 4 0 0 1 -4 -4 v-3 a4 4 0 0 1 4 -4 Z" fill="none" stroke="#142E25" strokeOpacity="0.08" />
          <path d="M80 216 h4 l-3 36 h-2 Z" fill="#FFFFFF" opacity="0.35" />
        </>
      )}
    </svg>
  );
}
