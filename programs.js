const PROGRAMS = {
c: [
{ t:"Hello World", f:"HELLO.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    clrscr();
    printf("Hello, World!\n");
    getch();
}
` },
{ t:"Add Two Numbers", f:"ADD.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b, sum;
    clrscr();
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    sum = a + b;
    printf("Sum = %d\n", sum);
    getch();
}
` },
{ t:"Even or Odd", f:"EVENODD.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n;
    clrscr();
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n % 2 == 0)
        printf("%d is Even\n", n);
    else
        printf("%d is Odd\n", n);
    getch();
}
` },
{ t:"Factorial", f:"FACT.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, i;
    long fact = 1;
    clrscr();
    printf("Enter a number: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
        fact = fact * i;
    printf("Factorial of %d = %ld\n", n, fact);
    getch();
}
` },
{ t:"Fibonacci Series", f:"FIBO.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, i, a = 0, b = 1, c;
    clrscr();
    printf("How many terms? ");
    scanf("%d", &n);
    printf("Fibonacci Series: ");
    for (i = 1; i <= n; i++)
    {
        printf("%d ", a);
        c = a + b;
        a = b;
        b = c;
    }
    getch();
}
` },
{ t:"Prime Number", f:"PRIME.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, i, flag = 1;
    clrscr();
    printf("Enter a number: ");
    scanf("%d", &n);
    if (n < 2)
        flag = 0;
    for (i = 2; i <= n / 2; i++)
    {
        if (n % i == 0)
        {
            flag = 0;
            break;
        }
    }
    if (flag)
        printf("%d is a Prime number\n", n);
    else
        printf("%d is NOT a Prime number\n", n);
    getch();
}
` },
{ t:"Swap Two Numbers", f:"SWAP.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b, temp;
    clrscr();
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    printf("Before swap: a = %d, b = %d\n", a, b);
    temp = a;
    a = b;
    b = temp;
    printf("After swap : a = %d, b = %d\n", a, b);
    getch();
}
` },
{ t:"Largest of Three Numbers", f:"LARGEST.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b, c, big;
    clrscr();
    printf("Enter three numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    big = a;
    if (b > big)
        big = b;
    if (c > big)
        big = c;
    printf("Largest = %d\n", big);
    getch();
}
` },
{ t:"Palindrome Number", f:"PALIN.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, temp, rev = 0, d;
    clrscr();
    printf("Enter a number: ");
    scanf("%d", &n);
    temp = n;
    while (temp > 0)
    {
        d = temp % 10;
        rev = rev * 10 + d;
        temp = temp / 10;
    }
    if (rev == n)
        printf("%d is a Palindrome\n", n);
    else
        printf("%d is NOT a Palindrome\n", n);
    getch();
}
` },
{ t:"Armstrong Number (3-digit)", f:"ARMSTRNG.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, temp, d, sum = 0;
    clrscr();
    printf("Enter a 3-digit number: ");
    scanf("%d", &n);
    temp = n;
    while (temp > 0)
    {
        d = temp % 10;
        sum = sum + d * d * d;
        temp = temp / 10;
    }
    if (sum == n)
        printf("%d is an Armstrong number\n", n);
    else
        printf("%d is NOT an Armstrong number\n", n);
    getch();
}
` },
{ t:"Reverse a Number", f:"REVERSE.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    long n, rev = 0;
    clrscr();
    printf("Enter a number: ");
    scanf("%ld", &n);
    while (n > 0)
    {
        rev = rev * 10 + n % 10;
        n = n / 10;
    }
    printf("Reversed number = %ld\n", rev);
    getch();
}
` },
{ t:"Multiplication Table", f:"TABLE.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, i;
    clrscr();
    printf("Enter a number: ");
    scanf("%d", &n);
    for (i = 1; i <= 10; i++)
        printf("%d x %d = %d\n", n, i, n * i);
    getch();
}
` },
{ t:"Sum of Digits", f:"SUMDIGIT.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    long n;
    int sum = 0;
    clrscr();
    printf("Enter a number: ");
    scanf("%ld", &n);
    while (n > 0)
    {
        sum = sum + (int)(n % 10);
        n = n / 10;
    }
    printf("Sum of digits = %d\n", sum);
    getch();
}
` },
{ t:"Simple Calculator (switch)", f:"CALC.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    float a, b;
    char op;
    clrscr();
    printf("Enter first number : ");
    scanf("%f", &a);
    printf("Enter operator (+ - * /): ");
    scanf(" %c", &op);
    printf("Enter second number: ");
    scanf("%f", &b);
    switch (op)
    {
        case '+': printf("Result = %.2f\n", a + b); break;
        case '-': printf("Result = %.2f\n", a - b); break;
        case '*': printf("Result = %.2f\n", a * b); break;
        case '/':
            if (b != 0)
                printf("Result = %.2f\n", a / b);
            else
                printf("Cannot divide by zero\n");
            break;
        default: printf("Invalid operator\n");
    }
    getch();
}
` },
{ t:"Array Sum and Average", f:"ARRAYSUM.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[20], n, i, sum = 0;
    float avg;
    clrscr();
    printf("How many elements (max 20)? ");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
        sum = sum + a[i];
    }
    avg = (float)sum / n;
    printf("Sum = %d\nAverage = %.2f\n", sum, avg);
    getch();
}
` },
{ t:"Bubble Sort", f:"BUBBLE.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[20], n, i, j, temp;
    clrscr();
    printf("How many elements (max 20)? ");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
    }
    for (i = 0; i < n - 1; i++)
    {
        for (j = 0; j < n - i - 1; j++)
        {
            if (a[j] > a[j + 1])
            {
                temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    printf("Sorted array: ");
    for (i = 0; i < n; i++)
        printf("%d ", a[i]);
    getch();
}
` },
{ t:"Matrix Addition (3x3)", f:"MATADD.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[3][3], b[3][3], c[3][3], i, j;
    clrscr();
    printf("Enter elements of matrix A:\n");
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &a[i][j]);
    printf("Enter elements of matrix B:\n");
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &b[i][j]);
    printf("Sum of matrices:\n");
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            c[i][j] = a[i][j] + b[i][j];
            printf("%4d", c[i][j]);
        }
        printf("\n");
    }
    getch();
}
` },
{ t:"String Reverse", f:"STRREV.C", code:String.raw`#include <stdio.h>
#include <string.h>
#include <conio.h>

