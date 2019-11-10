//https://www.hackerrank.com/challenges/2d-array/problem

int largest(int arr[], int n);
// Complete the hourglassSum function below.
int hourglassSum(int arr_rows, int arr_columns, int** arr) {
    int left = 0, mid = 1, right = 2,top = 0, center = 1, bottom = 2;
    int totals[100] = {0};
    int i = 0;
    for(;;) {
        int total = 0;
        if(right == arr_rows) {
            left = 0, mid = 1, right = 2;
            top++, center++, bottom++;
            if(bottom == arr_columns) break;
        }
        total = arr[top][left] + arr[top][mid] + arr[top][right] + arr[center][mid] + arr[bottom][left] + arr[bottom][mid] + arr[bottom][right];
        totals[i] = total;
        left++, mid++, right++, i++;
    }
    
    return largest(totals, i);
}
int largest(int arr[], int n) 
{ 
    int i; 
    int max = arr[0]; 
    for (i = 1; i < n; i++) 
        if (arr[i] > max) 
            max = arr[i]; 
    return max; 
} 
