# param
x, y = map(int, input().split("."))

# solve
ans = str(x)
if 0 <= y and y <= 2:
    ans += "-"
if 7 <= y and y <= 9:
    ans += "+"

# answer
print(ans)
