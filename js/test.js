    describe("Bubble sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(bubbleSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });
    
    describe("Insertion sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(insertionSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });
    
     describe("Selection sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(selectionSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });
    
     describe("Merge sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(mergeSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });
    
     describe("Counting sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(countingSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, 0, 100));
      }

    });

    describe("Comb sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(combSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });

    describe("Heap sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(heapSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });

    describe("Quick sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(quickSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });

    describe("Shell sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(quickSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });

    describe("Bucket sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(bucketSort(arr, 10), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });

    describe("Tree sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(treeSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, -100, 100));
      }

    });

    describe("Radix sort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(radixSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(10, 0, 100));
      }

    });

    describe("Bogosort", function() {

      function makeTest(arr) {
        var expected = arr.slice().sort(compareNumeric);
        it("Array: " + arr + "; Expected sort: " + expected, function() {
          assert.deepEqual(bogoSort(arr), expected);
        });
      }

      for (var x = 0; x < 3; x++) {
        makeTest(randomArr(5, -10, 10));
      }

    });