void main()
{
    char str[50];
    int i, len;
    clrscr();
    printf("Enter a string: ");
    gets(str);
    len = strlen(str);
    printf("Reversed string: ");
    for (i = len - 1; i >= 0; i--)
        printf("%c", str[i]);
    getch();
}
` },
{ t:"Star Pyramid Pattern", f:"PYRAMID.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, i, j;
    clrscr();
    printf("Enter number of rows: ");
    scanf("%d", &n);
    for (i = 1; i <= n; i++)
    {
        for (j = 1; j <= n - i; j++)
            printf(" ");
        for (j = 1; j <= 2 * i - 1; j++)
            printf("*");
        printf("\n");
    }
    getch();
}
` },
{ t:"GCD and LCM", f:"GCDLCM.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b, x, y, gcd, lcm;
    clrscr();
    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);
    x = a;
    y = b;
    while (y != 0)
    {
        int t = y;
        y = x % y;
        x = t;
    }
    gcd = x;
    lcm = (a * b) / gcd;
    printf("GCD = %d\nLCM = %d\n", gcd, lcm);
    getch();
}
` },
{ t:"Leap Year", f:"LEAP.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int y;
    clrscr();
    printf("Enter a year: ");
    scanf("%d", &y);
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
        printf("%d is a Leap year\n", y);
    else
        printf("%d is NOT a Leap year\n", y);
    getch();
}
` },
    
{ t:"Graphics: Circle, Line, Rectangle", f:"GRAPH.C", code:String.raw`#include <graphics.h>
#include <conio.h>

void main()
{
    int gd = DETECT, gm;
    initgraph(&gd, &gm, "C:\\TURBOC3\\BGI");
    circle(300, 200, 80);
    rectangle(200, 120, 400, 280);
    line(100, 350, 500, 350);
    outtextxy(240, 400, "Turbo C Graphics");
    getch();
    closegraph();
}
` },

{ t:"Linear Search", f:"LINEAR.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[20], n, i, key, found = 0;
    clrscr();
    printf("How many elements (max 20)? ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    for (i = 0; i < n; i++)
    {
        if (a[i] == key)
        {
            found = 1;
            break;
        }
    }

    if (found)
        printf("%d found at position %d\n", key, i + 1);
    else
        printf("%d not found in the array\n", key);

    getch();
}
` },

{ t:"Check Prefix of a String", f:"PREFIX.C", code:String.raw`#include <stdio.h>
#include <string.h>
#include <conio.h>

void main()
{
    char str[100], prefix[100];
    int i, flag = 1;
    clrscr();

    printf("Enter the main string: ");
    gets(str);

    printf("Enter the prefix to check: ");
    gets(prefix);

    for (i = 0; prefix[i] != '\0'; i++)
    {
        if (str[i] != prefix[i])
        {
            flag = 0;
            break;
        }
    }

    if (flag)
        printf("\"%s\" is a prefix of \"%s\"", prefix, str);
    else
        printf("\"%s\" is NOT a prefix of \"%s\"", prefix, str);

    getch();
}
` },

{ t:"Matrix Transpose (3x3)", f:"TRANSPOSE.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[3][3], i, j;
    clrscr();

    printf("Enter elements of 3x3 matrix:\n");
    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &a[i][j]);

    printf("\nOriginal Matrix:\n");
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
            printf("%4d", a[i][j]);
        printf("\n");
    }

    printf("\nTranspose of Matrix:\n");
    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
            printf("%4d", a[j][i]);
        printf("\n");
    }

    getch();
}
` },

{ t:"String Palindrome", f:"STRPALIN.C", code:String.raw`#include <stdio.h>
#include <string.h>
#include <conio.h>

void main()
{
    char str[50];
    int i, len, flag = 1;
    clrscr();

    printf("Enter a string: ");
    gets(str);

    len = strlen(str);

    for (i = 0; i < len / 2; i++)
    {
        if (str[i] != str[len - i - 1])
        {
            flag = 0;
            break;
        }
    }

    if (flag)
        printf("The string is a Palindrome\n");
    else
        printf("The string is NOT a Palindrome\n");

    getch();
}
` },

{ t:"Student Record Using Structure", f:"STRUCT.C", code:String.raw`#include <stdio.h>
#include <conio.h>

struct Student
{
    int roll;
    char name[30];
    float marks;
};

void main()
{
    struct Student s;
    clrscr();

    printf("Enter roll number: ");
    scanf("%d", &s.roll);

    printf("Enter name: ");
    scanf("%s", s.name);

    printf("Enter marks: ");
    scanf("%f", &s.marks);

    printf("\n----- Student Record -----\n");
    printf("Roll Number : %d\n", s.roll);
    printf("Name        : %s\n", s.name);
    printf("Marks       : %.2f\n", s.marks);

    getch();
}
` },

