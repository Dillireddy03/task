
  function showQuestion(question, code, output, explanation) {

    let div = document.createElement("div");
    div.className = "box";

    div.innerHTML =
      "<h3>" + question + "</h3>" +
      "<pre>" + code + "</pre>" +
      "<div class='output'>Output: " + output + "</div>" +
      "<p>" + explanation + "</p>";

    document.getElementById("content").appendChild(div);
  }

  // 1
  showQuestion(
    "1. Merge two arrays using spread operator",
    "let a = [1, 2, 3];\nlet b = [4, 5];\nlet result = [...a, ...b];",
    "[1, 2, 3, 4, 5]",
    "Here both arrays are joined together using spread operator."
  );

  // 2
  showQuestion(
    "2. Clone an array using spread operator",
    "let arr = [10, 20, 30];\nlet copy = [...arr];",
    "[10, 20, 30]",
    "Spread creates a new array, so original array is safe."
  );

  // 3
  showQuestion(
    "3. Add values at beginning and end",
    "let arr = [2, 3, 4];\nlet newArr = [1, ...arr, 5];",
    "[1, 2, 3, 4, 5]",
    "Value 1 is added in front and 5 is added at the end."
  );

  // 4
  showQuestion(
    "4. Merge two objects",
    "let obj1 = {a:1, b:2};\nlet obj2 = {b:3, c:4};\nlet obj3 = {...obj1, ...obj2};",
    "{a:1, b:3, c:4}",
    "If same key exists, second object value replaces first."
  );

  // 5
  showQuestion(
    "5. Spread copy output",
    "let a = [1,2,3];\nlet b = [...a];\nb.push(4);",
    "[1, 2, 3]",
    "Array a does not change because b is a copy."
  );

  // 6
  showQuestion(
    "6. Object spread override",
    "let obj1 = {a:1, b:2};\nlet obj2 = {b:3, c:4};\nlet obj3 = {...obj1, ...obj2};",
    "{a:1, b:3, c:4}",
    "Later object value overrides earlier value."
  );

  // 7
  showQuestion(
    "7. Function using rest operator",
    "function showValues(...values) {\n  return values;\n}",
    "[1, 2, 3]",
    "Rest operator stores all values in an array."
  );

  // 8
  showQuestion(
    "8. Sum using rest operator",
    "function sum(...nums) {\n  let total = 0;\n  for(let i=0; i<nums.length; i++){\n    total = total + nums[i];\n  }\n  return total;\n}",
    "60",
    "Loop is used to add each value."
  );

  // 9
  showQuestion(
    "9. Rest operator output",
    "function test(...a){\n  return a;\n}",
    "[10, 20, 30]",
    "All values are grouped into one array."
  );

  // 10
  showQuestion(
    "10. Rest with normal parameters",
    "function demo(x, y, ...z){\n  return z;\n}",
    "[3, 4, 5]",
    "First two go to x and y, rest go to z."
  );

  // 11
  showQuestion(
    "11. Array destructuring",
    "let arr = [10,20,30,40];\nlet a = arr[0];\nlet b = arr[1];\nlet c = arr[2];\nlet d = arr[3];",
    "10 20 30 40",
    "Values are taken one by one using index."
  );

  // 12
  showQuestion(
    "12. Object destructuring",
    "let emp = {name:'John', age:25, role:'Dev'};\nlet name = emp.name;\nlet age = emp.age;\nlet role = emp.role;",
    "John 25 Dev",
    "Object values are accessed using dot notation."
  );

  // 13
  showQuestion(
    "13. a + c from array",
    "let arr = [1,2,3];\nlet a = arr[0];\nlet c = arr[2];",
    "4",
    "First and last values are added."
  );

  // 14
  showQuestion(
    "14. Multiply object values",
    "let obj = {x:10, y:20};\nlet result = obj.x * obj.y;",
    "200",
    "Values are multiplied using dot operator."
  );

  // 15
  showQuestion(
    "15. Access nested array value",
    "let data = [1,2,[3,4,[5,6,7]]];\nlet value = data[2][2][2];",
    "7",
    "We go inside each array step by step."
  );

  // 16
  showQuestion(
    "16. Nested array destructuring",
    "let val = [1,2,[3,4]];\nlet a = val[0];\nlet b = val[1];\nlet c = val[2][0];\nlet d = val[2][1];",
    "1 2 3 4",
    "Values are accessed using indexes."
  );

  // 17
  showQuestion(
    "17. Nested array output",
    "let arr = [1,[2,[3,4]]];\nlet result = arr[1][1][0];",
    "3",
    "Correct index path returns 3."
  );

  // 18
  showQuestion(
    "18. pop() method",
    "let a = [1,2,3,4];\na.pop();",
    "[1, 2, 3]",
    "pop removes last element."
  );

  // 19
  showQuestion(
    "19. unshift() method",
    "let a = [1,2,3];\na.unshift(0);",
    "[0, 1, 2, 3]",
    "unshift adds element at beginning."
  );

  // 20
  showQuestion(
    "20. push() method",
    "let a = [1,2,3];\na.push(4);\na.push(5);",
    "[1, 2, 3, 4, 5]",
    "push adds elements at end."
  );

  // 21
  showQuestion(
    "21. splice() method",
    "let a = [10,20,30,40];\na.splice(1,2,99);",
    "[10, 99, 40]",
    "splice removes values and inserts new one."
  );

  // 22
  showQuestion(
    "22. slice() method",
    "let a = [1,2,3,4,5];\nlet result = a.slice(1,4);",
    "[2, 3, 4]",
    "slice returns selected part."
  );

  // 23
  showQuestion(
    "23. concat() method",
    "let a = [1,2];\nlet b = [3,4];\nlet c = a.concat(b);",
    "[1, 2, 3, 4]",
    "concat joins two arrays."
  );

  // 24
  showQuestion(
    "24. flat() method",
    "let a = [1,[2,[3,4]]];\nlet result = a.flat(2);",
    "[1, 2, 3, 4]",
    "flat removes nested arrays."
  );

  // 25
  showQuestion(
    "25. fill() method",
    "let a = [1,2,3,4];\na.fill(0,1,3);",
    "[1, 0, 0, 4]",
    "fill replaces values in given range."
  );

  // 26
  showQuestion(
    "26. indexOf() method",
    "let a = [1,2,3,2,1];\nlet index = a.indexOf(2);",
    "1",
    "Returns first matching index."
  );

  // 27
  showQuestion(
    "27. lastIndexOf() method",
    "let a = [1,2,3,2,1];\nlet index = a.lastIndexOf(2);",
    "3",
    "Returns last matching index."
  );

  // 28
  showQuestion(
    "28. sort() default",
    "let a = [10,2,5,1];\na.sort();",
    "[1, 10, 2, 5]",
    "Sort works like string sorting by default."
  );

  // 29
  showQuestion(
    "29. Numeric sort",
    "let a = [10,2,5,1];\na.sort(function(x,y){ return x-y; });",
    "[1, 2, 5, 10]",
    "Function tells how numbers should be compared."
  );

  // 30
  showQuestion(
    "30. Spread + rest",
    "let a = [1,2,3];\nlet b = [...a,4,5];\nlet x = b[0];\nlet y = b[1];\nlet z = b.slice(2);",
    "1 2 [3,4,5]",
    "Remaining values are stored using slice."
  );

