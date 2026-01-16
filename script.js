function showQuestion(question, code, output, explanation) {


  let box = document.createElement("div");
  box.className = "box";


  let heading = document.createElement("h3");
  heading.textContent = question;


  let pre = document.createElement("pre");
  pre.textContent = code;  


  let out = document.createElement("div");
  out.className = "output";
  out.textContent = "Output: " + output;


  let exp = document.createElement("p");
  exp.textContent = explanation;


  box.appendChild(heading);
  box.appendChild(pre);
  box.appendChild(out);
  box.appendChild(exp);

  document.getElementById("content").appendChild(box);
}

/* ================= QUESTIONS ================= */

// 1
showQuestion(
  "1. Merge two arrays using spread operator",
  "let a = [1, 2, 3];\nlet b = [4, 5];\nlet result = [...a, ...b];",
  "[1, 2, 3, 4, 5]",
  "Both arrays are joined into a new array using spread."
);

// 2
showQuestion(
  "2. Clone an array using spread operator",
  "let arr = [10, 20, 30];\nlet copy = [...arr];",
  "[10, 20, 30]",
  "Spread creates a new array, so original is not changed."
);

// 3
showQuestion(
  "3. Add values at beginning and end",
  "let arr = [2, 3, 4];\nlet newArr = [1, ...arr, 5];",
  "[1, 2, 3, 4, 5]",
  "1 is added at start and 5 at end."
);

// 4
showQuestion(
  "4. Merge two objects",
  "let obj1 = {a:1, b:2};\nlet obj2 = {b:3, c:4};\nlet obj3 = {...obj1, ...obj2};",
  "{a:1, b:3, c:4}",
  "Later object values override earlier ones."
);

// 5
showQuestion(
  "5. Spread copy output",
  "let a = [1,2,3];\nlet b = [...a];\nb.push(4);",
  "[1, 2, 3]",
  "a does not change because b is a copy."
);

// 6
showQuestion(
  "6. Object spread override",
  "let obj1 = {a:1, b:2};\nlet obj2 = {b:3, c:4};\nlet obj3 = {...obj1, ...obj2};",
  "{a:1, b:3, c:4}",
  "Key b is overridden by second object."
);

// 7
showQuestion(
  "7. Function using rest operator",
  "function showValues(...values) {\n  return values;\n}\nshowValues(1,2,3);",
  "[1, 2, 3]",
  "Rest operator stores all values in an array."
);

// 8 
showQuestion(
  "8. Sum using rest operator",
  "function sum(...nums) {\n  let total = 0;\n  for(let i = 0; i < nums.length; i++){\n    total = total + nums[i];\n  }\n  return total;\n}\nsum(10,20,30);",
  "60",
  "Loop adds all values safely."
);

// 9
showQuestion(
  "9. Rest operator output",
  "function test(...a){\n  return a;\n}\ntest(10,20,30);",
  "[10, 20, 30]",
  "All values are grouped into array."
);

// 10
showQuestion(
  "10. Rest with normal parameters",
  "function demo(x, y, ...z){\n  return z;\n}\ndemo(1,2,3,4,5);",
  "[3, 4, 5]",
  "Remaining values go into z."
);

// 11
showQuestion(
  "11. Array destructuring",
  "let arr = [10,20,30,40];\nlet a = arr[0];\nlet b = arr[1];\nlet c = arr[2];\nlet d = arr[3];",
  "10 20 30 40",
  "Values are accessed using index."
);

// 12
showQuestion(
  "12. Object destructuring",
  "let emp = {name:'John', age:25, role:'Dev'};\nlet name = emp.name;\nlet age = emp.age;\nlet role = emp.role;",
  "John 25 Dev",
  "Dot notation is used."
);

// 13
showQuestion(
  "13. a + c from array",
  "let arr = [1,2,3];\nlet result = arr[0] + arr[2];",
  "4",
  "First and last values are added."
);

// 14
showQuestion(
  "14. Multiply object values",
  "let obj = {x:10, y:20};\nlet result = obj.x * obj.y;",
  "200",
  "Values are multiplied."
);

// 15
showQuestion(
  "15. Access nested array value",
  "let data = [1,2,[3,4,[5,6,7]]];\nlet value = data[2][2][2];",
  "7",
  "Indexes are followed step by step."
);

// 16
showQuestion(
  "16. Nested array values",
  "let val = [1,2,[3,4]];\nlet a = val[0];\nlet b = val[1];\nlet c = val[2][0];\nlet d = val[2][1];",
  "1 2 3 4",
  "Nested indexes are used."
);

// 17
showQuestion(
  "17. Nested output",
  "let arr = [1,[2,[3,4]]];\nlet result = arr[1][1][0];",
  "3",
  "Correct index path."
);

// 18
showQuestion(
  "18. pop() method",
  "let a = [1,2,3,4];\na.pop();",
  "[1, 2, 3]",
  "Last element removed."
);

// 19
showQuestion(
  "19. unshift() method",
  "let a = [1,2,3];\na.unshift(0);",
  "[0, 1, 2, 3]",
  "Value added at start."
);

// 20
showQuestion(
  "20. push() method",
  "let a = [1,2,3];\na.push(4);\na.push(5);",
  "[1, 2, 3, 4, 5]",
  "Values added at end."
);

// 21
showQuestion(
  "21. splice() method",
  "let a = [10,20,30,40];\na.splice(1,2,99);",
  "[10, 99, 40]",
  "Values removed and inserted."
);

// 22
showQuestion(
  "22. slice() method",
  "let a = [1,2,3,4,5];\nlet result = a.slice(1,4);",
  "[2, 3, 4]",
  "Returns selected part."
);

// 23
showQuestion(
  "23. concat() method",
  "let a = [1,2];\nlet b = [3,4];\nlet c = a.concat(b);",
  "[1, 2, 3, 4]",
  "Arrays joined."
);

// 24
showQuestion(
  "24. flat() method",
  "let a = [1,[2,[3,4]]];\nlet result = a.flat(2);",
  "[1, 2, 3, 4]",
  "Nested arrays removed."
);

// 25
showQuestion(
  "25. fill() method",
  "let a = [1,2,3,4];\na.fill(0,1,3);",
  "[1, 0, 0, 4]",
  "Values replaced."
);

// 26
showQuestion(
  "26. indexOf() method",
  "let a = [1,2,3,2,1];\nlet index = a.indexOf(2);",
  "1",
  "First match returned."
);

// 27
showQuestion(
  "27. lastIndexOf() method",
  "let a = [1,2,3,2,1];\nlet index = a.lastIndexOf(2);",
  "3",
  "Last match returned."
);

// 28
showQuestion(
  "28. sort() default",
  "let a = [10,2,5,1];\na.sort();",
  "[1, 10, 2, 5]",
  "Sorted as strings."
);

// 29
showQuestion(
  "29. Numeric sort",
  "let a = [10,2,5,1];\na.sort(function(x,y){ return x-y; });",
  "[1, 2, 5, 10]",
  "Numeric comparison used."
);

// 30
showQuestion(
  "30. Spread + rest",
  "let a = [1,2,3];\nlet b = [...a,4,5];\nlet x = b[0];\nlet y = b[1];\nlet z = b.slice(2);",
  "1 2 [3,4,5]",
  "Remaining values separated."
);