{ t:"File Handling (Write and Read)", f:"FILEIO.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    FILE *fp;
    char text[100];
    clrscr();

    fp = fopen("MESSAGE.TXT", "w");

    if (fp == NULL)
    {
        printf("Unable to create file.\n");
        getch();
        return;
    }

    printf("Enter a line of text: ");
    gets(text);

    fprintf(fp, "%s", text);
    fclose(fp);

    fp = fopen("MESSAGE.TXT", "r");

    if (fp == NULL)
    {
        printf("Unable to open file.\n");
        getch();
        return;
    }

    printf("\nContent read from file:\n");
    while (fgets(text, sizeof(text), fp) != NULL)
        printf("%s\n", text);

    fclose(fp);
    getch();
}
` },

{ t:"Swap Two Numbers Using Pointers", f:"PTRSWAP.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void swap(int *x, int *y)
{
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}

void main()
{
    int a, b;
    clrscr();

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    printf("\nBefore swapping:");
    printf("\na = %d, b = %d", a, b);

    swap(&a, &b);

    printf("\n\nAfter swapping:");
    printf("\na = %d, b = %d", a, b);

    getch();
}
` },

{ t:"Factorial Using Recursion", f:"FACTREC.C", code:String.raw`#include <stdio.h>
#include <conio.h>

long factorial(int n)
{
    if (n <= 1)
        return 1;

    return n * factorial(n - 1);
}

void main()
{
    int n;
    clrscr();

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n < 0)
        printf("Factorial is not defined for negative numbers.");
    else
        printf("Factorial of %d = %ld", n, factorial(n));

    getch();
}
` },

{ t:"Bitwise Operators Demonstration", f:"BITWISE.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a, b;
    clrscr();

    printf("Enter two integers: ");
    scanf("%d %d", &a, &b);

    printf("\nBitwise AND (a & b) = %d", a & b);
    printf("\nBitwise OR (a | b) = %d", a | b);
    printf("\nBitwise XOR (a ^ b) = %d", a ^ b);
    printf("\nBitwise NOT (~a) = %d", ~a);
    printf("\nLeft Shift (a << 1) = %d", a << 1);
    printf("\nRight Shift (a >> 1) = %d", a >> 1);

    getch();
}
` },

{ t:"Dynamic Memory Allocation (malloc)", f:"DYNAMIC.C", code:String.raw`#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

void main()
{
    int *a, n, i, sum = 0;
    float avg;
    clrscr();

    printf("Enter number of elements: ");
    scanf("%d", &n);

    if (n <= 0)
    {
        printf("Invalid number of elements.");
        getch();
        return;
    }

    a = (int *)malloc(n * sizeof(int));

    if (a == NULL)
    {
        printf("Memory allocation failed!");
        getch();
        return;
    }

    for (i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
        sum = sum + a[i];
    }

    avg = (float)sum / n;

    printf("\nSum = %d", sum);
    printf("\nAverage = %.2f", avg);

    free(a);
    getch();
}
` },

{ t:"Enumeration (Days of the Week)", f:"ENUM.C", code:String.raw`#include <stdio.h>
#include <conio.h>

enum Days
{
    MONDAY = 1,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

void main()
{
    int day;
    clrscr();

    printf("Enter day number (1-7): ");
    scanf("%d", &day);

    switch (day)
    {
        case MONDAY:
            printf("Monday");
            break;

        case TUESDAY:
            printf("Tuesday");
            break;

        case WEDNESDAY:
            printf("Wednesday");
            break;

        case THURSDAY:
            printf("Thursday");
            break;

        case FRIDAY:
            printf("Friday");
            break;

        case SATURDAY:
            printf("Saturday");
            break;

        case SUNDAY:
            printf("Sunday");
            break;

        default:
            printf("Invalid day number!");
    }

    getch();
}
` },

{ t:"Binary to Decimal Conversion", f:"BINDEC.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    long bin;
    int dec = 0, base = 1, rem;
    clrscr();

    printf("Enter a binary number: ");
    scanf("%ld", &bin);

    while (bin > 0)
    {
        rem = bin % 10;

        if (rem > 1)
        {
            printf("Invalid binary number!");
            getch();
            return;
        }

        dec = dec + rem * base;
        base = base * 2;
        bin = bin / 10;
    }

    printf("Decimal number = %d", dec);
    getch();
}
` },

{ t:"Decimal to Binary Conversion", f:"DECBIN.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, binary[32], i = 0, j;
    clrscr();

    printf("Enter a decimal number: ");
    scanf("%d", &n);

    if (n < 0)
    {
        printf("Enter a non-negative number.");
        getch();
        return;
    }

    if (n == 0)
        binary[i++] = 0;

    while (n > 0)
    {
        binary[i] = n % 2;
        n = n / 2;
        i++;
    }

    printf("Binary number = ");

    for (j = i - 1; j >= 0; j--)
        printf("%d", binary[j]);

    getch();
}
` },

{ t:"Selection Sort", f:"SELECT.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[20], n, i, j, min, temp;
    clrscr();

    printf("Enter number of elements (max 20): ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
    }

    for (i = 0; i < n - 1; i++)
    {
        min = i;

        for (j = i + 1; j < n; j++)
        {
            if (a[j] < a[min])
                min = j;
        }

        temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }

    printf("\nSorted array: ");

    for (i = 0; i < n; i++)
        printf("%d ", a[i]);

    getch();
}
` },

