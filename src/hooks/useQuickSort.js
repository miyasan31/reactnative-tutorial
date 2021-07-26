// /**
//  * 実行すると画面にAlertを表示します。
//  * @param {string} msg Alertに表示するメッセージ
//  * @param {string} status Alertの種類(次のいずれか "info" | "warning" | "success" | "error")
//  * @param {boolean} isAutoClose Alertを自動で閉じるかどうか(Default = true)
//  */

export const useQuickSort = ImportItems => {
  const swap = (items, leftIndex, rightIndex) => {
    let temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  };

  const partition = (items, left, right) => {
    let pivot = items[Math.floor((right + left) / 2)].createdAt.seconds, //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i].createdAt.seconds < pivot) {
        i++;
      }
      while (items[j].createdAt.seconds > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //sawpping two elements
        i++;
        j--;
      }
    }
    return i;
  };

  const quickSort = (items, left, right) => {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition

      if (left < index - 1) {
        //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }

      if (index < right) {
        //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  };
  // first call to quick sort
  return quickSort(ImportItems, 0, ImportItems.length - 1);
};
