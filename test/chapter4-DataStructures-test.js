'use strict';
const f = require('./../chapter4-DataStructures.js');

exports.sumRangeTest = function(test) {
  test.expect(1); 
  test.equal(f.sum(f.range(1,10)), 55);
  test.done();
}

exports.rangeStepTest = function(test) {
  test.expect(2);
  test.deepEqual(f.range(1, 10, 2), [1, 3, 5, 7, 9]);
  test.deepEqual(f.range(5, 2, -1), [5, 4, 3, 2]);
  test.done();
}

exports.reverseArrayTest = function(test) {
  test.expect(1);
  let array = [1, 2, 3, 4, 5];
  test.deepEqual(f.reverseArray(array), [5, 4, 3, 2, 1]);
  test.done();
}

exports.reverseArrayInPlaceTest = function(test) {
  test.expect(1);
  let array = [1, 2, 3, 4, 5];
  f.reverseArrayInPlace(array);
  let reversed = [5, 4, 3, 2, 1];
  
  test.deepEqual(array, reversed);

  test.done();
}

exports.arrayToListTest = function(test) {
  test.expect(1);
  let array = [1, 2, 3];
  let expected = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    } 
  };
  
  let actual = f.arrayToList(array);
  test.deepEqual(actual, expected);
  
  test.done();
}

exports.listToArray = function(test) {
  test.expect(1);
  let expected = [1, 2, 3];
  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

  let actual = f.listToArray(list);

  test.deepEqual(actual, expected);  
  test.done();
}

exports.prepend = function(test) {
  test.expect(1);

  let expected = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

  let list = {   
    value: 2,
    rest: {
      value: 3,
      rest: null
    }    
  };

  let actual = f.prepend({ value: 1, rest: null}, list);
  
  test.deepEqual(actual, expected);
  test.done();
}

exports.itemAtTest = function(test) {
  test.expect(4);
  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };
  
  test.deepEqual(f.itemAt(list, 0), { value: 1, rest: { value: 2, rest: { value: 3, rest: null}}});
  test.deepEqual(f.itemAt(list, 1), { value: 2, rest: { value: 3, rest: null}});
  test.deepEqual(f.itemAt(list, 2), { value: 3, rest: null});
  test.deepEqual(f.itemAt(list, 3), undefined);
  test.done();
}

exports.deepEqualTest = function(test) {
  test.expect(9);

  let obj1 = [1, 2, 3, 4, 5];
  let obj2 = [1, 2, 3, 4, 5];
  
  let actual = f.deepEqual(obj1, obj2);  
  test.equal(actual, true);
  
  obj2 = [5, 4, 3, 2, 1];
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, false);

  obj1 = "string value";
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, false);

  obj1 = null;
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, false);

  obj1 = null;
  obj2 = null;
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, true);

  obj1 = { nombre: "rodrigo", edad: 30, array: [1, 2, 3]};
  obj2 = { nombre: "rodrigo", edad: 30, array: [1, 2, 3]};
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, true);
  
  obj2.nombre = "changed name";
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, false);

  obj2.nombre = "rodrigo";
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, true);


  obj1.array = [1, 2, 3, 4];
  actual = f.deepEqual(obj1, obj2);
  test.equal(actual, false);
  test.done();  
}
