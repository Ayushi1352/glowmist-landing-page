/**
 * Decorations drawn in code instead of images (the same approach as the sibling landing pages):
 * thin leaf sprigs, the footer lily, the lotus ornament and the hero rose petals.
 * Line drawings use `currentColor`, so each place sets the colour and size with classes.
 * Each viewBox matches the size the decoration has in the 1920px design, so the boxes keep their old proportions.
 */
type ArtProps = { className?: string };

const line = {
  "aria-hidden": true,
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

type LeafProps = {
  /** where the leaf joins the stem */
  x: number;
  y: number;
  /** where the tip points */
  tipX: number;
  tipY: number;
  /** leaf width as a share of its length */
  width?: number;
  /** side veins on each side of the midrib */
  veins?: number;
};

/** One outlined leaf from its base to its tip, with a midrib and a few side veins */
const Leaf = ({ x, y, tipX, tipY, width = 0.28, veins = 3 }: LeafProps) => {
  const length = Math.hypot(tipX - x, tipY - y);
  const angle = (Math.atan2(tipY - y, tipX - x) * 180) / Math.PI;
  const w = length * width;
  const veinPaths = Array.from({ length: veins }, (_, i) => {
    const at = length * (0.2 + (i * 0.55) / veins);
    const reach = length * 0.16;
    const side = w * (0.62 - i * 0.08);
    return `M${at} 0L${at + reach} ${-side}M${at} 0L${at + reach} ${side}`;
  }).join("");
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <path d={`M0 0C${length * 0.3} ${-w * 1.1} ${length * 0.72} ${-w * 0.85} ${length} 0C${length * 0.72} ${w * 0.85} ${length * 0.3} ${w * 1.1} 0 0Z`} />
      <path d={`M0 0Q${length * 0.5} ${-w * 0.12} ${length * 0.94} 0`} strokeWidth="0.8" />
      <path d={veinPaths} strokeWidth="0.7" />
    </g>
  );
};

/** Hero, above the photo: a stem rising from the bottom with two leaves to the left and one to the right */
export const LeafSprigArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 225 255" className={className} {...line} strokeWidth="1.6">
    <path d="M133 253C128 215 117 185 121 150C124 128 128 114 130 100" />
    <Leaf x={121} y={150} tipX={33} tipY={58} />
    <Leaf x={127} y={222} tipX={11} tipY={167} />
    <Leaf x={130} y={100} tipX={214} tipY={11} />
  </svg>
);

/** Hero, at the bottom-right corner of the photo: a branch sweeping in from the lower left with a fan of leaves */
export const CornerLeafArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 255 235" className={className} {...line} strokeWidth="1.6">
    <path d="M5 232C40 216 80 190 113 167C140 148 165 120 185 95" />
    <Leaf x={113} y={167} tipX={250} tipY={146} width={0.2} />
    <Leaf x={185} y={95} tipX={228} tipY={9} width={0.22} />
    <Leaf x={150} y={135} tipX={232} tipY={84} width={0.22} />
    <Leaf x={78} y={192} tipX={146} tipY={196} width={0.24} veins={2} />
    <Leaf x={60} y={203} tipX={98} tipY={150} width={0.26} veins={2} />
  </svg>
);

/** Services and FAQ, right edge: a long branch from the bottom right up to the top left, leaves on both sides */
export const LeafBranchArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 290 290" className={className} {...line} strokeWidth="1.6">
    <path d="M268 288C255 240 230 190 195 150C170 125 152 106 135 92" />
    <Leaf x={135} y={92} tipX={56} tipY={9} width={0.24} />
    <Leaf x={166} y={124} tipX={12} tipY={113} width={0.2} veins={4} />
    <Leaf x={195} y={150} tipX={214} tipY={16} width={0.22} />
    <Leaf x={232} y={200} tipX={283} tipY={82} width={0.24} />
    <Leaf x={214} y={176} tipX={110} tipY={172} width={0.26} />
  </svg>
);