{ t:"Binary Search", f:"BINARY.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[20], n, i, key;
    int low, high, mid, found = 0;
    clrscr();

    printf("Enter number of elements (max 20): ");
    scanf("%d", &n);

    printf("Enter elements in ascending order:\n");

    for (i = 0; i < n; i++)
        scanf("%d", &a[i]);

    printf("Enter element to search: ");
    scanf("%d", &key);

    low = 0;
    high = n - 1;

    while (low <= high)
    {
        mid = (low + high) / 2;

        if (a[mid] == key)
        {
            found = 1;
            break;
        }
        else if (a[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    if (found)
        printf("%d found at position %d", key, mid + 1);
    else
        printf("Element not found!");

    getch();
}
` },

{ t:"Count Vowels and Consonants", f:"VOWEL.C", code:String.raw`#include <stdio.h>
#include <conio.h>
#include <ctype.h>

void main()
{
    char str[100];
    int i, vowels = 0, consonants = 0;
    clrscr();

    printf("Enter a string: ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        char ch = tolower(str[i]);

        if (ch >= 'a' && ch <= 'z')
        {
            if (ch == 'a' || ch == 'e' ||
                ch == 'i' || ch == 'o' || ch == 'u')
                vowels++;
            else
                consonants++;
        }
    }

    printf("Vowels = %d\n", vowels);
    printf("Consonants = %d", consonants);

    getch();
}
` },

{ t:"Count Words in a String", f:"WORDCNT.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    char str[100];
    int i, words = 0, inWord = 0;
    clrscr();

    printf("Enter a sentence: ");
    gets(str);

    for (i = 0; str[i] != '\0'; i++)
    {
        if (str[i] != ' ' && str[i] != '\t')
        {
            if (inWord == 0)
            {
                words++;
                inWord = 1;
            }
        }
        else
            inWord = 0;
    }

    printf("Total words = %d", words);

    getch();
}
` },

{ t:"Matrix Multiplication (3x3)", f:"MATMUL.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[3][3], b[3][3], c[3][3];
    int i, j, k;
    clrscr();

    printf("Enter elements of Matrix A:\n");

    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &a[i][j]);

    printf("Enter elements of Matrix B:\n");

    for (i = 0; i < 3; i++)
        for (j = 0; j < 3; j++)
            scanf("%d", &b[i][j]);

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            c[i][j] = 0;

            for (k = 0; k < 3; k++)
                c[i][j] += a[i][k] * b[k][j];
        }
    }

    printf("\nProduct of Matrices:\n");

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
            printf("%4d", c[i][j]);

        printf("\n");
    }

    getch();
}
` },

{ t:"Check Perfect Number", f:"PERFECT.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, i, sum = 0;
    clrscr();

    printf("Enter a number: ");
    scanf("%d", &n);

    for (i = 1; i <= n / 2; i++)
    {
        if (n % i == 0)
            sum = sum + i;
    }

    if (n > 1 && sum == n)
        printf("%d is a Perfect Number", n);
    else
        printf("%d is NOT a Perfect Number", n);

    getch();
}
` },

{ t:"Check Strong Number", f:"STRONG.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int n, temp, digit, i, fact, sum = 0;
    clrscr();

    printf("Enter a number: ");
    scanf("%d", &n);

    if (n < 0)
    {
        printf("Enter a non-negative number.");
        getch();
        return;
    }

    temp = n;

    do
    {
        digit = temp % 10;
        fact = 1;

        for (i = 1; i <= digit; i++)
            fact = fact * i;

        sum = sum + fact;
        temp = temp / 10;

    } while (temp > 0);

    if (sum == n)
        printf("%d is a Strong Number", n);
    else
        printf("%d is NOT a Strong Number", n);

    getch();
}
` },

{ t:"Find Second Largest Element", f:"SECLARGE.C", code:String.raw`#include <stdio.h>
#include <conio.h>

