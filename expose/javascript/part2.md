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


