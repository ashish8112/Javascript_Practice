import numpy as np
arr=np.array([1,2,3,4,5,6,7,8])
# arr=np.arange(9)
arr=arr.reshape(2,-1)
print(arr)
arr=arr.flatten()
print(arr)