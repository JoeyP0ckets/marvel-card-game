const initialState = {
  allMutants: [],
  team: []
}

const reducer = (prevState=initialState, action) => {
  switch(action.type) {
    case "GET_ALL_MUTANTS":
      return {...prevState, allMutants: action.allMutants}
    case "ADD_TO_TEAM":
      return {...prevState, team: [...prevState.team, action.name]}
    default:
      return prevState
  }
}

export default reducer 