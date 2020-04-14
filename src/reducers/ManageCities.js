
export default function ManageCities(state = {
  nyc: {
    totalCases: {},
    recovered: {},
    dead: {}
  },
  sf: {
    totalCases: {},
    recovered: {},
    dead: {}
  },
  boston: {
    totalCases: {},
    recovered: {},
    dead: {}
  },
  la: {
    totalCases: {},
    recovered: {},
    dead: {}
  },
  seattle: {
    totalCases: {},
    recovered: {},
    dead: {}
  },
  display: "NYC",
}, action) {
   switch (action.type) {

     case 'DISPLAY_NYC':
      return {
        ...state,
        display: "NYC",
      }

     case "DISPLAY_BAYAREA":

     return {
       ...state,
       display: "BayArea",
     }

     case 'DISPLAY_BOSTON':
     return {
       ...state,
       display: "Boston",
     }

     case 'DISPLAY_SEATTLE':
     return {
       ...state,
       display: "Seattle",
     }

     case 'DISPLAY_LA':
     return {
       ...state,
       display: "LA",
     }

     case 'DISPLAY_CONN':
     return {
       ...state,
       display: "CONN",
     }

     case 'DISPLAY_LUI':
     return {
       ...state,
       display: "LUI",
     }

     case 'DISPLAY_NJ':
     return {
       ...state,
       display: "NJ",
     }

       default:
        return state;
   }
};