void main()
{
    int a[20], n, i;
    int largest, second, found = 0;
    clrscr();

    printf("Enter number of elements (max 20): ");
    scanf("%d", &n);

    if (n < 2 || n > 20)
    {
        printf("Enter between 2 and 20 elements.");
        getch();
        return;
    }

    for (i = 0; i < n; i++)
    {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &a[i]);
    }

    largest = a[0];

    for (i = 1; i < n; i++)
    {
        if (a[i] > largest)
            largest = a[i];
    }

    for (i = 0; i < n; i++)
    {
        if (a[i] < largest)
        {
            if (found == 0 || a[i] > second)
            {
                second = a[i];
                found = 1;
            }
        }
    }

    if (found)
        printf("Second largest distinct element = %d", second);
    else
        printf("No second largest distinct element.");

    getch();
}
` }
    
],
    
cpp: [
{ t:"Hello World", f:"HELLO.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

void main()
{
    clrscr();
    cout << "Hello, World!" << endl;
    getch();
}
` },
{ t:"Class and Object (Student)", f:"STUDENT.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Student
{
    int roll;
    char name[20];
public:
    void getdata()
    {
        cout << "Enter roll no: ";
        cin >> roll;
        cout << "Enter name: ";
        cin >> name;
    }
    void display()
    {
        cout << "Roll: " << roll << "  Name: " << name << endl;
    }
};

void main()
{
    Student s;
    clrscr();
    s.getdata();
    s.display();
    getch();
}
` },
{ t:"Constructor and Destructor", f:"CONDES.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Box
{
    int l, b;
public:
    Box(int x, int y)
    {
        l = x;
        b = y;
        cout << "Constructor called" << endl;
    }
    int area()
    {
        return l * b;
    }
    ~Box()
    {
        cout << "Destructor called" << endl;
    }
};

void main()
{
    clrscr();
    {
        Box obj(5, 4);
        cout << "Area = " << obj.area() << endl;
    }
    cout << "Outside block" << endl;
    getch();
}
` },
{ t:"Function Overloading", f:"OVERLOAD.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

int area(int s)
{
    return s * s;
}

int area(int l, int b)
{
    return l * b;
}

float area(float r)
{
    return 3.14 * r * r;
}

void main()
{
    clrscr();
    cout << "Square area    : " << area(5) << endl;
    cout << "Rectangle area : " << area(4, 6) << endl;
    cout << "Circle area    : " << area(2.5f) << endl;
    getch();
}
` },
{ t:"Single Inheritance", f:"INHERIT.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Person
{
protected:
    char name[20];
public:
    void getname()
    {
        cout << "Enter name: ";
        cin >> name;
    }
};

class Student : public Person
{
    int marks;
public:
    void getmarks()
    {
        cout << "Enter marks: ";
        cin >> marks;
    }
    void show()
    {
        cout << "Name: " << name << "  Marks: " << marks << endl;
    }
};

void main()
{
    Student s;
    clrscr();
    s.getname();
    s.getmarks();
    s.show();
    getch();
}
` },
{ t:"Operator Overloading (Complex +)", f:"OPERATOR.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Complex
{
    float re, im;
public:
    Complex(float r = 0, float i = 0)
    {
        re = r;
        im = i;
    }
    Complex operator+(Complex c)
    {
        return Complex(re + c.re, im + c.im);
    }
    void show()
    {
        cout << re << " + " << im << "i" << endl;
    }
};

void main()
{
    Complex a(2, 3), b(4, 5), c;
    clrscr();
    c = a + b;
    cout << "Sum = ";
    c.show();
    getch();
}
` },
{ t:"Virtual Functions (Polymorphism)", f:"VIRTUAL.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Shape
{
public:
    virtual void area()
    {
        cout << "Area of shape" << endl;
    }
};

class Circle : public Shape
{
public:
    void area()
    {
        cout << "Circle area = " << 3.14 * 5 * 5 << endl;
    }
};

class Rect : public Shape
{
public:
    void area()
    {
        cout << "Rectangle area = " << 4 * 6 << endl;
    }
};

void main()
{
    Shape *p;
    Circle c;
    Rect r;
    clrscr();
    p = &c;
    p->area();
    p = &r;
    p->area();
    getch();
}
` },
{ t:"Friend Function", f:"FRIEND.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class B;

class A
{
    int x;
public:
    A(int v) { x = v; }
    friend int add(A, B);
};

class B
{
    int y;
public:
    B(int v) { y = v; }
    friend int add(A, B);
};

int add(A a, B b)
{
    return a.x + b.y;
}

void main()
{
    A obj1(10);
    B obj2(20);
    clrscr();
    cout << "Sum = " << add(obj1, obj2) << endl;
    getch();
}
` },
{ t:"Function Template", f:"FTEMPL.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

template <class T>
T maxof(T a, T b)
{
    return (a > b) ? a : b;
}

void main()
{
    clrscr();
    cout << "Max of 10, 25     : " << maxof(10, 25) << endl;
    cout << "Max of 3.5, 2.1   : " << maxof(3.5, 2.1) << endl;
    cout << "Max of 'a', 'z'   : " << maxof('a', 'z') << endl;
    getch();
}
` },
{ t:"Class Template", f:"TEMPLATE.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

template <class T>
class Pair
{
    T a, b;
public:
    Pair(T x, T y)
    {
        a = x;
        b = y;
    }
    T sum()
    {
        return a + b;
    }
};

void main()
{
    Pair<int> p1(10, 20);
    Pair<float> p2(1.5, 2.5);
    clrscr();
    cout << "Int sum   = " << p1.sum() << endl;
    cout << "Float sum = " << p2.sum() << endl;
    getch();
}
` },
{ t:"Static Data Member", f:"STATIC.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Counter
{
    static int count;
public:
    Counter()
    {
        count++;
    }
    static void show()
    {
        cout << "Objects created: " << count << endl;
    }
};

int Counter::count = 0;

void main()
{
    clrscr();
    Counter a, b, c;
    Counter::show();
    getch();
}
` },
{ t:"Array of Objects (Employee)", f:"EMPLOYEE.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Employee
{
    int id;
    float salary;
public:
    void get()
    {
        cout << "Enter id and salary: ";
        cin >> id >> salary;
    }
    void show()
    {
        cout << id << "\t" << salary << endl;
    }
};

void main()
{
    Employee e[3];
    int i;
    clrscr();
    for (i = 0; i < 3; i++)
        e[i].get();
    cout << "ID\tSalary" << endl;
    for (i = 0; i < 3; i++)
        e[i].show();
    getch();
}
` },
{ t:"this Pointer (Method Chaining)", f:"THISPTR.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Point
{
    int x, y;
public:
    Point& setX(int x)
    {
        this->x = x;
        return *this;
    }
    Point& setY(int y)
    {
        this->y = y;
        return *this;
    }
    void show()
    {
        cout << "(" << x << ", " << y << ")" << endl;
    }
};

void main()
{
    Point p;
    clrscr();
    p.setX(10).setY(20);
    p.show();
    getch();
}
` },
{ t:"Default Arguments", f:"DEFARG.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

float interest(float p, float r = 5.0, int t = 1)
{
    return (p * r * t) / 100;
}

void main()
{
    clrscr();
    cout << "Interest (default r and t): " << interest(1000) << endl;
    cout << "Interest (r = 8)          : " << interest(1000, 8) << endl;
    cout << "Interest (r = 8, t = 3)   : " << interest(1000, 8, 3) << endl;
    getch();
}
` },
{ t:"Inline Function", f:"INLINE.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

inline int cube(int n)
{
    return n * n * n;
}

void main()
{
    int x;
    clrscr();
    cout << "Enter a number: ";
    cin >> x;
    cout << "Cube = " << cube(x) << endl;
    getch();
}
` },
{ t:"Swap using References", f:"SWAPREF.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

void swap(int &a, int &b)
{
    int t = a;
    a = b;
    b = t;
}

void main()
{
    int x, y;
    clrscr();
    cout << "Enter two numbers: ";
    cin >> x >> y;
    swap(x, y);
    cout << "After swap: x = " << x << ", y = " << y << endl;
    getch();
}
` },
{ t:"Factorial using Recursion", f:"FACTREC.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

long fact(int n)
{
    if (n <= 1)
        return 1;
    return n * fact(n - 1);
}

void main()
{
    int n;
    clrscr();
    cout << "Enter a number: ";
    cin >> n;
    cout << "Factorial = " << fact(n) << endl;
    getch();
}
` },
{ t:"Fibonacci Series", f:"FIBO.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

void main()
{
    int n, i, a = 0, b = 1, c;
    clrscr();
    cout << "How many terms? ";
    cin >> n;
    for (i = 1; i <= n; i++)
    {
        cout << a << " ";
        c = a + b;
        a = b;
        b = c;
    }
    getch();
}
` },
{ t:"Prime Number", f:"PRIME.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

void main()
{
    int n, i, flag = 1;
    clrscr();
    cout << "Enter a number: ";
    cin >> n;
    if (n < 2)
        flag = 0;
    for (i = 2; i <= n / 2; i++)
    {
        if (n % i == 0)
        {
            flag = 0;
            break;
        }
    }
    if (flag)
        cout << n << " is Prime" << endl;
    else
        cout << n << " is NOT Prime" << endl;
    getch();
}
` },
{ t:"Matrix Multiplication (2x2)", f:"MATMUL.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

void main()
{
    int a[2][2], b[2][2], c[2][2], i, j, k;
    clrscr();
    cout << "Enter matrix A (4 values): ";
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            cin >> a[i][j];
    cout << "Enter matrix B (4 values): ";
    for (i = 0; i < 2; i++)
        for (j = 0; j < 2; j++)
            cin >> b[i][j];
    for (i = 0; i < 2; i++)
    {
        for (j = 0; j < 2; j++)
        {
            c[i][j] = 0;
            for (k = 0; k < 2; k++)
                c[i][j] += a[i][k] * b[k][j];
            cout << c[i][j] << "\t";
        }
        cout << endl;
    }
    getch();
}
` },
{ t:"Bank Account Class", f:"BANK.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Account
{
    float balance;
public:
    Account(float b)
    {
        balance = b;
    }
    void deposit(float amt)
    {
        balance += amt;
    }
    void withdraw(float amt)
    {
        if (amt > balance)
            cout << "Insufficient balance!" << endl;
        else
            balance -= amt;
    }
    void show()
    {
        cout << "Balance = " << balance << endl;
    }
};

void main()
{
    Account a(1000);
    clrscr();
    a.deposit(500);
    a.show();
    a.withdraw(2000);
    a.withdraw(300);
    a.show();
    getch();
}
` },

