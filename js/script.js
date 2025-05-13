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
  let product = 0;
  let counter = 0;

  while (counter < Math.abs(value2)) {
    product += Math.abs(value1);
    counter++;
  }

  // Adjust for negative numbers
  if ((value1 < 0 && value2 > 0) || (value1 > 0 && value2 < 0)) {
    product = -product;
  }

  // output
  document.getElementById("result").innerText += `${value1} x ${value2} = ${product}`;
  }

