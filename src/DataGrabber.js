import mutants from './MutantData.json'
import gameMutants from './GameMutantData.json'

export function getAllMutants() {
  return mutants.map(mutant => mutant)
}

export function getMutantByName() {
  return mutants.map(mutant => mutant.name)
}

export function filterByEvilTeam() {
  return mutants.filter(mutant => mutant.team.includes("Brotherhood of Mutants"))
}

export function getAllGameMutants() {
  return gameMutants.map(mutant => mutant)
}

export function filterByBrotherhood() {
  return gameMutants.filter(mutant => mutant.team === "Brotherhood of Mutants")
}

export function filterByHeroes() {
  return gameMutants.filter(mutant => mutant.team ==="Marvel Heroes")
}