{ t:"Multilevel Inheritance", f:"MULTILEVEL.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Student
{
protected:
    int roll;
public:
    void getroll()
    {
        cout << "Enter roll number: ";
        cin >> roll;
    }
};

class Test : public Student
{
protected:
    float marks1, marks2;
public:
    void getmarks()
    {
        cout << "Enter marks of two subjects: ";
        cin >> marks1 >> marks2;
    }
};

class Result : public Test
{
public:
    void display()
    {
        cout << "\nRoll Number: " << roll;
        cout << "\nTotal Marks: " << marks1 + marks2;
        cout << "\nPercentage: " << (marks1 + marks2) / 2 << "%";
    }
};

void main()
{
    Result r;
    clrscr();

    r.getroll();
    r.getmarks();
    r.display();

    getch();
}
` },

{ t:"Multiple Inheritance", f:"MULTIPLE.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Internal
{
protected:
    int internalMarks;
public:
    void getinternal()
    {
        cout << "Enter internal marks: ";
        cin >> internalMarks;
    }
};

class External
{
protected:
    int externalMarks;
public:
    void getexternal()
    {
        cout << "Enter external marks: ";
        cin >> externalMarks;
    }
};

class Result : public Internal, public External
{
public:
    void display()
    {
        cout << "\nInternal Marks: " << internalMarks;
        cout << "\nExternal Marks: " << externalMarks;
        cout << "\nTotal Marks: " << internalMarks + externalMarks;
    }
};

void main()
{
    Result r;
    clrscr();

    r.getinternal();
    r.getexternal();
    r.display();

    getch();
}
` },

{ t:"Encapsulation (Bank Account)", f:"ENCAPSUL.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class BankAccount
{
private:
    float balance;

public:
    void setBalance(float b)
    {
        if (b >= 0)
            balance = b;
        else
            balance = 0;
    }

    void deposit(float amount)
    {
        if (amount > 0)
            balance = balance + amount;
        else
            cout << "\nInvalid deposit amount!";
    }

    void withdraw(float amount)
    {
        if (amount <= 0)
            cout << "\nInvalid withdrawal amount!";
        else if (amount > balance)
            cout << "\nInsufficient balance!";
        else
            balance = balance - amount;
    }

    void display()
    {
        cout << "\nCurrent Balance: " << balance;
    }
};

void main()
{
    BankAccount account;
    clrscr();

    account.setBalance(1000);

    cout << "Initial Balance: ";
    account.display();

    account.deposit(500);
    cout << "\nAfter Deposit: ";
    account.display();

    account.withdraw(200);
    cout << "\nAfter Withdrawal: ";
    account.display();

    getch();
}
` },

{ t:"Abstraction Using Pure Virtual Function", f:"ABSTRACT.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Shape
{
public:
    virtual void area() = 0;
};

class Rectangle : public Shape
{
    float length, breadth;

public:
    Rectangle(float l, float b)
    {
        length = l;
        breadth = b;
    }

    void area()
    {
        cout << "Area of Rectangle = "
             << length * breadth << endl;
    }
};

class Circle : public Shape
{
    float radius;

public:
    Circle(float r)
    {
        radius = r;
    }

    void area()
    {
        cout << "Area of Circle = "
             << 3.14 * radius * radius << endl;
    }
};

void main()
{
    Rectangle r(5, 4);
    Circle c(3);

    clrscr();

    r.area();
    c.area();

    getch();
}
` },

