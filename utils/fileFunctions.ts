/* eslint-disable max-lines */
import type { FSModule } from 'browserfs/dist/node/core/FS';
import ini from 'ini';
import { extname } from 'path';

type Shortcut = {
  BASEURL: string;
  IconFile: string;
  URL: string;
};

/* eslint-disable import/prefer-default-export */
export const getShortcut = (path: string, fs: FSModule): Promise<Shortcut> =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (error, contents = Buffer.from('')) => {
      if (error) {
        reject(error);
      } else {
        const { InternetShortcut = { BASEURL: '', IconFile: '', URL: '' } } =
          ini.parse(contents.toString());
        resolve(InternetShortcut as Shortcut);
      }
    });
  });

export const getIconByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return '/images/image.ico';
    default:
      return '/icons/unknown.ico';
  }
};

export const getProcessByFileExtension = (extension: string): string => {
  switch (extension) {
    case '.img':
    case '.iso':
      return 'V86';
    default:
      return '';
  }
};

export const loadScript = (src: string): Promise<Event> =>
  new Promise((resolve, reject) => {
    const loadedScripts = [...document.scripts];

    if (loadedScripts.find((script) => script.src.endsWith(src))) {
      resolve(new Event('Already loaded.'));
    } else {
      const script = document.createElement('script');

      script.async = false;
      script.src = src;
      script.onerror = (event) => reject(event);
      script.onload = (event) => resolve(event);

      document.head.appendChild(script);
    }
  });

export const loadStyle = (href: string): Promise<Event> =>
  new Promise((resolve, reject) => {
    const loadedLinks = [...document.getElementsByTagName('link')];

    if (loadedLinks.find((link) => link.href.endsWith(href))) {
      resolve(new Event('Already loaded.'));
    } else {
      const link = document.createElement('link');

      link.rel = 'stylesheet';
      link.href = href;
      link.onerror = (event) => reject(event);
      link.onload = (event) => resolve(event);

      document.head.appendChild(link);
    }
  });

export const loadFiles = async (files: string[]): Promise<Event[]> =>
  Promise.all(
    files.reduce((filesToLoad: Promise<Event>[], file) => {
      const ext = extname(file);

      if (ext === '.css') filesToLoad.push(loadStyle(file));
      else if (ext === '.js') filesToLoad.push(loadScript(file));

      return filesToLoad;
    }, [])
  );

export const bufferToUrl = (buffer: Buffer): string =>
  URL.createObjectURL(new Blob([new Uint8Array(buffer)]));
