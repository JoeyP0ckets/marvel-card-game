const initialState = {
  team: [],
  allGameMutants: [],
  brotherhoodMutants: [],
  heroMutants: []
}

const reducer = (prevState=initialState, action) => {
  switch(action.type) {
    // case "GET_ALL_GAME_MUTANTS":
    //   return {...prevState, allGameMutants: action.allGameMutants}
    case "GET_ALL_BROTHERHOOD":
      return {...prevState, brotherhoodMutants: action.allBrotherhoodMutants}
    case "GET_ALL_HEROES":
      return {...prevState, heroMutants: action.allHeroMutants}
    case "ADD_TO_TEAM":
      return {...prevState, team: [...prevState.team, action.name]}
    case "REMOVE_FROM_TEAM":
      let newTeamArray = prevState.team.filter(mutant => mutant.name !== action.name)
      return {...prevState, team: newTeamArray}
    default:
      return prevState
  }
}

export default reducer 