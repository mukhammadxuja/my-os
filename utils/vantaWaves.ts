import * as THREE from 'three';
import type {
  VantaWavesSettings,
  WallpaperEffect
} from 'types/styles/wallpaper';
/* @ts-expect-error No declaration file is required */
import WAVES from 'vanta/dist/vanta.waves.min';

const disableControls = {
  mouseControls: false,
  toucheControls: false
};

const isWebLAvailable = typeof WebGLRenderingContext !== 'undefined';

const VantaWaves =
  (settings: VantaWavesSettings): WallpaperEffect =>
  (el) => {
    const vantaEffect =
      el && isWebLAvailable
        ? WAVES({
            el,
            THREE,
            ...disableControls,
            ...settings
          })
        : undefined;

    return () => {
      vantaEffect?.destroy?.();
    };
  };

export default VantaWaves;
