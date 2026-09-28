const obj = {
  a: {
    b: {
      c: "d",
    },
  },
};

type TObjType = Record<string, unknown>

function get(obj: TObjType, path: string) {
    const segments = path.split('.')
    let currentStage: TObjType = obj

    segments.forEach((key) => {
      if (currentStage && typeof currentStage === 'object' && key in currentStage) {
        currentStage = currentStage[key] as TObjType
      } else {
        return undefined
      }
    })

    return currentStage
}


console.log(get(obj, "a.b.c")); 