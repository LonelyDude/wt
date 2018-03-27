 function minElement(arr){
      min = arr[0];
      for (i = 1; i < arr.length; ++i) {
        if (arr[i] < min) min = arr[i];
      }
      return min;
    }
    
    function maxElement(arr){
      max = arr[0];
      for (i = 1; i < arr.length; ++i) {
        if (arr[i] > max) max = arr[i];
      }
      return max;
    }
    
    function randomInteger(min, max) {
      var rand = min + Math.random() * (max - min);
      rand = Math.round(rand);
      return rand;
    }
    
    function compareNumeric(a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
    }

    function randomArr(len){
      var arr = [];
      
      for(var i = 0; i < len; i++){
        arr[i] = -1 + Math.random() * (2);
      }
      
      return arr;
    }
    
    function randomArr(len, min, max){
      var arr = [];
      
      for(var i = 0; i < len; i++){
        arr[i] = randomInteger(min, max);
      }
      
      return arr;
    }
    
    function bubbleSort(arr){
      for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length - 1; j++){ 
          if (arr[j] > arr[j + 1]){ 
            var tmp = arr[j+1];
            arr[j+1] = arr[j]; 
            arr[j] = tmp; 
           }
        }
      }                     
      return arr;   
    }
    
    function insertionSort(arr){
      var key, j;
      for (var i = 1; i < arr.length; i++){
        key = arr[i];
        j = i-1;
        while(j >= 0 && arr[j] > key){
          arr[j+1] = arr[j];
          j = j-1;
        }
        arr[j+1] = key;
      }                     
      return arr;    
    }
    
    function selectionSort(arr){
      var index;
      for (var i = 0; i < arr.length - 1; i++){ 
         index = i;
         for (var j = i+1; j < arr.length; j++){ 
           if (arr[j] < arr[index])  index = j;
         } 
         var tmp = arr[index]; 
         arr[index] = arr[i]; 
         arr[i] = tmp;
       }                    
      return arr;    
    }
    
    function merge(a,low,mid,high){
        var b = new Array(high+1-low), h, i, j = mid+1, k, h = low, i = 0;
        while (h <= mid && j <= high )
         { 
           if (a[h] <= a[j]){ 
             b[ i ]=a[h]; 
             h++; 
           }
           else { 
             b[ i ]=a[j];
             j++; 
           }
           i++;
         }
        if (h > mid){ 
          for (k = j; k <= high; k++){ 
            b[ i ]=a[k]; 
            i++; } 
        }
        else { 
          for (k = h; k <= mid; k++){ 
            b[ i ]=a[k];
            i++;
          }
        }    
        for (k=0; k<=high-low; k++) a[k+low]=b[k];
        return a;
    }

    function mergeSort(arr){
        function rec(a,low,high){ 
          if (low < high){ 
              var mid = Math.floor((low+high)/2);
              rec(arr, low, mid);
              rec(arr, mid+1, high);
              merge(a, low, mid, high);
            }
        }
        var n = arr.length;
        rec(arr, 0, n-1);
        return arr;
    }
    
    function countingSort(arr){
        var n = arr.length;
        
        var output = new Array(n);
        var max = maxElement(arr) + 1;

        var count = new Array(max);
        for (var i=0; i < max; i++)
            count[i] = 0;
 

        for (var i=0; i<n; ++i)
            ++count[arr[i]];

        for (var i=1; i<=max; ++i)
            count[i] += count[i-1];

        for (var i = 0; i<n; ++i){
            output[count[arr[i]]-1] = arr[i];
            --count[arr[i]];
        }
 
        for (var i = 0; i<n; ++i)
            arr[i] = output[i];

        return arr;
    }

    function getNextGap(gap){
      gap = (gap * 10)/ 13;

      if(gap < 1){
        return 1;
      }
      return gap;
    }
    
    function combSort(arr){
      var gap = arr.length;
      var swapped = true;

      while(gap != 1 || swapped == true){
        gap = getNextGap(gap);
        swapped = false;

        for(var i = 0; i < arr.length - gap; i++){
          if(arr[i] > arr[i + gap]){
             var tmp = arr[i + gap]; 
             arr[i + gap] = arr[i]; 
             arr[i] = tmp;
             swapped = true;
          }
        }
      }
     return arr; 
    }

    function heapSort(arr) {
        if (arr.length == 0) return [];
        var n = arr.length, i = Math.floor(n/2), j, k, t;
        while (true) { 
          if (i > 0) t = arr[--i];
          else {
            n--;
            if (n == 0) return arr;
            t = arr[n]; 
            arr[n] = arr[0];
          }        
          j = i;  k = j*2+1;
          while (k < n) {
           if (k+1 < n && arr[k+1] > arr[k]) k++;
           if (arr[k] > t){
            arr[j] = arr[k];  
            j = k;  
            k = j*2+1; 
           }
           else break;
          }
         arr[j] = t; 
        }
    }

    function quickSort(arr){
        if (arr.length == 0) return [];
        var a = [], b = [], p = arr[0];
        for (var i = 1; i < arr.length; i++){ 
          if (arr[ i ] < p) a[a.length] = arr[ i ];
          else b[b.length] = arr[ i ];
         }
        return quickSort(a).concat( p,quickSort(b) );
    }

    function shellSort(arr){
        var n = arr.length, i = Math.floor(n/2);
        while (i > 0) {
         for (var j = 0; j < n; j++){
           var k = j, t = arr[j];
           while (k >= i && arr[k-i] > t) {
              arr[k] = arr[k-i]; 
              k -= i; 
            }
            arr[k] = t;
          }
          i = (i==2) ? 1 : Math.floor(i*5/11);
         }
        return arr;
    }

    function bucketSort(array, bucketSize) {
      if (array.length === 0) {
        return array;
      }

      // Determine minimum and maximum values
      var i;
      var minValue = array[0];
      var maxValue = array[0];
      for (i = 1; i < array.length; i++) {
        if (array[i] < minValue) {
          minValue = array[i];
        } else if (array[i] > maxValue) {
          maxValue = array[i];
        }
      }

      // Initialise buckets
      var DEFAULT_BUCKET_SIZE = 5;
      bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
      var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
      var buckets = new Array(bucketCount);
      for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
      }

      // Distribute input array values into buckets
      for (i = 0; i < array.length; i++) {
        buckets[Math.floor((array[i] - minValue) / bucketSize)].push(array[i]);
      }

      // Sort buckets and place back into input array
      array.length = 0;
      for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);
        for (var j = 0; j < buckets[i].length; j++) {
          array.push(buckets[i][j]);
        }
      }

      return array;
    }

    function add(elem, node){
      var tmp = {};
      tmp.value = elem;
      tmp.parent = node;
      
      if(tmp.value < node.value){
        if(node.left === undefined){
          node.left = tmp;
        }else{
          add(elem, node.left);
        }
      }
      else{
        if(node.right === undefined){
          node.right = tmp;
        }else{
          add(elem, node.right);
        }
      }
    }
    
    var index = 0;
    
    function postorder(arr, tree){
      if(tree === undefined){
        return;
      }

     postorder(arr, tree.left);
     arr[index++] = tree.value;
     postorder(arr, tree.right);
    }

    function treeSort(arr){
      var tree = {}
      tree.value = arr[0];
      for(var i = 1; i < arr.length; i++){
          add(arr[i], tree);
      }

      postorder(arr, tree);

      index = 0;

      return arr;
    }

    function bcktSort(arr, exp, min){
      var i;
      var bucketIndex;
      var buckets = new Array(10);
      var output = new Array(arr.length);

      // Initialize bucket
      for (i = 0; i < 10; i++) {
        buckets[i] = 0;
      }

      // Count frequencies
      for (i = 0; i < arr.length; i++) {
        bucketIndex = Math.floor(((arr[i] - min) / exp) % 10);
        buckets[bucketIndex]++;
      }

      // Compute cumulates
      for (i = 1; i < 10; i++) {
        buckets[i] += buckets[i - 1];
      }

      // Move records
      for (i = arr.length - 1; i >= 0; i--) {
        bucketIndex = Math.floor(((arr[i] - min) / exp) % 10);
        output[--buckets[bucketIndex]] = arr[i];
      }

      // Copy back
      for (i = 0; i < arr.length; i++) {
        arr[i] = output[i];
      }
      return arr;
    }

    function radixSort(arr){
      var max = maxElement(arr);
      var min = minElement(arr);
      for(var i = 1; Math.floor(max/i) > 0; i *= 10){
        bcktSort(arr, i, min);
      }
      return arr;
    }

    function isSorted(arr){
        for(var i = 1; i < arr.length; i++){
            if (arr[i-1] > arr[i]) {
                return false;
            }
        }
        return true;
    }

    function shuffle(arr){
        var count = arr.length, temp, index;

        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = arr[count];
            arr[count] = arr[index];
            arr[index] = temp;
        }

        return arr;
    }

    function bogoSort(arr){
        var sorted = false;
        while(!sorted){
            arr = shuffle(arr);
            sorted = isSorted(arr);
        }
        return arr;
    }