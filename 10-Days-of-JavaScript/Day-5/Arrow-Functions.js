function modifyArray(nums) {
    nums = nums.map((a) => (a%2==0)? a*2 : a*3);
    return nums;
}
