import { defaultTheme } from 'react-admin';

const important = (value: string) => `${value} !important`;

export const HR_COLOR = {
  white: '#fff',
  2: '#F5F5F5',
  5: '#EDF7FB',
  10: '#F2DCD6',
  20: '#FCF4EC',
  30: '#6D4A71',
  40: '#4D2751',
  50: '#421847',
  text: '#5c5f77',
  black: '#202020',
  solid_grey: 'rgb(0, 0, 0, 0.05)',
  background: '#F5F5F5',
};

export const HR_BUTTON = {
  'color': HR_COLOR['white'],
  'backgroundColor': HR_COLOR[40],
  'height': 35,
  'textTransform': 'unset',
  '&:hover, &:active': {
    backgroundColor: HR_COLOR[2],
    cursor: 'pointer',
    color: HR_COLOR[40],
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1) !important',
  },
  '&:disabled': {
    backgroundColor: HR_COLOR['solid_grey'],
  },
};

const titles = { fontFamily: 'montserrat', color: '#4c4f69' };
const commonText = { fontFamily: 'comfortaa', color: '#5c5f77' };

export const HR_THEME = {
  ...defaultTheme,
  typography: {
    h1: titles,
    h2: titles,
    h3: titles,
    h4: titles,
    h5: titles,
    h6: titles,
    button: commonText,
    body1: commonText,
    body2: commonText,
    caption: commonText,
    subtitle1: commonText,
    subtitle2: commonText,
  },
  palette: {
    background: {
      default: HR_COLOR['background'],
    },
    primary: {
      light: '#6ec6ff',
      main: '#2196f3',
      dark: '#0069c0',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ab0056',
      main: '#7A003D',
      dark: '#660033',
      contrastText: '#fff',
    },
  },
  components: {
    MuiSideBar: {
      styleOverrides: {
        root: {
          closeWidth: 100,
        },
      },
    },
    RaMenuItemLink: {
      styleOverrides: {
        root: {
          'height': 40,
          'marginLeft': 3,
          'paddingLeft': '12px',
          'borderRadius': '6px',
          '&.RaMenuItemLink-active': {
            backgroundColor: HR_COLOR[40],
            color: '#fff',
            borderLeft: '3px solid #fff',
          },
          '&.RaMenuItemLink-active .RaMenuItemLink-icon': {
            color: '#fff',
          },
          '& .RaMenuItemLink-icon': {
            margin: 0,
            padding: 0,
            minWidth: 0,
            marginRight: 20,
          },
        },
      },
    },
    RaLayout: {
      styleOverrides: {
        root: {
          'paddingLeft': 2,
          'marginTop': '1.5rem',
          '&. RaLayout-content': {
            marginTop: '2rem',
            zIndex: 1,
            width: '98%',
            padding: '1%',
          },
          '&. RaLayout-contentWithSidebar': {
            overflowY: important('scroll'),
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none',
        },
        elevation2: {
          boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.06) !important',
        },
        elevation3: {
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1) !important',
        },
        root: {
          border: '1px solid #ebebeb',
          backgroundClip: 'padding-box',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: HR_COLOR[2],
        },
        barColorSecondary: {
          backgroundColor: HR_COLOR[5],
          color: HR_COLOR[5],
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          height: 50,
        },
      },
    },
    RaCalendar: {
      styleOverrides: {
        root: {
          '& .fc-button-primary:not(.fc-button-active, .fc-today-button)': {
            color: '#ffffff !important',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.MuiTableCell-head': {
            'backgroundColor': HR_COLOR['white'],
            'color': HR_COLOR['text'],
            '.MuiCheckbox-root': {
              color: '#fff',
            },
            '.Mui-active': {
              color: HR_COLOR['text'],
            },
          },
        },
      },
    },
    RaListToolbar: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          borderRadius: '0.4rem 0.4rem 0 0',
        },
      },
    },
    RaList: {
      styleOverrides: {
        root: {
          '& .RaList-main button': HR_BUTTON,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: HR_BUTTON,
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          '& .Mui-checked': {
            'color': important(HR_COLOR[10]),
            '& +.MuiSwitch-track': {
              backgroundColor: important(HR_COLOR[40]),
              opacity: 1,
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& 	.MuiTabs-indicator': {
            backgroundColor: HR_COLOR[10],
          },
          '& .Mui-selected': {
            color: important(HR_COLOR[30]),
          },
          'borderBottom': `1px solid ${HR_COLOR['solid_grey']}`,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: important(HR_COLOR[5]),
          },
        },
      },
    },
  },
};
