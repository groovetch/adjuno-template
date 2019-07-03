import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'nb-e-commerce',
    link: '/main/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'nb-home',
    link: '/main/iot-dashboard',
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Components',
    icon: 'nb-star',
    children: [
      {
        title: 'Calendar',
        link: '/main/extra-components/calendar',
      },
      {
        title: 'Stepper',
        link: '/main/extra-components/stepper',
      },
      {
        title: 'List',
        link: '/main/extra-components/list',
      },
      {
        title: 'Infinite List',
        link: '/main/extra-components/infinite-list',
      },
      {
        title: 'Form Inputs',
        link: '/main/extra-components/form-inputs',
      },
      {
        title: 'Accordion',
        link: '/main/extra-components/accordion',
      },
      {
        title: 'Progress Bar',
        link: '/main/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/main/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/main/extra-components/alert',
      },
      {
        title: 'Tree',
        link: '/main/extra-components/tree',
      },
      {
        title: 'Tabs',
        link: '/main/extra-components/tabs',
      },
      {
        title: 'Calendar Kit',
        link: '/main/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/main/extra-components/chat',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'nb-compose',
    children: [
      {
        title: 'Form Inputs',
        link: '/main/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/main/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/main/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/main/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'nb-keypad',
    link: '/main/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/main/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/main/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/main/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/main/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'nb-layout-default',
    children: [
      {
        title: 'Dialog',
        link: '/main/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/main/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/main/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/main/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/main/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Bootstrap',
    icon: 'nb-gear',
    children: [
      {
        title: 'Form Inputs',
        link: '/main/bootstrap/inputs',
      },
      {
        title: 'Buttons',
        link: '/main/bootstrap/buttons',
      },
      {
        title: 'Modal',
        link: '/main/bootstrap/modal',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'nb-location',
    children: [
      {
        title: 'Google Maps',
        link: '/main/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/main/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/main/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/main/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'nb-bar-chart',
    children: [
      {
        title: 'Echarts',
        link: '/main/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/main/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/main/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'nb-title',
    children: [
      {
        title: 'TinyMCE',
        link: '/main/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/main/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables',
    icon: 'nb-tables',
    children: [
      {
        title: 'Smart Table',
        link: '/main/tables/smart-table',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'nb-shuffle',
    children: [
      {
        title: '404',
        link: '/main/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
