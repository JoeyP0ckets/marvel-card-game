const initialState = {
  allMutants: [],
  team: [],
  sortedByTeam: false,
}

const reducer = (prevState=initialState, action) => {
  switch(action.type) {
    case "GET_ALL_MUTANTS":
      return {...prevState, allMutants: action.allMutants}
    case "ADD_TO_TEAM":
      return {...prevState, team: [...prevState.team, action.name]}
    case "REMOVE_FROM_TEAM":
      let newTeamArray = prevState.team.filter(mutant => mutant.name !== action.name)
      return {...prevState, team: newTeamArray}
    case "SORT_BY_TEAM":
      return {...prevState, allMutants: action.sortedTeam}
    default:
      return prevState
  }
}

export default reducer 