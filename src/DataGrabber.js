import mutants from './MutantData.json'

export function getAllMutants() {
  return mutants.map(mutant => mutant)
}

export function getMutantByName() {
  return mutants.map(mutant => mutant.name)
}

