export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        p1: '#B9FF66',
        p2: '#191A23',
        p3: '#F3F3F3',
        p4: '#292A32',
        p5: '#898989',
      },
      scrollSnapType: {
        none: 'none',
        x: 'x mandatory', 
        y: 'y mandatory', 
        both: 'both mandatory',
      },
      scrollSnapAlign: {
        start: 'start', 
        center: 'center',
        end: 'end',
      },
      boxShadow: {
        100: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
        200: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF',
        300: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
        400: 'inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)',
        500: '0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)',
      },
      fontFamily: {
        spaceGrotesk: ['"Space Grotesk"', 'sans-serif'],
      },

      fontSize: {
        'h1': '60px',
        'h2': '40px',
        'h3': '30px',
        'h4': '20px',
        'h5': '18px',

        'h1Mob': '43px',
        'h2Mob': '36px',
        'h3Mob': '26px',
        'h4Mob': '18px',
        'pMob': '16px',
      },

      transitionProperty: {
        borderColor: 'border-color',
      },

      before: {
        'custom-border': {
          content: '',
          position: 'absolute',
          backgroundImage: 'url("/assets/border.svg")'
        }
      },

      spacing: {
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '3/20': '15%',
        '7/20': '35%',
        '9/20': '45%',
        '11/20': '55%',
        '13/20': '65%',
        '15/20': '75%',
        '17/20': '85%',
        '19/20': '95%',
        22: '88px',
        100: '100px',
        512: '512px',
        330: '330px',
        388: '388px',
        400: '400px',
        440: '440px',
        640: '640px',
        960: '960px',
        1230: '1230px',
      },
      zIndex: {
        1: '1',
        2: '2',
        4: '4',
      },

      boxShadow: {
        'dark-bottom': '0 7px 5px rgba(0, 0, 0, 0.8)',
      },

      lineHeight: {
        12: '48px',
      },
      borderRadius: {
        14: '14px',
        20: '20px',
        40: '40px',
        half: '50%',
        '7xl': '40px',
      },
      flex: {
        50: '0 0 50%',
        320: '1px 0 320px',
        300: '0 0 300px',
        540: '0 0 540px',
        280: '0 0 280px',
        256: '0 0 256px',
        100: '0 0 100%',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scroll-snap-x': {
          'scroll-snap-type': 'x mandatory',
        },
        '.scroll-snap-align-start': {
          'scroll-snap-align': 'start',
        },
      };

      addUtilities(newUtilities, ['responsive'])
    }
  ],
};