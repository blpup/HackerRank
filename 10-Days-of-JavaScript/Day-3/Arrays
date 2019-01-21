function getSecondLargest(nums) {
    
    nums.sort((a, b) => b - a);
    let current = 0;
    for (let i = 0; i < nums.length; i++){
        if (current == 0)
            current = nums[i];
        if (current != nums[i]) {
            current = nums[i];
            break;
        }
    }

    return current;
}
