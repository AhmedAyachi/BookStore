

export const capitalize=(str="")=>str.split(" ").map(word=>word.length?(word[0].toUpperCase()+word.substring(1)):word).join(" ");