/** Footer, left edge: a lily in flower on a tall stem with long leaves */
export const LilyArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 160 460" className={className} {...line} strokeWidth="1.3">
    <path d="M30 460C45 380 55 300 60 220C64 170 68 130 72 104" />
    {/* the open flower: six broad petals around the centre, the lower ones bending down */}
    <Leaf x={72} y={100} tipX={6} tipY={58} width={0.34} veins={1} />
    <Leaf x={72} y={100} tipX={40} tipY={8} width={0.34} veins={1} />
    <Leaf x={72} y={100} tipX={114} tipY={12} width={0.34} veins={1} />
    <Leaf x={72} y={100} tipX={154} tipY={70} width={0.32} veins={1} />
    <Leaf x={72} y={100} tipX={12} tipY={142} width={0.3} veins={1} />
    <Leaf x={72} y={100} tipX={140} tipY={146} width={0.3} veins={1} />
    {/* stamens */}
    <path d="M72 98Q78 66 90 40M72 98Q68 70 58 44M72 98Q92 76 112 60M72 98Q58 82 42 72" strokeWidth="1" />
    <path d="M88 37h5M56 41h5M110 57h5M40 69h5" strokeWidth="3" />
    {/* leaves along the stem */}
    <Leaf x={60} y={215} tipX={138} tipY={170} width={0.2} veins={0} />
    <Leaf x={57} y={258} tipX={4} tipY={196} width={0.2} veins={0} />
    <Leaf x={50} y={322} tipX={122} tipY={286} width={0.2} veins={0} />
    <Leaf x={44} y={366} tipX={0} tipY={318} width={0.2} veins={0} />
    <Leaf x={36} y={420} tipX={96} tipY={386} width={0.2} veins={0} />
  </svg>
);

/** The lotus from the logo: a tall middle petal between two wide side petals that meet at the base */
export const LotusArt = ({ className }: ArtProps) => (
  <svg viewBox="0 0 211 142" className={className} {...line} strokeWidth="9">
    <path d="M105.5 136C78 108 76 42 105.5 6C135 42 133 108 105.5 136Z" />
    <path d="M105.5 136C55 136 12 98 5 42C52 44 96 80 105.5 136Z" />
    <path d="M105.5 136C156 136 199 98 206 42C159 44 115 80 105.5 136Z" />
  </svg>
);

/** Hero, left edge: rose petals with soft shading (colours from the theme variables) */
export const PetalsArt = ({ className }: ArtProps) => (
  <svg aria-hidden="true" viewBox="0 0 275 250" className={className}>
    <defs>
      <linearGradient id="petal-big" x1="0.1" y1="1" x2="0.8" y2="0">
        <stop offset="0" style={{ stopColor: "var(--color-petal-dark)" }} />
        <stop offset="0.6" style={{ stopColor: "var(--color-petal)" }} />
        <stop offset="1" style={{ stopColor: "var(--color-petal-light)" }} />
      </linearGradient>
      <linearGradient id="petal-small" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0" style={{ stopColor: "var(--color-petal-dark)" }} />
        <stop offset="1" style={{ stopColor: "var(--color-petal-light)" }} />
      </linearGradient>
      <linearGradient id="petal-low" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" style={{ stopColor: "var(--color-petal)" }} />
        <stop offset="1" style={{ stopColor: "var(--color-petal-light)" }} />
      </linearGradient>
      <linearGradient id="petal-shine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" style={{ stopColor: "var(--color-white)", stopOpacity: 0 }} />
        <stop offset="0.5" style={{ stopColor: "var(--color-white)", stopOpacity: 0.35 }} />
        <stop offset="1" style={{ stopColor: "var(--color-white)", stopOpacity: 0 }} />
      </linearGradient>
    </defs>
    {/* large petal curving up from the page edge */}
    <path d="M30 150C22 98 58 22 114 8C154 -1 178 32 166 72C154 112 104 136 30 150Z" fill="url(#petal-big)" />
    <path d="M52 130C70 92 104 52 150 28" stroke="url(#petal-shine)" strokeWidth="14" strokeLinecap="round" fill="none" />
    <path d="M44 138C66 104 98 70 136 46M64 140C88 112 118 90 156 74" stroke="var(--color-petal-dark)" strokeOpacity="0.25" strokeWidth="1.2" fill="none" />
    {/* small curled petal on the right */}
    <path d="M186 98C180 72 206 56 236 60C262 64 274 84 264 106C254 126 216 130 196 121C189 115 187 106 186 98Z" fill="url(#petal-small)" />
    <path d="M196 106C212 88 240 84 258 94" stroke="var(--color-petal-light)" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* two petals tucked under the page edge below */}
    <path d="M0 132C34 126 70 136 88 156C58 164 30 180 0 190Z" fill="url(#petal-low)" />
    <path d="M0 196C34 188 74 198 98 228C62 232 26 238 0 248Z" fill="url(#petal-big)" opacity="0.9" />
  </svg>
);
