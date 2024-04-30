1) The bug was that the function was adfing num1 and num2 as strings rather than numbers. This results in concatenation rather than addition.
2) The fix is to type cast to numbers before adding them.