{ t:"Exception Handling (try-catch)", f:"EXCEPT.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

void main()
{
    int a, b;
    clrscr();

    cout << "Enter two numbers: ";
    cin >> a >> b;

    try
    {
        if (b == 0)
            throw b;

        cout << "\nDivision = " << (float)a / b;
    }
    catch (int x)
    {
        cout << "\nError: Division by zero is not allowed!";
    }

    getch();
}
` },

{ t:"Copy Constructor", f:"COPYCONS.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Number
{
    int value;

public:
    Number(int x)
    {
        value = x;
    }

    Number(Number &n)
    {
        value = n.value;
        cout << "Copy Constructor Called" << endl;
    }

    void display()
    {
        cout << "Value = " << value << endl;
    }
};

void main()
{
    Number n1(100);
    clrscr();

    cout << "Original Object:" << endl;
    n1.display();

    Number n2(n1);

    cout << "\nCopied Object:" << endl;
    n2.display();

    getch();
}
` },

{ t:"Destructor Demonstration", f:"DESTRUCT.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Demo
{
public:
    Demo()
    {
        cout << "Constructor Called" << endl;
    }

    ~Demo()
    {
        cout << "Destructor Called" << endl;
    }

    void display()
    {
        cout << "Inside Display Function" << endl;
    }
};

void main()
{
    clrscr();

    cout << "Entering Block" << endl;

    {
        Demo obj;
        obj.display();
    }

    cout << "Outside Block" << endl;

    getch();
}
` },

{ t:"Array of Objects (Student)", f:"ARRSTUD.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Student
{
    int roll;
    char name[20];
    float marks;

public:
    void getdata()
    {
        cout << "Enter roll number: ";
        cin >> roll;

        cout << "Enter name: ";
        cin >> name;

        cout << "Enter marks: ";
        cin >> marks;
    }

    void display()
    {
        cout << "\nRoll Number: " << roll;
        cout << "\nName: " << name;
        cout << "\nMarks: " << marks << endl;
    }
};

void main()
{
    Student s[3];
    int i;
    clrscr();

    for (i = 0; i < 3; i++)
    {
        cout << "\nEnter details of Student "
             << i + 1 << endl;
        s[i].getdata();
    }

    cout << "\n----- Student Records -----\n";

    for (i = 0; i < 3; i++)
    {
        s[i].display();
    }

    getch();
}
` },

{ t:"Pointer to Object", f:"OBJPOINTER.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Rectangle
{
    int length, breadth;

public:
    void getdata()
    {
        cout << "Enter length: ";
        cin >> length;

        cout << "Enter breadth: ";
        cin >> breadth;
    }

    void area()
    {
        cout << "Area = " << length * breadth;
    }
};

void main()
{
    Rectangle obj;
    Rectangle *ptr;
    clrscr();

    ptr = &obj;

    ptr->getdata();

    cout << "\nUsing Pointer to Object:\n";
    ptr->area();

    getch();
}
` },

{ t:"File Handling (Write and Read)", f:"FILECPP.CPP", code:String.raw`#include <iostream.h>
#include <fstream.h>
#include <conio.h>

void main()
{
    ofstream fout;
    ifstream fin;
    char text[100];
    clrscr();

    fout.open("DATA.TXT");

    if (!fout)
    {
        cout << "Unable to create file!";
        getch();
        return;
    }

    cout << "Enter a line of text: ";
    cin.getline(text, 100);

    fout << text;
    fout.close();

    fin.open("DATA.TXT");

    if (!fin)
    {
        cout << "Unable to open file!";
        getch();
        return;
    }

    cout << "\nContent of File:\n";

    fin.getline(text, 100);
    cout << text;

    fin.close();

    getch();
}
` },

{ t:"Unary Operator Overloading (++ Operator)", f:"UNARY.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Number
{
    int x;

public:
    Number(int n)
    {
        x = n;
    }

    void operator++()
    {
        ++x;
    }

    void display()
    {
        cout << "Value = " << x << endl;
    }
};

void main()
{
    Number n(10);
    clrscr();

    cout << "Before increment:" << endl;
    n.display();

    ++n;

    cout << "After increment:" << endl;
    n.display();

    getch();
}
` },

{ t:"Hierarchical Inheritance", f:"HIERARCH.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Animal
{
public:
    void eat()
    {
        cout << "Animals can eat." << endl;
    }
};

class Dog : public Animal
{
public:
    void bark()
    {
        cout << "Dog barks." << endl;
    }
};

class Cat : public Animal
{
public:
    void meow()
    {
        cout << "Cat meows." << endl;
    }
};

void main()
{
    Dog d;
    Cat c;
    clrscr();

    cout << "Dog:" << endl;
    d.eat();
    d.bark();

    cout << "\nCat:" << endl;
    c.eat();
    c.meow();

    getch();
}
` },

{ t:"Parameterized Constructor", f:"PARAMCON.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Rectangle
{
    int length, breadth;

public:
    Rectangle(int l, int b)
    {
        length = l;
        breadth = b;
    }

    void display()
    {
        cout << "Length = " << length << endl;
        cout << "Breadth = " << breadth << endl;
        cout << "Area = " << length * breadth << endl;
    }
};

void main()
{
    Rectangle r(10, 5);
    clrscr();

    r.display();

    getch();
}
` },

