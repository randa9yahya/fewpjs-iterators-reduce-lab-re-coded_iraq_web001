const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const sum = (acc,cur) => acc + cur;
const totalBatteries = batteryBatches.reduce(sum);
