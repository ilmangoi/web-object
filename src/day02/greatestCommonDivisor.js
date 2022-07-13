'use strict'
/***********************************************************************
 * 假设有两个数x和y，存在一个最大公约数z=(x,y)，即x和y都有公因数z，       *
 * 那么x一定能被z整除，y也一定能被z整除，所以x和y的线性组合mx±ny也        *
 * 一定能被z整除。（m和n可取任意整数）                                   *
 *                                                                     *
 * 对于辗转相除法来说，思路就是：若x>y，设x/y=n余c，则x能表示成x=ny+c     *
 * 的形式，将ny移到左边就是x-ny=c，由于一般形式的mx±ny能被z整除，所以     *
 * 等号左边的x-ny（作为mx±ny的一个特例）就能被z整除，即x除y的余数c也      *
 * 能被z整除。                                                         *
 *                                                                     *
 * 由以上的推理可知 a / b的余数 也能被 (a,b)的最大公约数整除，因此就将    *
 * 问题转化为求 其中较小的数和余数的最大公约数，最终将范围不断减小，从     *
 * 而求出答案。                                                         *
 ***********************************************************************/
function greatestCommonDivisor(maxNum, minNum) {
  // 边界情况判断
  if (!(maxNum && minNum))
    throw new Error('Please Pass in a value greater than 0')
  if (maxNum < minNum) greatestCommonDivisor(minNum, maxNum)

  const temp = maxNum % minNum

  if (!temp) {
    return minNum
  } else {
    // 尾调用优化
    return greatestCommonDivisor(minNum, temp)
  }
}

module.exports = greatestCommonDivisor
