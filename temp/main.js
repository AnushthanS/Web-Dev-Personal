import { ConvertGLBtoGltf } from 'gltf-import-export';
const inputGlb = './Earth.glb';
const extractedGltf = './planet.gltf';
ConvertGLBtoGltf(inputGlb, extractedGltf);
