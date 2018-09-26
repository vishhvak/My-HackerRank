//https://www.hackerrank.com/challenges/hello-world-c/problem

#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() 
{
	
    char s[100];
    scanf("%[^\n]%*c", &s);
  	char y[14] = "Hello, World!";
    printf("%s\n%s", y, s);  
    return 0;
}