function getMaxLessThanK(n, k) {
    let answer = 0;
    for (let i = 1; i < n; i++)
        for (let j = i+1; j <= n; j++)
            if ((i&j) < k && (i&j) > big)
                answer = i&j;
    return answer;
}

/* Fastest Way
function getMaxLessThanK(n, k) {
    return ((k | (k - 1)) > n) ? (k - 2) : (k - 1);
}

If k-2 is even then assign a=k-2. If k-2 is not even, then k-1 is even and assign a=k-1. Either way, assign b=a+1. 
Since a is even, a's Least Significant Bit is 0, and b is the same as a except for b's Least Significant Bit is 1. 
So a&b==a, so either way we know that the maximum value of a&b is at least k-2.

There's a chance that the max can be k-1. With a<b, the smallest value of a that can result in a&b==k-1 is a=k-1. 
Then we want to find the smallest b such that (k-1)&b==k-1. To find that b want to flip the least significant 0 bit of k-1 to 1. 
We add 1 to k-1 to get k, this flips all the least significant 1s of k-1 to 0 and the least significant 0 of k-1 to 1. 
Then we take the OR of k and k-1: k|(k-1) is a number that is the same as k-1 except the least significant 0 has been flipped to a 1. 
So we assign b=k|(k-1).If b>n, then this plan fails and we have to revert back to our fallback answer of k-2. 
Otherwise, we assign b=k|(k-1), a=k-1, and the answer is a&b==k-1.

The proof that if no b exists such that (k-1) & b == k-1, then there doesn't exist any b for a & b == k-1, where a > k-1.
Proof: When we keep incrementing a from k-1, least significant 1's of k-1 flip to 0, which on & cannot retain k-1. 
It is also possible that all 1's from k-1 are preserved. In that case incrementation will cause the least significant 0's to filp. 
Now, the smallest value of b is z | (z+1), where z > k -1. 
Now, obviously this b is greater than the one obtained from (k-1) | k, since some of its 0's are flipped.
*/
