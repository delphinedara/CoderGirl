const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

it(" When passed a number that is ONLY divisible by 2, return 'Launch!'", ()=>{
  expect(launchOutput(2)).toEqual('Launch!');
})

it("When passed a number that is ONLY divisible by 3, return 'Code!'", ()=>{
  expect(launchOutput(3)).toEqual('Code!') 
})

it("When passed a number that is ONLY divisible by 5, return 'Rocks!'", ()=>{
  expect(launchOutput(5)).toEqual('Rocks!') 
})

it("When passed a number that is divisible by 2 AND 3, return 'LaunchCode!'", ()=>{
  expect(launchOutput(6)).toEqual('LaunchCode!')
})

it("When passed a number that is divisible by 3 AND 5, return 'Code Rocks!'", ()=>{
  expect(launchOutput(15)).toEqual('Code Rocks!') 
})

it("When passed a number that is divisible by 2 AND 5, return 'Launch Rocks!'", ()=>{
  expect(launchOutput(10)).toEqual('Launch Rocks!') 
})

it(" When passed a number that is divisible by 2, 3, AND 5, return 'LaunchCode Rocks!'", ()=>{
  expect(launchOutput(30)).toEqual('LaunchCode Rocks!') 
})

it("When passed a number that is NOT divisible by 2, 3, or 5, return 'Rutabagas! That doesn't work.'", ()=>{
  expect(launchOutput(17)).toEqual("Rutabagas! That doesn't work.") 
})

});