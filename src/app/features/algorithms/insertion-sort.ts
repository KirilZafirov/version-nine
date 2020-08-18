export const insertion_sort_input = [5 , 2 , 4 , 6 , 1 , 3];
export const insertion_sort_expected_output = [1 , 2 , 3 , 4 , 5 , 6];

export function InsertionSort(entryList : number[]): number[] {
    const list = [...entryList];

    for(let i = 1 ; i < list.length ; i++) {
        const key = list[i]; 
        let j;

        for(j = i - 1 ; (j>=0) && (list[j] > key); j--){
            list[j + 1] = list[j];
        }
        
        list[ j + 1] = key;
    }

    return list;
}
