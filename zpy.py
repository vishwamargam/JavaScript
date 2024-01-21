# s=int(input())
# alpha='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
# op=''
# j=1
# ind=0
# num=1
# i=0
# while i<s:
#     if j<=2:
#         if ind<=25:
#             op=op+alpha[ind]
#             ind+=1
#             j=j+1
#             i+=1
#         else:
#             ind=0
#             op=op+alpha[ind]
#             ind+=1
#             j=j+1
#             i+=1
#     elif j<=6:
#         op=op+str(num)
#         num=num+1
#         j=j+1
#         i+=1
#     else:
#         j=1
# print(op)
    

l=int(input())
m=65
n=49
j=0
z=0
i=0
num=0
count=9
for i in range(0,l):
    if(j<=1 ):
        alpha=chr(m) 
        m=m+1
        print(alpha,end="")
    if(j>2 & j<=5):
        num=num+1
        print(num,end="")
        n=n+1
    j=j+1
    if (j>5):
        j=0
    if(m==90):
        m=65
        
