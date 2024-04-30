1. The value of i after running through the for loop is printed. Since the loop runs three times, the value 3 is printed. This is also the same as prices.length, which can be used to quickly determine the output. i remains as 3 because var is valid throughout the code.
2. 150 is printed. This is because it returns the discounted price for the final item in the array as the call is placed after the for loop. discountprice remains as 3 because var is valid throughout the code, which is a property of var.
3. 150 is printed. This is because it returns the final price for the final item in the array as the call is placed after the for loop. finalprice remains as 3 because var is valid throughout the code.
4. An arrray with the values [50,100,150] would be returned but NOT printed as there is not print statement for it.
5. Uncaught ReferenceError ReferenceError: i not is not defined. This is because i's scope is only the for loop.
6. Uncaught ReferenceError ReferenceError: discountprices not is not defined. This is because its's scope is only the for loop.
7. 150 is printed as the scope of final prices includes the print statement.
8. The function will still return [50,100,150] as the print statements do not change the output and the scope's are still valid for the necessary calculations.
9. Uncaught ReferenceError ReferenceError: i not is not defined. This is because i's scope is only the for loop.
10. This will print 3, as it prints the length of the inputted array.
11. The function will still return [50,100,150] as the print statements do not change the output and the scope's are still valid for the necessary calculations.
12.
   a) student.name <br/>
   b) student['Grad Year'] <br/>
   c) student.greeting() <br/>
   d) student['Favorite Teacher'].name <br/>
   e) student.courseLoad[0] <br/>
13. 
    a) 32 as number converts to string and + concatenates them <br/>
    b) 1 as - operatore makes the string a number instead <br/>
    c) 3 as null becomes 0 <br/>
    d) 3null as null would be a string and + concatenates <br/>
    e) 4 as the value of true is 1 for numerical purposes and string to int when 3 in an int <br/>
    f) 0 as both false and null are 0 in numerical terms and there are no strings to indicate concatenation <br/>
    g) 3undefined as undefined becomes a string <br/>
    h) NaN as undefined is NaN when it is represented as a number. <br/>

14.
  a) True as 2 converted to a number and 2>1 is true <br/>
  b) True as alphabetically twelve is before than two, which is what is checked when comparing strings <br/>
  c) True as the types become the same with == , in this case string to number, and compares 2 == 2 which is true <br/>
  d) false as === does not change types, so it compares string to int, which is false <br/>
  e) false as true is represented as 1, which is not equal to 2 <br/>
  f) true as boolean 2 should be returning true, according to documentation on google <br/>

15. == is the equaluty operator that does not care about type as it will automatically convert to the same type. This process is known as type coersion. === is a srict equality operator, which does not perform automatic type swap, and thus requires the values to be equal value and type to return true.
16. IN part2-question16.js
17. The result is [2,4,6]. This is obtained by the following process: the modify array first creates a new array called newArr. The for loop iterates through each element, and on each element the callback is called, which is dosomething. This multiplies each term by 2, and the resulting term is pushed into the new array. Finally, after all elements are pushed we get the resulting function, which is [2,4,6]
18. IN part2-question18.js
19. 1, 4, 3, 2 was the printed result with each number on a newline.
