
export default function ManageCities(state = {
  cities: ['NYC', 'Seattle', 'LA', 'SF', 'Boston'], display: "NYC",
}, action) {
   switch (action.type) {

     case 'DISPLAY_NYC':
      return {
        ...state,
        display: "NYC",
      }

     case 'DISPLAY_SF':
     return {
       ...state,
       display: "SF",
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

       default:
        return state;
   }
};
