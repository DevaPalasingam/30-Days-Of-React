ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

/**
 * Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) 
 * And measure of variability(range, variance, standard deviation). 
 * In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
 * You can create a class called Statistics 
 * And create all the functions which do statistical calculations as method for the Statistics class.
 * Example
console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

your output should look like this
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
 */

class Statistics {
  constructor(inputArr) {
    this.inputArr = inputArr;
  }

  count() {
    return this.inputArr.length;
  }
  sum() {
    return this.inputArr.reduce((a, b) => a + b);
  }
  min() {
    return Math.min(...this.inputArr);
  }
  max() {
    return Math.max(...this.inputArr);
  }
  range() {
    let min = this.min();
    let max = this.max();
    return max - min;
  }
  mean() {
    let count = this.count();
    let sum = this.sum();
    return sum / count;
  }
}

const statistics = new Statistics(ages);
console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
