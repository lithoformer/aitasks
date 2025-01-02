f = open("coding_qual_input.txt", "r")
text = f.read()
f.close()
myList = text.splitlines()
myArr = []
nums = []
message = []
counter = 0

for item in myList:
    myArr.append(item.split(" "))

for i in range(len(myArr)):
    nums.append(i + counter)
    counter += i
    if counter + i > len(myArr):
        break

for j in range(len(nums)):
    for i in range(len(myArr)):
        if nums[j] == int(myArr[i][0]):
            found = myArr[i][1]
            message.append(found)

print(" ".join(message))
