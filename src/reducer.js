const initialState = {
  team: [],
  allGameMutants: [],
  brotherhoodMutants: [],
  heroMutants: [],
  selectedTeam: [],
  handSelected: false,
  hand: [],
}

const reducer = (prevState=initialState, action) => {
  switch(action.type) {
    // case "GET_ALL_GAME_MUTANTS":
    //   return {...prevState, allGameMutants: action.allGameMutants}
    case "GET_ALL_BROTHERHOOD":
      return {...prevState, brotherhoodMutants: action.allBrotherhoodMutants}
    case "GET_ALL_HEROES":
      return {...prevState, heroMutants: action.allHeroMutants}
    case "SELECT_TEAM":
      return {...prevState, selectedTeam: action.team}
    case "DEAL_HAND":
      return {...prevState, hand: action.hand}
    case "CONFIRM_HAND":
      return {...prevState, handSelected: true}
    case "REMOVE_FROM_TEAM":
      let newTeamArray = prevState.team.filter(mutant => mutant.name !== action.name)
      return {...prevState, team: newTeamArray}
    default:
      return prevState
  }
}

export default reducer 