#include "stdio.h"
int main(void)
{
  char a[3], b[3];
  scanf("%s\n%s", a, b);
  if (a[0] != b[0] && a[1] != b[1])
  {
    if (a[0] == a[1] && b[0] == b[1])
    {
      printf("Yes");
    }
    else
    {
      printf("No");
    }
  }
  else
  {
    printf("Yes");
  }
  return 0;
}
