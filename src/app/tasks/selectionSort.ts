function selectionSort(arr: number[]) {
    const sorted: number[] = [...arr]
    
    for (let i = 0; i < sorted.length - 1; i++) {
        let minIdx = i

        for (let j = i + 1; j < sorted.length; j++) {
            if (sorted[minIdx] < sorted[j]) continue
            minIdx = j
        }

        if (minIdx === i) continue

        let temp = sorted[i]
        sorted[i] = sorted[minIdx]
        sorted[minIdx] = temp
    }

    return sorted
}