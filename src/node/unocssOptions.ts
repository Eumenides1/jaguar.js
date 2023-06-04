import { VitePluginConfig } from 'unocss/vite';
import { presetAttributify, presetWind, presetIcons } from 'unocss';

const options: VitePluginConfig = {
  presets: [presetAttributify(), presetWind({}), presetIcons()],
  shortcuts: {
    'flex-center': 'flex justify-center items-center'
  },
  rules: [
    [
      /^divider-(\w+)$/,
      ([, w]) => ({
        [`border-${w}`]: '1px solid var(--jaguar-c-divider-light)'
      })
    ],
    [
      'menu-item-before',
      {
        'margin-right': '12px',
        'margin-left': '12px',
        width: '1px',
        height: '24px',
        'background-color': 'var(--jaguar-c-divider-light)',
        content: '" "'
      }
    ]
  ],
  theme: {
    colors: {
      brandLight: 'var(--jaguar-c-brand-light)',
      brandDark: 'var(--jaguar-c-brand-dark)',
      brand: 'var(--jaguar-c-brand)',
      text: {
        1: 'var(--jaguar-c-text-1)',
        2: 'var(--jaguar-c-text-2)',
        3: 'var(--jaguar-c-text-3)',
        4: 'var(--jaguar-c-text-4)'
      },
      divider: {
        default: 'var(--jaguar-c-divider)',
        light: 'var(--jaguar-c-divider-light)',
        dark: 'var(--jaguar-c-divider-dark)'
      },
      gray: {
        light: {
          1: 'var(--jaguar-c-gray-light-1)',
          2: 'var(--jaguar-c-gray-light-2)',
          3: 'var(--jaguar-c-gray-light-3)',
          4: 'var(--jaguar-c-gray-light-4)'
        }
      },
      bg: {
        default: 'var(--jaguar-c-bg)',
        soft: 'var(--jaguar-c-bg-soft)',
        mute: 'var(--jaguar-c-bg-mute)'
      }
    }
  }
};

export default options;
