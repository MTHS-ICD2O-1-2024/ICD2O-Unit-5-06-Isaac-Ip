// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Apr 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function selects a random number depending on the user's choice.
 */
function checkTriangleType() {
  const value1 = parseInt(document.getElementById("value-1").value);
  const value2 = parseInt(document.getElementById("value-2").value);

  // process

  for (let i = 1; i < (value2 + 1); i++) {
    text += "The number is " + i + "<br>";
  }


  if (sumOfAngles != 180 || (lengthA + lengthB <= lengthC || lengthA + lengthC <= lengthB || lengthB + lengthC <= lengthA)) {
    document.getElementById("result").innerText = "The triangle is not a real triangle.";

  } else if (lengthA == lengthB && lengthB == lengthC) {
    document.getElementById("result").innerText = "The triangle is equilateral.";

  } else if (lengthA !== lengthB && lengthB !== lengthC && lengthA !== lengthC) {
    document.getElementById("result").innerText = "The triangle is scalene.";

  } else {
    document.getElementById("result").innerText = "The triangle is isoceles.";
  }
}