{ t:"Dynamic Constructor", f:"DYNCON.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>
#include <stdlib.h>

class Array
{
    int *p, size;

public:
    Array(int n)
    {
        size = n;
        p = new int[size];
    }

    void getdata()
    {
        int i;
        for (i = 0; i < size; i++)
        {
            cout << "Enter element " << i + 1 << ": ";
            cin >> p[i];
        }
    }

    void display()
    {
        int i;
        cout << "\nArray elements: ";

        for (i = 0; i < size; i++)
            cout << p[i] << " ";
    }

    ~Array()
    {
        delete[] p;
    }
};

void main()
{
    int n;
    clrscr();

    cout << "Enter array size: ";
    cin >> n;

    if (n <= 0)
    {
        cout << "Invalid size!";
        getch();
        return;
    }

    Array a(n);
    a.getdata();
    a.display();

    getch();
}
` },

{ t:"Function Overriding", f:"OVERRIDE.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Base
{
public:
    void display()
    {
        cout << "Base class display function." << endl;
    }
};

class Derived : public Base
{
public:
    void display()
    {
        cout << "Derived class display function." << endl;
    }
};

void main()
{
    Base b;
    Derived d;
    clrscr();

    cout << "Base Class:" << endl;
    b.display();

    cout << "\nDerived Class:" << endl;
    d.display();

    getch();
}
` },

{ t:"Pure Virtual Function with Shape", f:"PUREVIRT.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Shape
{
public:
    virtual void area() = 0;
};

class Square : public Shape
{
    int side;

public:
    Square(int s)
    {
        side = s;
    }

    void area()
    {
        cout << "Area of Square = "
             << side * side << endl;
    }
};

class Triangle : public Shape
{
    float base, height;

public:
    Triangle(float b, float h)
    {
        base = b;
        height = h;
    }

    void area()
    {
        cout << "Area of Triangle = "
             << 0.5 * base * height << endl;
    }
};

void main()
{
    Square s(5);
    Triangle t(10, 6);
    clrscr();

    s.area();
    t.area();

    getch();
}
` },

{ t:"Friend Class", f:"FRIENDCL.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class B;

class A
{
    int x;

public:
    A(int n)
    {
        x = n;
    }

    friend class B;
};

class B
{
public:
    void display(A obj)
    {
        cout << "Value of A = " << obj.x << endl;
    }
};

void main()
{
    A a(100);
    B b;
    clrscr();

    b.display(a);

    getch();
}
` },

{ t:"Overloading Insertion and Extraction Operators", f:"STREAMOP.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

class Student
{
    int roll;
    char name[30];

public:
    friend istream& operator>>(istream &in, Student &s)
    {
        cout << "Enter roll number: ";
        in >> s.roll;

        cout << "Enter name: ";
        in >> s.name;

        return in;
    }

    friend ostream& operator<<(ostream &out, Student &s)
    {
        out << "\nRoll Number: " << s.roll;
        out << "\nName: " << s.name;
        return out;
    }
};

void main()
{
    Student s;
    clrscr();

    cin >> s;

    cout << "\nStudent Details:";
    cout << s;

    getch();
}
` },

{ t:"Function Template (Multiple Data Types)", f:"MULTTEMP.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

template <class T>
T add(T a, T b)
{
    return a + b;
}

void main()
{
    clrscr();

    cout << "Integer Addition: "
         << add(10, 20) << endl;

    cout << "Float Addition: "
         << add(2.5, 3.5) << endl;

    cout << "Character Addition: "
         << add('A', 'B') << endl;

    getch();
}
` },

{ t:"Dynamic Memory Allocation Using new and delete", f:"NEWDELETE.CPP", code:String.raw`#include <iostream.h>
#include <conio.h>

void main()
{
    int *p, n, i, sum = 0;
    clrscr();

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0)
    {
        cout << "Invalid size!";
        getch();
        return;
    }

    p = new int[n];

    if (p == NULL)
    {
        cout << "Memory allocation failed!";
        getch();
        return;
    }

    for (i = 0; i < n; i++)
    {
        cout << "Enter element " << i + 1 << ": ";
        cin >> p[i];
        sum = sum + p[i];
    }

    cout << "\nSum = " << sum;
    cout << "\nAverage = " << (float)sum / n;

    delete[] p;

    getch();
}
` },

{ t:"Sequential File Operations (Append Mode)", f:"APPEND.CPP", code:String.raw`#include <iostream.h>
#include <fstream.h>
#include <conio.h>

void main()
{
    ofstream fout;
    ifstream fin;
    char text[100];
    clrscr();

    fout.open("RECORD.TXT", ios::app);

    if (!fout)
    {
        cout << "Unable to open file!";
        getch();
        return;
    }

    cout << "Enter text to append: ";
    cin.getline(text, 100);

    fout << text << endl;
    fout.close();

    fin.open("RECORD.TXT");

    if (!fin)
    {
        cout << "Unable to read file!";
        getch();
        return;
    }

    cout << "\nComplete File Contents:\n";

    while (fin.getline(text, 100))
        cout << text << endl;

    fin.close();

    getch();
}
` }
    
]
};
