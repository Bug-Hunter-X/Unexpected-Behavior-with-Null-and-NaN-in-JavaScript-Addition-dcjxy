# Unexpected Behavior with Null and NaN in JavaScript Addition

This repository demonstrates a subtle bug in JavaScript related to handling null values and NaN (Not a Number) during addition.  The original code attempts to handle null input gracefully but does not explicitly handle NaN.  The solution provides an improved version with more robust error handling.

## Bug Description

The `foo` function adds two numbers. If either input is null, it correctly returns null. However, if the function receives NaN, it can still result in unexpected behavior after addition.  This is a subtle error that may not immediately be apparent.

## Solution

The solution enhances error handling.  It explicitly checks for NaN using `isNaN()` and returns an appropriate value, improving reliability and predictability.