# JavaScript Null Check Bug: Unexpected Null Return for Double Null Input

This repository demonstrates a subtle bug in JavaScript code that deals with null checks. The function `foo` is designed to add two numbers, but it returns `null` if either of the inputs is `null`. This behavior is correct, however the code also returns null if both inputs are null. This may not be the intended behavior in every scenario.  The solution addresses this by providing a fallback for the case where both inputs are null.

## Bug Description
The bug is that if both input parameters are null the function immediately returns null without a chance to handle a default value, instead of a default value being provided. 

## Solution
The solution provides a default value when both parameters are null.
